"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletMenuButton = exports.WalletHeader = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ExpandMore_1 = require("@mui/icons-material/ExpandMore");
const Wallet_1 = require("@mui/icons-material/Wallet");
const material_1 = require("@mui/material");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_router_dom_1 = require("react-router-dom");
const hooks_1 = require("../../hooks");
const providers_1 = require("../../providers");
const utils_1 = require("../../utils");
const SmallAvatar_1 = require("../SmallAvatar");
const Header_style_1 = require("./Header.style");
const WalletMenu_1 = require("./WalletMenu");
const WalletMenu_style_1 = require("./WalletMenu.style");
const WalletHeader = () => {
    return ((0, jsx_runtime_1.jsx)(Header_style_1.HeaderAppBar, { elevation: 0, sx: { justifyContent: 'flex-end' }, children: (0, jsx_runtime_1.jsx)(exports.WalletMenuButton, {}) }));
};
exports.WalletHeader = WalletHeader;
const WalletMenuButton = () => {
    const { account } = (0, hooks_1.useAccount)();
    const { variant } = (0, providers_1.useWidgetConfig)();
    if (variant === 'drawer') {
        return ((0, jsx_runtime_1.jsx)(Header_style_1.DrawerWalletContainer, { children: account.isConnected ? ((0, jsx_runtime_1.jsx)(ConnectedButton, { account: account })) : ((0, jsx_runtime_1.jsx)(ConnectButton, {})) }));
    }
    return account.isConnected ? ((0, jsx_runtime_1.jsx)(ConnectedButton, { account: account })) : ((0, jsx_runtime_1.jsx)(ConnectButton, {}));
};
exports.WalletMenuButton = WalletMenuButton;
const ConnectButton = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { pathname } = (0, react_router_dom_1.useLocation)();
    const { walletManagement, subvariant, variant } = (0, providers_1.useWidgetConfig)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const connect = async () => {
        if (walletManagement) {
            await walletManagement.connect();
            return;
        }
        navigate(utils_1.navigationRoutes.selectWallet);
    };
    return ((0, jsx_runtime_1.jsx)(Header_style_1.WalletButton, { endIcon: variant !== 'drawer' && subvariant !== 'split' ? ((0, jsx_runtime_1.jsx)(Wallet_1.default, {})) : undefined, startIcon: variant === 'drawer' || subvariant === 'split' ? ((0, jsx_runtime_1.jsx)(Wallet_1.default, { sx: { marginLeft: -0.25 } })) : undefined, onClick: !pathname.includes(utils_1.navigationRoutes.selectWallet) ? connect : undefined, sx: {
            marginRight: subvariant === 'split' ? 0 : -1.25,
            marginLeft: subvariant === 'split' ? -1.25 : 0,
        }, children: t(`button.connectWallet`) }));
};
const ConnectedButton = ({ account }) => {
    const { subvariant } = (0, providers_1.useWidgetConfig)();
    const { chain } = (0, hooks_1.useChain)(account.chainId);
    const [anchorEl, setAnchorEl] = (0, react_1.useState)(null);
    const walletAddress = (0, utils_1.shortenAddress)(account.address);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Header_style_1.WalletButton, { endIcon: (0, jsx_runtime_1.jsx)(ExpandMore_1.default, {}), startIcon: (0, jsx_runtime_1.jsx)(material_1.Badge, { overlap: "circular", anchorOrigin: { vertical: 'bottom', horizontal: 'right' }, badgeContent: (0, jsx_runtime_1.jsx)(SmallAvatar_1.SmallAvatar, { src: chain?.logoURI, alt: chain?.name, children: chain?.name[0] }), children: (0, jsx_runtime_1.jsx)(material_1.Avatar, { src: account.connector?.icon, alt: account.connector?.name, sx: { width: 24, height: 24 }, children: account.connector?.name[0] }) }), sx: {
                    marginRight: subvariant === 'split' ? 0 : -1.25,
                    marginLeft: subvariant === 'split' ? -1 : 0,
                }, onClick: handleClick, children: walletAddress }), (0, jsx_runtime_1.jsx)(WalletMenu_style_1.WalletMenuContainer, { anchorEl: anchorEl, open: Boolean(anchorEl), onClose: handleClose, children: (0, jsx_runtime_1.jsx)(WalletMenu_1.WalletMenu, { onClose: handleClose }) })] }));
};
