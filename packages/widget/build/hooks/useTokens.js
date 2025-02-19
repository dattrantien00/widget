import { ChainType, getTokens } from '@lifi/sdk';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useWidgetConfig } from '../providers';
import { useChains } from './useChains';
import { useFeaturedTokens } from './useFeaturedTokens';
export const useTokens = (selectedChainId) => {
    const { tokens: configTokens } = useWidgetConfig();
    const { data, isLoading } = useQuery({
        queryKey: ['tokens'],
        queryFn: () => getTokens({ chainTypes: [ChainType.EVM, ChainType.SVM] }),
        refetchInterval: 3600000,
    });
    const { chains, isLoading: isSupportedChainsLoading, getChainById, } = useChains();
    const featuredTokens = useFeaturedTokens(selectedChainId);
    const filteredData = useMemo(() => {
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
