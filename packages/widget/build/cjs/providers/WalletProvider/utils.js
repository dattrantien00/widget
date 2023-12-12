"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatChain = void 0;
const formatChain = (chain) => ({
    ...chain,
    ...chain.metamask,
    blockExplorers: chain.metamask.blockExplorerUrls.reduce((blockExplorers, blockExplorer, index) => {
        blockExplorers[index === 0 ? 'default' : `${index}`] = {
            name: blockExplorer,
            url: blockExplorer,
        };
        return blockExplorers;
    }, {}),
    name: chain.metamask.chainName,
    rpcUrls: {
        default: { http: chain.metamask.rpcUrls },
        public: { http: chain.metamask.rpcUrls },
    },
});
exports.formatChain = formatChain;
