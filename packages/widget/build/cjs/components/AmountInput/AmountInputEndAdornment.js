"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmountInputEndAdornment = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_hook_form_1 = require("react-hook-form");
const react_i18next_1 = require("react-i18next");
const viem_1 = require("viem");
const hooks_1 = require("../../hooks");
const providers_1 = require("../../providers");
const AmountInputAdornment_style_1 = require("./AmountInputAdornment.style");
const AmountInputEndAdornment = ({ formType }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { setValue } = (0, react_hook_form_1.useFormContext)();
    const { getChainById } = (0, hooks_1.useAvailableChains)();
    const [chainId, tokenAddress] = (0, react_hook_form_1.useWatch)({
        name: [
            providers_1.FormKeyHelper.getChainKey(formType),
            providers_1.FormKeyHelper.getTokenKey(formType),
        ],
    });
    // We get gas recommendations for the source chain to make sure that after pressing the Max button
    // the user will have enough funds remaining to cover gas costs
    const { data } = (0, hooks_1.useGasRecommendation)(chainId);
    const { token, isLoading } = (0, hooks_1.useTokenAddressBalance)(chainId, tokenAddress);
    const handleMax = () => {
        const chain = getChainById(chainId);
        let maxAmount = token?.amount;
        if (chain?.nativeToken.address === tokenAddress &&
            data?.available &&
            data?.recommended) {
            const tokenAmount = token?.amount ?? 0n;
            const recommendedAmount = BigInt(data.recommended.amount) / 2n;
            if (tokenAmount > recommendedAmount) {
                maxAmount = tokenAmount - recommendedAmount;
            }
        }
        setValue(providers_1.FormKeyHelper.getAmountKey(formType), maxAmount && token ? (0, viem_1.formatUnits)(maxAmount, token.decimals) : '', {
            shouldTouch: true,
        });
    };
    return ((0, jsx_runtime_1.jsx)(material_1.InputAdornment, { position: "end", children: isLoading && tokenAddress ? ((0, jsx_runtime_1.jsx)(material_1.Skeleton, { variant: "rectangular", width: 46, height: 24, sx: { borderRadius: 0.5 } })) : formType === 'from' && token?.amount ? ((0, jsx_runtime_1.jsx)(AmountInputAdornment_style_1.Button, { onClick: handleMax, children: t('button.max') })) : null }));
};
exports.AmountInputEndAdornment = AmountInputEndAdornment;
