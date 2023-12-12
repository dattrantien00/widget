"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EVMBaseProvider = exports.EVMProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const wallet_management_1 = require("@lifi/wallet-management");
const react_1 = require("react");
const viem_1 = require("viem");
const wagmi_1 = require("wagmi");
const chains_1 = require("wagmi/chains");
const hooks_1 = require("../../hooks");
const utils_1 = require("./utils");
const connectors = [
    wallet_management_1.walletConnect,
    wallet_management_1.coinbase,
    wallet_management_1.bitget,
    wallet_management_1.gate,
    wallet_management_1.exodus,
    wallet_management_1.taho,
    wallet_management_1.binance,
    wallet_management_1.frontier,
    wallet_management_1.okx,
    wallet_management_1.trust,
    wallet_management_1.status,
    wallet_management_1.alpha,
    wallet_management_1.block,
    wallet_management_1.bitpie,
    wallet_management_1.brave,
    wallet_management_1.dcent,
    wallet_management_1.frame,
    wallet_management_1.hyperpay,
    wallet_management_1.imtoken,
    wallet_management_1.liquality,
    wallet_management_1.ownbit,
    wallet_management_1.tokenpocket,
    wallet_management_1.xdefi,
    wallet_management_1.oneinch,
    wallet_management_1.tokenary,
    wallet_management_1.safepal,
    wallet_management_1.rabby,
];
const EVMProvider = ({ children }) => {
    const inWagmiContext = useInWagmiContext();
    return inWagmiContext ? (children) : ((0, jsx_runtime_1.jsx)(exports.EVMBaseProvider, { children: children }));
};
exports.EVMProvider = EVMProvider;
const EVMBaseProvider = ({ children }) => {
    const { chains } = (0, hooks_1.useAvailableChains)();
    const wagmiConfig = (0, react_1.useMemo)(() => {
        const _chains = chains?.length
            ? chains.map(utils_1.formatChain)
            : [chains_1.mainnet];
        const wagmiConfig = (0, wagmi_1.createConfig)({
            chains: _chains,
            connectors: connectors,
            client({ chain }) {
                return (0, viem_1.createClient)({ chain, transport: (0, wagmi_1.http)() });
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
    return ((0, jsx_runtime_1.jsx)(wagmi_1.WagmiProvider, { config: wagmiConfig, reconnectOnMount: Boolean(chains?.length), children: children }));
};
exports.EVMBaseProvider = EVMBaseProvider;
function useInWagmiContext() {
    const context = (0, react_1.useContext)(wagmi_1.WagmiContext);
    return Boolean(context);
}
