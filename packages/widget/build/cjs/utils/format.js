"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatTokenPrice = exports.formatInputAmount = exports.formatSlippage = exports.formatTokenAmount = void 0;
const viem_1 = require("viem");
/**
 * Format token amount to at least 4 decimals.
 * @param amount amount to format.
 * @returns formatted amount.
 */
const formatTokenAmount = (amount = 0n, decimals, decimalPlaces = 3) => {
    const formattedAmount = amount ? (0, viem_1.formatUnits)(amount, decimals) : '0';
    const parsedAmount = parseFloat(formattedAmount);
    if (parsedAmount === 0 || isNaN(Number(formattedAmount))) {
        return '0';
    }
    const absAmount = Math.abs(parsedAmount);
    while (absAmount < 1 / 10 ** decimalPlaces) {
        decimalPlaces++;
    }
    return parsedAmount.toFixed(decimalPlaces + 1);
};
exports.formatTokenAmount = formatTokenAmount;
const formatSlippage = (slippage = '', defaultValue = '', returnInitial = false) => {
    if (!slippage) {
        return slippage;
    }
    const parsedSlippage = parseFloat(slippage);
    if (isNaN(Number(slippage)) && !isNaN(parsedSlippage)) {
        return parsedSlippage.toString();
    }
    if (isNaN(parsedSlippage)) {
        return defaultValue;
    }
    if (parsedSlippage > 100) {
        return '100';
    }
    if (parsedSlippage < 0) {
        return Math.abs(parsedSlippage).toString();
    }
    if (returnInitial) {
        return slippage;
    }
    return parsedSlippage.toString();
};
exports.formatSlippage = formatSlippage;
const formatInputAmount = (amount, decimals = null, returnInitial = false) => {
    if (!amount) {
        return amount;
    }
    let formattedAmount = amount.replaceAll(',', '.');
    if (formattedAmount.startsWith('.')) {
        formattedAmount = '0' + formattedAmount;
    }
    const parsedAmount = parseFloat(formattedAmount);
    if (isNaN(Number(formattedAmount)) && !isNaN(parsedAmount)) {
        return parsedAmount.toString();
    }
    if (isNaN(Math.abs(Number(formattedAmount)))) {
        return '';
    }
    if (returnInitial) {
        return formattedAmount;
    }
    let [integer, fraction = ''] = formattedAmount.split('.');
    if (decimals !== null && fraction.length > decimals) {
        fraction = fraction.slice(0, decimals);
    }
    integer = integer.replace(/^0+|-/, '');
    fraction = fraction.replace(/(0+)$/, '');
    return `${integer || (fraction ? '0' : '')}${fraction ? `.${fraction}` : ''}`;
};
exports.formatInputAmount = formatInputAmount;
const formatTokenPrice = (amount, price) => {
    if (!amount || !price) {
        return 0;
    }
    if (isNaN(Number(amount)) || isNaN(Number(price))) {
        return 0;
    }
    return parseFloat(amount) * parseFloat(price);
};
exports.formatTokenPrice = formatTokenPrice;
