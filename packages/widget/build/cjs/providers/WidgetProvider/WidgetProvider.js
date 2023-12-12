"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetProvider = exports.useWidgetConfig = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const sdk_1 = require("@lifi/sdk");
const react_1 = require("react");
const version_1 = require("../../config/version");
const stores_1 = require("../../stores");
const utils_1 = require("../../utils");
const initialContext = {
    elementId: '',
    integrator: '',
};
const WidgetContext = (0, react_1.createContext)(initialContext);
const useWidgetConfig = () => (0, react_1.useContext)(WidgetContext);
exports.useWidgetConfig = useWidgetConfig;
let sdkInitialized = false;
const WidgetProvider = ({ children, config: widgetConfig }) => {
    const elementId = (0, react_1.useId)();
    if (!widgetConfig?.integrator) {
        throw Error('Required property "integrator" is missing.');
    }
    const value = (0, react_1.useMemo)(() => {
        try {
            // Get search params from URL
            const searchParams = Object.fromEntries(new URLSearchParams(window?.location.search));
            // Prevent using fromToken/toToken params if chain is not selected
            ['from', 'to'].forEach((key) => {
                if (searchParams[`${key}Token`] && !searchParams[`${key}Chain`]) {
                    delete searchParams[`${key}Token`];
                }
            });
            // Create widget configuration object
            const value = {
                ...widgetConfig,
                fromChain: (searchParams.fromChain &&
                    !isNaN(parseInt(searchParams.fromChain, 10))) ||
                    typeof widgetConfig.fromChain === 'number'
                    ? parseInt(searchParams.fromChain, 10) || widgetConfig.fromChain
                    : undefined,
                toChain: (searchParams.toChain &&
                    !isNaN(parseInt(searchParams.toChain, 10))) ||
                    typeof widgetConfig.toChain === 'number'
                    ? parseInt(searchParams.toChain, 10) || widgetConfig.toChain
                    : undefined,
                fromToken: searchParams.fromToken || widgetConfig.fromToken,
                toToken: searchParams.toToken || widgetConfig.toToken,
                fromAmount: typeof searchParams.fromAmount === 'string' &&
                    !isNaN(parseFloat(searchParams.fromAmount))
                    ? (0, utils_1.formatInputAmount)(searchParams.fromAmount)
                    : widgetConfig.fromAmount,
                toAddress: searchParams.toAddress || widgetConfig.toAddress,
                integrator: widgetConfig.integrator,
                elementId,
            };
            // Set default settings for widget settings store
            (0, stores_1.setDefaultSettings)(value);
            // Configure SDK
            const _config = {
                ...widgetConfig.sdkConfig,
                apiKey: widgetConfig.apiKey,
                integrator: widgetConfig.integrator ?? window?.location.hostname,
                routeOptions: {
                    fee: widgetConfig.fee,
                    referrer: widgetConfig.referrer,
                    order: widgetConfig.routePriority,
                    slippage: widgetConfig.slippage,
                    ...widgetConfig.sdkConfig?.routeOptions,
                },
                disableVersionCheck: true,
                widgetVersion: version_1.version,
            };
            if (!sdkInitialized) {
                (0, sdk_1.createConfig)(_config);
                sdkInitialized = true;
            }
            else {
                sdk_1.config.set(_config);
            }
            return value;
        }
        catch (e) {
            console.warn(e);
            return {
                ...widgetConfig,
                elementId,
                integrator: widgetConfig.integrator,
            };
        }
    }, [elementId, widgetConfig]);
    return ((0, jsx_runtime_1.jsx)(WidgetContext.Provider, { value: value, children: children }));
};
exports.WidgetProvider = WidgetProvider;
