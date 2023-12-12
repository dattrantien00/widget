import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAccount } from '../../hooks';
import { useExecutingRoutesIds } from '../../stores';
import { navigationRoutes } from '../../utils';
import { Card, CardTitle } from '../Card';
import { ActiveTransactionItem } from './ActiveTransactionItem';
import { ShowAllButton } from './ActiveTransactions.style';
export const ActiveTransactions = (props) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { account } = useAccount();
    const executingRoutes = useExecutingRoutesIds(account.address);
    if (!executingRoutes?.length) {
        return null;
    }
    const handleShowAll = () => {
        navigate(navigationRoutes.activeTransactions);
    };
    const hasShowAll = executingRoutes?.length > 2;
    return (_jsxs(Card, { variant: "selected", selectionColor: "secondary", ...props, children: [_jsx(CardTitle, { children: t('header.activeTransactions') }), _jsx(Stack, { spacing: 1.5, pt: 1.5, pb: hasShowAll ? 0 : 2, children: executingRoutes.slice(0, 2).map((routeId) => (_jsx(ActiveTransactionItem, { routeId: routeId, dense: true }, routeId))) }), hasShowAll ? (_jsx(ShowAllButton, { disableRipple: true, fullWidth: true, onClick: handleShowAll, children: t('button.showAll') })) : null] }));
};
