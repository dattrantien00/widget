"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGasSufficiency = void 0;
const react_query_1 = require("@tanstack/react-query");
const _1 = require(".");
const stores_1 = require("../stores");
const useAccount_1 = require("./useAccount");
const refetchInterval = 30000;
const useGasSufficiency = (route) => {
    const { account } = (0, useAccount_1.useAccount)();
    const { getChainById } = (0, _1.useAvailableChains)();
    const { enabledAutoRefuel } = (0, stores_1.useSettings)(['enabledAutoRefuel']);
    const { enabled, isLoading: isRefuelLoading } = (0, _1.useGasRefuel)();
    const enabledRefuel = enabled && enabledAutoRefuel;
    const { data: insufficientGas, isLoading } = (0, react_query_1.useQuery)({
        queryKey: ['gas-sufficiency-check', account.address, route?.id],
        queryFn: async () => {
            // TODO: include LI.Fuel into calculation once steps and tools are properly typed
            // const refuelSteps = route.steps
            //   .flatMap((step) => step.includedSteps)
            //   .filter((includedStep) => includedStep.tool === 'lifuelProtocol');
            const gasCosts = route.steps
                .filter((step) => !step.execution || step.execution.status !== 'DONE')
                .reduce((groupedGasCosts, step) => {
                if (step.estimate.gasCosts &&
                    account.connector?.id !== 'safe') {
                    const { token } = step.estimate.gasCosts[0];
                    const gasCostAmount = step.estimate.gasCosts.reduce((amount, gasCost) => amount + BigInt(gasCost.amount), 0n);
                    groupedGasCosts[token.chainId] = {
                        gasAmount: groupedGasCosts[token.chainId]
                            ? groupedGasCosts[token.chainId].gasAmount + gasCostAmount
                            : gasCostAmount,
                        token,
                    };
                }
                // Add fees paid in native tokens to gas sufficiency check (included: false)
                const nonIncludedFeeCosts = step.estimate.feeCosts?.filter((feeCost) => !feeCost.included);
                if (nonIncludedFeeCosts?.length) {
                    const { token } = nonIncludedFeeCosts[0];
                    const feeCostAmount = nonIncludedFeeCosts.reduce((amount, feeCost) => amount + BigInt(feeCost.amount), 0n);
                    groupedGasCosts[token.chainId] = {
                        gasAmount: groupedGasCosts[token.chainId]
                            ? groupedGasCosts[token.chainId].gasAmount + feeCostAmount
                            : feeCostAmount,
                        token,
                    };
                }
                return groupedGasCosts;
            }, {});
            if (route.fromToken.address === gasCosts[route.fromChainId]?.token.address) {
                gasCosts[route.fromChainId].tokenAmount =
                    gasCosts[route.fromChainId]?.gasAmount + BigInt(route.fromAmount);
            }
            const tokenBalances = await (0, _1.getTokenBalancesWithRetry)(account.address, Object.values(gasCosts).map((item) => item.token));
            if (!tokenBalances?.length) {
                return [];
            }
            [route.fromChainId, route.toChainId].forEach((chainId) => {
                if (gasCosts[chainId]) {
                    const gasTokenBalance = tokenBalances?.find((t) => t.chainId === gasCosts[chainId].token.chainId &&
                        t.address === gasCosts[chainId].token.address)?.amount ?? 0n;
                    const insufficient = gasTokenBalance <= 0n ||
                        gasTokenBalance < gasCosts[chainId].gasAmount ||
                        gasTokenBalance < (gasCosts[chainId].tokenAmount ?? 0n);
                    const insufficientAmount = insufficient
                        ? gasCosts[chainId].tokenAmount
                            ? gasCosts[chainId].tokenAmount - gasTokenBalance
                            : gasCosts[chainId].gasAmount - gasTokenBalance
                        : undefined;
                    gasCosts[chainId] = {
                        ...gasCosts[chainId],
                        insufficient,
                        insufficientAmount,
                        chain: insufficient ? getChainById(chainId) : undefined,
                    };
                }
            });
            const gasCostResult = Object.values(gasCosts).filter((gasCost) => gasCost.insufficient);
            return gasCostResult;
        },
        enabled: Boolean(account.address && route),
        refetchInterval,
        staleTime: refetchInterval,
    });
    const isInsufficientGas = Boolean(insufficientGas?.length) && !isRefuelLoading && !enabledRefuel;
    return {
        insufficientGas: isInsufficientGas ? insufficientGas : undefined,
        isLoading,
    };
};
exports.useGasSufficiency = useGasSufficiency;
