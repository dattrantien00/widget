import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChainType } from '@lifi/sdk';
import ContentCopyIcon from '@mui/icons-material/ContentCopyRounded';
import OpenInNewIcon from '@mui/icons-material/OpenInNewRounded';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNewRounded';
import { Avatar, Badge, Box, Button, IconButton, MenuItem, } from '@mui/material';
import { useWallet } from '@solana/wallet-adapter-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useDisconnect } from 'wagmi';
import { useAccount, useAvailableChains } from '../../hooks';
import { navigationRoutes, shortenAddress } from '../../utils';
import { SmallAvatar } from '../SmallAvatar';
export const WalletMenu = ({ onClose }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { accounts } = useAccount();
    const { getChainById } = useAvailableChains();
    const connect = async () => {
        navigate(navigationRoutes.selectWallet);
        onClose();
    };
    return (_jsxs(Box, { children: [_jsx(Box, { display: "flex", flexDirection: "column", children: accounts
                    .filter((account) => account.isConnected)
                    .map((account) => {
                    const chain = getChainById(account.chainId);
                    const walletAddress = shortenAddress(account.address);
                    const handleCopyAddress = async () => {
                        await navigator.clipboard.writeText(account.address ?? '');
                        onClose();
                    };
                    return (_jsxs(MenuItem, { children: [_jsxs(Box, { flex: 1, children: [_jsx(Badge, { overlap: "circular", anchorOrigin: { vertical: 'bottom', horizontal: 'right' }, badgeContent: _jsx(SmallAvatar, { src: chain?.logoURI, alt: chain?.name, children: chain?.name[0] }), sx: { marginRight: 1.5 }, children: _jsx(Avatar, { src: account.connector?.icon, alt: account.connector?.name, sx: { width: 32, height: 32 }, children: account.connector?.name[0] }) }), walletAddress] }), _jsxs(Box, { ml: 1, children: [_jsx(IconButton, { size: "medium", onClick: handleCopyAddress, children: _jsx(ContentCopyIcon, {}) }), _jsx(IconButton, { size: "medium", component: "a", onClick: onClose, href: `${chain?.metamask.blockExplorerUrls[0]}address/${account.address}`, target: "_blank", children: _jsx(OpenInNewIcon, {}) }), account.chainType === ChainType.EVM ? (_jsx(EVMDisconnectIconButton, { connector: account.connector })) : account.chainType === ChainType.SVM ? (_jsx(SVMDisconnectIconButton, {})) : null] })] }, account.address));
                }) }), _jsx(Button, { onClick: connect, fullWidth: true, startIcon: _jsx(PowerSettingsNewIcon, {}), sx: {
                    marginTop: 1,
                }, children: t(`button.connectWallet`) })] }));
};
const EVMDisconnectIconButton = ({ connector }) => {
    const { disconnect } = useDisconnect();
    return (_jsx(IconButton, { size: "medium", onClick: (e) => {
            e.stopPropagation();
            disconnect({ connector });
        }, children: _jsx(PowerSettingsNewIcon, {}) }));
};
const SVMDisconnectIconButton = () => {
    const { disconnect } = useWallet();
    return (_jsx(IconButton, { size: "medium", onClick: (e) => {
            e.stopPropagation();
            disconnect();
        }, children: _jsx(PowerSettingsNewIcon, {}) }));
};
