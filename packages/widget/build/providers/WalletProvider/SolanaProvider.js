import { jsx as _jsx } from "react/jsx-runtime";
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionContext, ConnectionProvider, WalletProvider, } from '@solana/wallet-adapter-react';
import { clusterApiUrl } from '@solana/web3.js';
import { useContext } from 'react';
const endpoint = clusterApiUrl(WalletAdapterNetwork.Mainnet);
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
export const SolanaProvider = ({ children }) => {
    const inSolanaContext = useInSolanaContext();
    return inSolanaContext ? (children) : (_jsx(SolanaBaseProvider, { children: children }));
};
export const SolanaBaseProvider = ({ children }) => {
    return (_jsx(ConnectionProvider, { endpoint: endpoint, children: _jsx(WalletProvider, { wallets: wallets, autoConnect: true, children: children }) }));
};
function useInSolanaContext() {
    const context = useContext(ConnectionContext);
    return Boolean(context?.connection);
}
