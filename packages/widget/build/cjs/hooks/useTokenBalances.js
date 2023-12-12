"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTokenBalances = void 0;
const sdk_1 = require("@lifi/sdk");
const react_query_1 = require("@tanstack/react-query");
const viem_1 = require("viem");
const useAccount_1 = require("./useAccount");
const useFeaturedTokens_1 = require("./useFeaturedTokens");
const useTokens_1 = require("./useTokens");
const defaultRefetchInterval = 32000;
const useTokenBalances = (selectedChainId) => {
    const { accounts } = (0, useAccount_1.useAccount)();
    const featuredTokens = (0, useFeaturedTokens_1.useFeaturedTokens)(selectedChainId);
    const { tokens, chain, isLoading } = (0, useTokens_1.useTokens)(selectedChainId);
    const account = accounts.find((account) => account.chainType === chain?.chainType);
    const isBalanceLoadingEnabled = Boolean(account?.address) &&
        Boolean(tokens?.length) &&
        Boolean(selectedChainId);
    const { data: tokensWithBalance, isLoading: isBalanceLoading, refetch, } = (0, react_query_1.useQuery)({
        queryKey: [
            'token-balances',
            account?.address,
            selectedChainId,
            tokens?.length,
        ],
        queryFn: async ({ queryKey: [, accountAddress] }) => {
            const tokenBalances = await (0, sdk_1.getTokenBalances)(accountAddress, tokens);
            const featuredTokenAddresses = new Set(featuredTokens?.map((token) => token.address));
            const sortFn = (a, b) => parseFloat((0, viem_1.formatUnits)(b.amount ?? 0n, b.decimals)) *
                parseFloat(b.priceUSD ?? '0') -
                parseFloat((0, viem_1.formatUnits)(a.amount ?? 0n, a.decimals)) *
                    parseFloat(a.priceUSD ?? '0');
            const formattedTokens = (tokenBalances.length === 0 ? tokens : tokenBalances);
            const result = [
                ...formattedTokens
                    .filter((token) => token.amount && featuredTokenAddresses.has(token.address))
                    .sort(sortFn),
                ...formattedTokens.filter((token) => !token.amount && featuredTokenAddresses.has(token.address)),
                ...formattedTokens
                    .filter((token) => token.amount && !featuredTokenAddresses.has(token.address))
                    .sort(sortFn),
                ...formattedTokens.filter((token) => !token.amount && !featuredTokenAddresses.has(token.address)),
            ];
            return result;
        },
        enabled: isBalanceLoadingEnabled,
        refetchInterval: defaultRefetchInterval,
        staleTime: defaultRefetchInterval,
    });
    return {
        tokens,
        tokensWithBalance,
        featuredTokens,
        isLoading,
        isBalanceLoading: isBalanceLoading && isBalanceLoadingEnabled,
        refetch,
    };
};
exports.useTokenBalances = useTokenBalances;
