import { getGasRecommendation } from '@lifi/sdk';
import { useQuery } from '@tanstack/react-query';
import { useAvailableChains } from './useAvailableChains';
const refetchInterval = 60000;
export const useGasRecommendation = (chainId, fromChain, fromToken) => {
    const { chains } = useAvailableChains();
    return useQuery({
        queryKey: ['gas-recommendation', chainId, fromChain, fromToken],
        queryFn: async ({ queryKey: [_, chainId, fromChain, fromToken], signal, }) => {
            if (!chains?.some((chain) => chain.id === chainId)) {
                return null;
            }
            const gasRecommendation = await getGasRecommendation({
                chainId: chainId,
                fromChain: fromChain,
                fromToken: fromToken,
            }, { signal });
            return gasRecommendation;
        },
        enabled: ((Boolean(chainId) && Boolean(fromChain) && Boolean(fromToken)) ||
            Boolean(chainId)) &&
            Boolean(chains?.length),
        refetchInterval,
        staleTime: refetchInterval,
    });
};
