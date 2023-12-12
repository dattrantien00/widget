/// <reference types="react" />
export { useFormContext, useWatch } from 'react-hook-form';
export type { WidgetDrawer } from './AppDrawer';
export * from './components/NFT';
export * from './config/version';
export { useAccount, useAvailableChains, useWidgetEvents, widgetEvents, } from './hooks';
export * from './providers/FormProvider/types';
export { formatChain } from './providers/WalletProvider';
export * from './types';
export declare const LiFiWidget: import("react").ForwardRefExoticComponent<import("./types").WidgetDrawerProps & import("./types").WidgetConfig & import("./types").WidgetConfigPartialProps & import("react").RefAttributes<import("./AppDrawer").WidgetDrawer>>;
