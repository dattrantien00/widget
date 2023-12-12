"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGasRefuel = void 0;
const react_1 = require("react");
const react_hook_form_1 = require("react-hook-form");
const _1 = require(".");
const providers_1 = require("../providers");
const useGasRecommendation_1 = require("./useGasRecommendation");
const useTokenBalance_1 = require("./useTokenBalance");
const useGasRefuel = () => {
    const { getChainById } = (0, _1.useAvailableChains)();
    const [fromChainId, fromTokenAddress, toChainId, toAddress] = (0, react_hook_form_1.useWatch)({
        name: [
            providers_1.FormKey.FromChain,
            providers_1.FormKey.FromToken,
            providers_1.FormKey.ToChain,
            providers_1.FormKey.ToAddress,
        ],
    });
    const toChain = getChainById(toChainId);
    const { token: nativeToken } = (0, useTokenBalance_1.useTokenBalance)(toChainId && toChain?.nativeToken, toAddress);
    const { data: gasRecommendation, isLoading } = (0, useGasRecommendation_1.useGasRecommendation)(toChainId, fromChainId, fromTokenAddress);
    const enabled = (0, react_1.useMemo)(() => {
        if (
        // We don't allow same chain refuel.
        // If a user runs out of gas, he can't send a source chain transaction.
        fromChainId === toChainId ||
            !gasRecommendation?.available ||
            !nativeToken) {
            return false;
        }
        const tokenBalance = nativeToken.amount ?? 0n;
        // check if the user balance < 50% of the recommended amount
        const recommendedAmount = BigInt(gasRecommendation.recommended.amount) / 2n;
        const insufficientGas = tokenBalance < recommendedAmount;
        return insufficientGas;
    }, [fromChainId, gasRecommendation, nativeToken, toChainId]);
    return {
        enabled: enabled,
        availble: gasRecommendation?.available,
        isLoading: isLoading,
        chain: toChain,
        fromAmount: gasRecommendation?.available
            ? gasRecommendation.fromAmount
            : undefined,
    };
};
exports.useGasRefuel = useGasRefuel;
