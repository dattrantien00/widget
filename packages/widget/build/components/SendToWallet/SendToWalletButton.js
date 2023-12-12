import { jsx as _jsx } from "react/jsx-runtime";
import WalletIcon from '@mui/icons-material/Wallet';
import { Button, Tooltip } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useWidgetEvents } from '../../hooks';
import { FormKey, useWidgetConfig } from '../../providers';
import { useSendToWalletStore, useSettings } from '../../stores';
import { DisabledUI, HiddenUI, RequiredUI, WidgetEvent } from '../../types';
import { useDifferentChainType } from './useDifferentChainType';
export const SendToWalletButton = () => {
    const { t } = useTranslation();
    const { setValue } = useFormContext();
    const emitter = useWidgetEvents();
    const { disabledUI, hiddenUI, requiredUI } = useWidgetConfig();
    const { showSendToWallet, toggleSendToWallet } = useSendToWalletStore();
    const { showDestinationWallet } = useSettings(['showDestinationWallet']);
    const differentChainType = useDifferentChainType();
    if (!showDestinationWallet ||
        hiddenUI?.includes(HiddenUI.ToAddress) ||
        requiredUI?.includes(RequiredUI.ToAddress) ||
        differentChainType) {
        return null;
    }
    const handleClick = () => {
        if (showSendToWallet && !disabledUI?.includes(DisabledUI.ToAddress)) {
            setValue(FormKey.ToAddress, '', { shouldTouch: true });
        }
        toggleSendToWallet();
        emitter.emit(WidgetEvent.SendToWalletToggled, useSendToWalletStore.getState().showSendToWallet);
    };
    return (_jsx(Tooltip, { title: t('main.sendToWallet'), placement: "bottom-end", enterDelay: 400, arrow: true, children: _jsx(Button, { variant: showSendToWallet ? 'contained' : 'text', onClick: handleClick, sx: {
                minWidth: 48,
                marginLeft: 1,
            }, children: _jsx(WalletIcon, {}) }) }));
};
