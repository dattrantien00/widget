import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useMemo } from 'react';
import { AppDrawer } from './AppDrawer';
import { AppProvider } from './AppProvider';
import { AppRoutes } from './AppRoutes';
import { AppContainer, AppExpandedContainer, FlexContainer, } from './components/AppContainer';
import { Header } from './components/Header';
import { Initializer } from './components/Initializer';
import { PoweredBy } from './components/PoweredBy';
import { RoutesExpanded } from './components/Routes';
import { useExpandableVariant } from './hooks';
import { useWidgetConfig } from './providers';
import { ElementId, createElementId } from './utils';
export const App = forwardRef(({ elementRef, open, integrator, ...other }, ref) => {
    const config = useMemo(() => ({ integrator, ...other, ...other.config }), [integrator, other]);
    return config?.variant !== 'drawer' ? (_jsx(AppProvider, { config: config, children: _jsx(AppDefault, {}) })) : (_jsx(AppDrawer, { ref: ref, elementRef: elementRef, integrator: integrator, config: config, open: open }));
});
export const AppDefault = () => {
    const { elementId } = useWidgetConfig();
    const expandable = useExpandableVariant();
    return (_jsxs(AppExpandedContainer, { id: createElementId(ElementId.AppExpandedContainer, elementId), children: [_jsxs(AppContainer, { children: [_jsx(Header, {}), _jsx(FlexContainer, { disableGutters: true, children: _jsx(AppRoutes, {}) }), _jsx(PoweredBy, {}), _jsx(Initializer, {})] }), expandable ? _jsx(RoutesExpanded, {}) : null] }));
};
