/// <reference types="react" />
import type { LiFiStep, TokenAmount } from '@lifi/sdk';
import type { BoxProps } from '@mui/material';
interface TokenProps {
    token: TokenAmount;
    connected?: boolean;
    step?: LiFiStep;
    disableDescription?: boolean;
    isLoading?: boolean;
}
export declare const Token: React.FC<TokenProps & BoxProps>;
export declare const TokenFallback: React.FC<TokenProps & BoxProps>;
export declare const TokenBase: React.FC<TokenProps & BoxProps>;
export {};
