import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import { Button, Container, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, List, } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ActiveTransactionItem } from '../../components/ActiveTransactions';
import { Dialog } from '../../components/Dialog';
import { useAccount } from '../../hooks';
import { useExecutingRoutesIds, useHeaderStoreContext, useRouteExecutionStore, } from '../../stores';
import { ActiveTransactionsEmpty } from './ActiveTransactionsEmpty';
export const ActiveTransactionsPage = () => {
    const { t } = useTranslation();
    const { account } = useAccount();
    const executingRoutes = useExecutingRoutesIds(account.address);
    const deleteRoutes = useRouteExecutionStore((store) => store.deleteRoutes);
    const headerStoreContext = useHeaderStoreContext();
    const [open, setOpen] = useState(false);
    const toggleDialog = useCallback(() => {
        setOpen((open) => !open);
    }, []);
    useEffect(() => {
        if (executingRoutes.length) {
            return headerStoreContext.getState().setAction(_jsx(IconButton, { size: "medium", edge: "end", onClick: toggleDialog, children: _jsx(DeleteIcon, {}) }));
        }
    }, [executingRoutes.length, headerStoreContext, toggleDialog]);
    if (!executingRoutes.length) {
        return _jsx(ActiveTransactionsEmpty, {});
    }
    return (_jsxs(Container, { disableGutters: true, children: [_jsx(List, { sx: {
                    paddingLeft: 1.5,
                    paddingRight: 1.5,
                }, children: executingRoutes.map((routeId) => (_jsx(ActiveTransactionItem, { routeId: routeId }, routeId))) }), _jsxs(Dialog, { open: open, onClose: toggleDialog, children: [_jsx(DialogTitle, { children: t('warning.title.deleteActiveTransactions') }), _jsx(DialogContent, { children: _jsx(DialogContentText, { children: t('warning.message.deleteActiveTransactions') }) }), _jsxs(DialogActions, { children: [_jsx(Button, { onClick: toggleDialog, children: t('button.cancel') }), _jsx(Button, { variant: "contained", onClick: () => deleteRoutes('active'), autoFocus: true, children: t('button.delete') })] })] })] }));
};
