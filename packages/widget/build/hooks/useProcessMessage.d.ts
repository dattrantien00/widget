import type { EVMChain, LiFiStep, Process } from '@lifi/sdk';
import type { TFunction } from 'i18next';
import type { WidgetSubvariant } from '../types';
export declare const useProcessMessage: (step?: LiFiStep, process?: Process) => {
    title?: string | undefined;
    message?: string | undefined;
};
export declare function getProcessMessage(t: TFunction, getChainById: (chainId: number) => EVMChain | undefined, step: LiFiStep, process: Process, subvariant?: WidgetSubvariant): {
    title?: string;
    message?: string;
};
