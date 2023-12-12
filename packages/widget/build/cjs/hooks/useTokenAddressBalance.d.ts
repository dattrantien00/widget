export declare const useTokenAddressBalance: (chainId?: number, tokenAddress?: string) => {
    token: import("..").TokenAmount | undefined;
    isLoading: boolean;
    refetch: (options?: import("@tanstack/query-core/build/legacy/queryClient-13f81fcb").Z | undefined) => Promise<import("@tanstack/query-core/build/legacy/queryClient-13f81fcb").ac<import("..").TokenAmount[], Error>>;
};
