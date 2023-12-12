import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WalletIcon from '@mui/icons-material/Wallet';
import { Avatar, Badge } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAccount, useChain } from '../../hooks';
import { useWidgetConfig } from '../../providers';
import { navigationRoutes, shortenAddress } from '../../utils';
import { SmallAvatar } from '../SmallAvatar';
import { DrawerWalletContainer, HeaderAppBar, WalletButton, } from './Header.style';
import { WalletMenu } from './WalletMenu';
import { WalletMenuContainer } from './WalletMenu.style';
export const WalletHeader = () => {
    return (_jsx(HeaderAppBar, { elevation: 0, sx: { justifyContent: 'flex-end' }, children: _jsx(WalletMenuButton, {}) }));
};
export const WalletMenuButton = () => {
    const { account } = useAccount();
    const { variant } = useWidgetConfig();
    if (variant === 'drawer') {
        return (_jsx(DrawerWalletContainer, { children: account.isConnected ? (_jsx(ConnectedButton, { account: account })) : (_jsx(ConnectButton, {})) }));
    }
    return account.isConnected ? (_jsx(ConnectedButton, { account: account })) : (_jsx(ConnectButton, {}));
};
const ConnectButton = () => {
    const { t } = useTranslation();
    const { pathname } = useLocation();
    const { walletManagement, subvariant, variant } = useWidgetConfig();
    const navigate = useNavigate();
    const connect = async () => {
        if (walletManagement) {
            await walletManagement.connect();
            return;
        }
        navigate(navigationRoutes.selectWallet);
    };
    return (_jsx(WalletButton, { endIcon: variant !== 'drawer' && subvariant !== 'split' ? (_jsx(WalletIcon, {})) : undefined, startIcon: variant === 'drawer' || subvariant === 'split' ? (_jsx(WalletIcon, { sx: { marginLeft: -0.25 } })) : undefined, onClick: !pathname.includes(navigationRoutes.selectWallet) ? connect : undefined, sx: {
            marginRight: subvariant === 'split' ? 0 : -1.25,
            marginLeft: subvariant === 'split' ? -1.25 : 0,
        }, children: t(`button.connectWallet`) }));
};
const ConnectedButton = ({ account }) => {
    const { subvariant } = useWidgetConfig();
    const { chain } = useChain(account.chainId);
    const [anchorEl, setAnchorEl] = useState(null);
    const walletAddress = shortenAddress(account.address);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (_jsxs(_Fragment, { children: [_jsx(WalletButton, { endIcon: _jsx(ExpandMoreIcon, {}), startIcon: _jsx(Badge, { overlap: "circular", anchorOrigin: { vertical: 'bottom', horizontal: 'right' }, badgeContent: _jsx(SmallAvatar, { src: chain?.logoURI, alt: chain?.name, children: chain?.name[0] }), children: _jsx(Avatar, { src: account.connector?.icon, alt: account.connector?.name, sx: { width: 24, height: 24 }, children: account.connector?.name[0] }) }), sx: {
                    marginRight: subvariant === 'split' ? 0 : -1.25,
                    marginLeft: subvariant === 'split' ? -1 : 0,
                }, onClick: handleClick, children: walletAddress }), _jsx(WalletMenuContainer, { anchorEl: anchorEl, open: Boolean(anchorEl), onClose: handleClose, children: _jsx(WalletMenu, { onClose: handleClose }) })] }));
};
