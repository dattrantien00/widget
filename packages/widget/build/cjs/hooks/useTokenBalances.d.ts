import type { TokenAmount } from '../types';
export declare const useTokenBalances: (selectedChainId?: number) => {
    tokens: TokenAmount[] | undefined;
    tokensWithBalance: TokenAmount[] | undefined;
    featuredTokens: import("@lifi/sdk").StaticToken[] | undefined;
    isLoading: boolean;
    isBalanceLoading: boolean;
    refetch: (options?: import("@tanstack/query-core/build/legacy/queryClient-13f81fcb").Z | undefined) => Promise<import("@tanstack/query-core/build/legacy/queryClient-13f81fcb").ac<TokenAmount[], Error>>;
};
