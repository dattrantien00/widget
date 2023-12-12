import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChainId, ChainType } from '@lifi/sdk';
import { getWalletIcon, isWalletInstalled, isWalletInstalledAsync, } from '@lifi/wallet-management';
import { Avatar, Button, Container, DialogActions, DialogContent, DialogContentText, List, ListItemAvatar, useMediaQuery, } from '@mui/material';
import { WalletReadyState } from '@solana/wallet-adapter-base';
import { useWallet } from '@solana/wallet-adapter-react';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useConnect } from 'wagmi';
import { Dialog } from '../../components/Dialog';
import { ListItemButton } from '../../components/ListItemButton';
import { ListItemText } from '../../components/ListItemText';
import { useNavigateBack, useWidgetEvents } from '../../hooks';
import { WidgetEvent } from '../../types';
export const SelectWalletPage = () => {
    const { t } = useTranslation();
    const { navigateBack } = useNavigateBack();
    const emitter = useWidgetEvents();
    const { connectAsync, connectors } = useConnect();
    const [walletIdentity, setWalletIdentity] = useState({ show: false });
    const [wallets, setWallets] = useState();
    const { wallets: solanaWallets, select, connect: solanaConnect, } = useWallet();
    const isDesktopView = useMediaQuery((theme) => theme.breakpoints.up('sm'));
    const closeDialog = () => {
        setWalletIdentity((state) => ({
            ...state,
            show: false,
        }));
    };
    const handleEVMConnect = useCallback(async (connector) => {
        const identityCheckPassed = await isWalletInstalledAsync(connector.id);
        if (!identityCheckPassed) {
            setWalletIdentity({
                show: true,
                connector,
            });
            return;
        }
        await connectAsync({ connector }, {
            onSuccess(data) {
                emitter.emit(WidgetEvent.WalletConnected, {
                    address: data.accounts[0],
                    chainId: data.chainId,
                    chainType: ChainType.EVM,
                });
            },
        });
        navigateBack();
    }, [connectAsync, emitter, navigateBack]);
    const handleSVMConnect = useCallback(async (wallet) => {
        select(wallet.adapter.name);
        // We use autoConnect on wallet selection
        // await solanaConnect();
        // TODO: Check if this works fine for Solana autoConnect
        emitter.emit(WidgetEvent.WalletConnected, {
            address: wallet.adapter.publicKey?.toString(),
            chainId: ChainId.SOL,
            chainType: ChainType.SVM,
        });
        navigateBack();
    }, [emitter, navigateBack, select]);
    useEffect(() => {
        const evmInstalled = connectors.filter((connector) => isWalletInstalled(connector.id));
        const evmNotDetected = connectors.filter((connector) => !isWalletInstalled(connector.id));
        const svmInstalled = solanaWallets?.filter((connector) => connector.adapter.readyState === WalletReadyState.Installed);
        const svmNotDetected = solanaWallets?.filter((connector) => connector.adapter.readyState !== WalletReadyState.Installed);
        const installedWallets = [...evmInstalled, ...svmInstalled];
        if (isDesktopView) {
            installedWallets.push(...evmNotDetected, ...svmNotDetected);
        }
        setWallets(installedWallets);
    }, [connectors, isDesktopView, solanaWallets]);
    const createEVMListItemButton = (connector) => (_jsxs(ListItemButton, { onClick: () => handleEVMConnect(connector), children: [_jsx(ListItemAvatar, { children: _jsx(Avatar, { src: connector.icon || getWalletIcon(connector.id), alt: connector.name, children: connector.name[0] }) }), _jsx(ListItemText, { primary: connector.name })] }, connector.uid));
    const createSVMListItemButton = (wallet) => (_jsxs(ListItemButton, { onClick: () => handleSVMConnect(wallet), children: [_jsx(ListItemAvatar, { children: _jsx(Avatar, { src: wallet.adapter.icon, alt: wallet.adapter.name, children: wallet.adapter.name[0] }) }), _jsx(ListItemText, { primary: wallet.adapter.name })] }, wallet.adapter.name));
    return (_jsxs(Container, { disableGutters: true, children: [_jsx(List, { sx: {
                    paddingLeft: 1.5,
                    paddingRight: 1.5,
                }, children: wallets?.map((connector) => connector.uid
                    ? createEVMListItemButton(connector)
                    : createSVMListItemButton(connector)) }), _jsxs(Dialog, { open: walletIdentity.show, onClose: closeDialog, children: [_jsx(DialogContent, { children: _jsx(DialogContentText, { children: t('wallet.extensionNotFound', {
                                name: walletIdentity.connector?.name,
                            }) }) }), _jsx(DialogActions, { children: _jsx(Button, { variant: "contained", onClick: closeDialog, autoFocus: true, children: t('button.ok') }) })] })] }));
};
