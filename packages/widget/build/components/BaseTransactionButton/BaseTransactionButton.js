import { jsx as _jsx } from "react/jsx-runtime";
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAccount } from '../../hooks';
import { useWidgetConfig } from '../../providers';
import { navigationRoutes } from '../../utils';
export const BaseTransactionButton = ({ onClick, text, disabled, loading, }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { walletManagement } = useWidgetConfig();
    const { account } = useAccount();
    const handleClick = async () => {
        if (account.isConnected) {
            onClick?.();
        }
        else if (walletManagement) {
            await walletManagement.connect();
        }
        else {
            navigate(navigationRoutes.selectWallet);
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
    return (_jsx(LoadingButton, { variant: "contained", color: "primary", onClick: handleClick, disabled: disabled, loading: loading, loadingPosition: "center", fullWidth: true, children: getButtonText() }));
};
