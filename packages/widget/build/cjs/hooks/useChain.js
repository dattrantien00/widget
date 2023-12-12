"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useChain = void 0;
const react_1 = require("react");
const useAvailableChains_1 = require("./useAvailableChains");
const useChain = (chainId) => {
    const { isLoading, getChainById } = (0, useAvailableChains_1.useAvailableChains)();
    const chain = (0, react_1.useMemo)(() => getChainById(chainId), [chainId, getChainById]);
    return {
        chain,
        isLoading,
    };
};
exports.useChain = useChain;
