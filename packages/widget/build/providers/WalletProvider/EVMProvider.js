import { jsx as _jsx } from "react/jsx-runtime";
import { alpha, binance, bitget, bitpie, block, brave, coinbase, dcent, exodus, frame, frontier, gate, hyperpay, imtoken, liquality, okx, oneinch, ownbit, rabby, safepal, status, taho, tokenary, tokenpocket, trust, walletConnect, xdefi, } from '@lifi/wallet-management';
import { useContext, useMemo } from 'react';
import { createClient } from 'viem';
import { WagmiContext, WagmiProvider, createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { useAvailableChains } from '../../hooks';
import { formatChain } from './utils';
const connectors = [
    walletConnect,
    coinbase,
    bitget,
    gate,
    exodus,
    taho,
    binance,
    frontier,
    okx,
    trust,
    status,
    alpha,
    block,
    bitpie,
    brave,
    dcent,
    frame,
    hyperpay,
    imtoken,
    liquality,
    ownbit,
    tokenpocket,
    xdefi,
    oneinch,
    tokenary,
    safepal,
    rabby,
];
export const EVMProvider = ({ children }) => {
    const inWagmiContext = useInWagmiContext();
    return inWagmiContext ? (children) : (_jsx(EVMBaseProvider, { children: children }));
};
export const EVMBaseProvider = ({ children }) => {
    const { chains } = useAvailableChains();
    const wagmiConfig = useMemo(() => {
        const _chains = chains?.length
            ? chains.map(formatChain)
            : [mainnet];
        const wagmiConfig = createConfig({
            chains: _chains,
            connectors: connectors,
            client({ chain }) {
                return createClient({ chain, transport: http() });
            },
            // transports: _chains.reduce(
            //   (transports, chain) => {
            //     transports[chain.id] = http();
            //     return transports;
            //   },
            //   {} as Record<number, Transport>,
            // ),
        });
        return wagmiConfig;
    }, [chains]);
    return (_jsx(WagmiProvider, { config: wagmiConfig, reconnectOnMount: Boolean(chains?.length), children: children }));
};
function useInWagmiContext() {
    const context = useContext(WagmiContext);
    return Boolean(context);
}
