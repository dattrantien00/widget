import { type ChainId } from '@lifi/sdk';
export declare const useGasRecommendation: (chainId: ChainId, fromChain?: ChainId, fromToken?: string) => import("@tanstack/react-query/build/legacy/types").UseQueryResult<import("@lifi/sdk").GasRecommendationResponse | null, Error>;
