import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, Tooltip } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { ContractComponent } from '../../components/ContractComponent';
import { GasMessage } from '../../components/GasMessage';
import { Insurance } from '../../components/Insurance';
import { getStepList } from '../../components/Step';
import { useNavigateBack, useRouteExecution, useWidgetEvents, } from '../../hooks';
import { FormKey, useWidgetConfig } from '../../providers';
import { RouteExecutionStatus, useHeaderStoreContext } from '../../stores';
import { WidgetEvent } from '../../types/events';
import { formatTokenAmount } from '../../utils';
import { ExchangeRateBottomSheet } from './ExchangeRateBottomSheet';
import { StartInsurableTransactionButton, StartTransactionButton, } from './StartTransactionButton';
import { StatusBottomSheet } from './StatusBottomSheet';
import { TokenValueBottomSheet, getTokenValueLossThreshold, } from './TokenValueBottomSheet';
import { Container } from './TransactionPage.style';
import { calcValueLoss } from './utils';
export const TransactionPage = () => {
    const { t } = useTranslation();
    const { setValue } = useFormContext();
    const emitter = useWidgetEvents();
    const { navigateBack } = useNavigateBack();
    const { subvariant, insurance, contractComponent, contractSecondaryComponent, } = useWidgetConfig();
    const { state } = useLocation();
    const headerStoreContext = useHeaderStoreContext();
    const stateRouteId = state?.routeId;
    const [routeId, setRouteId] = useState(stateRouteId);
    const tokenValueBottomSheetRef = useRef(null);
    const exchangeRateBottomSheetRef = useRef(null);
    const onAcceptExchangeRateUpdate = (resolver, data) => {
        exchangeRateBottomSheetRef.current?.open(resolver, data);
    };
    const { route, status, executeRoute, restartRoute, deleteRoute } = useRouteExecution({
        routeId: routeId,
        onAcceptExchangeRateUpdate,
    });
    useEffect(() => {
        if (route && subvariant !== 'nft') {
            const transactionType = route.fromChainId === route.toChainId ? 'Swap' : 'Bridge';
            return headerStoreContext
                .getState()
                .setTitle(status === RouteExecutionStatus.Idle
                ? t(`button.review${transactionType}`)
                : t(`header.${transactionType.toLowerCase()}`));
        }
    }, [headerStoreContext, route, status, subvariant, t]);
    useEffect(() => {
        if (status === RouteExecutionStatus.Idle) {
            emitter.emit(WidgetEvent.ReviewTransactionPageEntered, route);
        }
        // We want to emit event only when the page is mounted
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if (!route) {
        return null;
    }
    const tokenValueLossThresholdExceeded = getTokenValueLossThreshold(route);
    const handleExecuteRoute = () => {
        if (tokenValueBottomSheetRef.current?.isOpen()) {
            emitter.emit(WidgetEvent.RouteHighValueLoss, {
                fromAmountUsd: route.fromAmountUSD,
                gasCostUSD: route.gasCostUSD,
                toAmountUSD: route.toAmountUSD,
                valueLoss: calcValueLoss(route),
            });
        }
        tokenValueBottomSheetRef.current?.close();
        executeRoute();
        setValue(FormKey.FromAmount, '');
        if (subvariant === 'nft') {
            setValue(FormKey.FromToken, '');
            setValue(FormKey.ToToken, '');
        }
    };
    const handleStartClick = async () => {
        if (status === RouteExecutionStatus.Idle) {
            if (tokenValueLossThresholdExceeded && subvariant !== 'nft') {
                tokenValueBottomSheetRef.current?.open();
            }
            else {
                handleExecuteRoute();
            }
        }
        if (status === RouteExecutionStatus.Failed) {
            restartRoute();
        }
    };
    const handleRemoveRoute = () => {
        navigateBack();
        deleteRoute();
    };
    const getButtonText = () => {
        switch (status) {
            case RouteExecutionStatus.Idle:
                switch (subvariant) {
                    case 'nft':
                        return t('button.buyNow');
                    case 'refuel':
                        return t('button.startBridging');
                    default:
                        const transactionType = route.fromChainId === route.toChainId ? 'Swapping' : 'Bridging';
                        return t(`button.start${transactionType}`);
                }
            case RouteExecutionStatus.Failed:
                return t('button.tryAgain');
            default:
                return '';
        }
    };
    const insuredRoute = route.insurance?.state === 'INSURED';
    const insurableRoute = insurance &&
        subvariant !== 'refuel' &&
        status === RouteExecutionStatus.Idle &&
        route.insurance?.state === 'INSURABLE';
    const insuranceAvailable = insuredRoute || insurableRoute;
    const StartButton = insurableRoute
        ? StartInsurableTransactionButton
        : StartTransactionButton;
    const getInsuranceCoverageId = () => route.steps[0].execution?.process
        .filter((process) => process.type !== 'TOKEN_ALLOWANCE')
        .find((process) => process.txHash)?.txHash ?? route.fromAddress;
    return (_jsxs(Container, { children: [getStepList(route, subvariant), subvariant === 'nft' ? (_jsx(ContractComponent, { mt: 2, children: contractSecondaryComponent || contractComponent })) : null, insuranceAvailable ? (_jsx(Insurance, { mt: 2, status: status, insurableRouteId: stateRouteId, feeAmountUsd: route.insurance.feeAmountUsd, insuredAmount: formatTokenAmount(BigInt(route.toAmountMin), route.toToken.decimals), insuredTokenSymbol: route.toToken.symbol, insuranceCoverageId: getInsuranceCoverageId(), onChange: setRouteId })) : null, status === RouteExecutionStatus.Idle ||
                status === RouteExecutionStatus.Failed ? (_jsxs(_Fragment, { children: [_jsx(GasMessage, { mt: 2, route: route }), _jsxs(Box, { mt: 2, display: "flex", children: [_jsx(StartButton, { text: getButtonText(), onClick: handleStartClick, route: route, insurableRouteId: stateRouteId }), status === RouteExecutionStatus.Failed ? (_jsx(Tooltip, { title: t('button.removeTransaction'), placement: "bottom-end", enterDelay: 400, arrow: true, children: _jsx(Button, { onClick: handleRemoveRoute, sx: {
                                        minWidth: 48,
                                        marginLeft: 1,
                                    }, children: _jsx(DeleteIcon, {}) }) })) : null] })] })) : null, status ? _jsx(StatusBottomSheet, { status: status, route: route }) : null, tokenValueLossThresholdExceeded && subvariant !== 'nft' ? (_jsx(TokenValueBottomSheet, { route: route, ref: tokenValueBottomSheetRef, onContinue: handleExecuteRoute })) : null, _jsx(ExchangeRateBottomSheet, { ref: exchangeRateBottomSheetRef })] }));
};
