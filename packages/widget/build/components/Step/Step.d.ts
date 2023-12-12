/// <reference types="react" />
import type { LiFiStepExtended, TokenAmount } from '@lifi/sdk';
export declare const Step: React.FC<{
    step: LiFiStepExtended;
    fromToken?: TokenAmount;
    toToken?: TokenAmount;
    toAddress?: string;
}>;
