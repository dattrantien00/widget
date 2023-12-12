"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useChains = void 0;
const react_query_1 = require("@tanstack/react-query");
const react_hook_form_1 = require("react-hook-form");
const providers_1 = require("../providers");
const stores_1 = require("../stores");
const useAvailableChains_1 = require("./useAvailableChains");
const useChains = () => {
    const { chains, keyPrefix } = (0, providers_1.useWidgetConfig)();
    const { getValues, setValue } = (0, react_hook_form_1.useFormContext)();
    const initializeChains = (0, stores_1.useChainOrderStore)((state) => state.initializeChains);
    const { chains: availableChains, isLoading: isLoadingAvailableChains, getChainById, } = (0, useAvailableChains_1.useAvailableChains)();
    const { data: filteredChains, isLoading: isLoadingFilteredChains } = (0, react_query_1.useQuery)({
        queryKey: ['filtered-chains', availableChains?.length, keyPrefix],
        queryFn: async () => {
            if (!availableChains) {
                return;
            }
            const filteredChains = availableChains.filter((chain) => (0, providers_1.isItemAllowed)(chain.id, chains));
            const chainOrder = initializeChains(filteredChains.map((chain) => chain.id));
            const [fromChainValue, toChainValue] = getValues([
                providers_1.FormKey.FromChain,
                providers_1.FormKey.ToChain,
            ]);
            if (!fromChainValue) {
                setValue(providers_1.FormKey.FromChain, chainOrder[0]);
            }
            if (!toChainValue) {
                setValue(providers_1.FormKey.ToChain, chainOrder[0]);
            }
            return filteredChains;
        },
        enabled: Boolean(availableChains),
    });
    return {
        chains: filteredChains,
        getChainById,
        isLoading: isLoadingAvailableChains || isLoadingFilteredChains,
    };
};
exports.useChains = useChains;
