"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFromTokenSufficiency = void 0;
const react_query_1 = require("@tanstack/react-query");
const react_hook_form_1 = require("react-hook-form");
const viem_1 = require("viem");
const providers_1 = require("../providers");
const stores_1 = require("../stores");
const useAccount_1 = require("./useAccount");
const useTokenAddressBalance_1 = require("./useTokenAddressBalance");
const useTokenBalance_1 = require("./useTokenBalance");
const refetchInterval = 30000;
const useFromTokenSufficiency = (route) => {
    const { account } = (0, useAccount_1.useAccount)();
    const [fromChainId, fromTokenAddress, fromAmount] = (0, react_hook_form_1.useWatch)({
        name: [providers_1.FormKey.FromChain, providers_1.FormKey.FromToken, providers_1.FormKey.FromAmount],
    });
    let chainId = fromChainId;
    let tokenAddress = fromTokenAddress;
    if (route) {
        chainId = route.fromToken.chainId;
        tokenAddress = route.fromToken.address;
    }
    const { token, isLoading: isTokenAddressBalanceLoading } = (0, useTokenAddressBalance_1.useTokenAddressBalance)(chainId, tokenAddress);
    const { data: insufficientFromToken, isLoading } = (0, react_query_1.useQuery)({
        queryKey: [
            'from-token-sufficiency-check',
            account.address,
            chainId,
            tokenAddress,
            route?.id ?? fromAmount,
        ],
        queryFn: async () => {
            if (!account.address || !token) {
                return;
            }
            const parsedFromAmount = (0, viem_1.parseUnits)(fromAmount, token.decimals);
            let currentTokenBalance = token.amount ?? 0n;
            if (!route || (0, stores_1.isRouteDone)(route)) {
                const insufficientFunds = currentTokenBalance < parsedFromAmount;
                return insufficientFunds;
            }
            const currentAction = route.steps.filter((step) => !step.execution || step.execution.status !== 'DONE')[0]?.action;
            if (token.chainId === currentAction.fromToken.chainId &&
                token.address === currentAction.fromToken.address &&
                currentTokenBalance > 0) {
                const insufficientFunds = BigInt(route.fromAmount) > currentTokenBalance;
                return insufficientFunds;
            }
            const tokenBalances = await (0, useTokenBalance_1.getTokenBalancesWithRetry)(account.address, [
                currentAction.fromToken,
            ]);
            currentTokenBalance = tokenBalances?.[0]?.amount ?? 0n;
            const insufficientFunds = BigInt(currentAction.fromAmount) > currentTokenBalance;
            return insufficientFunds;
        },
        enabled: Boolean(account.address && token && !isTokenAddressBalanceLoading),
        refetchInterval,
        staleTime: refetchInterval,
        placeholderData: react_query_1.keepPreviousData,
    });
    return {
        insufficientFromToken,
        isLoading,
    };
};
exports.useFromTokenSufficiency = useFromTokenSufficiency;
