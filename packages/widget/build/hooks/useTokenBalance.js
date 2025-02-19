import { getTokenBalances } from '@lifi/sdk';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useCallback, useMemo } from 'react';
import { useAccount } from './useAccount';
const defaultRefetchInterval = 30000;
export const useTokenBalance = (token, accountAddress) => {
    const { account } = useAccount();
    const queryClient = useQueryClient();
    const walletAddress = accountAddress || account.address;
    const tokenBalanceQueryKey = useMemo(() => ['token-balance', walletAddress, token?.chainId, token?.address], [token?.address, token?.chainId, walletAddress]);
    const { data, isLoading, refetch } = useQuery({
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
            const tokenBalances = await getTokenBalancesWithRetry(accountAddress, [token]);
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
    const refetchNewBalance = useCallback(() => {
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
        getTokenBalancesWithRetry,
    };
};
export const getTokenBalancesWithRetry = async (accountAddress, tokens, depth = 0) => {
    try {
        const tokenBalances = await getTokenBalances(accountAddress, tokens);
        if (!tokenBalances.every((token) => token.blockNumber)) {
            if (depth > 10) {
                console.warn('Token balance backoff depth exceeded.');
                return undefined;
            }
            await new Promise((resolve) => {
                setTimeout(resolve, 1.5 ** depth * 100);
            });
            return getTokenBalancesWithRetry(accountAddress, tokens, depth + 1);
        }
        return tokenBalances;
    }
    catch (error) {
        //
    }
};
