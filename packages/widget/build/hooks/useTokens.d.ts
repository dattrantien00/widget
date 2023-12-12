import type { TokenAmount } from '../types';
export declare const useTokens: (selectedChainId?: number) => {
    tokens: TokenAmount[] | undefined;
    chain: import("@lifi/sdk").ExtendedChain | undefined;
    isLoading: boolean;
};
