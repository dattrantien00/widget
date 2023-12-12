import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { EVMProvider } from './EVMProvider';
import { SDKProviders } from './SDKProviders';
import { SolanaProvider } from './SolanaProvider';
export const WalletProvider = ({ children }) => {
    return (_jsx(SolanaProvider, { children: _jsxs(EVMProvider, { children: [_jsx(SDKProviders, {}), children] }) }));
};
