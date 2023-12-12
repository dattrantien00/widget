/// <reference types="react" />
import type { LiFiStep, StepExtended } from '@lifi/sdk';
import type { WidgetSubvariant } from '../../types';
import type { StepActionsProps, StepDetailsLabelProps } from './types';
export declare const StepActions: React.FC<StepActionsProps>;
export declare const IncludedSteps: React.FC<{
    step: LiFiStep;
    subvariant?: WidgetSubvariant;
}>;
export declare const StepDetailsContent: React.FC<{
    step: StepExtended;
    subvariant?: WidgetSubvariant;
}>;
export declare const CustomStepDetailsLabel: React.FC<StepDetailsLabelProps>;
export declare const CrossStepDetailsLabel: React.FC<Omit<StepDetailsLabelProps, 'variant'>>;
export declare const SwapStepDetailsLabel: React.FC<Omit<StepDetailsLabelProps, 'variant'>>;
export declare const ProtocolStepDetailsLabel: React.FC<Omit<StepDetailsLabelProps, 'variant'>>;
