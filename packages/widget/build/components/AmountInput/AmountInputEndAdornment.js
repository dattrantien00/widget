import { jsx as _jsx } from "react/jsx-runtime";
import { InputAdornment, Skeleton } from '@mui/material';
import { useFormContext, useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { formatUnits } from 'viem';
import { useAvailableChains, useGasRecommendation, useTokenAddressBalance, } from '../../hooks';
import { FormKeyHelper } from '../../providers';
import { Button } from './AmountInputAdornment.style';
export const AmountInputEndAdornment = ({ formType }) => {
    const { t } = useTranslation();
    const { setValue } = useFormContext();
    const { getChainById } = useAvailableChains();
    const [chainId, tokenAddress] = useWatch({
        name: [
            FormKeyHelper.getChainKey(formType),
            FormKeyHelper.getTokenKey(formType),
        ],
    });
    // We get gas recommendations for the source chain to make sure that after pressing the Max button
    // the user will have enough funds remaining to cover gas costs
    const { data } = useGasRecommendation(chainId);
    const { token, isLoading } = useTokenAddressBalance(chainId, tokenAddress);
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
        setValue(FormKeyHelper.getAmountKey(formType), maxAmount && token ? formatUnits(maxAmount, token.decimals) : '', {
            shouldTouch: true,
        });
    };
    return (_jsx(InputAdornment, { position: "end", children: isLoading && tokenAddress ? (_jsx(Skeleton, { variant: "rectangular", width: 46, height: 24, sx: { borderRadius: 0.5 } })) : formType === 'from' && token?.amount ? (_jsx(Button, { onClick: handleMax, children: t('button.max') })) : null }));
};
