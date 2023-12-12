import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import { Box, Button, Typography } from '@mui/material';
import { forwardRef, useCallback, useImperativeHandle, useRef, useState, } from 'react';
import { useTranslation } from 'react-i18next';
import { BottomSheet } from '../../components/BottomSheet';
import { useSetContentHeight } from '../../hooks';
import { formatTokenAmount } from '../../utils';
import { CenterContainer, IconCircle } from './StatusBottomSheet.style';
export const ExchangeRateBottomSheet = forwardRef(({ onContinue, onCancel }, ref) => {
    const [data, setData] = useState();
    const bottomSheetRef = useRef(null);
    const resolverRef = useRef();
    const handleContinue = () => {
        ref.current?.close(true);
        onContinue?.();
    };
    const handleCancel = useCallback(() => {
        ref.current?.close(false);
        onCancel?.();
    }, [onCancel, ref]);
    const handleClose = useCallback(() => {
        ref.current?.close(false, false);
        onCancel?.();
    }, [onCancel, ref]);
    useImperativeHandle(ref, () => ({
        isOpen: () => bottomSheetRef.current?.isOpen(),
        open: (resolver, data) => {
            setData(data);
            resolverRef.current = resolver;
            bottomSheetRef.current?.open();
        },
        close: (value = false, bottomSheetClose = true) => {
            resolverRef.current?.(value);
            if (bottomSheetClose) {
                bottomSheetRef.current?.close();
            }
        },
    }), []);
    return (_jsx(BottomSheet, { ref: bottomSheetRef, onClose: handleClose, children: _jsx(ExchangeRateBottomSheetContent, { data: data, onContinue: handleContinue, onCancel: handleCancel }) }));
});
const ExchangeRateBottomSheetContent = ({ data, onCancel, onContinue }) => {
    const { t } = useTranslation();
    const ref = useRef();
    useSetContentHeight(ref);
    if (!data) {
        return;
    }
    const oldAmount = BigInt(data.oldToAmount || 1);
    const rateChange = ((Number((BigInt(data.newToAmount || 0) * 1000000n) / oldAmount) /
        1000000) *
        100 -
        100).toFixed(2);
    return (_jsxs(Box, { p: 3, ref: ref, children: [_jsxs(CenterContainer, { children: [_jsx(IconCircle, { status: "warning", mb: 1, children: _jsx(WarningRoundedIcon, { color: "warning" }) }), _jsx(Typography, { py: 1, fontSize: 18, fontWeight: 700, children: t('warning.title.rateChanged') })] }), _jsx(Typography, { py: 1, children: t('warning.message.rateChanged') }), _jsxs(Box, { display: "flex", justifyContent: "space-between", mt: 1, children: [_jsx(Typography, { children: t('main.quotedAmount') }), _jsxs(Typography, { fontWeight: 600, children: [t('format.number', {
                                value: formatTokenAmount(BigInt(data.oldToAmount), data.toToken.decimals, 5),
                            }), ' ', data?.toToken.symbol] })] }), _jsxs(Box, { display: "flex", justifyContent: "space-between", mt: 0.25, children: [_jsx(Typography, { children: t('main.currentAmount') }), _jsxs(Typography, { fontWeight: 600, children: [t('format.number', {
                                value: formatTokenAmount(BigInt(data?.newToAmount), data?.toToken.decimals, 5),
                            }), ' ', data?.toToken.symbol] })] }), _jsxs(Box, { display: "flex", justifyContent: "space-between", mt: 0.25, children: [_jsx(Typography, { children: t('main.rateChange') }), _jsxs(Typography, { fontWeight: 600, children: [rateChange, "%"] })] }), _jsxs(Box, { display: "flex", mt: 3, children: [_jsx(Button, { variant: "text", onClick: onCancel, fullWidth: true, children: t('button.cancel') }), _jsx(Box, { display: "flex", p: 1 }), _jsx(Button, { variant: "contained", onClick: onContinue, fullWidth: true, children: t('button.continue') })] })] }));
};
