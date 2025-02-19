import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FormKey } from '../../providers';
import { useSplitSubvariantStore } from '../../stores';
import { HeaderAppBar } from './Header.style';
import { NavbarTab, NavbarTabs } from './NavigationTabs.style';
export const NavigationTabs = () => {
    const { t } = useTranslation();
    const [state, setState] = useSplitSubvariantStore((state) => [
        state.state,
        state.setState,
    ]);
    const { setValue } = useFormContext();
    const handleChange = (_, value) => {
        setValue(FormKey.FromAmount, '');
        setValue(FormKey.FromToken, '');
        setValue(FormKey.ToToken, '');
        setState(value === 0 ? 'swap' : 'bridge');
    };
    return (_jsx(HeaderAppBar, { elevation: 0, sx: { py: 1 }, children: _jsxs(NavbarTabs, { value: state === 'swap' ? 0 : 1, onChange: handleChange, "aria-label": "tabs", indicatorColor: "primary", children: [_jsx(NavbarTab, { label: t('header.swap'), disableRipple: true }), _jsx(NavbarTab, { label: t('header.bridge'), disableRipple: true })] }) }));
};
