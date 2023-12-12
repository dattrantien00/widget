export declare const useChains: () => {
    chains: import("@lifi/types").ExtendedChain[] | undefined;
    getChainById: (chainId?: number | undefined, chains?: import("@lifi/types").ExtendedChain[] | undefined) => import("@lifi/types").ExtendedChain | undefined;
    isLoading: boolean;
};
