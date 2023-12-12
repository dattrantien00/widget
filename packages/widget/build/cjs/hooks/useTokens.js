"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTokens = void 0;
const sdk_1 = require("@lifi/sdk");
const react_query_1 = require("@tanstack/react-query");
const react_1 = require("react");
const providers_1 = require("../providers");
const useChains_1 = require("./useChains");
const useFeaturedTokens_1 = require("./useFeaturedTokens");
const useTokens = (selectedChainId) => {
    const { tokens: configTokens } = (0, providers_1.useWidgetConfig)();
    const { data, isLoading } = (0, react_query_1.useQuery)({
        queryKey: ['tokens'],
        queryFn: () => (0, sdk_1.getTokens)({ chainTypes: [sdk_1.ChainType.EVM, sdk_1.ChainType.SVM] }),
        refetchInterval: 3600000,
    });
    const { chains, isLoading: isSupportedChainsLoading, getChainById, } = (0, useChains_1.useChains)();
    const featuredTokens = (0, useFeaturedTokens_1.useFeaturedTokens)(selectedChainId);
    const filteredData = (0, react_1.useMemo)(() => {
        if (isSupportedChainsLoading) {
            return;
        }
        const chain = getChainById(selectedChainId, chains);
        const chainAllowed = selectedChainId && chain;
        if (!chainAllowed) {
            return;
        }
        let filteredTokens = data?.tokens[selectedChainId];
        const includedTokens = configTokens?.include?.filter((token) => token.chainId === selectedChainId);
        if (includedTokens?.length) {
            filteredTokens = filteredTokens
                ? [...includedTokens, ...filteredTokens]
                : includedTokens;
        }
        const allowedTokens = configTokens?.allow
            ?.filter((token) => token.chainId === selectedChainId)
            .map((token) => token.address);
        if (allowedTokens?.length) {
            filteredTokens = filteredTokens?.filter((token) => allowedTokens.includes(token.address));
        }
        const deniedTokenAddresses = configTokens?.deny
            ?.filter((token) => token.chainId === selectedChainId)
            .map((token) => token.address);
        if (deniedTokenAddresses?.length) {
            filteredTokens = filteredTokens?.filter((token) => !deniedTokenAddresses.includes(token.address));
        }
        const featuredTokenAddresses = new Set(featuredTokens?.map((token) => token.address));
        const tokens = [
            ...(featuredTokens?.map((token) => {
                token.featured = true;
                return token;
            }) ?? []),
            ...(filteredTokens?.filter((token) => !featuredTokenAddresses.has(token.address)) ?? []),
        ];
        return {
            tokens,
            chain,
        };
    }, [
        chains,
        configTokens?.allow,
        configTokens?.deny,
        configTokens?.include,
        data?.tokens,
        featuredTokens,
        getChainById,
        isSupportedChainsLoading,
        selectedChainId,
    ]);
    return {
        tokens: filteredData?.tokens,
        chain: filteredData?.chain,
        isLoading,
    };
};
exports.useTokens = useTokens;
