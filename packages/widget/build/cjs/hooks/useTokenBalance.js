"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenBalancesWithRetry = exports.useTokenBalance = void 0;
const sdk_1 = require("@lifi/sdk");
const react_query_1 = require("@tanstack/react-query");
const react_1 = require("react");
const useAccount_1 = require("./useAccount");
const defaultRefetchInterval = 30000;
const useTokenBalance = (token, accountAddress) => {
    const { account } = (0, useAccount_1.useAccount)();
    const queryClient = (0, react_query_1.useQueryClient)();
    const walletAddress = accountAddress || account.address;
    const tokenBalanceQueryKey = (0, react_1.useMemo)(() => ['token-balance', walletAddress, token?.chainId, token?.address], [token?.address, token?.chainId, walletAddress]);
    const { data, isLoading, refetch } = (0, react_query_1.useQuery)({
        queryKey: tokenBalanceQueryKey,
        queryFn: async ({ queryKey: [, accountAddress] }) => {
            const cachedToken = queryClient
                .getQueryData([
                'token-balances',
                accountAddress,
                token.chainId,
            ])
                ?.find((t) => t.address === token.address);
            if (cachedToken) {
                return cachedToken;
            }
            const tokenBalances = await (0, exports.getTokenBalancesWithRetry)(accountAddress, [token]);
            if (!tokenBalances?.length) {
                throw Error('Could not get tokens balance.');
            }
            const cachedTokenAmount = queryClient.getQueryData(tokenBalanceQueryKey);
            const tokenAmount = tokenBalances[0].amount;
            if (cachedTokenAmount?.amount !== tokenAmount) {
                queryClient.setQueryDefaults(tokenBalanceQueryKey, {
                    refetchInterval: defaultRefetchInterval,
                    staleTime: defaultRefetchInterval,
                });
            }
            queryClient.setQueriesData({ queryKey: ['token-balances', accountAddress, token.chainId] }, (data) => {
                if (data) {
                    const clonedData = [...data];
                    const index = clonedData.findIndex((dataToken) => dataToken.address === token.address);
                    clonedData[index] = {
                        ...clonedData[index],
                        amount: tokenAmount,
                    };
                    return clonedData;
                }
            });
            return {
                ...tokenBalances[0],
                amount: tokenAmount,
            };
        },
        enabled: Boolean(walletAddress && token),
        refetchInterval: defaultRefetchInterval,
        staleTime: defaultRefetchInterval,
    });
    const refetchAllBalances = () => {
        queryClient.refetchQueries({
            queryKey: ['token-balances', accountAddress, token?.chainId],
            exact: false,
        });
    };
    const refetchNewBalance = (0, react_1.useCallback)(() => {
        queryClient.setQueryDefaults(tokenBalanceQueryKey, {
            refetchInterval: 250,
            staleTime: 250,
        });
    }, [queryClient, tokenBalanceQueryKey]);
    return {
        token: data,
        isLoading,
        refetch,
        refetchNewBalance,
        refetchAllBalances,
        getTokenBalancesWithRetry: exports.getTokenBalancesWithRetry,
    };
};
exports.useTokenBalance = useTokenBalance;
const getTokenBalancesWithRetry = async (accountAddress, tokens, depth = 0) => {
    try {
        const tokenBalances = await (0, sdk_1.getTokenBalances)(accountAddress, tokens);
        if (!tokenBalances.every((token) => token.blockNumber)) {
            if (depth > 10) {
                console.warn('Token balance backoff depth exceeded.');
                return undefined;
            }
            await new Promise((resolve) => {
                setTimeout(resolve, 1.5 ** depth * 100);
            });
            return (0, exports.getTokenBalancesWithRetry)(accountAddress, tokens, depth + 1);
        }
        return tokenBalances;
    }
    catch (error) {
        //
    }
};
exports.getTokenBalancesWithRetry = getTokenBalancesWithRetry;
