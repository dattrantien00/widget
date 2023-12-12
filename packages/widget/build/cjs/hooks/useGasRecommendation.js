"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGasRecommendation = void 0;
const sdk_1 = require("@lifi/sdk");
const react_query_1 = require("@tanstack/react-query");
const useAvailableChains_1 = require("./useAvailableChains");
const refetchInterval = 60000;
const useGasRecommendation = (chainId, fromChain, fromToken) => {
    const { chains } = (0, useAvailableChains_1.useAvailableChains)();
    return (0, react_query_1.useQuery)({
        queryKey: ['gas-recommendation', chainId, fromChain, fromToken],
        queryFn: async ({ queryKey: [_, chainId, fromChain, fromToken], signal, }) => {
            if (!chains?.some((chain) => chain.id === chainId)) {
                return null;
            }
            const gasRecommendation = await (0, sdk_1.getGasRecommendation)({
                chainId: chainId,
                fromChain: fromChain,
                fromToken: fromToken,
            }, { signal });
            return gasRecommendation;
        },
        enabled: ((Boolean(chainId) && Boolean(fromChain) && Boolean(fromToken)) ||
            Boolean(chainId)) &&
            Boolean(chains?.length),
        refetchInterval,
        staleTime: refetchInterval,
    });
};
exports.useGasRecommendation = useGasRecommendation;
