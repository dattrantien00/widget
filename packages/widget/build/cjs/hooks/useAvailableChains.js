"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAvailableChains = void 0;
const sdk_1 = require("@lifi/sdk");
const react_query_1 = require("@tanstack/react-query");
const react_1 = require("react");
const useAvailableChains = () => {
    const { data, isLoading } = (0, react_query_1.useQuery)({
        queryKey: ['chains'],
        queryFn: async () => (0, sdk_1.getChains)({ chainTypes: [sdk_1.ChainType.EVM, sdk_1.ChainType.SVM] }),
        refetchInterval: 300000,
        staleTime: 300000,
    });
    const getChainById = (0, react_1.useCallback)((chainId, chains = data) => {
        if (!chainId) {
            return;
        }
        const chain = chains?.find((chain) => chain.id === chainId);
        // if (!chain) {
        //   throw new Error('Chain not found or chainId is invalid.');
        // }
        return chain;
    }, [data]);
    return {
        chains: data,
        getChainById,
        isLoading,
    };
};
exports.useAvailableChains = useAvailableChains;
