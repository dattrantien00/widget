"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProcessMessage = exports.useProcessMessage = void 0;
const sdk_1 = require("@lifi/sdk");
const react_i18next_1 = require("react-i18next");
const providers_1 = require("../providers");
const utils_1 = require("../utils");
const useAvailableChains_1 = require("./useAvailableChains");
const useProcessMessage = (step, process) => {
    const { subvariant } = (0, providers_1.useWidgetConfig)();
    const { t } = (0, react_i18next_1.useTranslation)();
    const { getChainById } = (0, useAvailableChains_1.useAvailableChains)();
    if (!step || !process) {
        return {};
    }
    return getProcessMessage(t, getChainById, step, process, subvariant);
};
exports.useProcessMessage = useProcessMessage;
const processStatusMessages = {
    TOKEN_ALLOWANCE: {
        STARTED: (t) => t(`main.process.tokenAllowance.started`),
        ACTION_REQUIRED: (t) => t(`main.process.tokenAllowance.pending`),
        PENDING: (t) => t(`main.process.tokenAllowance.pending`),
        DONE: (t) => t(`main.process.tokenAllowance.done`),
    },
    SWITCH_CHAIN: {
        ACTION_REQUIRED: (t) => t(`main.process.switchChain.actionRequired`),
        DONE: (t) => t(`main.process.switchChain.done`),
    },
    SWAP: {
        STARTED: (t) => t(`main.process.swap.started`),
        ACTION_REQUIRED: (t) => t(`main.process.swap.actionRequired`),
        PENDING: (t) => t(`main.process.swap.pending`),
        DONE: (t, subvariant) => subvariant === 'nft'
            ? t(`main.process.nft.done`)
            : t(`main.process.swap.done`),
    },
    CROSS_CHAIN: {
        STARTED: (t) => t(`main.process.crossChain.started`),
        ACTION_REQUIRED: (t) => t(`main.process.crossChain.actionRequired`),
        PENDING: (t) => t(`main.process.crossChain.pending`),
        DONE: (t) => t(`main.process.crossChain.done`),
    },
    RECEIVING_CHAIN: {
        PENDING: (t) => t(`main.process.receivingChain.pending`),
        DONE: (t, subvariant) => subvariant === 'nft'
            ? t(`main.process.nft.done`)
            : t(`main.process.receivingChain.done`),
    },
    TRANSACTION: {},
};
const processSubstatusMessages = {
    PENDING: {
    // BRIDGE_NOT_AVAILABLE: 'Bridge communication is temporarily unavailable.',
    // CHAIN_NOT_AVAILABLE: 'RPC communication is temporarily unavailable.',
    // REFUND_IN_PROGRESS:
    //   "The refund has been requested and it's being processed",
    // WAIT_DESTINATION_TRANSACTION:
    //   'The bridge off-chain logic is being executed. Wait for the transaction to appear on the destination chain.',
    // WAIT_SOURCE_CONFIRMATIONS:
    //   'The bridge deposit has been received. The bridge is waiting for more confirmations to start the off-chain logic.',
    },
    DONE: {
        // COMPLETED: 'The transfer is complete.',
        PARTIAL: (t) => t(`main.process.receivingChain.partial`),
        REFUNDED: (t) => t(`main.process.receivingChain.partial`),
    },
    FAILED: {
    // TODO: should be moved to failed status
    // NOT_PROCESSABLE_REFUND_NEEDED:
    //   'The transfer cannot be completed successfully. A refund operation is required.',
    // UNKNOWN_ERROR:
    //   'An unexpected error occurred. Please seek assistance in the LI.FI discord server.',
    },
    INVALID: {},
    NOT_FOUND: {},
};
function getProcessMessage(t, getChainById, step, process, subvariant) {
    if (process.error && process.status === 'FAILED') {
        const getDefaultErrorMessage = (key) => `${t(key ?? 'error.message.transactionNotSent')} ${t('error.message.remainInYourWallet', {
            amount: (0, utils_1.formatTokenAmount)(BigInt(step.action.fromAmount), step.action.fromToken.decimals),
            tokenSymbol: step.action.fromToken.symbol,
            chainName: getChainById(step.action.fromChainId)?.name ?? '',
        })}`;
        let title = '';
        let message = '';
        switch (process.error.code) {
            case sdk_1.LiFiErrorCode.AllowanceRequired:
                title = t(`error.title.allowanceRequired`);
                message = t(`error.message.allowanceRequired`, {
                    tokenSymbol: step.action.fromToken.symbol,
                });
                break;
            case sdk_1.LiFiErrorCode.BalanceError:
                title = t(`error.title.balanceIsTooLow`);
                message = getDefaultErrorMessage();
                break;
            case sdk_1.LiFiErrorCode.ChainSwitchError:
                title = t(`error.title.chainSwitch`);
                message = getDefaultErrorMessage();
                break;
            case sdk_1.LiFiErrorCode.GasLimitError:
                title = t(`error.title.gasLimitIsTooLow`);
                message = getDefaultErrorMessage();
                break;
            case sdk_1.LiFiErrorCode.InsufficientFunds:
                title = t(`error.title.insufficientFunds`);
                message = `${t(`error.message.insufficientFunds`)} ${getDefaultErrorMessage()}`;
                break;
            case sdk_1.LiFiErrorCode.SlippageError:
                title = t(`error.title.slippageNotMet`);
                message = t(`error.message.slippageThreshold`);
                break;
            case sdk_1.LiFiErrorCode.TransactionFailed:
                title = t(`error.title.transactionFailed`);
                message = t(`error.message.transactionFailed`);
                break;
            case sdk_1.LiFiErrorCode.TransactionUnderpriced:
                title = t(`error.title.transactionUnderpriced`);
                message = getDefaultErrorMessage();
                break;
            case sdk_1.LiFiErrorCode.TransactionUnprepared:
                title = t(`error.title.transactionUnprepared`);
                message = getDefaultErrorMessage();
                break;
            case sdk_1.LiFiErrorCode.TransactionCanceled:
                title = t(`error.title.transactionCanceled`);
                message = getDefaultErrorMessage('error.message.transactionCanceled');
                break;
            case sdk_1.LiFiErrorCode.ExchangeRateUpdateCanceled:
                title = t(`error.title.exchangeRateUpdateCanceled`);
                message = getDefaultErrorMessage();
                break;
            case sdk_1.LiFiErrorCode.SignatureRejected:
                title = t(`error.title.signatureRejected`);
                message = t(`error.message.signatureRejected`, {
                    amount: (0, utils_1.formatTokenAmount)(BigInt(step.action.fromAmount), step.action.fromToken.decimals),
                    tokenSymbol: step.action.fromToken.symbol,
                    chainName: getChainById(step.action.fromChainId)?.name ?? '',
                });
                break;
            case sdk_1.LiFiErrorCode.ProviderUnavailable:
            default:
                title = t(`error.title.unknown`);
                if (process.txLink) {
                    message = t(`error.message.transactionFailed`);
                }
                else {
                    message = process.error.message || t(`error.message.unknown`);
                }
                break;
        }
        return { title, message };
    }
    const title = processSubstatusMessages[process.status]?.[process.substatus]?.(t) ??
        processStatusMessages[process.type]?.[process.status]?.(t, subvariant);
    return { title };
}
exports.getProcessMessage = getProcessMessage;
