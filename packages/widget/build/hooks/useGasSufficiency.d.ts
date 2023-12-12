import { type EVMChain, type RouteExtended, type Token } from '@lifi/sdk';
export interface GasSufficiency {
    gasAmount: bigint;
    tokenAmount?: bigint;
    insufficientAmount?: bigint;
    insufficient?: boolean;
    token: Token;
    chain?: EVMChain;
}
export declare const useGasSufficiency: (route?: RouteExtended) => {
    insufficientGas: GasSufficiency[] | undefined;
    isLoading: boolean;
};
