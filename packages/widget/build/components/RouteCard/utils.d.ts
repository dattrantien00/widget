import type { Route, Token } from '@lifi/sdk';
export declare const getGasCostsBreakdown: (route: Route) => {
    amount: bigint;
    amountUSD: number;
    token: Token;
}[];
export declare const getFeeCostsBreakdown: (route: Route, included?: boolean) => {
    amount: bigint;
    amountUSD: number;
    token: Token;
}[];
