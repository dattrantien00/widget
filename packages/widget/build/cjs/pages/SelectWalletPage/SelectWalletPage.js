"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectWalletPage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const sdk_1 = require("@lifi/sdk");
const wallet_management_1 = require("@lifi/wallet-management");
const material_1 = require("@mui/material");
const wallet_adapter_base_1 = require("@solana/wallet-adapter-base");
const wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const wagmi_1 = require("wagmi");
const Dialog_1 = require("../../components/Dialog");
const ListItemButton_1 = require("../../components/ListItemButton");
const ListItemText_1 = require("../../components/ListItemText");
const hooks_1 = require("../../hooks");
const types_1 = require("../../types");
const SelectWalletPage = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { navigateBack } = (0, hooks_1.useNavigateBack)();
    const emitter = (0, hooks_1.useWidgetEvents)();
    const { connectAsync, connectors } = (0, wagmi_1.useConnect)();
    const [walletIdentity, setWalletIdentity] = (0, react_1.useState)({ show: false });
    const [wallets, setWallets] = (0, react_1.useState)();
    const { wallets: solanaWallets, select, connect: solanaConnect, } = (0, wallet_adapter_react_1.useWallet)();
    const isDesktopView = (0, material_1.useMediaQuery)((theme) => theme.breakpoints.up('sm'));
    const closeDialog = () => {
        setWalletIdentity((state) => ({
            ...state,
            show: false,
        }));
    };
    const handleEVMConnect = (0, react_1.useCallback)(async (connector) => {
        const identityCheckPassed = await (0, wallet_management_1.isWalletInstalledAsync)(connector.id);
        if (!identityCheckPassed) {
            setWalletIdentity({
                show: true,
                connector,
            });
            return;
        }
        await connectAsync({ connector }, {
            onSuccess(data) {
                emitter.emit(types_1.WidgetEvent.WalletConnected, {
                    address: data.accounts[0],
                    chainId: data.chainId,
                    chainType: sdk_1.ChainType.EVM,
                });
            },
        });
        navigateBack();
    }, [connectAsync, emitter, navigateBack]);
    const handleSVMConnect = (0, react_1.useCallback)(async (wallet) => {
        select(wallet.adapter.name);
        // We use autoConnect on wallet selection
        // await solanaConnect();
        // TODO: Check if this works fine for Solana autoConnect
        emitter.emit(types_1.WidgetEvent.WalletConnected, {
            address: wallet.adapter.publicKey?.toString(),
            chainId: sdk_1.ChainId.SOL,
            chainType: sdk_1.ChainType.SVM,
        });
        navigateBack();
    }, [emitter, navigateBack, select]);
    (0, react_1.useEffect)(() => {
        const evmInstalled = connectors.filter((connector) => (0, wallet_management_1.isWalletInstalled)(connector.id));
        const evmNotDetected = connectors.filter((connector) => !(0, wallet_management_1.isWalletInstalled)(connector.id));
        const svmInstalled = solanaWallets?.filter((connector) => connector.adapter.readyState === wallet_adapter_base_1.WalletReadyState.Installed);
        const svmNotDetected = solanaWallets?.filter((connector) => connector.adapter.readyState !== wallet_adapter_base_1.WalletReadyState.Installed);
        const installedWallets = [...evmInstalled, ...svmInstalled];
        if (isDesktopView) {
            installedWallets.push(...evmNotDetected, ...svmNotDetected);
        }
        setWallets(installedWallets);
    }, [connectors, isDesktopView, solanaWallets]);
    const createEVMListItemButton = (connector) => ((0, jsx_runtime_1.jsxs)(ListItemButton_1.ListItemButton, { onClick: () => handleEVMConnect(connector), children: [(0, jsx_runtime_1.jsx)(material_1.ListItemAvatar, { children: (0, jsx_runtime_1.jsx)(material_1.Avatar, { src: connector.icon || (0, wallet_management_1.getWalletIcon)(connector.id), alt: connector.name, children: connector.name[0] }) }), (0, jsx_runtime_1.jsx)(ListItemText_1.ListItemText, { primary: connector.name })] }, connector.uid));
    const createSVMListItemButton = (wallet) => ((0, jsx_runtime_1.jsxs)(ListItemButton_1.ListItemButton, { onClick: () => handleSVMConnect(wallet), children: [(0, jsx_runtime_1.jsx)(material_1.ListItemAvatar, { children: (0, jsx_runtime_1.jsx)(material_1.Avatar, { src: wallet.adapter.icon, alt: wallet.adapter.name, children: wallet.adapter.name[0] }) }), (0, jsx_runtime_1.jsx)(ListItemText_1.ListItemText, { primary: wallet.adapter.name })] }, wallet.adapter.name));
    return ((0, jsx_runtime_1.jsxs)(material_1.Container, { disableGutters: true, children: [(0, jsx_runtime_1.jsx)(material_1.List, { sx: {
                    paddingLeft: 1.5,
                    paddingRight: 1.5,
                }, children: wallets?.map((connector) => connector.uid
                    ? createEVMListItemButton(connector)
                    : createSVMListItemButton(connector)) }), (0, jsx_runtime_1.jsxs)(Dialog_1.Dialog, { open: walletIdentity.show, onClose: closeDialog, children: [(0, jsx_runtime_1.jsx)(material_1.DialogContent, { children: (0, jsx_runtime_1.jsx)(material_1.DialogContentText, { children: t('wallet.extensionNotFound', {
                                name: walletIdentity.connector?.name,
                            }) }) }), (0, jsx_runtime_1.jsx)(material_1.DialogActions, { children: (0, jsx_runtime_1.jsx)(material_1.Button, { variant: "contained", onClick: closeDialog, autoFocus: true, children: t('button.ok') }) })] })] }));
};
exports.SelectWalletPage = SelectWalletPage;
