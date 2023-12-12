"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTokenSearch = void 0;
const sdk_1 = require("@lifi/sdk");
const react_query_1 = require("@tanstack/react-query");
const useTokenSearch = (chainId, tokenQuery, enabled) => {
    const queryClient = (0, react_query_1.useQueryClient)();
    const { data, isLoading } = (0, react_query_1.useQuery)({
        queryKey: ['token-search', chainId, tokenQuery],
        queryFn: async ({ queryKey: [, chainId, tokenQuery], signal }) => {
            const token = await (0, sdk_1.getToken)(chainId, tokenQuery, {
                signal,
            });
            if (token) {
                queryClient.setQueriesData({ queryKey: ['tokens'] }, (data) => {
                    if (data &&
                        !data.tokens[chainId]?.some((t) => t.address === token.address)) {
                        const clonedData = { ...data };
                        clonedData.tokens[chainId]?.push(token);
                        return clonedData;
                    }
                });
            }
            return token;
        },
        enabled: Boolean(chainId && tokenQuery && enabled),
        retry: false,
    });
    return {
        token: data,
        isLoading,
    };
};
exports.useTokenSearch = useTokenSearch;
