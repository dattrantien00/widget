import { type Token, type TokenAmount } from '@lifi/sdk';
export declare const useTokenBalance: (token?: Token, accountAddress?: string) => {
    token: TokenAmount | undefined;
    isLoading: boolean;
    refetch: (options?: import("@tanstack/query-core/build/legacy/queryClient-13f81fcb").Z | undefined) => Promise<import("@tanstack/query-core/build/legacy/queryClient-13f81fcb").ac<TokenAmount, Error>>;
    refetchNewBalance: () => void;
    refetchAllBalances: () => void;
    getTokenBalancesWithRetry: (accountAddress: string, tokens: Token[], depth?: number) => Promise<TokenAmount[] | undefined>;
};
export declare const getTokenBalancesWithRetry: (accountAddress: string, tokens: Token[], depth?: number) => Promise<TokenAmount[] | undefined>;
