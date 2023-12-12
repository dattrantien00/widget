"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolanaBaseProvider = exports.SolanaProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const wallet_adapter_base_1 = require("@solana/wallet-adapter-base");
const wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
const web3_js_1 = require("@solana/web3.js");
const react_1 = require("react");
const endpoint = (0, web3_js_1.clusterApiUrl)(wallet_adapter_base_1.WalletAdapterNetwork.Mainnet);
/**
 * Wallets that implement either of these standards will be available automatically.
 *
 *   - Solana Mobile Stack Mobile Wallet Adapter Protocol
 *     (https://github.com/solana-mobile/mobile-wallet-adapter)
 *   - Solana Wallet Standard
 *     (https://github.com/solana-labs/wallet-standard)
 *
 * If you wish to support a wallet that supports neither of those standards,
 * instantiate its legacy wallet adapter here. Common legacy adapters can be found
 * in the npm package `@solana/wallet-adapter-wallets`.
 */
const wallets = [];
const SolanaProvider = ({ children }) => {
    const inSolanaContext = useInSolanaContext();
    return inSolanaContext ? (children) : ((0, jsx_runtime_1.jsx)(exports.SolanaBaseProvider, { children: children }));
};
exports.SolanaProvider = SolanaProvider;
const SolanaBaseProvider = ({ children }) => {
    return ((0, jsx_runtime_1.jsx)(wallet_adapter_react_1.ConnectionProvider, { endpoint: endpoint, children: (0, jsx_runtime_1.jsx)(wallet_adapter_react_1.WalletProvider, { wallets: wallets, autoConnect: true, children: children }) }));
};
exports.SolanaBaseProvider = SolanaBaseProvider;
function useInSolanaContext() {
    const context = (0, react_1.useContext)(wallet_adapter_react_1.ConnectionContext);
    return Boolean(context?.connection);
}
