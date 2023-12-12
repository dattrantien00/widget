"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAccountDisconnect = exports.useAccount = void 0;
const sdk_1 = require("@lifi/sdk");
const wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
const react_1 = require("react");
const wagmi_1 = require("wagmi");
const useAccount = () => {
    const account = (0, wagmi_1.useAccount)();
    const { wallet } = (0, wallet_adapter_react_1.useWallet)();
    return (0, react_1.useMemo)(() => {
        const svm = wallet?.adapter.publicKey
            ? {
                address: wallet?.adapter.publicKey.toString(),
                chainId: sdk_1.ChainId.SOL,
                chainType: sdk_1.ChainType.SVM,
                connector: wallet?.adapter,
                isConnected: Boolean(wallet?.adapter.publicKey),
                isConnecting: false,
                isReconnecting: false,
                isDisconnected: !wallet,
                status: 'connected',
            }
            : {
                chainType: sdk_1.ChainType.SVM,
                isConnected: false,
                isConnecting: false,
                isReconnecting: false,
                isDisconnected: true,
                status: 'disconnected',
            };
        const evm = { ...account, chainType: sdk_1.ChainType.EVM };
        return {
            account: account.isConnected ? evm : svm,
            accounts: [evm, svm],
        };
    }, [account, wallet]);
};
exports.useAccount = useAccount;
const useAccountDisconnect = () => {
    const account = (0, wagmi_1.useAccount)();
    const { disconnect: wagmiDisconnect } = (0, wagmi_1.useDisconnect)();
    const { wallet, disconnect } = (0, wallet_adapter_react_1.useWallet)();
    return () => {
        if (account.isConnected) {
            wagmiDisconnect();
        }
        if (wallet) {
            disconnect();
        }
    };
};
exports.useAccountDisconnect = useAccountDisconnect;
