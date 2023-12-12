"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletMenu = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const sdk_1 = require("@lifi/sdk");
const ContentCopyRounded_1 = require("@mui/icons-material/ContentCopyRounded");
const OpenInNewRounded_1 = require("@mui/icons-material/OpenInNewRounded");
const PowerSettingsNewRounded_1 = require("@mui/icons-material/PowerSettingsNewRounded");
const material_1 = require("@mui/material");
const wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
const react_i18next_1 = require("react-i18next");
const react_router_dom_1 = require("react-router-dom");
const wagmi_1 = require("wagmi");
const hooks_1 = require("../../hooks");
const utils_1 = require("../../utils");
const SmallAvatar_1 = require("../SmallAvatar");
const WalletMenu = ({ onClose }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { accounts } = (0, hooks_1.useAccount)();
    const { getChainById } = (0, hooks_1.useAvailableChains)();
    const connect = async () => {
        navigate(utils_1.navigationRoutes.selectWallet);
        onClose();
    };
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, { children: [(0, jsx_runtime_1.jsx)(material_1.Box, { display: "flex", flexDirection: "column", children: accounts
                    .filter((account) => account.isConnected)
                    .map((account) => {
                    const chain = getChainById(account.chainId);
                    const walletAddress = (0, utils_1.shortenAddress)(account.address);
                    const handleCopyAddress = async () => {
                        await navigator.clipboard.writeText(account.address ?? '');
                        onClose();
                    };
                    return ((0, jsx_runtime_1.jsxs)(material_1.MenuItem, { children: [(0, jsx_runtime_1.jsxs)(material_1.Box, { flex: 1, children: [(0, jsx_runtime_1.jsx)(material_1.Badge, { overlap: "circular", anchorOrigin: { vertical: 'bottom', horizontal: 'right' }, badgeContent: (0, jsx_runtime_1.jsx)(SmallAvatar_1.SmallAvatar, { src: chain?.logoURI, alt: chain?.name, children: chain?.name[0] }), sx: { marginRight: 1.5 }, children: (0, jsx_runtime_1.jsx)(material_1.Avatar, { src: account.connector?.icon, alt: account.connector?.name, sx: { width: 32, height: 32 }, children: account.connector?.name[0] }) }), walletAddress] }), (0, jsx_runtime_1.jsxs)(material_1.Box, { ml: 1, children: [(0, jsx_runtime_1.jsx)(material_1.IconButton, { size: "medium", onClick: handleCopyAddress, children: (0, jsx_runtime_1.jsx)(ContentCopyRounded_1.default, {}) }), (0, jsx_runtime_1.jsx)(material_1.IconButton, { size: "medium", component: "a", onClick: onClose, href: `${chain?.metamask.blockExplorerUrls[0]}address/${account.address}`, target: "_blank", children: (0, jsx_runtime_1.jsx)(OpenInNewRounded_1.default, {}) }), account.chainType === sdk_1.ChainType.EVM ? ((0, jsx_runtime_1.jsx)(EVMDisconnectIconButton, { connector: account.connector })) : account.chainType === sdk_1.ChainType.SVM ? ((0, jsx_runtime_1.jsx)(SVMDisconnectIconButton, {})) : null] })] }, account.address));
                }) }), (0, jsx_runtime_1.jsx)(material_1.Button, { onClick: connect, fullWidth: true, startIcon: (0, jsx_runtime_1.jsx)(PowerSettingsNewRounded_1.default, {}), sx: {
                    marginTop: 1,
                }, children: t(`button.connectWallet`) })] }));
};
exports.WalletMenu = WalletMenu;
const EVMDisconnectIconButton = ({ connector }) => {
    const { disconnect } = (0, wagmi_1.useDisconnect)();
    return ((0, jsx_runtime_1.jsx)(material_1.IconButton, { size: "medium", onClick: (e) => {
            e.stopPropagation();
            disconnect({ connector });
        }, children: (0, jsx_runtime_1.jsx)(PowerSettingsNewRounded_1.default, {}) }));
};
const SVMDisconnectIconButton = () => {
    const { disconnect } = (0, wallet_adapter_react_1.useWallet)();
    return ((0, jsx_runtime_1.jsx)(material_1.IconButton, { size: "medium", onClick: (e) => {
            e.stopPropagation();
            disconnect();
        }, children: (0, jsx_runtime_1.jsx)(PowerSettingsNewRounded_1.default, {}) }));
};
