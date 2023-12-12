"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTools = void 0;
const sdk_1 = require("@lifi/sdk");
const react_query_1 = require("@tanstack/react-query");
const providers_1 = require("../providers");
const stores_1 = require("../stores");
const useTools = () => {
    const { bridges, exchanges } = (0, providers_1.useWidgetConfig)();
    const { data } = (0, react_query_1.useQuery)({
        queryKey: ['tools'],
        queryFn: async () => {
            const tools = await (0, sdk_1.getTools)();
            const result = {
                bridges: tools.bridges.filter((bridge) => (0, providers_1.isItemAllowed)(bridge.key, bridges)),
                exchanges: tools.exchanges.filter((exchange) => (0, providers_1.isItemAllowed)(exchange.key, exchanges)),
            };
            const { initializeTools } = stores_1.useSettingsStore.getState();
            initializeTools('Bridges', result.bridges.map((bridge) => bridge.key));
            initializeTools('Exchanges', result.exchanges.map((exchange) => exchange.key));
            return result;
        },
        refetchInterval: 180000,
        staleTime: 180000,
    });
    return { tools: data };
};
exports.useTools = useTools;
