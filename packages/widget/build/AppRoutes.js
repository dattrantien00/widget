import { jsx as _jsx } from "react/jsx-runtime";
import { useRoutes } from 'react-router-dom';
import { NotFound } from './components/NotFound';
import { ActiveTransactionsPage } from './pages/ActiveTransactionsPage';
import { MainPage } from './pages/MainPage';
import { RoutesPage } from './pages/RoutesPage';
import { SelectChainPage } from './pages/SelectChainPage';
import { SelectEnabledToolsPage } from './pages/SelectEnabledToolsPage';
import { SelectTokenPage } from './pages/SelectTokenPage';
import { SelectWalletPage } from './pages/SelectWalletPage';
import { SettingsPage } from './pages/SettingsPage';
import { TransactionDetailsPage } from './pages/TransactionDetailsPage';
import { TransactionHistoryPage } from './pages/TransactionHistoryPage';
import { TransactionPage } from './pages/TransactionPage';
import { navigationRoutes } from './utils';
export const AppRoutes = () => {
    const element = useRoutes([
        {
            path: '/',
            element: _jsx(MainPage, {}),
        },
        {
            path: navigationRoutes.settings,
            element: _jsx(SettingsPage, {}),
        },
        {
            path: `${navigationRoutes.settings}/${navigationRoutes.bridges}`,
            element: _jsx(SelectEnabledToolsPage, { type: "Bridges" }),
        },
        {
            path: `${navigationRoutes.settings}/${navigationRoutes.exchanges}`,
            element: _jsx(SelectEnabledToolsPage, { type: "Exchanges" }),
        },
        {
            path: navigationRoutes.fromToken,
            element: _jsx(SelectTokenPage, { formType: "from" }),
        },
        {
            path: navigationRoutes.toToken,
            element: _jsx(SelectTokenPage, { formType: "to" }),
        },
        {
            path: navigationRoutes.toTokenNative,
            element: _jsx(SelectChainPage, { formType: "to", selectNativeToken: true }),
        },
        {
            path: `${navigationRoutes.fromToken}?/${navigationRoutes.fromChain}`,
            element: _jsx(SelectChainPage, { formType: "from" }),
        },
        {
            path: `${navigationRoutes.toToken}?/${navigationRoutes.toChain}`,
            element: _jsx(SelectChainPage, { formType: "to" }),
        },
        {
            path: navigationRoutes.routes,
            element: _jsx(RoutesPage, {}),
        },
        {
            path: navigationRoutes.activeTransactions,
            element: _jsx(ActiveTransactionsPage, {}),
        },
        {
            path: navigationRoutes.transactionHistory,
            element: _jsx(TransactionHistoryPage, {}),
        },
        {
            path: `${navigationRoutes.transactionHistory}?/${navigationRoutes.routes}?/${navigationRoutes.transactionExecution}?/${navigationRoutes.transactionDetails}`,
            element: _jsx(TransactionDetailsPage, {}),
        },
        {
            path: `${navigationRoutes.routes}?/${navigationRoutes.transactionExecution}?/${navigationRoutes.selectWallet}`,
            element: _jsx(SelectWalletPage, {}),
        },
        {
            path: `${navigationRoutes.routes}?/${navigationRoutes.activeTransactions}?/${navigationRoutes.transactionExecution}`,
            element: _jsx(TransactionPage, {}),
        },
        {
            path: '*',
            element: _jsx(NotFound, {}),
        },
    ]);
    return element;
};
