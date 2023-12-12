"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseTransactionButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const lab_1 = require("@mui/lab");
const react_i18next_1 = require("react-i18next");
const react_router_dom_1 = require("react-router-dom");
const hooks_1 = require("../../hooks");
const providers_1 = require("../../providers");
const utils_1 = require("../../utils");
const BaseTransactionButton = ({ onClick, text, disabled, loading, }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { walletManagement } = (0, providers_1.useWidgetConfig)();
    const { account } = (0, hooks_1.useAccount)();
    const handleClick = async () => {
        if (account.isConnected) {
            onClick?.();
        }
        else if (walletManagement) {
            await walletManagement.connect();
        }
        else {
            navigate(utils_1.navigationRoutes.selectWallet);
        }
    };
    const getButtonText = () => {
        if (account.isConnected) {
            if (text) {
                return text;
            }
        }
        return t(`button.connectWallet`);
    };
    return ((0, jsx_runtime_1.jsx)(lab_1.LoadingButton, { variant: "contained", color: "primary", onClick: handleClick, disabled: disabled, loading: loading, loadingPosition: "center", fullWidth: true, children: getButtonText() }));
};
exports.BaseTransactionButton = BaseTransactionButton;
