"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDKProviders = void 0;
const sdk_1 = require("@lifi/sdk");
const wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
const core_1 = require("@wagmi/core");
const react_1 = require("react");
const wagmi_1 = require("wagmi");
const SDKProviders = () => {
    const { wallet } = (0, wallet_adapter_react_1.useWallet)();
    const wagmiConfig = (0, wagmi_1.useConfig)();
    (0, react_1.useEffect)(() => {
        // Configure SDK Providers
        sdk_1.config.setProviders([
            (0, sdk_1.EVM)({
                getWalletClient: () => (0, core_1.getWalletClient)(wagmiConfig),
                switchChain: async (chainId) => {
                    await (0, core_1.switchChain)(wagmiConfig, { chainId });
                    return (0, core_1.getWalletClient)(wagmiConfig);
                },
            }),
            (0, sdk_1.Solana)({
                async getWalletAdapter() {
                    return wallet?.adapter;
                },
            }),
        ]);
    }, [wagmiConfig, wallet?.adapter]);
    return null;
};
exports.SDKProviders = SDKProviders;
