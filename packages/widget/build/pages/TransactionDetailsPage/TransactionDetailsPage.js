import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ContentCopyIcon from '@mui/icons-material/ContentCopyRounded';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import { Box, Button, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Typography, } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { shallow } from 'zustand/shallow';
import { Card, CardTitle } from '../../components/Card';
import { ContractComponent } from '../../components/ContractComponent';
import { Dialog } from '../../components/Dialog';
import { Insurance } from '../../components/Insurance';
import { getStepList } from '../../components/Step';
import { useNavigateBack } from '../../hooks';
import { useWidgetConfig } from '../../providers';
import { useHeaderStoreContext, useRouteExecutionStore } from '../../stores';
import { formatTokenAmount } from '../../utils';
import { ContactSupportButton } from './ContactSupportButton';
import { Container } from './TransactionDetailsPage.style';
export const TransactionDetailsPage = () => {
    const { t, i18n } = useTranslation();
    const { navigateBack } = useNavigateBack();
    const { subvariant, contractComponent, contractSecondaryComponent } = useWidgetConfig();
    const { state } = useLocation();
    const [routeExecution, deleteRoute] = useRouteExecutionStore((store) => [store.routes[state?.routeId], store.deleteRoute], shallow);
    const headerStoreContext = useHeaderStoreContext();
    const [open, setOpen] = useState(false);
    const toggleDialog = useCallback(() => {
        setOpen((open) => !open);
    }, []);
    const handleDeleteRoute = () => {
        navigateBack();
        if (routeExecution) {
            deleteRoute(routeExecution.route.id);
        }
    };
    const sourceTxHash = routeExecution?.route.steps[0].execution?.process
        .filter((process) => process.type !== 'TOKEN_ALLOWANCE')
        .find((process) => process.txHash)?.txHash;
    const insuranceCoverageId = sourceTxHash ?? routeExecution?.route.fromAddress;
    let supportId = sourceTxHash ?? routeExecution?.route.id ?? '';
    if (process.env.NODE_ENV === 'development') {
        supportId += `_${routeExecution?.route.id}`;
    }
    const copySupportId = async () => {
        await navigator.clipboard.writeText(supportId);
    };
    useEffect(() => {
        return headerStoreContext.getState().setAction(_jsx(IconButton, { size: "medium", edge: "end", onClick: toggleDialog, children: _jsx(DeleteIcon, {}) }));
    }, [headerStoreContext, toggleDialog]);
    const startedAt = new Date(routeExecution?.route.steps[0].execution?.process[0].startedAt ?? 0);
    return (_jsxs(Container, { children: [_jsxs(Box, { sx: {
                    display: 'flex',
                    flex: 1,
                    justifyContent: 'space-between',
                }, pb: 1, children: [_jsx(Typography, { fontSize: 12, children: new Intl.DateTimeFormat(i18n.language, { dateStyle: 'long' }).format(startedAt) }), _jsx(Typography, { fontSize: 12, children: new Intl.DateTimeFormat(i18n.language, {
                            timeStyle: 'short',
                        }).format(startedAt) })] }), getStepList(routeExecution?.route, subvariant), subvariant === 'nft' ? (_jsx(ContractComponent, { mt: 2, children: contractSecondaryComponent || contractComponent })) : null, routeExecution?.route?.insurance?.state === 'INSURED' ? (_jsx(Insurance, { mt: 2, status: routeExecution.status, feeAmountUsd: routeExecution.route.insurance.feeAmountUsd, insuredAmount: formatTokenAmount(BigInt(routeExecution.route.toAmountMin), routeExecution.route.toToken.decimals), insuredTokenSymbol: routeExecution.route.toToken.symbol, insurableRouteId: routeExecution.route.id, insuranceCoverageId: insuranceCoverageId })) : null, _jsxs(Card, { mt: 2, children: [_jsxs(Box, { sx: {
                            display: 'flex',
                            flex: 1,
                        }, children: [_jsx(CardTitle, { flex: 1, children: t('main.supportId') }), _jsx(Box, { mr: 1, mt: 1, children: _jsx(IconButton, { size: "medium", onClick: copySupportId, children: _jsx(ContentCopyIcon, { fontSize: "small" }) }) })] }), _jsx(Typography, { variant: "body2", pt: 1, pb: 2, px: 2, sx: { wordBreak: 'break-all' }, children: supportId })] }), _jsx(Box, { mt: 2, children: _jsx(ContactSupportButton, { supportId: supportId }) }), _jsxs(Dialog, { open: open, onClose: toggleDialog, children: [_jsx(DialogTitle, { children: t('warning.title.deleteTransaction') }), _jsx(DialogContent, { children: _jsx(DialogContentText, { children: t('warning.message.deleteTransactionHistory') }) }), _jsxs(DialogActions, { children: [_jsx(Button, { onClick: toggleDialog, children: t('button.cancel') }), _jsx(Button, { variant: "contained", onClick: handleDeleteRoute, autoFocus: true, children: t('button.delete') })] })] })] }));
};
