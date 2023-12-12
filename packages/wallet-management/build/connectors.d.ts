import { coinbaseWallet } from 'wagmi/connectors';
export declare const metaMask: import("@wagmi/core").CreateConnectorFn<{
    on: <TEvent extends keyof import("viem").EIP1193EventMap>(event: TEvent, listener: import("viem").EIP1193EventMap[TEvent]) => void;
    removeListener: <TEvent_1 extends keyof import("viem").EIP1193EventMap>(event: TEvent_1, listener: import("viem").EIP1193EventMap[TEvent_1]) => void;
    request: import("viem").EIP1193RequestFn<[{
        Method: "web3_clientVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "web3_sha3";
        Parameters: [data: `0x${string}`];
        ReturnType: string;
    }, {
        Method: "net_listening";
        Parameters?: undefined;
        ReturnType: boolean;
    }, {
        Method: "net_peerCount";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "net_version";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_blockNumber";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_call";
        Parameters: [transaction: Partial<import("viem").RpcTransactionRequest>] | [transaction: Partial<import("viem").RpcTransactionRequest>, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_coinbase";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_feeHistory";
        Parameters: [blockCount: `0x${string}`, newestBlock: `0x${string}` | import("viem").BlockTag, rewardPercentiles: number[] | undefined];
        ReturnType: import("viem").RpcFeeHistory;
    }, {
        Method: "eth_gasPrice";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBalance";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockByHash";
        Parameters: [hash: `0x${string}`, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockTransactionCountByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockTransactionCountByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getCode";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getFilterChanges";
        Parameters: [filterId: `0x${string}`];
        ReturnType: `0x${string}`[] | import("viem").RpcLog[];
    }, {
        Method: "eth_getFilterLogs";
        Parameters: [filterId: `0x${string}`];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getLogs";
        Parameters: [{
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        } & ({
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            blockHash?: undefined;
        } | {
            fromBlock?: undefined;
            toBlock?: undefined;
            blockHash?: `0x${string}` | undefined;
        })];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getProof";
        Parameters: [address: `0x${string}`, storageKeys: `0x${string}`[], block: `0x${string}` | import("viem").BlockTag];
        ReturnType: import("viem").RpcProof;
    }, {
        Method: "eth_getStorageAt";
        Parameters: [address: `0x${string}`, index: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionCount";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionReceipt";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransactionReceipt | null;
    }, {
        Method: "eth_getUncleByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleCountByBlockHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getUncleCountByBlockNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_maxPriorityFeePerGas";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newBlockFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newFilter";
        Parameters: [filter: {
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        }];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newPendingTransactionFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_protocolVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_uninstallFilter";
        Parameters: [filterId: `0x${string}`];
        ReturnType: boolean;
    }, {
        Method: "eth_accounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_requestAccounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_sendTransaction";
        Parameters: [transaction: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sign";
        Parameters: [address: `0x${string}`, data: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTransaction";
        Parameters: [request: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTypedData_v4";
        Parameters: [address: `0x${string}`, message: string];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_syncing";
        Parameters?: undefined;
        ReturnType: false | import("viem").NetworkSync;
    }, {
        Method: "personal_sign";
        Parameters: [data: `0x${string}`, address: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "wallet_addEthereumChain";
        Parameters: [chain: import("viem").AddEthereumChainParameter];
        ReturnType: null;
    }, {
        Method: "wallet_getPermissions";
        Parameters?: undefined;
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_requestPermissions";
        Parameters: [permissions: {
            eth_accounts: Record<string, any>;
        }];
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_switchEthereumChain";
        Parameters: [chain: {
            chainId: string;
        }];
        ReturnType: null;
    }, {
        Method: "wallet_watchAsset";
        Parameters: import("viem").WatchAssetParams;
        ReturnType: boolean;
    }]>;
    isApexWallet?: true | undefined;
    isAvalanche?: true | undefined;
    isBackpack?: true | undefined;
    isBifrost?: true | undefined;
    isBitKeep?: true | undefined;
    isBitski?: true | undefined;
    isBlockWallet?: true | undefined;
    isBraveWallet?: true | undefined;
    isCoinbaseWallet?: true | undefined;
    isDawn?: true | undefined;
    isEnkrypt?: true | undefined;
    isExodus?: true | undefined;
    isFrame?: true | undefined;
    isFrontier?: true | undefined;
    isGamestop?: true | undefined;
    isHyperPay?: true | undefined;
    isImToken?: true | undefined;
    isKuCoinWallet?: true | undefined;
    isMathWallet?: true | undefined;
    isMetaMask?: true | undefined;
    isOkxWallet?: true | undefined;
    isOKExWallet?: true | undefined;
    isOneInchAndroidWallet?: true | undefined;
    isOneInchIOSWallet?: true | undefined;
    isOpera?: true | undefined;
    isPhantom?: true | undefined;
    isPortal?: true | undefined;
    isRabby?: true | undefined;
    isRainbow?: true | undefined;
    isStatus?: true | undefined;
    isTally?: true | undefined;
    isTokenPocket?: true | undefined;
    isTokenary?: true | undefined;
    isTrust?: true | undefined;
    isTrustWallet?: true | undefined;
    isXDEFI?: true | undefined;
    isZerion?: true | undefined;
    providers?: any[] | undefined;
    _events?: {
        connect?: (() => void) | undefined;
    } | undefined;
    _state?: {
        accounts?: string[] | undefined;
        initialized?: boolean | undefined;
        isConnected?: boolean | undefined;
        isPermanentlyDisconnected?: boolean | undefined;
        isUnlocked?: boolean | undefined;
    } | undefined;
} | undefined, {
    onConnect(connectInfo: import("viem").ProviderConnectInfo): void;
}, {
    [x: `${string}.disconnected`]: true;
    "injected.connected": true;
}>;
export declare const walletConnect: import("@wagmi/core").CreateConnectorFn<import("@walletconnect/ethereum-provider").default, {
    connect(parameters?: {
        chainId?: number | undefined;
        pairingTopic?: string | undefined;
    } | undefined): Promise<{
        accounts: readonly `0x${string}`[];
        chainId: number;
    }>;
    getNamespaceChainsIds(): number[];
    getNamespaceMethods(): ("wallet_addEthereumChain" | "wallet_switchEthereumChain")[];
    getRequestedChainsIds(): Promise<number[]>;
    isChainsStale(): Promise<boolean>;
    onConnect(connectInfo: import("viem").ProviderConnectInfo): void;
    onDisplayUri(uri: string): void;
    onSessionDelete(data: {
        topic: string;
    }): void;
    setRequestedChainsIds(chains: number[]): void;
    requestedChainsStorageKey: `${string}.requestedChains`;
}, {
    [x: `${string}.requestedChains`]: number[];
}>;
export declare const coinbase: ReturnType<typeof coinbaseWallet>;
export declare const safe: import("@wagmi/core").CreateConnectorFn<import("@safe-global/safe-apps-provider").SafeAppProvider | undefined, {}, {
    'safe.disconnected': true;
}>;
export declare const defaultWallet: import("@wagmi/core").CreateConnectorFn<{
    on: <TEvent extends keyof import("viem").EIP1193EventMap>(event: TEvent, listener: import("viem").EIP1193EventMap[TEvent]) => void;
    removeListener: <TEvent_1 extends keyof import("viem").EIP1193EventMap>(event: TEvent_1, listener: import("viem").EIP1193EventMap[TEvent_1]) => void;
    request: import("viem").EIP1193RequestFn<[{
        Method: "web3_clientVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "web3_sha3";
        Parameters: [data: `0x${string}`];
        ReturnType: string;
    }, {
        Method: "net_listening";
        Parameters?: undefined;
        ReturnType: boolean;
    }, {
        Method: "net_peerCount";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "net_version";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_blockNumber";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_call";
        Parameters: [transaction: Partial<import("viem").RpcTransactionRequest>] | [transaction: Partial<import("viem").RpcTransactionRequest>, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_coinbase";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_feeHistory";
        Parameters: [blockCount: `0x${string}`, newestBlock: `0x${string}` | import("viem").BlockTag, rewardPercentiles: number[] | undefined];
        ReturnType: import("viem").RpcFeeHistory;
    }, {
        Method: "eth_gasPrice";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBalance";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockByHash";
        Parameters: [hash: `0x${string}`, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockTransactionCountByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockTransactionCountByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getCode";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getFilterChanges";
        Parameters: [filterId: `0x${string}`];
        ReturnType: `0x${string}`[] | import("viem").RpcLog[];
    }, {
        Method: "eth_getFilterLogs";
        Parameters: [filterId: `0x${string}`];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getLogs";
        Parameters: [{
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        } & ({
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            blockHash?: undefined;
        } | {
            fromBlock?: undefined;
            toBlock?: undefined;
            blockHash?: `0x${string}` | undefined;
        })];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getProof";
        Parameters: [address: `0x${string}`, storageKeys: `0x${string}`[], block: `0x${string}` | import("viem").BlockTag];
        ReturnType: import("viem").RpcProof;
    }, {
        Method: "eth_getStorageAt";
        Parameters: [address: `0x${string}`, index: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionCount";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionReceipt";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransactionReceipt | null;
    }, {
        Method: "eth_getUncleByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleCountByBlockHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getUncleCountByBlockNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_maxPriorityFeePerGas";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newBlockFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newFilter";
        Parameters: [filter: {
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        }];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newPendingTransactionFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_protocolVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_uninstallFilter";
        Parameters: [filterId: `0x${string}`];
        ReturnType: boolean;
    }, {
        Method: "eth_accounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_requestAccounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_sendTransaction";
        Parameters: [transaction: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sign";
        Parameters: [address: `0x${string}`, data: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTransaction";
        Parameters: [request: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTypedData_v4";
        Parameters: [address: `0x${string}`, message: string];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_syncing";
        Parameters?: undefined;
        ReturnType: false | import("viem").NetworkSync;
    }, {
        Method: "personal_sign";
        Parameters: [data: `0x${string}`, address: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "wallet_addEthereumChain";
        Parameters: [chain: import("viem").AddEthereumChainParameter];
        ReturnType: null;
    }, {
        Method: "wallet_getPermissions";
        Parameters?: undefined;
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_requestPermissions";
        Parameters: [permissions: {
            eth_accounts: Record<string, any>;
        }];
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_switchEthereumChain";
        Parameters: [chain: {
            chainId: string;
        }];
        ReturnType: null;
    }, {
        Method: "wallet_watchAsset";
        Parameters: import("viem").WatchAssetParams;
        ReturnType: boolean;
    }]>;
    isApexWallet?: true | undefined;
    isAvalanche?: true | undefined;
    isBackpack?: true | undefined;
    isBifrost?: true | undefined;
    isBitKeep?: true | undefined;
    isBitski?: true | undefined;
    isBlockWallet?: true | undefined;
    isBraveWallet?: true | undefined;
    isCoinbaseWallet?: true | undefined;
    isDawn?: true | undefined;
    isEnkrypt?: true | undefined;
    isExodus?: true | undefined;
    isFrame?: true | undefined;
    isFrontier?: true | undefined;
    isGamestop?: true | undefined;
    isHyperPay?: true | undefined;
    isImToken?: true | undefined;
    isKuCoinWallet?: true | undefined;
    isMathWallet?: true | undefined;
    isMetaMask?: true | undefined;
    isOkxWallet?: true | undefined;
    isOKExWallet?: true | undefined;
    isOneInchAndroidWallet?: true | undefined;
    isOneInchIOSWallet?: true | undefined;
    isOpera?: true | undefined;
    isPhantom?: true | undefined;
    isPortal?: true | undefined;
    isRabby?: true | undefined;
    isRainbow?: true | undefined;
    isStatus?: true | undefined;
    isTally?: true | undefined;
    isTokenPocket?: true | undefined;
    isTokenary?: true | undefined;
    isTrust?: true | undefined;
    isTrustWallet?: true | undefined;
    isXDEFI?: true | undefined;
    isZerion?: true | undefined;
    providers?: any[] | undefined;
    _events?: {
        connect?: (() => void) | undefined;
    } | undefined;
    _state?: {
        accounts?: string[] | undefined;
        initialized?: boolean | undefined;
        isConnected?: boolean | undefined;
        isPermanentlyDisconnected?: boolean | undefined;
        isUnlocked?: boolean | undefined;
    } | undefined;
} | undefined, {
    onConnect(connectInfo: import("viem").ProviderConnectInfo): void;
}, {
    [x: `${string}.disconnected`]: true;
    "injected.connected": true;
}>;
export declare const bitget: import("@wagmi/core").CreateConnectorFn<{
    on: <TEvent extends keyof import("viem").EIP1193EventMap>(event: TEvent, listener: import("viem").EIP1193EventMap[TEvent]) => void;
    removeListener: <TEvent_1 extends keyof import("viem").EIP1193EventMap>(event: TEvent_1, listener: import("viem").EIP1193EventMap[TEvent_1]) => void;
    request: import("viem").EIP1193RequestFn<[{
        Method: "web3_clientVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "web3_sha3";
        Parameters: [data: `0x${string}`];
        ReturnType: string;
    }, {
        Method: "net_listening";
        Parameters?: undefined;
        ReturnType: boolean;
    }, {
        Method: "net_peerCount";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "net_version";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_blockNumber";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_call";
        Parameters: [transaction: Partial<import("viem").RpcTransactionRequest>] | [transaction: Partial<import("viem").RpcTransactionRequest>, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_coinbase";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_feeHistory";
        Parameters: [blockCount: `0x${string}`, newestBlock: `0x${string}` | import("viem").BlockTag, rewardPercentiles: number[] | undefined];
        ReturnType: import("viem").RpcFeeHistory;
    }, {
        Method: "eth_gasPrice";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBalance";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockByHash";
        Parameters: [hash: `0x${string}`, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockTransactionCountByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockTransactionCountByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getCode";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getFilterChanges";
        Parameters: [filterId: `0x${string}`];
        ReturnType: `0x${string}`[] | import("viem").RpcLog[];
    }, {
        Method: "eth_getFilterLogs";
        Parameters: [filterId: `0x${string}`];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getLogs";
        Parameters: [{
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        } & ({
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            blockHash?: undefined;
        } | {
            fromBlock?: undefined;
            toBlock?: undefined;
            blockHash?: `0x${string}` | undefined;
        })];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getProof";
        Parameters: [address: `0x${string}`, storageKeys: `0x${string}`[], block: `0x${string}` | import("viem").BlockTag];
        ReturnType: import("viem").RpcProof;
    }, {
        Method: "eth_getStorageAt";
        Parameters: [address: `0x${string}`, index: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionCount";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionReceipt";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransactionReceipt | null;
    }, {
        Method: "eth_getUncleByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleCountByBlockHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getUncleCountByBlockNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_maxPriorityFeePerGas";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newBlockFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newFilter";
        Parameters: [filter: {
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        }];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newPendingTransactionFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_protocolVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_uninstallFilter";
        Parameters: [filterId: `0x${string}`];
        ReturnType: boolean;
    }, {
        Method: "eth_accounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_requestAccounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_sendTransaction";
        Parameters: [transaction: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sign";
        Parameters: [address: `0x${string}`, data: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTransaction";
        Parameters: [request: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTypedData_v4";
        Parameters: [address: `0x${string}`, message: string];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_syncing";
        Parameters?: undefined;
        ReturnType: false | import("viem").NetworkSync;
    }, {
        Method: "personal_sign";
        Parameters: [data: `0x${string}`, address: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "wallet_addEthereumChain";
        Parameters: [chain: import("viem").AddEthereumChainParameter];
        ReturnType: null;
    }, {
        Method: "wallet_getPermissions";
        Parameters?: undefined;
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_requestPermissions";
        Parameters: [permissions: {
            eth_accounts: Record<string, any>;
        }];
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_switchEthereumChain";
        Parameters: [chain: {
            chainId: string;
        }];
        ReturnType: null;
    }, {
        Method: "wallet_watchAsset";
        Parameters: import("viem").WatchAssetParams;
        ReturnType: boolean;
    }]>;
    isApexWallet?: true | undefined;
    isAvalanche?: true | undefined;
    isBackpack?: true | undefined;
    isBifrost?: true | undefined;
    isBitKeep?: true | undefined;
    isBitski?: true | undefined;
    isBlockWallet?: true | undefined;
    isBraveWallet?: true | undefined;
    isCoinbaseWallet?: true | undefined;
    isDawn?: true | undefined;
    isEnkrypt?: true | undefined;
    isExodus?: true | undefined;
    isFrame?: true | undefined;
    isFrontier?: true | undefined;
    isGamestop?: true | undefined;
    isHyperPay?: true | undefined;
    isImToken?: true | undefined;
    isKuCoinWallet?: true | undefined;
    isMathWallet?: true | undefined;
    isMetaMask?: true | undefined;
    isOkxWallet?: true | undefined;
    isOKExWallet?: true | undefined;
    isOneInchAndroidWallet?: true | undefined;
    isOneInchIOSWallet?: true | undefined;
    isOpera?: true | undefined;
    isPhantom?: true | undefined;
    isPortal?: true | undefined;
    isRabby?: true | undefined;
    isRainbow?: true | undefined;
    isStatus?: true | undefined;
    isTally?: true | undefined;
    isTokenPocket?: true | undefined;
    isTokenary?: true | undefined;
    isTrust?: true | undefined;
    isTrustWallet?: true | undefined;
    isXDEFI?: true | undefined;
    isZerion?: true | undefined;
    providers?: any[] | undefined;
    _events?: {
        connect?: (() => void) | undefined;
    } | undefined;
    _state?: {
        accounts?: string[] | undefined;
        initialized?: boolean | undefined;
        isConnected?: boolean | undefined;
        isPermanentlyDisconnected?: boolean | undefined;
        isUnlocked?: boolean | undefined;
    } | undefined;
} | undefined, {
    onConnect(connectInfo: import("viem").ProviderConnectInfo): void;
}, {
    [x: `${string}.disconnected`]: true;
    "injected.connected": true;
}>;
export declare const gate: import("@wagmi/core").CreateConnectorFn<{
    on: <TEvent extends keyof import("viem").EIP1193EventMap>(event: TEvent, listener: import("viem").EIP1193EventMap[TEvent]) => void;
    removeListener: <TEvent_1 extends keyof import("viem").EIP1193EventMap>(event: TEvent_1, listener: import("viem").EIP1193EventMap[TEvent_1]) => void;
    request: import("viem").EIP1193RequestFn<[{
        Method: "web3_clientVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "web3_sha3";
        Parameters: [data: `0x${string}`];
        ReturnType: string;
    }, {
        Method: "net_listening";
        Parameters?: undefined;
        ReturnType: boolean;
    }, {
        Method: "net_peerCount";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "net_version";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_blockNumber";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_call";
        Parameters: [transaction: Partial<import("viem").RpcTransactionRequest>] | [transaction: Partial<import("viem").RpcTransactionRequest>, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_coinbase";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_feeHistory";
        Parameters: [blockCount: `0x${string}`, newestBlock: `0x${string}` | import("viem").BlockTag, rewardPercentiles: number[] | undefined];
        ReturnType: import("viem").RpcFeeHistory;
    }, {
        Method: "eth_gasPrice";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBalance";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockByHash";
        Parameters: [hash: `0x${string}`, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockTransactionCountByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockTransactionCountByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getCode";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getFilterChanges";
        Parameters: [filterId: `0x${string}`];
        ReturnType: `0x${string}`[] | import("viem").RpcLog[];
    }, {
        Method: "eth_getFilterLogs";
        Parameters: [filterId: `0x${string}`];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getLogs";
        Parameters: [{
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        } & ({
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            blockHash?: undefined;
        } | {
            fromBlock?: undefined;
            toBlock?: undefined;
            blockHash?: `0x${string}` | undefined;
        })];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getProof";
        Parameters: [address: `0x${string}`, storageKeys: `0x${string}`[], block: `0x${string}` | import("viem").BlockTag];
        ReturnType: import("viem").RpcProof;
    }, {
        Method: "eth_getStorageAt";
        Parameters: [address: `0x${string}`, index: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionCount";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionReceipt";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransactionReceipt | null;
    }, {
        Method: "eth_getUncleByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleCountByBlockHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getUncleCountByBlockNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_maxPriorityFeePerGas";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newBlockFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newFilter";
        Parameters: [filter: {
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        }];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newPendingTransactionFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_protocolVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_uninstallFilter";
        Parameters: [filterId: `0x${string}`];
        ReturnType: boolean;
    }, {
        Method: "eth_accounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_requestAccounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_sendTransaction";
        Parameters: [transaction: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sign";
        Parameters: [address: `0x${string}`, data: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTransaction";
        Parameters: [request: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTypedData_v4";
        Parameters: [address: `0x${string}`, message: string];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_syncing";
        Parameters?: undefined;
        ReturnType: false | import("viem").NetworkSync;
    }, {
        Method: "personal_sign";
        Parameters: [data: `0x${string}`, address: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "wallet_addEthereumChain";
        Parameters: [chain: import("viem").AddEthereumChainParameter];
        ReturnType: null;
    }, {
        Method: "wallet_getPermissions";
        Parameters?: undefined;
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_requestPermissions";
        Parameters: [permissions: {
            eth_accounts: Record<string, any>;
        }];
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_switchEthereumChain";
        Parameters: [chain: {
            chainId: string;
        }];
        ReturnType: null;
    }, {
        Method: "wallet_watchAsset";
        Parameters: import("viem").WatchAssetParams;
        ReturnType: boolean;
    }]>;
    isApexWallet?: true | undefined;
    isAvalanche?: true | undefined;
    isBackpack?: true | undefined;
    isBifrost?: true | undefined;
    isBitKeep?: true | undefined;
    isBitski?: true | undefined;
    isBlockWallet?: true | undefined;
    isBraveWallet?: true | undefined;
    isCoinbaseWallet?: true | undefined;
    isDawn?: true | undefined;
    isEnkrypt?: true | undefined;
    isExodus?: true | undefined;
    isFrame?: true | undefined;
    isFrontier?: true | undefined;
    isGamestop?: true | undefined;
    isHyperPay?: true | undefined;
    isImToken?: true | undefined;
    isKuCoinWallet?: true | undefined;
    isMathWallet?: true | undefined;
    isMetaMask?: true | undefined;
    isOkxWallet?: true | undefined;
    isOKExWallet?: true | undefined;
    isOneInchAndroidWallet?: true | undefined;
    isOneInchIOSWallet?: true | undefined;
    isOpera?: true | undefined;
    isPhantom?: true | undefined;
    isPortal?: true | undefined;
    isRabby?: true | undefined;
    isRainbow?: true | undefined;
    isStatus?: true | undefined;
    isTally?: true | undefined;
    isTokenPocket?: true | undefined;
    isTokenary?: true | undefined;
    isTrust?: true | undefined;
    isTrustWallet?: true | undefined;
    isXDEFI?: true | undefined;
    isZerion?: true | undefined;
    providers?: any[] | undefined;
    _events?: {
        connect?: (() => void) | undefined;
    } | undefined;
    _state?: {
        accounts?: string[] | undefined;
        initialized?: boolean | undefined;
        isConnected?: boolean | undefined;
        isPermanentlyDisconnected?: boolean | undefined;
        isUnlocked?: boolean | undefined;
    } | undefined;
} | undefined, {
    onConnect(connectInfo: import("viem").ProviderConnectInfo): void;
}, {
    [x: `${string}.disconnected`]: true;
    "injected.connected": true;
}>;
export declare const frontier: import("@wagmi/core").CreateConnectorFn<{
    on: <TEvent extends keyof import("viem").EIP1193EventMap>(event: TEvent, listener: import("viem").EIP1193EventMap[TEvent]) => void;
    removeListener: <TEvent_1 extends keyof import("viem").EIP1193EventMap>(event: TEvent_1, listener: import("viem").EIP1193EventMap[TEvent_1]) => void;
    request: import("viem").EIP1193RequestFn<[{
        Method: "web3_clientVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "web3_sha3";
        Parameters: [data: `0x${string}`];
        ReturnType: string;
    }, {
        Method: "net_listening";
        Parameters?: undefined;
        ReturnType: boolean;
    }, {
        Method: "net_peerCount";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "net_version";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_blockNumber";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_call";
        Parameters: [transaction: Partial<import("viem").RpcTransactionRequest>] | [transaction: Partial<import("viem").RpcTransactionRequest>, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_coinbase";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_feeHistory";
        Parameters: [blockCount: `0x${string}`, newestBlock: `0x${string}` | import("viem").BlockTag, rewardPercentiles: number[] | undefined];
        ReturnType: import("viem").RpcFeeHistory;
    }, {
        Method: "eth_gasPrice";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBalance";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockByHash";
        Parameters: [hash: `0x${string}`, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockTransactionCountByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockTransactionCountByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getCode";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getFilterChanges";
        Parameters: [filterId: `0x${string}`];
        ReturnType: `0x${string}`[] | import("viem").RpcLog[];
    }, {
        Method: "eth_getFilterLogs";
        Parameters: [filterId: `0x${string}`];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getLogs";
        Parameters: [{
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        } & ({
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            blockHash?: undefined;
        } | {
            fromBlock?: undefined;
            toBlock?: undefined;
            blockHash?: `0x${string}` | undefined;
        })];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getProof";
        Parameters: [address: `0x${string}`, storageKeys: `0x${string}`[], block: `0x${string}` | import("viem").BlockTag];
        ReturnType: import("viem").RpcProof;
    }, {
        Method: "eth_getStorageAt";
        Parameters: [address: `0x${string}`, index: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionCount";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionReceipt";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransactionReceipt | null;
    }, {
        Method: "eth_getUncleByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleCountByBlockHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getUncleCountByBlockNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_maxPriorityFeePerGas";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newBlockFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newFilter";
        Parameters: [filter: {
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        }];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newPendingTransactionFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_protocolVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_uninstallFilter";
        Parameters: [filterId: `0x${string}`];
        ReturnType: boolean;
    }, {
        Method: "eth_accounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_requestAccounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_sendTransaction";
        Parameters: [transaction: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sign";
        Parameters: [address: `0x${string}`, data: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTransaction";
        Parameters: [request: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTypedData_v4";
        Parameters: [address: `0x${string}`, message: string];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_syncing";
        Parameters?: undefined;
        ReturnType: false | import("viem").NetworkSync;
    }, {
        Method: "personal_sign";
        Parameters: [data: `0x${string}`, address: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "wallet_addEthereumChain";
        Parameters: [chain: import("viem").AddEthereumChainParameter];
        ReturnType: null;
    }, {
        Method: "wallet_getPermissions";
        Parameters?: undefined;
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_requestPermissions";
        Parameters: [permissions: {
            eth_accounts: Record<string, any>;
        }];
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_switchEthereumChain";
        Parameters: [chain: {
            chainId: string;
        }];
        ReturnType: null;
    }, {
        Method: "wallet_watchAsset";
        Parameters: import("viem").WatchAssetParams;
        ReturnType: boolean;
    }]>;
    isApexWallet?: true | undefined;
    isAvalanche?: true | undefined;
    isBackpack?: true | undefined;
    isBifrost?: true | undefined;
    isBitKeep?: true | undefined;
    isBitski?: true | undefined;
    isBlockWallet?: true | undefined;
    isBraveWallet?: true | undefined;
    isCoinbaseWallet?: true | undefined;
    isDawn?: true | undefined;
    isEnkrypt?: true | undefined;
    isExodus?: true | undefined;
    isFrame?: true | undefined;
    isFrontier?: true | undefined;
    isGamestop?: true | undefined;
    isHyperPay?: true | undefined;
    isImToken?: true | undefined;
    isKuCoinWallet?: true | undefined;
    isMathWallet?: true | undefined;
    isMetaMask?: true | undefined;
    isOkxWallet?: true | undefined;
    isOKExWallet?: true | undefined;
    isOneInchAndroidWallet?: true | undefined;
    isOneInchIOSWallet?: true | undefined;
    isOpera?: true | undefined;
    isPhantom?: true | undefined;
    isPortal?: true | undefined;
    isRabby?: true | undefined;
    isRainbow?: true | undefined;
    isStatus?: true | undefined;
    isTally?: true | undefined;
    isTokenPocket?: true | undefined;
    isTokenary?: true | undefined;
    isTrust?: true | undefined;
    isTrustWallet?: true | undefined;
    isXDEFI?: true | undefined;
    isZerion?: true | undefined;
    providers?: any[] | undefined;
    _events?: {
        connect?: (() => void) | undefined;
    } | undefined;
    _state?: {
        accounts?: string[] | undefined;
        initialized?: boolean | undefined;
        isConnected?: boolean | undefined;
        isPermanentlyDisconnected?: boolean | undefined;
        isUnlocked?: boolean | undefined;
    } | undefined;
} | undefined, {
    onConnect(connectInfo: import("viem").ProviderConnectInfo): void;
}, {
    [x: `${string}.disconnected`]: true;
    "injected.connected": true;
}>;
export declare const safepal: import("@wagmi/core").CreateConnectorFn<{
    on: <TEvent extends keyof import("viem").EIP1193EventMap>(event: TEvent, listener: import("viem").EIP1193EventMap[TEvent]) => void;
    removeListener: <TEvent_1 extends keyof import("viem").EIP1193EventMap>(event: TEvent_1, listener: import("viem").EIP1193EventMap[TEvent_1]) => void;
    request: import("viem").EIP1193RequestFn<[{
        Method: "web3_clientVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "web3_sha3";
        Parameters: [data: `0x${string}`];
        ReturnType: string;
    }, {
        Method: "net_listening";
        Parameters?: undefined;
        ReturnType: boolean;
    }, {
        Method: "net_peerCount";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "net_version";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_blockNumber";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_call";
        Parameters: [transaction: Partial<import("viem").RpcTransactionRequest>] | [transaction: Partial<import("viem").RpcTransactionRequest>, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_coinbase";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_feeHistory";
        Parameters: [blockCount: `0x${string}`, newestBlock: `0x${string}` | import("viem").BlockTag, rewardPercentiles: number[] | undefined];
        ReturnType: import("viem").RpcFeeHistory;
    }, {
        Method: "eth_gasPrice";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBalance";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockByHash";
        Parameters: [hash: `0x${string}`, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockTransactionCountByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockTransactionCountByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getCode";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getFilterChanges";
        Parameters: [filterId: `0x${string}`];
        ReturnType: `0x${string}`[] | import("viem").RpcLog[];
    }, {
        Method: "eth_getFilterLogs";
        Parameters: [filterId: `0x${string}`];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getLogs";
        Parameters: [{
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        } & ({
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            blockHash?: undefined;
        } | {
            fromBlock?: undefined;
            toBlock?: undefined;
            blockHash?: `0x${string}` | undefined;
        })];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getProof";
        Parameters: [address: `0x${string}`, storageKeys: `0x${string}`[], block: `0x${string}` | import("viem").BlockTag];
        ReturnType: import("viem").RpcProof;
    }, {
        Method: "eth_getStorageAt";
        Parameters: [address: `0x${string}`, index: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionCount";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionReceipt";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransactionReceipt | null;
    }, {
        Method: "eth_getUncleByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleCountByBlockHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getUncleCountByBlockNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_maxPriorityFeePerGas";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newBlockFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newFilter";
        Parameters: [filter: {
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        }];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newPendingTransactionFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_protocolVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_uninstallFilter";
        Parameters: [filterId: `0x${string}`];
        ReturnType: boolean;
    }, {
        Method: "eth_accounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_requestAccounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_sendTransaction";
        Parameters: [transaction: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sign";
        Parameters: [address: `0x${string}`, data: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTransaction";
        Parameters: [request: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTypedData_v4";
        Parameters: [address: `0x${string}`, message: string];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_syncing";
        Parameters?: undefined;
        ReturnType: false | import("viem").NetworkSync;
    }, {
        Method: "personal_sign";
        Parameters: [data: `0x${string}`, address: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "wallet_addEthereumChain";
        Parameters: [chain: import("viem").AddEthereumChainParameter];
        ReturnType: null;
    }, {
        Method: "wallet_getPermissions";
        Parameters?: undefined;
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_requestPermissions";
        Parameters: [permissions: {
            eth_accounts: Record<string, any>;
        }];
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_switchEthereumChain";
        Parameters: [chain: {
            chainId: string;
        }];
        ReturnType: null;
    }, {
        Method: "wallet_watchAsset";
        Parameters: import("viem").WatchAssetParams;
        ReturnType: boolean;
    }]>;
    isApexWallet?: true | undefined;
    isAvalanche?: true | undefined;
    isBackpack?: true | undefined;
    isBifrost?: true | undefined;
    isBitKeep?: true | undefined;
    isBitski?: true | undefined;
    isBlockWallet?: true | undefined;
    isBraveWallet?: true | undefined;
    isCoinbaseWallet?: true | undefined;
    isDawn?: true | undefined;
    isEnkrypt?: true | undefined;
    isExodus?: true | undefined;
    isFrame?: true | undefined;
    isFrontier?: true | undefined;
    isGamestop?: true | undefined;
    isHyperPay?: true | undefined;
    isImToken?: true | undefined;
    isKuCoinWallet?: true | undefined;
    isMathWallet?: true | undefined;
    isMetaMask?: true | undefined;
    isOkxWallet?: true | undefined;
    isOKExWallet?: true | undefined;
    isOneInchAndroidWallet?: true | undefined;
    isOneInchIOSWallet?: true | undefined;
    isOpera?: true | undefined;
    isPhantom?: true | undefined;
    isPortal?: true | undefined;
    isRabby?: true | undefined;
    isRainbow?: true | undefined;
    isStatus?: true | undefined;
    isTally?: true | undefined;
    isTokenPocket?: true | undefined;
    isTokenary?: true | undefined;
    isTrust?: true | undefined;
    isTrustWallet?: true | undefined;
    isXDEFI?: true | undefined;
    isZerion?: true | undefined;
    providers?: any[] | undefined;
    _events?: {
        connect?: (() => void) | undefined;
    } | undefined;
    _state?: {
        accounts?: string[] | undefined;
        initialized?: boolean | undefined;
        isConnected?: boolean | undefined;
        isPermanentlyDisconnected?: boolean | undefined;
        isUnlocked?: boolean | undefined;
    } | undefined;
} | undefined, {
    onConnect(connectInfo: import("viem").ProviderConnectInfo): void;
}, {
    [x: `${string}.disconnected`]: true;
    "injected.connected": true;
}>;
export declare const brave: import("@wagmi/core").CreateConnectorFn<{
    on: <TEvent extends keyof import("viem").EIP1193EventMap>(event: TEvent, listener: import("viem").EIP1193EventMap[TEvent]) => void;
    removeListener: <TEvent_1 extends keyof import("viem").EIP1193EventMap>(event: TEvent_1, listener: import("viem").EIP1193EventMap[TEvent_1]) => void;
    request: import("viem").EIP1193RequestFn<[{
        Method: "web3_clientVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "web3_sha3";
        Parameters: [data: `0x${string}`];
        ReturnType: string;
    }, {
        Method: "net_listening";
        Parameters?: undefined;
        ReturnType: boolean;
    }, {
        Method: "net_peerCount";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "net_version";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_blockNumber";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_call";
        Parameters: [transaction: Partial<import("viem").RpcTransactionRequest>] | [transaction: Partial<import("viem").RpcTransactionRequest>, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_coinbase";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_feeHistory";
        Parameters: [blockCount: `0x${string}`, newestBlock: `0x${string}` | import("viem").BlockTag, rewardPercentiles: number[] | undefined];
        ReturnType: import("viem").RpcFeeHistory;
    }, {
        Method: "eth_gasPrice";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBalance";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockByHash";
        Parameters: [hash: `0x${string}`, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockTransactionCountByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockTransactionCountByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getCode";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getFilterChanges";
        Parameters: [filterId: `0x${string}`];
        ReturnType: `0x${string}`[] | import("viem").RpcLog[];
    }, {
        Method: "eth_getFilterLogs";
        Parameters: [filterId: `0x${string}`];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getLogs";
        Parameters: [{
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        } & ({
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            blockHash?: undefined;
        } | {
            fromBlock?: undefined;
            toBlock?: undefined;
            blockHash?: `0x${string}` | undefined;
        })];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getProof";
        Parameters: [address: `0x${string}`, storageKeys: `0x${string}`[], block: `0x${string}` | import("viem").BlockTag];
        ReturnType: import("viem").RpcProof;
    }, {
        Method: "eth_getStorageAt";
        Parameters: [address: `0x${string}`, index: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionCount";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionReceipt";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransactionReceipt | null;
    }, {
        Method: "eth_getUncleByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleCountByBlockHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getUncleCountByBlockNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_maxPriorityFeePerGas";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newBlockFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newFilter";
        Parameters: [filter: {
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        }];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newPendingTransactionFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_protocolVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_uninstallFilter";
        Parameters: [filterId: `0x${string}`];
        ReturnType: boolean;
    }, {
        Method: "eth_accounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_requestAccounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_sendTransaction";
        Parameters: [transaction: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sign";
        Parameters: [address: `0x${string}`, data: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTransaction";
        Parameters: [request: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTypedData_v4";
        Parameters: [address: `0x${string}`, message: string];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_syncing";
        Parameters?: undefined;
        ReturnType: false | import("viem").NetworkSync;
    }, {
        Method: "personal_sign";
        Parameters: [data: `0x${string}`, address: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "wallet_addEthereumChain";
        Parameters: [chain: import("viem").AddEthereumChainParameter];
        ReturnType: null;
    }, {
        Method: "wallet_getPermissions";
        Parameters?: undefined;
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_requestPermissions";
        Parameters: [permissions: {
            eth_accounts: Record<string, any>;
        }];
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_switchEthereumChain";
        Parameters: [chain: {
            chainId: string;
        }];
        ReturnType: null;
    }, {
        Method: "wallet_watchAsset";
        Parameters: import("viem").WatchAssetParams;
        ReturnType: boolean;
    }]>;
    isApexWallet?: true | undefined;
    isAvalanche?: true | undefined;
    isBackpack?: true | undefined;
    isBifrost?: true | undefined;
    isBitKeep?: true | undefined;
    isBitski?: true | undefined;
    isBlockWallet?: true | undefined;
    isBraveWallet?: true | undefined;
    isCoinbaseWallet?: true | undefined;
    isDawn?: true | undefined;
    isEnkrypt?: true | undefined;
    isExodus?: true | undefined;
    isFrame?: true | undefined;
    isFrontier?: true | undefined;
    isGamestop?: true | undefined;
    isHyperPay?: true | undefined;
    isImToken?: true | undefined;
    isKuCoinWallet?: true | undefined;
    isMathWallet?: true | undefined;
    isMetaMask?: true | undefined;
    isOkxWallet?: true | undefined;
    isOKExWallet?: true | undefined;
    isOneInchAndroidWallet?: true | undefined;
    isOneInchIOSWallet?: true | undefined;
    isOpera?: true | undefined;
    isPhantom?: true | undefined;
    isPortal?: true | undefined;
    isRabby?: true | undefined;
    isRainbow?: true | undefined;
    isStatus?: true | undefined;
    isTally?: true | undefined;
    isTokenPocket?: true | undefined;
    isTokenary?: true | undefined;
    isTrust?: true | undefined;
    isTrustWallet?: true | undefined;
    isXDEFI?: true | undefined;
    isZerion?: true | undefined;
    providers?: any[] | undefined;
    _events?: {
        connect?: (() => void) | undefined;
    } | undefined;
    _state?: {
        accounts?: string[] | undefined;
        initialized?: boolean | undefined;
        isConnected?: boolean | undefined;
        isPermanentlyDisconnected?: boolean | undefined;
        isUnlocked?: boolean | undefined;
    } | undefined;
} | undefined, {
    onConnect(connectInfo: import("viem").ProviderConnectInfo): void;
}, {
    [x: `${string}.disconnected`]: true;
    "injected.connected": true;
}>;
export declare const taho: import("@wagmi/core").CreateConnectorFn<{
    on: <TEvent extends keyof import("viem").EIP1193EventMap>(event: TEvent, listener: import("viem").EIP1193EventMap[TEvent]) => void;
    removeListener: <TEvent_1 extends keyof import("viem").EIP1193EventMap>(event: TEvent_1, listener: import("viem").EIP1193EventMap[TEvent_1]) => void;
    request: import("viem").EIP1193RequestFn<[{
        Method: "web3_clientVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "web3_sha3";
        Parameters: [data: `0x${string}`];
        ReturnType: string;
    }, {
        Method: "net_listening";
        Parameters?: undefined;
        ReturnType: boolean;
    }, {
        Method: "net_peerCount";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "net_version";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_blockNumber";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_call";
        Parameters: [transaction: Partial<import("viem").RpcTransactionRequest>] | [transaction: Partial<import("viem").RpcTransactionRequest>, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_coinbase";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_feeHistory";
        Parameters: [blockCount: `0x${string}`, newestBlock: `0x${string}` | import("viem").BlockTag, rewardPercentiles: number[] | undefined];
        ReturnType: import("viem").RpcFeeHistory;
    }, {
        Method: "eth_gasPrice";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBalance";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockByHash";
        Parameters: [hash: `0x${string}`, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockTransactionCountByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockTransactionCountByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getCode";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getFilterChanges";
        Parameters: [filterId: `0x${string}`];
        ReturnType: `0x${string}`[] | import("viem").RpcLog[];
    }, {
        Method: "eth_getFilterLogs";
        Parameters: [filterId: `0x${string}`];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getLogs";
        Parameters: [{
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        } & ({
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            blockHash?: undefined;
        } | {
            fromBlock?: undefined;
            toBlock?: undefined;
            blockHash?: `0x${string}` | undefined;
        })];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getProof";
        Parameters: [address: `0x${string}`, storageKeys: `0x${string}`[], block: `0x${string}` | import("viem").BlockTag];
        ReturnType: import("viem").RpcProof;
    }, {
        Method: "eth_getStorageAt";
        Parameters: [address: `0x${string}`, index: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionCount";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionReceipt";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransactionReceipt | null;
    }, {
        Method: "eth_getUncleByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleCountByBlockHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getUncleCountByBlockNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_maxPriorityFeePerGas";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newBlockFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newFilter";
        Parameters: [filter: {
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        }];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newPendingTransactionFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_protocolVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_uninstallFilter";
        Parameters: [filterId: `0x${string}`];
        ReturnType: boolean;
    }, {
        Method: "eth_accounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_requestAccounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_sendTransaction";
        Parameters: [transaction: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sign";
        Parameters: [address: `0x${string}`, data: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTransaction";
        Parameters: [request: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTypedData_v4";
        Parameters: [address: `0x${string}`, message: string];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_syncing";
        Parameters?: undefined;
        ReturnType: false | import("viem").NetworkSync;
    }, {
        Method: "personal_sign";
        Parameters: [data: `0x${string}`, address: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "wallet_addEthereumChain";
        Parameters: [chain: import("viem").AddEthereumChainParameter];
        ReturnType: null;
    }, {
        Method: "wallet_getPermissions";
        Parameters?: undefined;
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_requestPermissions";
        Parameters: [permissions: {
            eth_accounts: Record<string, any>;
        }];
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_switchEthereumChain";
        Parameters: [chain: {
            chainId: string;
        }];
        ReturnType: null;
    }, {
        Method: "wallet_watchAsset";
        Parameters: import("viem").WatchAssetParams;
        ReturnType: boolean;
    }]>;
    isApexWallet?: true | undefined;
    isAvalanche?: true | undefined;
    isBackpack?: true | undefined;
    isBifrost?: true | undefined;
    isBitKeep?: true | undefined;
    isBitski?: true | undefined;
    isBlockWallet?: true | undefined;
    isBraveWallet?: true | undefined;
    isCoinbaseWallet?: true | undefined;
    isDawn?: true | undefined;
    isEnkrypt?: true | undefined;
    isExodus?: true | undefined;
    isFrame?: true | undefined;
    isFrontier?: true | undefined;
    isGamestop?: true | undefined;
    isHyperPay?: true | undefined;
    isImToken?: true | undefined;
    isKuCoinWallet?: true | undefined;
    isMathWallet?: true | undefined;
    isMetaMask?: true | undefined;
    isOkxWallet?: true | undefined;
    isOKExWallet?: true | undefined;
    isOneInchAndroidWallet?: true | undefined;
    isOneInchIOSWallet?: true | undefined;
    isOpera?: true | undefined;
    isPhantom?: true | undefined;
    isPortal?: true | undefined;
    isRabby?: true | undefined;
    isRainbow?: true | undefined;
    isStatus?: true | undefined;
    isTally?: true | undefined;
    isTokenPocket?: true | undefined;
    isTokenary?: true | undefined;
    isTrust?: true | undefined;
    isTrustWallet?: true | undefined;
    isXDEFI?: true | undefined;
    isZerion?: true | undefined;
    providers?: any[] | undefined;
    _events?: {
        connect?: (() => void) | undefined;
    } | undefined;
    _state?: {
        accounts?: string[] | undefined;
        initialized?: boolean | undefined;
        isConnected?: boolean | undefined;
        isPermanentlyDisconnected?: boolean | undefined;
        isUnlocked?: boolean | undefined;
    } | undefined;
} | undefined, {
    onConnect(connectInfo: import("viem").ProviderConnectInfo): void;
}, {
    [x: `${string}.disconnected`]: true;
    "injected.connected": true;
}>;
export declare const block: import("@wagmi/core").CreateConnectorFn<{
    on: <TEvent extends keyof import("viem").EIP1193EventMap>(event: TEvent, listener: import("viem").EIP1193EventMap[TEvent]) => void;
    removeListener: <TEvent_1 extends keyof import("viem").EIP1193EventMap>(event: TEvent_1, listener: import("viem").EIP1193EventMap[TEvent_1]) => void;
    request: import("viem").EIP1193RequestFn<[{
        Method: "web3_clientVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "web3_sha3";
        Parameters: [data: `0x${string}`];
        ReturnType: string;
    }, {
        Method: "net_listening";
        Parameters?: undefined;
        ReturnType: boolean;
    }, {
        Method: "net_peerCount";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "net_version";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_blockNumber";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_call";
        Parameters: [transaction: Partial<import("viem").RpcTransactionRequest>] | [transaction: Partial<import("viem").RpcTransactionRequest>, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_coinbase";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_feeHistory";
        Parameters: [blockCount: `0x${string}`, newestBlock: `0x${string}` | import("viem").BlockTag, rewardPercentiles: number[] | undefined];
        ReturnType: import("viem").RpcFeeHistory;
    }, {
        Method: "eth_gasPrice";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBalance";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockByHash";
        Parameters: [hash: `0x${string}`, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockTransactionCountByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockTransactionCountByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getCode";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getFilterChanges";
        Parameters: [filterId: `0x${string}`];
        ReturnType: `0x${string}`[] | import("viem").RpcLog[];
    }, {
        Method: "eth_getFilterLogs";
        Parameters: [filterId: `0x${string}`];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getLogs";
        Parameters: [{
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        } & ({
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            blockHash?: undefined;
        } | {
            fromBlock?: undefined;
            toBlock?: undefined;
            blockHash?: `0x${string}` | undefined;
        })];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getProof";
        Parameters: [address: `0x${string}`, storageKeys: `0x${string}`[], block: `0x${string}` | import("viem").BlockTag];
        ReturnType: import("viem").RpcProof;
    }, {
        Method: "eth_getStorageAt";
        Parameters: [address: `0x${string}`, index: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionCount";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionReceipt";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransactionReceipt | null;
    }, {
        Method: "eth_getUncleByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleCountByBlockHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getUncleCountByBlockNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_maxPriorityFeePerGas";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newBlockFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newFilter";
        Parameters: [filter: {
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        }];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newPendingTransactionFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_protocolVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_uninstallFilter";
        Parameters: [filterId: `0x${string}`];
        ReturnType: boolean;
    }, {
        Method: "eth_accounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_requestAccounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_sendTransaction";
        Parameters: [transaction: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sign";
        Parameters: [address: `0x${string}`, data: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTransaction";
        Parameters: [request: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTypedData_v4";
        Parameters: [address: `0x${string}`, message: string];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_syncing";
        Parameters?: undefined;
        ReturnType: false | import("viem").NetworkSync;
    }, {
        Method: "personal_sign";
        Parameters: [data: `0x${string}`, address: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "wallet_addEthereumChain";
        Parameters: [chain: import("viem").AddEthereumChainParameter];
        ReturnType: null;
    }, {
        Method: "wallet_getPermissions";
        Parameters?: undefined;
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_requestPermissions";
        Parameters: [permissions: {
            eth_accounts: Record<string, any>;
        }];
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_switchEthereumChain";
        Parameters: [chain: {
            chainId: string;
        }];
        ReturnType: null;
    }, {
        Method: "wallet_watchAsset";
        Parameters: import("viem").WatchAssetParams;
        ReturnType: boolean;
    }]>;
    isApexWallet?: true | undefined;
    isAvalanche?: true | undefined;
    isBackpack?: true | undefined;
    isBifrost?: true | undefined;
    isBitKeep?: true | undefined;
    isBitski?: true | undefined;
    isBlockWallet?: true | undefined;
    isBraveWallet?: true | undefined;
    isCoinbaseWallet?: true | undefined;
    isDawn?: true | undefined;
    isEnkrypt?: true | undefined;
    isExodus?: true | undefined;
    isFrame?: true | undefined;
    isFrontier?: true | undefined;
    isGamestop?: true | undefined;
    isHyperPay?: true | undefined;
    isImToken?: true | undefined;
    isKuCoinWallet?: true | undefined;
    isMathWallet?: true | undefined;
    isMetaMask?: true | undefined;
    isOkxWallet?: true | undefined;
    isOKExWallet?: true | undefined;
    isOneInchAndroidWallet?: true | undefined;
    isOneInchIOSWallet?: true | undefined;
    isOpera?: true | undefined;
    isPhantom?: true | undefined;
    isPortal?: true | undefined;
    isRabby?: true | undefined;
    isRainbow?: true | undefined;
    isStatus?: true | undefined;
    isTally?: true | undefined;
    isTokenPocket?: true | undefined;
    isTokenary?: true | undefined;
    isTrust?: true | undefined;
    isTrustWallet?: true | undefined;
    isXDEFI?: true | undefined;
    isZerion?: true | undefined;
    providers?: any[] | undefined;
    _events?: {
        connect?: (() => void) | undefined;
    } | undefined;
    _state?: {
        accounts?: string[] | undefined;
        initialized?: boolean | undefined;
        isConnected?: boolean | undefined;
        isPermanentlyDisconnected?: boolean | undefined;
        isUnlocked?: boolean | undefined;
    } | undefined;
} | undefined, {
    onConnect(connectInfo: import("viem").ProviderConnectInfo): void;
}, {
    [x: `${string}.disconnected`]: true;
    "injected.connected": true;
}>;
export declare const binance: import("@wagmi/core").CreateConnectorFn<{
    on: <TEvent extends keyof import("viem").EIP1193EventMap>(event: TEvent, listener: import("viem").EIP1193EventMap[TEvent]) => void;
    removeListener: <TEvent_1 extends keyof import("viem").EIP1193EventMap>(event: TEvent_1, listener: import("viem").EIP1193EventMap[TEvent_1]) => void;
    request: import("viem").EIP1193RequestFn<[{
        Method: "web3_clientVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "web3_sha3";
        Parameters: [data: `0x${string}`];
        ReturnType: string;
    }, {
        Method: "net_listening";
        Parameters?: undefined;
        ReturnType: boolean;
    }, {
        Method: "net_peerCount";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "net_version";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_blockNumber";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_call";
        Parameters: [transaction: Partial<import("viem").RpcTransactionRequest>] | [transaction: Partial<import("viem").RpcTransactionRequest>, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_coinbase";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_feeHistory";
        Parameters: [blockCount: `0x${string}`, newestBlock: `0x${string}` | import("viem").BlockTag, rewardPercentiles: number[] | undefined];
        ReturnType: import("viem").RpcFeeHistory;
    }, {
        Method: "eth_gasPrice";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBalance";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockByHash";
        Parameters: [hash: `0x${string}`, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockTransactionCountByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockTransactionCountByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getCode";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getFilterChanges";
        Parameters: [filterId: `0x${string}`];
        ReturnType: `0x${string}`[] | import("viem").RpcLog[];
    }, {
        Method: "eth_getFilterLogs";
        Parameters: [filterId: `0x${string}`];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getLogs";
        Parameters: [{
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        } & ({
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            blockHash?: undefined;
        } | {
            fromBlock?: undefined;
            toBlock?: undefined;
            blockHash?: `0x${string}` | undefined;
        })];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getProof";
        Parameters: [address: `0x${string}`, storageKeys: `0x${string}`[], block: `0x${string}` | import("viem").BlockTag];
        ReturnType: import("viem").RpcProof;
    }, {
        Method: "eth_getStorageAt";
        Parameters: [address: `0x${string}`, index: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionCount";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionReceipt";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransactionReceipt | null;
    }, {
        Method: "eth_getUncleByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleCountByBlockHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getUncleCountByBlockNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_maxPriorityFeePerGas";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newBlockFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newFilter";
        Parameters: [filter: {
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        }];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newPendingTransactionFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_protocolVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_uninstallFilter";
        Parameters: [filterId: `0x${string}`];
        ReturnType: boolean;
    }, {
        Method: "eth_accounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_requestAccounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_sendTransaction";
        Parameters: [transaction: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sign";
        Parameters: [address: `0x${string}`, data: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTransaction";
        Parameters: [request: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTypedData_v4";
        Parameters: [address: `0x${string}`, message: string];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_syncing";
        Parameters?: undefined;
        ReturnType: false | import("viem").NetworkSync;
    }, {
        Method: "personal_sign";
        Parameters: [data: `0x${string}`, address: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "wallet_addEthereumChain";
        Parameters: [chain: import("viem").AddEthereumChainParameter];
        ReturnType: null;
    }, {
        Method: "wallet_getPermissions";
        Parameters?: undefined;
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_requestPermissions";
        Parameters: [permissions: {
            eth_accounts: Record<string, any>;
        }];
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_switchEthereumChain";
        Parameters: [chain: {
            chainId: string;
        }];
        ReturnType: null;
    }, {
        Method: "wallet_watchAsset";
        Parameters: import("viem").WatchAssetParams;
        ReturnType: boolean;
    }]>;
    isApexWallet?: true | undefined;
    isAvalanche?: true | undefined;
    isBackpack?: true | undefined;
    isBifrost?: true | undefined;
    isBitKeep?: true | undefined;
    isBitski?: true | undefined;
    isBlockWallet?: true | undefined;
    isBraveWallet?: true | undefined;
    isCoinbaseWallet?: true | undefined;
    isDawn?: true | undefined;
    isEnkrypt?: true | undefined;
    isExodus?: true | undefined;
    isFrame?: true | undefined;
    isFrontier?: true | undefined;
    isGamestop?: true | undefined;
    isHyperPay?: true | undefined;
    isImToken?: true | undefined;
    isKuCoinWallet?: true | undefined;
    isMathWallet?: true | undefined;
    isMetaMask?: true | undefined;
    isOkxWallet?: true | undefined;
    isOKExWallet?: true | undefined;
    isOneInchAndroidWallet?: true | undefined;
    isOneInchIOSWallet?: true | undefined;
    isOpera?: true | undefined;
    isPhantom?: true | undefined;
    isPortal?: true | undefined;
    isRabby?: true | undefined;
    isRainbow?: true | undefined;
    isStatus?: true | undefined;
    isTally?: true | undefined;
    isTokenPocket?: true | undefined;
    isTokenary?: true | undefined;
    isTrust?: true | undefined;
    isTrustWallet?: true | undefined;
    isXDEFI?: true | undefined;
    isZerion?: true | undefined;
    providers?: any[] | undefined;
    _events?: {
        connect?: (() => void) | undefined;
    } | undefined;
    _state?: {
        accounts?: string[] | undefined;
        initialized?: boolean | undefined;
        isConnected?: boolean | undefined;
        isPermanentlyDisconnected?: boolean | undefined;
        isUnlocked?: boolean | undefined;
    } | undefined;
} | undefined, {
    onConnect(connectInfo: import("viem").ProviderConnectInfo): void;
}, {
    [x: `${string}.disconnected`]: true;
    "injected.connected": true;
}>;
export declare const trust: import("@wagmi/core").CreateConnectorFn<{
    on: <TEvent extends keyof import("viem").EIP1193EventMap>(event: TEvent, listener: import("viem").EIP1193EventMap[TEvent]) => void;
    removeListener: <TEvent_1 extends keyof import("viem").EIP1193EventMap>(event: TEvent_1, listener: import("viem").EIP1193EventMap[TEvent_1]) => void;
    request: import("viem").EIP1193RequestFn<[{
        Method: "web3_clientVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "web3_sha3";
        Parameters: [data: `0x${string}`];
        ReturnType: string;
    }, {
        Method: "net_listening";
        Parameters?: undefined;
        ReturnType: boolean;
    }, {
        Method: "net_peerCount";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "net_version";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_blockNumber";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_call";
        Parameters: [transaction: Partial<import("viem").RpcTransactionRequest>] | [transaction: Partial<import("viem").RpcTransactionRequest>, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_coinbase";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_feeHistory";
        Parameters: [blockCount: `0x${string}`, newestBlock: `0x${string}` | import("viem").BlockTag, rewardPercentiles: number[] | undefined];
        ReturnType: import("viem").RpcFeeHistory;
    }, {
        Method: "eth_gasPrice";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBalance";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockByHash";
        Parameters: [hash: `0x${string}`, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockTransactionCountByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockTransactionCountByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getCode";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getFilterChanges";
        Parameters: [filterId: `0x${string}`];
        ReturnType: `0x${string}`[] | import("viem").RpcLog[];
    }, {
        Method: "eth_getFilterLogs";
        Parameters: [filterId: `0x${string}`];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getLogs";
        Parameters: [{
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        } & ({
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            blockHash?: undefined;
        } | {
            fromBlock?: undefined;
            toBlock?: undefined;
            blockHash?: `0x${string}` | undefined;
        })];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getProof";
        Parameters: [address: `0x${string}`, storageKeys: `0x${string}`[], block: `0x${string}` | import("viem").BlockTag];
        ReturnType: import("viem").RpcProof;
    }, {
        Method: "eth_getStorageAt";
        Parameters: [address: `0x${string}`, index: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionCount";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionReceipt";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransactionReceipt | null;
    }, {
        Method: "eth_getUncleByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleCountByBlockHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getUncleCountByBlockNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_maxPriorityFeePerGas";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newBlockFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newFilter";
        Parameters: [filter: {
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        }];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newPendingTransactionFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_protocolVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_uninstallFilter";
        Parameters: [filterId: `0x${string}`];
        ReturnType: boolean;
    }, {
        Method: "eth_accounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_requestAccounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_sendTransaction";
        Parameters: [transaction: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sign";
        Parameters: [address: `0x${string}`, data: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTransaction";
        Parameters: [request: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTypedData_v4";
        Parameters: [address: `0x${string}`, message: string];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_syncing";
        Parameters?: undefined;
        ReturnType: false | import("viem").NetworkSync;
    }, {
        Method: "personal_sign";
        Parameters: [data: `0x${string}`, address: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "wallet_addEthereumChain";
        Parameters: [chain: import("viem").AddEthereumChainParameter];
        ReturnType: null;
    }, {
        Method: "wallet_getPermissions";
        Parameters?: undefined;
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_requestPermissions";
        Parameters: [permissions: {
            eth_accounts: Record<string, any>;
        }];
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_switchEthereumChain";
        Parameters: [chain: {
            chainId: string;
        }];
        ReturnType: null;
    }, {
        Method: "wallet_watchAsset";
        Parameters: import("viem").WatchAssetParams;
        ReturnType: boolean;
    }]>;
    isApexWallet?: true | undefined;
    isAvalanche?: true | undefined;
    isBackpack?: true | undefined;
    isBifrost?: true | undefined;
    isBitKeep?: true | undefined;
    isBitski?: true | undefined;
    isBlockWallet?: true | undefined;
    isBraveWallet?: true | undefined;
    isCoinbaseWallet?: true | undefined;
    isDawn?: true | undefined;
    isEnkrypt?: true | undefined;
    isExodus?: true | undefined;
    isFrame?: true | undefined;
    isFrontier?: true | undefined;
    isGamestop?: true | undefined;
    isHyperPay?: true | undefined;
    isImToken?: true | undefined;
    isKuCoinWallet?: true | undefined;
    isMathWallet?: true | undefined;
    isMetaMask?: true | undefined;
    isOkxWallet?: true | undefined;
    isOKExWallet?: true | undefined;
    isOneInchAndroidWallet?: true | undefined;
    isOneInchIOSWallet?: true | undefined;
    isOpera?: true | undefined;
    isPhantom?: true | undefined;
    isPortal?: true | undefined;
    isRabby?: true | undefined;
    isRainbow?: true | undefined;
    isStatus?: true | undefined;
    isTally?: true | undefined;
    isTokenPocket?: true | undefined;
    isTokenary?: true | undefined;
    isTrust?: true | undefined;
    isTrustWallet?: true | undefined;
    isXDEFI?: true | undefined;
    isZerion?: true | undefined;
    providers?: any[] | undefined;
    _events?: {
        connect?: (() => void) | undefined;
    } | undefined;
    _state?: {
        accounts?: string[] | undefined;
        initialized?: boolean | undefined;
        isConnected?: boolean | undefined;
        isPermanentlyDisconnected?: boolean | undefined;
        isUnlocked?: boolean | undefined;
    } | undefined;
} | undefined, {
    onConnect(connectInfo: import("viem").ProviderConnectInfo): void;
}, {
    [x: `${string}.disconnected`]: true;
    "injected.connected": true;
}>;
export declare const status: import("@wagmi/core").CreateConnectorFn<{
    on: <TEvent extends keyof import("viem").EIP1193EventMap>(event: TEvent, listener: import("viem").EIP1193EventMap[TEvent]) => void;
    removeListener: <TEvent_1 extends keyof import("viem").EIP1193EventMap>(event: TEvent_1, listener: import("viem").EIP1193EventMap[TEvent_1]) => void;
    request: import("viem").EIP1193RequestFn<[{
        Method: "web3_clientVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "web3_sha3";
        Parameters: [data: `0x${string}`];
        ReturnType: string;
    }, {
        Method: "net_listening";
        Parameters?: undefined;
        ReturnType: boolean;
    }, {
        Method: "net_peerCount";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "net_version";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_blockNumber";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_call";
        Parameters: [transaction: Partial<import("viem").RpcTransactionRequest>] | [transaction: Partial<import("viem").RpcTransactionRequest>, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_coinbase";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_feeHistory";
        Parameters: [blockCount: `0x${string}`, newestBlock: `0x${string}` | import("viem").BlockTag, rewardPercentiles: number[] | undefined];
        ReturnType: import("viem").RpcFeeHistory;
    }, {
        Method: "eth_gasPrice";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBalance";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockByHash";
        Parameters: [hash: `0x${string}`, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockTransactionCountByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockTransactionCountByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getCode";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getFilterChanges";
        Parameters: [filterId: `0x${string}`];
        ReturnType: `0x${string}`[] | import("viem").RpcLog[];
    }, {
        Method: "eth_getFilterLogs";
        Parameters: [filterId: `0x${string}`];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getLogs";
        Parameters: [{
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        } & ({
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            blockHash?: undefined;
        } | {
            fromBlock?: undefined;
            toBlock?: undefined;
            blockHash?: `0x${string}` | undefined;
        })];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getProof";
        Parameters: [address: `0x${string}`, storageKeys: `0x${string}`[], block: `0x${string}` | import("viem").BlockTag];
        ReturnType: import("viem").RpcProof;
    }, {
        Method: "eth_getStorageAt";
        Parameters: [address: `0x${string}`, index: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionCount";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionReceipt";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransactionReceipt | null;
    }, {
        Method: "eth_getUncleByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleCountByBlockHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getUncleCountByBlockNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_maxPriorityFeePerGas";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newBlockFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newFilter";
        Parameters: [filter: {
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        }];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newPendingTransactionFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_protocolVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_uninstallFilter";
        Parameters: [filterId: `0x${string}`];
        ReturnType: boolean;
    }, {
        Method: "eth_accounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_requestAccounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_sendTransaction";
        Parameters: [transaction: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sign";
        Parameters: [address: `0x${string}`, data: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTransaction";
        Parameters: [request: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTypedData_v4";
        Parameters: [address: `0x${string}`, message: string];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_syncing";
        Parameters?: undefined;
        ReturnType: false | import("viem").NetworkSync;
    }, {
        Method: "personal_sign";
        Parameters: [data: `0x${string}`, address: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "wallet_addEthereumChain";
        Parameters: [chain: import("viem").AddEthereumChainParameter];
        ReturnType: null;
    }, {
        Method: "wallet_getPermissions";
        Parameters?: undefined;
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_requestPermissions";
        Parameters: [permissions: {
            eth_accounts: Record<string, any>;
        }];
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_switchEthereumChain";
        Parameters: [chain: {
            chainId: string;
        }];
        ReturnType: null;
    }, {
        Method: "wallet_watchAsset";
        Parameters: import("viem").WatchAssetParams;
        ReturnType: boolean;
    }]>;
    isApexWallet?: true | undefined;
    isAvalanche?: true | undefined;
    isBackpack?: true | undefined;
    isBifrost?: true | undefined;
    isBitKeep?: true | undefined;
    isBitski?: true | undefined;
    isBlockWallet?: true | undefined;
    isBraveWallet?: true | undefined;
    isCoinbaseWallet?: true | undefined;
    isDawn?: true | undefined;
    isEnkrypt?: true | undefined;
    isExodus?: true | undefined;
    isFrame?: true | undefined;
    isFrontier?: true | undefined;
    isGamestop?: true | undefined;
    isHyperPay?: true | undefined;
    isImToken?: true | undefined;
    isKuCoinWallet?: true | undefined;
    isMathWallet?: true | undefined;
    isMetaMask?: true | undefined;
    isOkxWallet?: true | undefined;
    isOKExWallet?: true | undefined;
    isOneInchAndroidWallet?: true | undefined;
    isOneInchIOSWallet?: true | undefined;
    isOpera?: true | undefined;
    isPhantom?: true | undefined;
    isPortal?: true | undefined;
    isRabby?: true | undefined;
    isRainbow?: true | undefined;
    isStatus?: true | undefined;
    isTally?: true | undefined;
    isTokenPocket?: true | undefined;
    isTokenary?: true | undefined;
    isTrust?: true | undefined;
    isTrustWallet?: true | undefined;
    isXDEFI?: true | undefined;
    isZerion?: true | undefined;
    providers?: any[] | undefined;
    _events?: {
        connect?: (() => void) | undefined;
    } | undefined;
    _state?: {
        accounts?: string[] | undefined;
        initialized?: boolean | undefined;
        isConnected?: boolean | undefined;
        isPermanentlyDisconnected?: boolean | undefined;
        isUnlocked?: boolean | undefined;
    } | undefined;
} | undefined, {
    onConnect(connectInfo: import("viem").ProviderConnectInfo): void;
}, {
    [x: `${string}.disconnected`]: true;
    "injected.connected": true;
}>;
export declare const alpha: import("@wagmi/core").CreateConnectorFn<{
    on: <TEvent extends keyof import("viem").EIP1193EventMap>(event: TEvent, listener: import("viem").EIP1193EventMap[TEvent]) => void;
    removeListener: <TEvent_1 extends keyof import("viem").EIP1193EventMap>(event: TEvent_1, listener: import("viem").EIP1193EventMap[TEvent_1]) => void;
    request: import("viem").EIP1193RequestFn<[{
        Method: "web3_clientVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "web3_sha3";
        Parameters: [data: `0x${string}`];
        ReturnType: string;
    }, {
        Method: "net_listening";
        Parameters?: undefined;
        ReturnType: boolean;
    }, {
        Method: "net_peerCount";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "net_version";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_blockNumber";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_call";
        Parameters: [transaction: Partial<import("viem").RpcTransactionRequest>] | [transaction: Partial<import("viem").RpcTransactionRequest>, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_coinbase";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_feeHistory";
        Parameters: [blockCount: `0x${string}`, newestBlock: `0x${string}` | import("viem").BlockTag, rewardPercentiles: number[] | undefined];
        ReturnType: import("viem").RpcFeeHistory;
    }, {
        Method: "eth_gasPrice";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBalance";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockByHash";
        Parameters: [hash: `0x${string}`, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockTransactionCountByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockTransactionCountByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getCode";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getFilterChanges";
        Parameters: [filterId: `0x${string}`];
        ReturnType: `0x${string}`[] | import("viem").RpcLog[];
    }, {
        Method: "eth_getFilterLogs";
        Parameters: [filterId: `0x${string}`];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getLogs";
        Parameters: [{
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        } & ({
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            blockHash?: undefined;
        } | {
            fromBlock?: undefined;
            toBlock?: undefined;
            blockHash?: `0x${string}` | undefined;
        })];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getProof";
        Parameters: [address: `0x${string}`, storageKeys: `0x${string}`[], block: `0x${string}` | import("viem").BlockTag];
        ReturnType: import("viem").RpcProof;
    }, {
        Method: "eth_getStorageAt";
        Parameters: [address: `0x${string}`, index: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionCount";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionReceipt";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransactionReceipt | null;
    }, {
        Method: "eth_getUncleByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleCountByBlockHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getUncleCountByBlockNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_maxPriorityFeePerGas";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newBlockFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newFilter";
        Parameters: [filter: {
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        }];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newPendingTransactionFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_protocolVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_uninstallFilter";
        Parameters: [filterId: `0x${string}`];
        ReturnType: boolean;
    }, {
        Method: "eth_accounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_requestAccounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_sendTransaction";
        Parameters: [transaction: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sign";
        Parameters: [address: `0x${string}`, data: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTransaction";
        Parameters: [request: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTypedData_v4";
        Parameters: [address: `0x${string}`, message: string];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_syncing";
        Parameters?: undefined;
        ReturnType: false | import("viem").NetworkSync;
    }, {
        Method: "personal_sign";
        Parameters: [data: `0x${string}`, address: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "wallet_addEthereumChain";
        Parameters: [chain: import("viem").AddEthereumChainParameter];
        ReturnType: null;
    }, {
        Method: "wallet_getPermissions";
        Parameters?: undefined;
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_requestPermissions";
        Parameters: [permissions: {
            eth_accounts: Record<string, any>;
        }];
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_switchEthereumChain";
        Parameters: [chain: {
            chainId: string;
        }];
        ReturnType: null;
    }, {
        Method: "wallet_watchAsset";
        Parameters: import("viem").WatchAssetParams;
        ReturnType: boolean;
    }]>;
    isApexWallet?: true | undefined;
    isAvalanche?: true | undefined;
    isBackpack?: true | undefined;
    isBifrost?: true | undefined;
    isBitKeep?: true | undefined;
    isBitski?: true | undefined;
    isBlockWallet?: true | undefined;
    isBraveWallet?: true | undefined;
    isCoinbaseWallet?: true | undefined;
    isDawn?: true | undefined;
    isEnkrypt?: true | undefined;
    isExodus?: true | undefined;
    isFrame?: true | undefined;
    isFrontier?: true | undefined;
    isGamestop?: true | undefined;
    isHyperPay?: true | undefined;
    isImToken?: true | undefined;
    isKuCoinWallet?: true | undefined;
    isMathWallet?: true | undefined;
    isMetaMask?: true | undefined;
    isOkxWallet?: true | undefined;
    isOKExWallet?: true | undefined;
    isOneInchAndroidWallet?: true | undefined;
    isOneInchIOSWallet?: true | undefined;
    isOpera?: true | undefined;
    isPhantom?: true | undefined;
    isPortal?: true | undefined;
    isRabby?: true | undefined;
    isRainbow?: true | undefined;
    isStatus?: true | undefined;
    isTally?: true | undefined;
    isTokenPocket?: true | undefined;
    isTokenary?: true | undefined;
    isTrust?: true | undefined;
    isTrustWallet?: true | undefined;
    isXDEFI?: true | undefined;
    isZerion?: true | undefined;
    providers?: any[] | undefined;
    _events?: {
        connect?: (() => void) | undefined;
    } | undefined;
    _state?: {
        accounts?: string[] | undefined;
        initialized?: boolean | undefined;
        isConnected?: boolean | undefined;
        isPermanentlyDisconnected?: boolean | undefined;
        isUnlocked?: boolean | undefined;
    } | undefined;
} | undefined, {
    onConnect(connectInfo: import("viem").ProviderConnectInfo): void;
}, {
    [x: `${string}.disconnected`]: true;
    "injected.connected": true;
}>;
export declare const bitpie: import("@wagmi/core").CreateConnectorFn<{
    on: <TEvent extends keyof import("viem").EIP1193EventMap>(event: TEvent, listener: import("viem").EIP1193EventMap[TEvent]) => void;
    removeListener: <TEvent_1 extends keyof import("viem").EIP1193EventMap>(event: TEvent_1, listener: import("viem").EIP1193EventMap[TEvent_1]) => void;
    request: import("viem").EIP1193RequestFn<[{
        Method: "web3_clientVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "web3_sha3";
        Parameters: [data: `0x${string}`];
        ReturnType: string;
    }, {
        Method: "net_listening";
        Parameters?: undefined;
        ReturnType: boolean;
    }, {
        Method: "net_peerCount";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "net_version";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_blockNumber";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_call";
        Parameters: [transaction: Partial<import("viem").RpcTransactionRequest>] | [transaction: Partial<import("viem").RpcTransactionRequest>, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_coinbase";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_feeHistory";
        Parameters: [blockCount: `0x${string}`, newestBlock: `0x${string}` | import("viem").BlockTag, rewardPercentiles: number[] | undefined];
        ReturnType: import("viem").RpcFeeHistory;
    }, {
        Method: "eth_gasPrice";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBalance";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockByHash";
        Parameters: [hash: `0x${string}`, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockTransactionCountByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockTransactionCountByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getCode";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getFilterChanges";
        Parameters: [filterId: `0x${string}`];
        ReturnType: `0x${string}`[] | import("viem").RpcLog[];
    }, {
        Method: "eth_getFilterLogs";
        Parameters: [filterId: `0x${string}`];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getLogs";
        Parameters: [{
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        } & ({
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            blockHash?: undefined;
        } | {
            fromBlock?: undefined;
            toBlock?: undefined;
            blockHash?: `0x${string}` | undefined;
        })];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getProof";
        Parameters: [address: `0x${string}`, storageKeys: `0x${string}`[], block: `0x${string}` | import("viem").BlockTag];
        ReturnType: import("viem").RpcProof;
    }, {
        Method: "eth_getStorageAt";
        Parameters: [address: `0x${string}`, index: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionCount";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionReceipt";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransactionReceipt | null;
    }, {
        Method: "eth_getUncleByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleCountByBlockHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getUncleCountByBlockNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_maxPriorityFeePerGas";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newBlockFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newFilter";
        Parameters: [filter: {
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        }];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newPendingTransactionFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_protocolVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_uninstallFilter";
        Parameters: [filterId: `0x${string}`];
        ReturnType: boolean;
    }, {
        Method: "eth_accounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_requestAccounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_sendTransaction";
        Parameters: [transaction: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sign";
        Parameters: [address: `0x${string}`, data: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTransaction";
        Parameters: [request: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTypedData_v4";
        Parameters: [address: `0x${string}`, message: string];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_syncing";
        Parameters?: undefined;
        ReturnType: false | import("viem").NetworkSync;
    }, {
        Method: "personal_sign";
        Parameters: [data: `0x${string}`, address: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "wallet_addEthereumChain";
        Parameters: [chain: import("viem").AddEthereumChainParameter];
        ReturnType: null;
    }, {
        Method: "wallet_getPermissions";
        Parameters?: undefined;
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_requestPermissions";
        Parameters: [permissions: {
            eth_accounts: Record<string, any>;
        }];
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_switchEthereumChain";
        Parameters: [chain: {
            chainId: string;
        }];
        ReturnType: null;
    }, {
        Method: "wallet_watchAsset";
        Parameters: import("viem").WatchAssetParams;
        ReturnType: boolean;
    }]>;
    isApexWallet?: true | undefined;
    isAvalanche?: true | undefined;
    isBackpack?: true | undefined;
    isBifrost?: true | undefined;
    isBitKeep?: true | undefined;
    isBitski?: true | undefined;
    isBlockWallet?: true | undefined;
    isBraveWallet?: true | undefined;
    isCoinbaseWallet?: true | undefined;
    isDawn?: true | undefined;
    isEnkrypt?: true | undefined;
    isExodus?: true | undefined;
    isFrame?: true | undefined;
    isFrontier?: true | undefined;
    isGamestop?: true | undefined;
    isHyperPay?: true | undefined;
    isImToken?: true | undefined;
    isKuCoinWallet?: true | undefined;
    isMathWallet?: true | undefined;
    isMetaMask?: true | undefined;
    isOkxWallet?: true | undefined;
    isOKExWallet?: true | undefined;
    isOneInchAndroidWallet?: true | undefined;
    isOneInchIOSWallet?: true | undefined;
    isOpera?: true | undefined;
    isPhantom?: true | undefined;
    isPortal?: true | undefined;
    isRabby?: true | undefined;
    isRainbow?: true | undefined;
    isStatus?: true | undefined;
    isTally?: true | undefined;
    isTokenPocket?: true | undefined;
    isTokenary?: true | undefined;
    isTrust?: true | undefined;
    isTrustWallet?: true | undefined;
    isXDEFI?: true | undefined;
    isZerion?: true | undefined;
    providers?: any[] | undefined;
    _events?: {
        connect?: (() => void) | undefined;
    } | undefined;
    _state?: {
        accounts?: string[] | undefined;
        initialized?: boolean | undefined;
        isConnected?: boolean | undefined;
        isPermanentlyDisconnected?: boolean | undefined;
        isUnlocked?: boolean | undefined;
    } | undefined;
} | undefined, {
    onConnect(connectInfo: import("viem").ProviderConnectInfo): void;
}, {
    [x: `${string}.disconnected`]: true;
    "injected.connected": true;
}>;
export declare const dcent: import("@wagmi/core").CreateConnectorFn<{
    on: <TEvent extends keyof import("viem").EIP1193EventMap>(event: TEvent, listener: import("viem").EIP1193EventMap[TEvent]) => void;
    removeListener: <TEvent_1 extends keyof import("viem").EIP1193EventMap>(event: TEvent_1, listener: import("viem").EIP1193EventMap[TEvent_1]) => void;
    request: import("viem").EIP1193RequestFn<[{
        Method: "web3_clientVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "web3_sha3";
        Parameters: [data: `0x${string}`];
        ReturnType: string;
    }, {
        Method: "net_listening";
        Parameters?: undefined;
        ReturnType: boolean;
    }, {
        Method: "net_peerCount";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "net_version";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_blockNumber";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_call";
        Parameters: [transaction: Partial<import("viem").RpcTransactionRequest>] | [transaction: Partial<import("viem").RpcTransactionRequest>, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_coinbase";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_feeHistory";
        Parameters: [blockCount: `0x${string}`, newestBlock: `0x${string}` | import("viem").BlockTag, rewardPercentiles: number[] | undefined];
        ReturnType: import("viem").RpcFeeHistory;
    }, {
        Method: "eth_gasPrice";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBalance";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockByHash";
        Parameters: [hash: `0x${string}`, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockTransactionCountByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockTransactionCountByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getCode";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getFilterChanges";
        Parameters: [filterId: `0x${string}`];
        ReturnType: `0x${string}`[] | import("viem").RpcLog[];
    }, {
        Method: "eth_getFilterLogs";
        Parameters: [filterId: `0x${string}`];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getLogs";
        Parameters: [{
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        } & ({
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            blockHash?: undefined;
        } | {
            fromBlock?: undefined;
            toBlock?: undefined;
            blockHash?: `0x${string}` | undefined;
        })];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getProof";
        Parameters: [address: `0x${string}`, storageKeys: `0x${string}`[], block: `0x${string}` | import("viem").BlockTag];
        ReturnType: import("viem").RpcProof;
    }, {
        Method: "eth_getStorageAt";
        Parameters: [address: `0x${string}`, index: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionCount";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionReceipt";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransactionReceipt | null;
    }, {
        Method: "eth_getUncleByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleCountByBlockHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getUncleCountByBlockNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_maxPriorityFeePerGas";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newBlockFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newFilter";
        Parameters: [filter: {
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        }];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newPendingTransactionFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_protocolVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_uninstallFilter";
        Parameters: [filterId: `0x${string}`];
        ReturnType: boolean;
    }, {
        Method: "eth_accounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_requestAccounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_sendTransaction";
        Parameters: [transaction: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sign";
        Parameters: [address: `0x${string}`, data: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTransaction";
        Parameters: [request: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTypedData_v4";
        Parameters: [address: `0x${string}`, message: string];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_syncing";
        Parameters?: undefined;
        ReturnType: false | import("viem").NetworkSync;
    }, {
        Method: "personal_sign";
        Parameters: [data: `0x${string}`, address: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "wallet_addEthereumChain";
        Parameters: [chain: import("viem").AddEthereumChainParameter];
        ReturnType: null;
    }, {
        Method: "wallet_getPermissions";
        Parameters?: undefined;
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_requestPermissions";
        Parameters: [permissions: {
            eth_accounts: Record<string, any>;
        }];
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_switchEthereumChain";
        Parameters: [chain: {
            chainId: string;
        }];
        ReturnType: null;
    }, {
        Method: "wallet_watchAsset";
        Parameters: import("viem").WatchAssetParams;
        ReturnType: boolean;
    }]>;
    isApexWallet?: true | undefined;
    isAvalanche?: true | undefined;
    isBackpack?: true | undefined;
    isBifrost?: true | undefined;
    isBitKeep?: true | undefined;
    isBitski?: true | undefined;
    isBlockWallet?: true | undefined;
    isBraveWallet?: true | undefined;
    isCoinbaseWallet?: true | undefined;
    isDawn?: true | undefined;
    isEnkrypt?: true | undefined;
    isExodus?: true | undefined;
    isFrame?: true | undefined;
    isFrontier?: true | undefined;
    isGamestop?: true | undefined;
    isHyperPay?: true | undefined;
    isImToken?: true | undefined;
    isKuCoinWallet?: true | undefined;
    isMathWallet?: true | undefined;
    isMetaMask?: true | undefined;
    isOkxWallet?: true | undefined;
    isOKExWallet?: true | undefined;
    isOneInchAndroidWallet?: true | undefined;
    isOneInchIOSWallet?: true | undefined;
    isOpera?: true | undefined;
    isPhantom?: true | undefined;
    isPortal?: true | undefined;
    isRabby?: true | undefined;
    isRainbow?: true | undefined;
    isStatus?: true | undefined;
    isTally?: true | undefined;
    isTokenPocket?: true | undefined;
    isTokenary?: true | undefined;
    isTrust?: true | undefined;
    isTrustWallet?: true | undefined;
    isXDEFI?: true | undefined;
    isZerion?: true | undefined;
    providers?: any[] | undefined;
    _events?: {
        connect?: (() => void) | undefined;
    } | undefined;
    _state?: {
        accounts?: string[] | undefined;
        initialized?: boolean | undefined;
        isConnected?: boolean | undefined;
        isPermanentlyDisconnected?: boolean | undefined;
        isUnlocked?: boolean | undefined;
    } | undefined;
} | undefined, {
    onConnect(connectInfo: import("viem").ProviderConnectInfo): void;
}, {
    [x: `${string}.disconnected`]: true;
    "injected.connected": true;
}>;
export declare const frame: import("@wagmi/core").CreateConnectorFn<{
    on: <TEvent extends keyof import("viem").EIP1193EventMap>(event: TEvent, listener: import("viem").EIP1193EventMap[TEvent]) => void;
    removeListener: <TEvent_1 extends keyof import("viem").EIP1193EventMap>(event: TEvent_1, listener: import("viem").EIP1193EventMap[TEvent_1]) => void;
    request: import("viem").EIP1193RequestFn<[{
        Method: "web3_clientVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "web3_sha3";
        Parameters: [data: `0x${string}`];
        ReturnType: string;
    }, {
        Method: "net_listening";
        Parameters?: undefined;
        ReturnType: boolean;
    }, {
        Method: "net_peerCount";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "net_version";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_blockNumber";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_call";
        Parameters: [transaction: Partial<import("viem").RpcTransactionRequest>] | [transaction: Partial<import("viem").RpcTransactionRequest>, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_coinbase";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_feeHistory";
        Parameters: [blockCount: `0x${string}`, newestBlock: `0x${string}` | import("viem").BlockTag, rewardPercentiles: number[] | undefined];
        ReturnType: import("viem").RpcFeeHistory;
    }, {
        Method: "eth_gasPrice";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBalance";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockByHash";
        Parameters: [hash: `0x${string}`, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockTransactionCountByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockTransactionCountByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getCode";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getFilterChanges";
        Parameters: [filterId: `0x${string}`];
        ReturnType: `0x${string}`[] | import("viem").RpcLog[];
    }, {
        Method: "eth_getFilterLogs";
        Parameters: [filterId: `0x${string}`];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getLogs";
        Parameters: [{
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        } & ({
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            blockHash?: undefined;
        } | {
            fromBlock?: undefined;
            toBlock?: undefined;
            blockHash?: `0x${string}` | undefined;
        })];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getProof";
        Parameters: [address: `0x${string}`, storageKeys: `0x${string}`[], block: `0x${string}` | import("viem").BlockTag];
        ReturnType: import("viem").RpcProof;
    }, {
        Method: "eth_getStorageAt";
        Parameters: [address: `0x${string}`, index: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionCount";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionReceipt";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransactionReceipt | null;
    }, {
        Method: "eth_getUncleByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleCountByBlockHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getUncleCountByBlockNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_maxPriorityFeePerGas";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newBlockFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newFilter";
        Parameters: [filter: {
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        }];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newPendingTransactionFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_protocolVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_uninstallFilter";
        Parameters: [filterId: `0x${string}`];
        ReturnType: boolean;
    }, {
        Method: "eth_accounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_requestAccounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_sendTransaction";
        Parameters: [transaction: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sign";
        Parameters: [address: `0x${string}`, data: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTransaction";
        Parameters: [request: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTypedData_v4";
        Parameters: [address: `0x${string}`, message: string];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_syncing";
        Parameters?: undefined;
        ReturnType: false | import("viem").NetworkSync;
    }, {
        Method: "personal_sign";
        Parameters: [data: `0x${string}`, address: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "wallet_addEthereumChain";
        Parameters: [chain: import("viem").AddEthereumChainParameter];
        ReturnType: null;
    }, {
        Method: "wallet_getPermissions";
        Parameters?: undefined;
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_requestPermissions";
        Parameters: [permissions: {
            eth_accounts: Record<string, any>;
        }];
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_switchEthereumChain";
        Parameters: [chain: {
            chainId: string;
        }];
        ReturnType: null;
    }, {
        Method: "wallet_watchAsset";
        Parameters: import("viem").WatchAssetParams;
        ReturnType: boolean;
    }]>;
    isApexWallet?: true | undefined;
    isAvalanche?: true | undefined;
    isBackpack?: true | undefined;
    isBifrost?: true | undefined;
    isBitKeep?: true | undefined;
    isBitski?: true | undefined;
    isBlockWallet?: true | undefined;
    isBraveWallet?: true | undefined;
    isCoinbaseWallet?: true | undefined;
    isDawn?: true | undefined;
    isEnkrypt?: true | undefined;
    isExodus?: true | undefined;
    isFrame?: true | undefined;
    isFrontier?: true | undefined;
    isGamestop?: true | undefined;
    isHyperPay?: true | undefined;
    isImToken?: true | undefined;
    isKuCoinWallet?: true | undefined;
    isMathWallet?: true | undefined;
    isMetaMask?: true | undefined;
    isOkxWallet?: true | undefined;
    isOKExWallet?: true | undefined;
    isOneInchAndroidWallet?: true | undefined;
    isOneInchIOSWallet?: true | undefined;
    isOpera?: true | undefined;
    isPhantom?: true | undefined;
    isPortal?: true | undefined;
    isRabby?: true | undefined;
    isRainbow?: true | undefined;
    isStatus?: true | undefined;
    isTally?: true | undefined;
    isTokenPocket?: true | undefined;
    isTokenary?: true | undefined;
    isTrust?: true | undefined;
    isTrustWallet?: true | undefined;
    isXDEFI?: true | undefined;
    isZerion?: true | undefined;
    providers?: any[] | undefined;
    _events?: {
        connect?: (() => void) | undefined;
    } | undefined;
    _state?: {
        accounts?: string[] | undefined;
        initialized?: boolean | undefined;
        isConnected?: boolean | undefined;
        isPermanentlyDisconnected?: boolean | undefined;
        isUnlocked?: boolean | undefined;
    } | undefined;
} | undefined, {
    onConnect(connectInfo: import("viem").ProviderConnectInfo): void;
}, {
    [x: `${string}.disconnected`]: true;
    "injected.connected": true;
}>;
export declare const hyperpay: import("@wagmi/core").CreateConnectorFn<{
    on: <TEvent extends keyof import("viem").EIP1193EventMap>(event: TEvent, listener: import("viem").EIP1193EventMap[TEvent]) => void;
    removeListener: <TEvent_1 extends keyof import("viem").EIP1193EventMap>(event: TEvent_1, listener: import("viem").EIP1193EventMap[TEvent_1]) => void;
    request: import("viem").EIP1193RequestFn<[{
        Method: "web3_clientVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "web3_sha3";
        Parameters: [data: `0x${string}`];
        ReturnType: string;
    }, {
        Method: "net_listening";
        Parameters?: undefined;
        ReturnType: boolean;
    }, {
        Method: "net_peerCount";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "net_version";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_blockNumber";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_call";
        Parameters: [transaction: Partial<import("viem").RpcTransactionRequest>] | [transaction: Partial<import("viem").RpcTransactionRequest>, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_coinbase";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_feeHistory";
        Parameters: [blockCount: `0x${string}`, newestBlock: `0x${string}` | import("viem").BlockTag, rewardPercentiles: number[] | undefined];
        ReturnType: import("viem").RpcFeeHistory;
    }, {
        Method: "eth_gasPrice";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBalance";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockByHash";
        Parameters: [hash: `0x${string}`, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockTransactionCountByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockTransactionCountByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getCode";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getFilterChanges";
        Parameters: [filterId: `0x${string}`];
        ReturnType: `0x${string}`[] | import("viem").RpcLog[];
    }, {
        Method: "eth_getFilterLogs";
        Parameters: [filterId: `0x${string}`];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getLogs";
        Parameters: [{
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        } & ({
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            blockHash?: undefined;
        } | {
            fromBlock?: undefined;
            toBlock?: undefined;
            blockHash?: `0x${string}` | undefined;
        })];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getProof";
        Parameters: [address: `0x${string}`, storageKeys: `0x${string}`[], block: `0x${string}` | import("viem").BlockTag];
        ReturnType: import("viem").RpcProof;
    }, {
        Method: "eth_getStorageAt";
        Parameters: [address: `0x${string}`, index: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionCount";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionReceipt";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransactionReceipt | null;
    }, {
        Method: "eth_getUncleByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleCountByBlockHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getUncleCountByBlockNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_maxPriorityFeePerGas";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newBlockFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newFilter";
        Parameters: [filter: {
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        }];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newPendingTransactionFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_protocolVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_uninstallFilter";
        Parameters: [filterId: `0x${string}`];
        ReturnType: boolean;
    }, {
        Method: "eth_accounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_requestAccounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_sendTransaction";
        Parameters: [transaction: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sign";
        Parameters: [address: `0x${string}`, data: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTransaction";
        Parameters: [request: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTypedData_v4";
        Parameters: [address: `0x${string}`, message: string];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_syncing";
        Parameters?: undefined;
        ReturnType: false | import("viem").NetworkSync;
    }, {
        Method: "personal_sign";
        Parameters: [data: `0x${string}`, address: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "wallet_addEthereumChain";
        Parameters: [chain: import("viem").AddEthereumChainParameter];
        ReturnType: null;
    }, {
        Method: "wallet_getPermissions";
        Parameters?: undefined;
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_requestPermissions";
        Parameters: [permissions: {
            eth_accounts: Record<string, any>;
        }];
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_switchEthereumChain";
        Parameters: [chain: {
            chainId: string;
        }];
        ReturnType: null;
    }, {
        Method: "wallet_watchAsset";
        Parameters: import("viem").WatchAssetParams;
        ReturnType: boolean;
    }]>;
    isApexWallet?: true | undefined;
    isAvalanche?: true | undefined;
    isBackpack?: true | undefined;
    isBifrost?: true | undefined;
    isBitKeep?: true | undefined;
    isBitski?: true | undefined;
    isBlockWallet?: true | undefined;
    isBraveWallet?: true | undefined;
    isCoinbaseWallet?: true | undefined;
    isDawn?: true | undefined;
    isEnkrypt?: true | undefined;
    isExodus?: true | undefined;
    isFrame?: true | undefined;
    isFrontier?: true | undefined;
    isGamestop?: true | undefined;
    isHyperPay?: true | undefined;
    isImToken?: true | undefined;
    isKuCoinWallet?: true | undefined;
    isMathWallet?: true | undefined;
    isMetaMask?: true | undefined;
    isOkxWallet?: true | undefined;
    isOKExWallet?: true | undefined;
    isOneInchAndroidWallet?: true | undefined;
    isOneInchIOSWallet?: true | undefined;
    isOpera?: true | undefined;
    isPhantom?: true | undefined;
    isPortal?: true | undefined;
    isRabby?: true | undefined;
    isRainbow?: true | undefined;
    isStatus?: true | undefined;
    isTally?: true | undefined;
    isTokenPocket?: true | undefined;
    isTokenary?: true | undefined;
    isTrust?: true | undefined;
    isTrustWallet?: true | undefined;
    isXDEFI?: true | undefined;
    isZerion?: true | undefined;
    providers?: any[] | undefined;
    _events?: {
        connect?: (() => void) | undefined;
    } | undefined;
    _state?: {
        accounts?: string[] | undefined;
        initialized?: boolean | undefined;
        isConnected?: boolean | undefined;
        isPermanentlyDisconnected?: boolean | undefined;
        isUnlocked?: boolean | undefined;
    } | undefined;
} | undefined, {
    onConnect(connectInfo: import("viem").ProviderConnectInfo): void;
}, {
    [x: `${string}.disconnected`]: true;
    "injected.connected": true;
}>;
export declare const imtoken: import("@wagmi/core").CreateConnectorFn<{
    on: <TEvent extends keyof import("viem").EIP1193EventMap>(event: TEvent, listener: import("viem").EIP1193EventMap[TEvent]) => void;
    removeListener: <TEvent_1 extends keyof import("viem").EIP1193EventMap>(event: TEvent_1, listener: import("viem").EIP1193EventMap[TEvent_1]) => void;
    request: import("viem").EIP1193RequestFn<[{
        Method: "web3_clientVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "web3_sha3";
        Parameters: [data: `0x${string}`];
        ReturnType: string;
    }, {
        Method: "net_listening";
        Parameters?: undefined;
        ReturnType: boolean;
    }, {
        Method: "net_peerCount";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "net_version";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_blockNumber";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_call";
        Parameters: [transaction: Partial<import("viem").RpcTransactionRequest>] | [transaction: Partial<import("viem").RpcTransactionRequest>, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_coinbase";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_feeHistory";
        Parameters: [blockCount: `0x${string}`, newestBlock: `0x${string}` | import("viem").BlockTag, rewardPercentiles: number[] | undefined];
        ReturnType: import("viem").RpcFeeHistory;
    }, {
        Method: "eth_gasPrice";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBalance";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockByHash";
        Parameters: [hash: `0x${string}`, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockTransactionCountByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockTransactionCountByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getCode";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getFilterChanges";
        Parameters: [filterId: `0x${string}`];
        ReturnType: `0x${string}`[] | import("viem").RpcLog[];
    }, {
        Method: "eth_getFilterLogs";
        Parameters: [filterId: `0x${string}`];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getLogs";
        Parameters: [{
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        } & ({
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            blockHash?: undefined;
        } | {
            fromBlock?: undefined;
            toBlock?: undefined;
            blockHash?: `0x${string}` | undefined;
        })];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getProof";
        Parameters: [address: `0x${string}`, storageKeys: `0x${string}`[], block: `0x${string}` | import("viem").BlockTag];
        ReturnType: import("viem").RpcProof;
    }, {
        Method: "eth_getStorageAt";
        Parameters: [address: `0x${string}`, index: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionCount";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionReceipt";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransactionReceipt | null;
    }, {
        Method: "eth_getUncleByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleCountByBlockHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getUncleCountByBlockNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_maxPriorityFeePerGas";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newBlockFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newFilter";
        Parameters: [filter: {
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        }];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newPendingTransactionFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_protocolVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_uninstallFilter";
        Parameters: [filterId: `0x${string}`];
        ReturnType: boolean;
    }, {
        Method: "eth_accounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_requestAccounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_sendTransaction";
        Parameters: [transaction: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sign";
        Parameters: [address: `0x${string}`, data: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTransaction";
        Parameters: [request: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTypedData_v4";
        Parameters: [address: `0x${string}`, message: string];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_syncing";
        Parameters?: undefined;
        ReturnType: false | import("viem").NetworkSync;
    }, {
        Method: "personal_sign";
        Parameters: [data: `0x${string}`, address: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "wallet_addEthereumChain";
        Parameters: [chain: import("viem").AddEthereumChainParameter];
        ReturnType: null;
    }, {
        Method: "wallet_getPermissions";
        Parameters?: undefined;
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_requestPermissions";
        Parameters: [permissions: {
            eth_accounts: Record<string, any>;
        }];
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_switchEthereumChain";
        Parameters: [chain: {
            chainId: string;
        }];
        ReturnType: null;
    }, {
        Method: "wallet_watchAsset";
        Parameters: import("viem").WatchAssetParams;
        ReturnType: boolean;
    }]>;
    isApexWallet?: true | undefined;
    isAvalanche?: true | undefined;
    isBackpack?: true | undefined;
    isBifrost?: true | undefined;
    isBitKeep?: true | undefined;
    isBitski?: true | undefined;
    isBlockWallet?: true | undefined;
    isBraveWallet?: true | undefined;
    isCoinbaseWallet?: true | undefined;
    isDawn?: true | undefined;
    isEnkrypt?: true | undefined;
    isExodus?: true | undefined;
    isFrame?: true | undefined;
    isFrontier?: true | undefined;
    isGamestop?: true | undefined;
    isHyperPay?: true | undefined;
    isImToken?: true | undefined;
    isKuCoinWallet?: true | undefined;
    isMathWallet?: true | undefined;
    isMetaMask?: true | undefined;
    isOkxWallet?: true | undefined;
    isOKExWallet?: true | undefined;
    isOneInchAndroidWallet?: true | undefined;
    isOneInchIOSWallet?: true | undefined;
    isOpera?: true | undefined;
    isPhantom?: true | undefined;
    isPortal?: true | undefined;
    isRabby?: true | undefined;
    isRainbow?: true | undefined;
    isStatus?: true | undefined;
    isTally?: true | undefined;
    isTokenPocket?: true | undefined;
    isTokenary?: true | undefined;
    isTrust?: true | undefined;
    isTrustWallet?: true | undefined;
    isXDEFI?: true | undefined;
    isZerion?: true | undefined;
    providers?: any[] | undefined;
    _events?: {
        connect?: (() => void) | undefined;
    } | undefined;
    _state?: {
        accounts?: string[] | undefined;
        initialized?: boolean | undefined;
        isConnected?: boolean | undefined;
        isPermanentlyDisconnected?: boolean | undefined;
        isUnlocked?: boolean | undefined;
    } | undefined;
} | undefined, {
    onConnect(connectInfo: import("viem").ProviderConnectInfo): void;
}, {
    [x: `${string}.disconnected`]: true;
    "injected.connected": true;
}>;
export declare const liquality: import("@wagmi/core").CreateConnectorFn<{
    on: <TEvent extends keyof import("viem").EIP1193EventMap>(event: TEvent, listener: import("viem").EIP1193EventMap[TEvent]) => void;
    removeListener: <TEvent_1 extends keyof import("viem").EIP1193EventMap>(event: TEvent_1, listener: import("viem").EIP1193EventMap[TEvent_1]) => void;
    request: import("viem").EIP1193RequestFn<[{
        Method: "web3_clientVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "web3_sha3";
        Parameters: [data: `0x${string}`];
        ReturnType: string;
    }, {
        Method: "net_listening";
        Parameters?: undefined;
        ReturnType: boolean;
    }, {
        Method: "net_peerCount";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "net_version";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_blockNumber";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_call";
        Parameters: [transaction: Partial<import("viem").RpcTransactionRequest>] | [transaction: Partial<import("viem").RpcTransactionRequest>, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_coinbase";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_feeHistory";
        Parameters: [blockCount: `0x${string}`, newestBlock: `0x${string}` | import("viem").BlockTag, rewardPercentiles: number[] | undefined];
        ReturnType: import("viem").RpcFeeHistory;
    }, {
        Method: "eth_gasPrice";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBalance";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockByHash";
        Parameters: [hash: `0x${string}`, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockTransactionCountByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockTransactionCountByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getCode";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getFilterChanges";
        Parameters: [filterId: `0x${string}`];
        ReturnType: `0x${string}`[] | import("viem").RpcLog[];
    }, {
        Method: "eth_getFilterLogs";
        Parameters: [filterId: `0x${string}`];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getLogs";
        Parameters: [{
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        } & ({
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            blockHash?: undefined;
        } | {
            fromBlock?: undefined;
            toBlock?: undefined;
            blockHash?: `0x${string}` | undefined;
        })];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getProof";
        Parameters: [address: `0x${string}`, storageKeys: `0x${string}`[], block: `0x${string}` | import("viem").BlockTag];
        ReturnType: import("viem").RpcProof;
    }, {
        Method: "eth_getStorageAt";
        Parameters: [address: `0x${string}`, index: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionCount";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionReceipt";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransactionReceipt | null;
    }, {
        Method: "eth_getUncleByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleCountByBlockHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getUncleCountByBlockNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_maxPriorityFeePerGas";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newBlockFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newFilter";
        Parameters: [filter: {
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        }];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newPendingTransactionFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_protocolVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_uninstallFilter";
        Parameters: [filterId: `0x${string}`];
        ReturnType: boolean;
    }, {
        Method: "eth_accounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_requestAccounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_sendTransaction";
        Parameters: [transaction: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sign";
        Parameters: [address: `0x${string}`, data: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTransaction";
        Parameters: [request: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTypedData_v4";
        Parameters: [address: `0x${string}`, message: string];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_syncing";
        Parameters?: undefined;
        ReturnType: false | import("viem").NetworkSync;
    }, {
        Method: "personal_sign";
        Parameters: [data: `0x${string}`, address: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "wallet_addEthereumChain";
        Parameters: [chain: import("viem").AddEthereumChainParameter];
        ReturnType: null;
    }, {
        Method: "wallet_getPermissions";
        Parameters?: undefined;
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_requestPermissions";
        Parameters: [permissions: {
            eth_accounts: Record<string, any>;
        }];
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_switchEthereumChain";
        Parameters: [chain: {
            chainId: string;
        }];
        ReturnType: null;
    }, {
        Method: "wallet_watchAsset";
        Parameters: import("viem").WatchAssetParams;
        ReturnType: boolean;
    }]>;
    isApexWallet?: true | undefined;
    isAvalanche?: true | undefined;
    isBackpack?: true | undefined;
    isBifrost?: true | undefined;
    isBitKeep?: true | undefined;
    isBitski?: true | undefined;
    isBlockWallet?: true | undefined;
    isBraveWallet?: true | undefined;
    isCoinbaseWallet?: true | undefined;
    isDawn?: true | undefined;
    isEnkrypt?: true | undefined;
    isExodus?: true | undefined;
    isFrame?: true | undefined;
    isFrontier?: true | undefined;
    isGamestop?: true | undefined;
    isHyperPay?: true | undefined;
    isImToken?: true | undefined;
    isKuCoinWallet?: true | undefined;
    isMathWallet?: true | undefined;
    isMetaMask?: true | undefined;
    isOkxWallet?: true | undefined;
    isOKExWallet?: true | undefined;
    isOneInchAndroidWallet?: true | undefined;
    isOneInchIOSWallet?: true | undefined;
    isOpera?: true | undefined;
    isPhantom?: true | undefined;
    isPortal?: true | undefined;
    isRabby?: true | undefined;
    isRainbow?: true | undefined;
    isStatus?: true | undefined;
    isTally?: true | undefined;
    isTokenPocket?: true | undefined;
    isTokenary?: true | undefined;
    isTrust?: true | undefined;
    isTrustWallet?: true | undefined;
    isXDEFI?: true | undefined;
    isZerion?: true | undefined;
    providers?: any[] | undefined;
    _events?: {
        connect?: (() => void) | undefined;
    } | undefined;
    _state?: {
        accounts?: string[] | undefined;
        initialized?: boolean | undefined;
        isConnected?: boolean | undefined;
        isPermanentlyDisconnected?: boolean | undefined;
        isUnlocked?: boolean | undefined;
    } | undefined;
} | undefined, {
    onConnect(connectInfo: import("viem").ProviderConnectInfo): void;
}, {
    [x: `${string}.disconnected`]: true;
    "injected.connected": true;
}>;
export declare const ownbit: import("@wagmi/core").CreateConnectorFn<{
    on: <TEvent extends keyof import("viem").EIP1193EventMap>(event: TEvent, listener: import("viem").EIP1193EventMap[TEvent]) => void;
    removeListener: <TEvent_1 extends keyof import("viem").EIP1193EventMap>(event: TEvent_1, listener: import("viem").EIP1193EventMap[TEvent_1]) => void;
    request: import("viem").EIP1193RequestFn<[{
        Method: "web3_clientVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "web3_sha3";
        Parameters: [data: `0x${string}`];
        ReturnType: string;
    }, {
        Method: "net_listening";
        Parameters?: undefined;
        ReturnType: boolean;
    }, {
        Method: "net_peerCount";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "net_version";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_blockNumber";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_call";
        Parameters: [transaction: Partial<import("viem").RpcTransactionRequest>] | [transaction: Partial<import("viem").RpcTransactionRequest>, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_coinbase";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_feeHistory";
        Parameters: [blockCount: `0x${string}`, newestBlock: `0x${string}` | import("viem").BlockTag, rewardPercentiles: number[] | undefined];
        ReturnType: import("viem").RpcFeeHistory;
    }, {
        Method: "eth_gasPrice";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBalance";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockByHash";
        Parameters: [hash: `0x${string}`, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockTransactionCountByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockTransactionCountByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getCode";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getFilterChanges";
        Parameters: [filterId: `0x${string}`];
        ReturnType: `0x${string}`[] | import("viem").RpcLog[];
    }, {
        Method: "eth_getFilterLogs";
        Parameters: [filterId: `0x${string}`];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getLogs";
        Parameters: [{
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        } & ({
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            blockHash?: undefined;
        } | {
            fromBlock?: undefined;
            toBlock?: undefined;
            blockHash?: `0x${string}` | undefined;
        })];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getProof";
        Parameters: [address: `0x${string}`, storageKeys: `0x${string}`[], block: `0x${string}` | import("viem").BlockTag];
        ReturnType: import("viem").RpcProof;
    }, {
        Method: "eth_getStorageAt";
        Parameters: [address: `0x${string}`, index: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionCount";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionReceipt";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransactionReceipt | null;
    }, {
        Method: "eth_getUncleByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleCountByBlockHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getUncleCountByBlockNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_maxPriorityFeePerGas";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newBlockFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newFilter";
        Parameters: [filter: {
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        }];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newPendingTransactionFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_protocolVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_uninstallFilter";
        Parameters: [filterId: `0x${string}`];
        ReturnType: boolean;
    }, {
        Method: "eth_accounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_requestAccounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_sendTransaction";
        Parameters: [transaction: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sign";
        Parameters: [address: `0x${string}`, data: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTransaction";
        Parameters: [request: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTypedData_v4";
        Parameters: [address: `0x${string}`, message: string];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_syncing";
        Parameters?: undefined;
        ReturnType: false | import("viem").NetworkSync;
    }, {
        Method: "personal_sign";
        Parameters: [data: `0x${string}`, address: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "wallet_addEthereumChain";
        Parameters: [chain: import("viem").AddEthereumChainParameter];
        ReturnType: null;
    }, {
        Method: "wallet_getPermissions";
        Parameters?: undefined;
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_requestPermissions";
        Parameters: [permissions: {
            eth_accounts: Record<string, any>;
        }];
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_switchEthereumChain";
        Parameters: [chain: {
            chainId: string;
        }];
        ReturnType: null;
    }, {
        Method: "wallet_watchAsset";
        Parameters: import("viem").WatchAssetParams;
        ReturnType: boolean;
    }]>;
    isApexWallet?: true | undefined;
    isAvalanche?: true | undefined;
    isBackpack?: true | undefined;
    isBifrost?: true | undefined;
    isBitKeep?: true | undefined;
    isBitski?: true | undefined;
    isBlockWallet?: true | undefined;
    isBraveWallet?: true | undefined;
    isCoinbaseWallet?: true | undefined;
    isDawn?: true | undefined;
    isEnkrypt?: true | undefined;
    isExodus?: true | undefined;
    isFrame?: true | undefined;
    isFrontier?: true | undefined;
    isGamestop?: true | undefined;
    isHyperPay?: true | undefined;
    isImToken?: true | undefined;
    isKuCoinWallet?: true | undefined;
    isMathWallet?: true | undefined;
    isMetaMask?: true | undefined;
    isOkxWallet?: true | undefined;
    isOKExWallet?: true | undefined;
    isOneInchAndroidWallet?: true | undefined;
    isOneInchIOSWallet?: true | undefined;
    isOpera?: true | undefined;
    isPhantom?: true | undefined;
    isPortal?: true | undefined;
    isRabby?: true | undefined;
    isRainbow?: true | undefined;
    isStatus?: true | undefined;
    isTally?: true | undefined;
    isTokenPocket?: true | undefined;
    isTokenary?: true | undefined;
    isTrust?: true | undefined;
    isTrustWallet?: true | undefined;
    isXDEFI?: true | undefined;
    isZerion?: true | undefined;
    providers?: any[] | undefined;
    _events?: {
        connect?: (() => void) | undefined;
    } | undefined;
    _state?: {
        accounts?: string[] | undefined;
        initialized?: boolean | undefined;
        isConnected?: boolean | undefined;
        isPermanentlyDisconnected?: boolean | undefined;
        isUnlocked?: boolean | undefined;
    } | undefined;
} | undefined, {
    onConnect(connectInfo: import("viem").ProviderConnectInfo): void;
}, {
    [x: `${string}.disconnected`]: true;
    "injected.connected": true;
}>;
export declare const tokenpocket: import("@wagmi/core").CreateConnectorFn<{
    on: <TEvent extends keyof import("viem").EIP1193EventMap>(event: TEvent, listener: import("viem").EIP1193EventMap[TEvent]) => void;
    removeListener: <TEvent_1 extends keyof import("viem").EIP1193EventMap>(event: TEvent_1, listener: import("viem").EIP1193EventMap[TEvent_1]) => void;
    request: import("viem").EIP1193RequestFn<[{
        Method: "web3_clientVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "web3_sha3";
        Parameters: [data: `0x${string}`];
        ReturnType: string;
    }, {
        Method: "net_listening";
        Parameters?: undefined;
        ReturnType: boolean;
    }, {
        Method: "net_peerCount";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "net_version";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_blockNumber";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_call";
        Parameters: [transaction: Partial<import("viem").RpcTransactionRequest>] | [transaction: Partial<import("viem").RpcTransactionRequest>, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_coinbase";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_feeHistory";
        Parameters: [blockCount: `0x${string}`, newestBlock: `0x${string}` | import("viem").BlockTag, rewardPercentiles: number[] | undefined];
        ReturnType: import("viem").RpcFeeHistory;
    }, {
        Method: "eth_gasPrice";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBalance";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockByHash";
        Parameters: [hash: `0x${string}`, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockTransactionCountByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockTransactionCountByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getCode";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getFilterChanges";
        Parameters: [filterId: `0x${string}`];
        ReturnType: `0x${string}`[] | import("viem").RpcLog[];
    }, {
        Method: "eth_getFilterLogs";
        Parameters: [filterId: `0x${string}`];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getLogs";
        Parameters: [{
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        } & ({
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            blockHash?: undefined;
        } | {
            fromBlock?: undefined;
            toBlock?: undefined;
            blockHash?: `0x${string}` | undefined;
        })];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getProof";
        Parameters: [address: `0x${string}`, storageKeys: `0x${string}`[], block: `0x${string}` | import("viem").BlockTag];
        ReturnType: import("viem").RpcProof;
    }, {
        Method: "eth_getStorageAt";
        Parameters: [address: `0x${string}`, index: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionCount";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionReceipt";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransactionReceipt | null;
    }, {
        Method: "eth_getUncleByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleCountByBlockHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getUncleCountByBlockNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_maxPriorityFeePerGas";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newBlockFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newFilter";
        Parameters: [filter: {
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        }];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newPendingTransactionFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_protocolVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_uninstallFilter";
        Parameters: [filterId: `0x${string}`];
        ReturnType: boolean;
    }, {
        Method: "eth_accounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_requestAccounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_sendTransaction";
        Parameters: [transaction: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sign";
        Parameters: [address: `0x${string}`, data: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTransaction";
        Parameters: [request: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTypedData_v4";
        Parameters: [address: `0x${string}`, message: string];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_syncing";
        Parameters?: undefined;
        ReturnType: false | import("viem").NetworkSync;
    }, {
        Method: "personal_sign";
        Parameters: [data: `0x${string}`, address: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "wallet_addEthereumChain";
        Parameters: [chain: import("viem").AddEthereumChainParameter];
        ReturnType: null;
    }, {
        Method: "wallet_getPermissions";
        Parameters?: undefined;
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_requestPermissions";
        Parameters: [permissions: {
            eth_accounts: Record<string, any>;
        }];
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_switchEthereumChain";
        Parameters: [chain: {
            chainId: string;
        }];
        ReturnType: null;
    }, {
        Method: "wallet_watchAsset";
        Parameters: import("viem").WatchAssetParams;
        ReturnType: boolean;
    }]>;
    isApexWallet?: true | undefined;
    isAvalanche?: true | undefined;
    isBackpack?: true | undefined;
    isBifrost?: true | undefined;
    isBitKeep?: true | undefined;
    isBitski?: true | undefined;
    isBlockWallet?: true | undefined;
    isBraveWallet?: true | undefined;
    isCoinbaseWallet?: true | undefined;
    isDawn?: true | undefined;
    isEnkrypt?: true | undefined;
    isExodus?: true | undefined;
    isFrame?: true | undefined;
    isFrontier?: true | undefined;
    isGamestop?: true | undefined;
    isHyperPay?: true | undefined;
    isImToken?: true | undefined;
    isKuCoinWallet?: true | undefined;
    isMathWallet?: true | undefined;
    isMetaMask?: true | undefined;
    isOkxWallet?: true | undefined;
    isOKExWallet?: true | undefined;
    isOneInchAndroidWallet?: true | undefined;
    isOneInchIOSWallet?: true | undefined;
    isOpera?: true | undefined;
    isPhantom?: true | undefined;
    isPortal?: true | undefined;
    isRabby?: true | undefined;
    isRainbow?: true | undefined;
    isStatus?: true | undefined;
    isTally?: true | undefined;
    isTokenPocket?: true | undefined;
    isTokenary?: true | undefined;
    isTrust?: true | undefined;
    isTrustWallet?: true | undefined;
    isXDEFI?: true | undefined;
    isZerion?: true | undefined;
    providers?: any[] | undefined;
    _events?: {
        connect?: (() => void) | undefined;
    } | undefined;
    _state?: {
        accounts?: string[] | undefined;
        initialized?: boolean | undefined;
        isConnected?: boolean | undefined;
        isPermanentlyDisconnected?: boolean | undefined;
        isUnlocked?: boolean | undefined;
    } | undefined;
} | undefined, {
    onConnect(connectInfo: import("viem").ProviderConnectInfo): void;
}, {
    [x: `${string}.disconnected`]: true;
    "injected.connected": true;
}>;
export declare const xdefi: import("@wagmi/core").CreateConnectorFn<{
    on: <TEvent extends keyof import("viem").EIP1193EventMap>(event: TEvent, listener: import("viem").EIP1193EventMap[TEvent]) => void;
    removeListener: <TEvent_1 extends keyof import("viem").EIP1193EventMap>(event: TEvent_1, listener: import("viem").EIP1193EventMap[TEvent_1]) => void;
    request: import("viem").EIP1193RequestFn<[{
        Method: "web3_clientVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "web3_sha3";
        Parameters: [data: `0x${string}`];
        ReturnType: string;
    }, {
        Method: "net_listening";
        Parameters?: undefined;
        ReturnType: boolean;
    }, {
        Method: "net_peerCount";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "net_version";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_blockNumber";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_call";
        Parameters: [transaction: Partial<import("viem").RpcTransactionRequest>] | [transaction: Partial<import("viem").RpcTransactionRequest>, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_coinbase";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_feeHistory";
        Parameters: [blockCount: `0x${string}`, newestBlock: `0x${string}` | import("viem").BlockTag, rewardPercentiles: number[] | undefined];
        ReturnType: import("viem").RpcFeeHistory;
    }, {
        Method: "eth_gasPrice";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBalance";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockByHash";
        Parameters: [hash: `0x${string}`, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockTransactionCountByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockTransactionCountByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getCode";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getFilterChanges";
        Parameters: [filterId: `0x${string}`];
        ReturnType: `0x${string}`[] | import("viem").RpcLog[];
    }, {
        Method: "eth_getFilterLogs";
        Parameters: [filterId: `0x${string}`];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getLogs";
        Parameters: [{
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        } & ({
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            blockHash?: undefined;
        } | {
            fromBlock?: undefined;
            toBlock?: undefined;
            blockHash?: `0x${string}` | undefined;
        })];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getProof";
        Parameters: [address: `0x${string}`, storageKeys: `0x${string}`[], block: `0x${string}` | import("viem").BlockTag];
        ReturnType: import("viem").RpcProof;
    }, {
        Method: "eth_getStorageAt";
        Parameters: [address: `0x${string}`, index: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionCount";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionReceipt";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransactionReceipt | null;
    }, {
        Method: "eth_getUncleByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleCountByBlockHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getUncleCountByBlockNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_maxPriorityFeePerGas";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newBlockFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newFilter";
        Parameters: [filter: {
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        }];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newPendingTransactionFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_protocolVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_uninstallFilter";
        Parameters: [filterId: `0x${string}`];
        ReturnType: boolean;
    }, {
        Method: "eth_accounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_requestAccounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_sendTransaction";
        Parameters: [transaction: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sign";
        Parameters: [address: `0x${string}`, data: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTransaction";
        Parameters: [request: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTypedData_v4";
        Parameters: [address: `0x${string}`, message: string];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_syncing";
        Parameters?: undefined;
        ReturnType: false | import("viem").NetworkSync;
    }, {
        Method: "personal_sign";
        Parameters: [data: `0x${string}`, address: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "wallet_addEthereumChain";
        Parameters: [chain: import("viem").AddEthereumChainParameter];
        ReturnType: null;
    }, {
        Method: "wallet_getPermissions";
        Parameters?: undefined;
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_requestPermissions";
        Parameters: [permissions: {
            eth_accounts: Record<string, any>;
        }];
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_switchEthereumChain";
        Parameters: [chain: {
            chainId: string;
        }];
        ReturnType: null;
    }, {
        Method: "wallet_watchAsset";
        Parameters: import("viem").WatchAssetParams;
        ReturnType: boolean;
    }]>;
    isApexWallet?: true | undefined;
    isAvalanche?: true | undefined;
    isBackpack?: true | undefined;
    isBifrost?: true | undefined;
    isBitKeep?: true | undefined;
    isBitski?: true | undefined;
    isBlockWallet?: true | undefined;
    isBraveWallet?: true | undefined;
    isCoinbaseWallet?: true | undefined;
    isDawn?: true | undefined;
    isEnkrypt?: true | undefined;
    isExodus?: true | undefined;
    isFrame?: true | undefined;
    isFrontier?: true | undefined;
    isGamestop?: true | undefined;
    isHyperPay?: true | undefined;
    isImToken?: true | undefined;
    isKuCoinWallet?: true | undefined;
    isMathWallet?: true | undefined;
    isMetaMask?: true | undefined;
    isOkxWallet?: true | undefined;
    isOKExWallet?: true | undefined;
    isOneInchAndroidWallet?: true | undefined;
    isOneInchIOSWallet?: true | undefined;
    isOpera?: true | undefined;
    isPhantom?: true | undefined;
    isPortal?: true | undefined;
    isRabby?: true | undefined;
    isRainbow?: true | undefined;
    isStatus?: true | undefined;
    isTally?: true | undefined;
    isTokenPocket?: true | undefined;
    isTokenary?: true | undefined;
    isTrust?: true | undefined;
    isTrustWallet?: true | undefined;
    isXDEFI?: true | undefined;
    isZerion?: true | undefined;
    providers?: any[] | undefined;
    _events?: {
        connect?: (() => void) | undefined;
    } | undefined;
    _state?: {
        accounts?: string[] | undefined;
        initialized?: boolean | undefined;
        isConnected?: boolean | undefined;
        isPermanentlyDisconnected?: boolean | undefined;
        isUnlocked?: boolean | undefined;
    } | undefined;
} | undefined, {
    onConnect(connectInfo: import("viem").ProviderConnectInfo): void;
}, {
    [x: `${string}.disconnected`]: true;
    "injected.connected": true;
}>;
export declare const oneinch: import("@wagmi/core").CreateConnectorFn<{
    on: <TEvent extends keyof import("viem").EIP1193EventMap>(event: TEvent, listener: import("viem").EIP1193EventMap[TEvent]) => void;
    removeListener: <TEvent_1 extends keyof import("viem").EIP1193EventMap>(event: TEvent_1, listener: import("viem").EIP1193EventMap[TEvent_1]) => void;
    request: import("viem").EIP1193RequestFn<[{
        Method: "web3_clientVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "web3_sha3";
        Parameters: [data: `0x${string}`];
        ReturnType: string;
    }, {
        Method: "net_listening";
        Parameters?: undefined;
        ReturnType: boolean;
    }, {
        Method: "net_peerCount";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "net_version";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_blockNumber";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_call";
        Parameters: [transaction: Partial<import("viem").RpcTransactionRequest>] | [transaction: Partial<import("viem").RpcTransactionRequest>, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_coinbase";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_feeHistory";
        Parameters: [blockCount: `0x${string}`, newestBlock: `0x${string}` | import("viem").BlockTag, rewardPercentiles: number[] | undefined];
        ReturnType: import("viem").RpcFeeHistory;
    }, {
        Method: "eth_gasPrice";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBalance";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockByHash";
        Parameters: [hash: `0x${string}`, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockTransactionCountByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockTransactionCountByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getCode";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getFilterChanges";
        Parameters: [filterId: `0x${string}`];
        ReturnType: `0x${string}`[] | import("viem").RpcLog[];
    }, {
        Method: "eth_getFilterLogs";
        Parameters: [filterId: `0x${string}`];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getLogs";
        Parameters: [{
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        } & ({
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            blockHash?: undefined;
        } | {
            fromBlock?: undefined;
            toBlock?: undefined;
            blockHash?: `0x${string}` | undefined;
        })];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getProof";
        Parameters: [address: `0x${string}`, storageKeys: `0x${string}`[], block: `0x${string}` | import("viem").BlockTag];
        ReturnType: import("viem").RpcProof;
    }, {
        Method: "eth_getStorageAt";
        Parameters: [address: `0x${string}`, index: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionCount";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionReceipt";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransactionReceipt | null;
    }, {
        Method: "eth_getUncleByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleCountByBlockHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getUncleCountByBlockNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_maxPriorityFeePerGas";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newBlockFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newFilter";
        Parameters: [filter: {
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        }];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newPendingTransactionFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_protocolVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_uninstallFilter";
        Parameters: [filterId: `0x${string}`];
        ReturnType: boolean;
    }, {
        Method: "eth_accounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_requestAccounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_sendTransaction";
        Parameters: [transaction: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sign";
        Parameters: [address: `0x${string}`, data: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTransaction";
        Parameters: [request: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTypedData_v4";
        Parameters: [address: `0x${string}`, message: string];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_syncing";
        Parameters?: undefined;
        ReturnType: false | import("viem").NetworkSync;
    }, {
        Method: "personal_sign";
        Parameters: [data: `0x${string}`, address: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "wallet_addEthereumChain";
        Parameters: [chain: import("viem").AddEthereumChainParameter];
        ReturnType: null;
    }, {
        Method: "wallet_getPermissions";
        Parameters?: undefined;
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_requestPermissions";
        Parameters: [permissions: {
            eth_accounts: Record<string, any>;
        }];
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_switchEthereumChain";
        Parameters: [chain: {
            chainId: string;
        }];
        ReturnType: null;
    }, {
        Method: "wallet_watchAsset";
        Parameters: import("viem").WatchAssetParams;
        ReturnType: boolean;
    }]>;
    isApexWallet?: true | undefined;
    isAvalanche?: true | undefined;
    isBackpack?: true | undefined;
    isBifrost?: true | undefined;
    isBitKeep?: true | undefined;
    isBitski?: true | undefined;
    isBlockWallet?: true | undefined;
    isBraveWallet?: true | undefined;
    isCoinbaseWallet?: true | undefined;
    isDawn?: true | undefined;
    isEnkrypt?: true | undefined;
    isExodus?: true | undefined;
    isFrame?: true | undefined;
    isFrontier?: true | undefined;
    isGamestop?: true | undefined;
    isHyperPay?: true | undefined;
    isImToken?: true | undefined;
    isKuCoinWallet?: true | undefined;
    isMathWallet?: true | undefined;
    isMetaMask?: true | undefined;
    isOkxWallet?: true | undefined;
    isOKExWallet?: true | undefined;
    isOneInchAndroidWallet?: true | undefined;
    isOneInchIOSWallet?: true | undefined;
    isOpera?: true | undefined;
    isPhantom?: true | undefined;
    isPortal?: true | undefined;
    isRabby?: true | undefined;
    isRainbow?: true | undefined;
    isStatus?: true | undefined;
    isTally?: true | undefined;
    isTokenPocket?: true | undefined;
    isTokenary?: true | undefined;
    isTrust?: true | undefined;
    isTrustWallet?: true | undefined;
    isXDEFI?: true | undefined;
    isZerion?: true | undefined;
    providers?: any[] | undefined;
    _events?: {
        connect?: (() => void) | undefined;
    } | undefined;
    _state?: {
        accounts?: string[] | undefined;
        initialized?: boolean | undefined;
        isConnected?: boolean | undefined;
        isPermanentlyDisconnected?: boolean | undefined;
        isUnlocked?: boolean | undefined;
    } | undefined;
} | undefined, {
    onConnect(connectInfo: import("viem").ProviderConnectInfo): void;
}, {
    [x: `${string}.disconnected`]: true;
    "injected.connected": true;
}>;
export declare const tokenary: import("@wagmi/core").CreateConnectorFn<{
    on: <TEvent extends keyof import("viem").EIP1193EventMap>(event: TEvent, listener: import("viem").EIP1193EventMap[TEvent]) => void;
    removeListener: <TEvent_1 extends keyof import("viem").EIP1193EventMap>(event: TEvent_1, listener: import("viem").EIP1193EventMap[TEvent_1]) => void;
    request: import("viem").EIP1193RequestFn<[{
        Method: "web3_clientVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "web3_sha3";
        Parameters: [data: `0x${string}`];
        ReturnType: string;
    }, {
        Method: "net_listening";
        Parameters?: undefined;
        ReturnType: boolean;
    }, {
        Method: "net_peerCount";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "net_version";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_blockNumber";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_call";
        Parameters: [transaction: Partial<import("viem").RpcTransactionRequest>] | [transaction: Partial<import("viem").RpcTransactionRequest>, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_coinbase";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_feeHistory";
        Parameters: [blockCount: `0x${string}`, newestBlock: `0x${string}` | import("viem").BlockTag, rewardPercentiles: number[] | undefined];
        ReturnType: import("viem").RpcFeeHistory;
    }, {
        Method: "eth_gasPrice";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBalance";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockByHash";
        Parameters: [hash: `0x${string}`, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockTransactionCountByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockTransactionCountByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getCode";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getFilterChanges";
        Parameters: [filterId: `0x${string}`];
        ReturnType: `0x${string}`[] | import("viem").RpcLog[];
    }, {
        Method: "eth_getFilterLogs";
        Parameters: [filterId: `0x${string}`];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getLogs";
        Parameters: [{
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        } & ({
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            blockHash?: undefined;
        } | {
            fromBlock?: undefined;
            toBlock?: undefined;
            blockHash?: `0x${string}` | undefined;
        })];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getProof";
        Parameters: [address: `0x${string}`, storageKeys: `0x${string}`[], block: `0x${string}` | import("viem").BlockTag];
        ReturnType: import("viem").RpcProof;
    }, {
        Method: "eth_getStorageAt";
        Parameters: [address: `0x${string}`, index: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionCount";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionReceipt";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransactionReceipt | null;
    }, {
        Method: "eth_getUncleByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleCountByBlockHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getUncleCountByBlockNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_maxPriorityFeePerGas";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newBlockFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newFilter";
        Parameters: [filter: {
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        }];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newPendingTransactionFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_protocolVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_uninstallFilter";
        Parameters: [filterId: `0x${string}`];
        ReturnType: boolean;
    }, {
        Method: "eth_accounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_requestAccounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_sendTransaction";
        Parameters: [transaction: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sign";
        Parameters: [address: `0x${string}`, data: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTransaction";
        Parameters: [request: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTypedData_v4";
        Parameters: [address: `0x${string}`, message: string];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_syncing";
        Parameters?: undefined;
        ReturnType: false | import("viem").NetworkSync;
    }, {
        Method: "personal_sign";
        Parameters: [data: `0x${string}`, address: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "wallet_addEthereumChain";
        Parameters: [chain: import("viem").AddEthereumChainParameter];
        ReturnType: null;
    }, {
        Method: "wallet_getPermissions";
        Parameters?: undefined;
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_requestPermissions";
        Parameters: [permissions: {
            eth_accounts: Record<string, any>;
        }];
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_switchEthereumChain";
        Parameters: [chain: {
            chainId: string;
        }];
        ReturnType: null;
    }, {
        Method: "wallet_watchAsset";
        Parameters: import("viem").WatchAssetParams;
        ReturnType: boolean;
    }]>;
    isApexWallet?: true | undefined;
    isAvalanche?: true | undefined;
    isBackpack?: true | undefined;
    isBifrost?: true | undefined;
    isBitKeep?: true | undefined;
    isBitski?: true | undefined;
    isBlockWallet?: true | undefined;
    isBraveWallet?: true | undefined;
    isCoinbaseWallet?: true | undefined;
    isDawn?: true | undefined;
    isEnkrypt?: true | undefined;
    isExodus?: true | undefined;
    isFrame?: true | undefined;
    isFrontier?: true | undefined;
    isGamestop?: true | undefined;
    isHyperPay?: true | undefined;
    isImToken?: true | undefined;
    isKuCoinWallet?: true | undefined;
    isMathWallet?: true | undefined;
    isMetaMask?: true | undefined;
    isOkxWallet?: true | undefined;
    isOKExWallet?: true | undefined;
    isOneInchAndroidWallet?: true | undefined;
    isOneInchIOSWallet?: true | undefined;
    isOpera?: true | undefined;
    isPhantom?: true | undefined;
    isPortal?: true | undefined;
    isRabby?: true | undefined;
    isRainbow?: true | undefined;
    isStatus?: true | undefined;
    isTally?: true | undefined;
    isTokenPocket?: true | undefined;
    isTokenary?: true | undefined;
    isTrust?: true | undefined;
    isTrustWallet?: true | undefined;
    isXDEFI?: true | undefined;
    isZerion?: true | undefined;
    providers?: any[] | undefined;
    _events?: {
        connect?: (() => void) | undefined;
    } | undefined;
    _state?: {
        accounts?: string[] | undefined;
        initialized?: boolean | undefined;
        isConnected?: boolean | undefined;
        isPermanentlyDisconnected?: boolean | undefined;
        isUnlocked?: boolean | undefined;
    } | undefined;
} | undefined, {
    onConnect(connectInfo: import("viem").ProviderConnectInfo): void;
}, {
    [x: `${string}.disconnected`]: true;
    "injected.connected": true;
}>;
export declare const okx: import("@wagmi/core").CreateConnectorFn<{
    on: <TEvent extends keyof import("viem").EIP1193EventMap>(event: TEvent, listener: import("viem").EIP1193EventMap[TEvent]) => void;
    removeListener: <TEvent_1 extends keyof import("viem").EIP1193EventMap>(event: TEvent_1, listener: import("viem").EIP1193EventMap[TEvent_1]) => void;
    request: import("viem").EIP1193RequestFn<[{
        Method: "web3_clientVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "web3_sha3";
        Parameters: [data: `0x${string}`];
        ReturnType: string;
    }, {
        Method: "net_listening";
        Parameters?: undefined;
        ReturnType: boolean;
    }, {
        Method: "net_peerCount";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "net_version";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_blockNumber";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_call";
        Parameters: [transaction: Partial<import("viem").RpcTransactionRequest>] | [transaction: Partial<import("viem").RpcTransactionRequest>, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_coinbase";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_feeHistory";
        Parameters: [blockCount: `0x${string}`, newestBlock: `0x${string}` | import("viem").BlockTag, rewardPercentiles: number[] | undefined];
        ReturnType: import("viem").RpcFeeHistory;
    }, {
        Method: "eth_gasPrice";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBalance";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockByHash";
        Parameters: [hash: `0x${string}`, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockTransactionCountByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockTransactionCountByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getCode";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getFilterChanges";
        Parameters: [filterId: `0x${string}`];
        ReturnType: `0x${string}`[] | import("viem").RpcLog[];
    }, {
        Method: "eth_getFilterLogs";
        Parameters: [filterId: `0x${string}`];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getLogs";
        Parameters: [{
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        } & ({
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            blockHash?: undefined;
        } | {
            fromBlock?: undefined;
            toBlock?: undefined;
            blockHash?: `0x${string}` | undefined;
        })];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getProof";
        Parameters: [address: `0x${string}`, storageKeys: `0x${string}`[], block: `0x${string}` | import("viem").BlockTag];
        ReturnType: import("viem").RpcProof;
    }, {
        Method: "eth_getStorageAt";
        Parameters: [address: `0x${string}`, index: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionCount";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionReceipt";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransactionReceipt | null;
    }, {
        Method: "eth_getUncleByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleCountByBlockHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getUncleCountByBlockNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_maxPriorityFeePerGas";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newBlockFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newFilter";
        Parameters: [filter: {
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        }];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newPendingTransactionFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_protocolVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_uninstallFilter";
        Parameters: [filterId: `0x${string}`];
        ReturnType: boolean;
    }, {
        Method: "eth_accounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_requestAccounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_sendTransaction";
        Parameters: [transaction: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sign";
        Parameters: [address: `0x${string}`, data: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTransaction";
        Parameters: [request: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTypedData_v4";
        Parameters: [address: `0x${string}`, message: string];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_syncing";
        Parameters?: undefined;
        ReturnType: false | import("viem").NetworkSync;
    }, {
        Method: "personal_sign";
        Parameters: [data: `0x${string}`, address: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "wallet_addEthereumChain";
        Parameters: [chain: import("viem").AddEthereumChainParameter];
        ReturnType: null;
    }, {
        Method: "wallet_getPermissions";
        Parameters?: undefined;
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_requestPermissions";
        Parameters: [permissions: {
            eth_accounts: Record<string, any>;
        }];
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_switchEthereumChain";
        Parameters: [chain: {
            chainId: string;
        }];
        ReturnType: null;
    }, {
        Method: "wallet_watchAsset";
        Parameters: import("viem").WatchAssetParams;
        ReturnType: boolean;
    }]>;
    isApexWallet?: true | undefined;
    isAvalanche?: true | undefined;
    isBackpack?: true | undefined;
    isBifrost?: true | undefined;
    isBitKeep?: true | undefined;
    isBitski?: true | undefined;
    isBlockWallet?: true | undefined;
    isBraveWallet?: true | undefined;
    isCoinbaseWallet?: true | undefined;
    isDawn?: true | undefined;
    isEnkrypt?: true | undefined;
    isExodus?: true | undefined;
    isFrame?: true | undefined;
    isFrontier?: true | undefined;
    isGamestop?: true | undefined;
    isHyperPay?: true | undefined;
    isImToken?: true | undefined;
    isKuCoinWallet?: true | undefined;
    isMathWallet?: true | undefined;
    isMetaMask?: true | undefined;
    isOkxWallet?: true | undefined;
    isOKExWallet?: true | undefined;
    isOneInchAndroidWallet?: true | undefined;
    isOneInchIOSWallet?: true | undefined;
    isOpera?: true | undefined;
    isPhantom?: true | undefined;
    isPortal?: true | undefined;
    isRabby?: true | undefined;
    isRainbow?: true | undefined;
    isStatus?: true | undefined;
    isTally?: true | undefined;
    isTokenPocket?: true | undefined;
    isTokenary?: true | undefined;
    isTrust?: true | undefined;
    isTrustWallet?: true | undefined;
    isXDEFI?: true | undefined;
    isZerion?: true | undefined;
    providers?: any[] | undefined;
    _events?: {
        connect?: (() => void) | undefined;
    } | undefined;
    _state?: {
        accounts?: string[] | undefined;
        initialized?: boolean | undefined;
        isConnected?: boolean | undefined;
        isPermanentlyDisconnected?: boolean | undefined;
        isUnlocked?: boolean | undefined;
    } | undefined;
} | undefined, {
    onConnect(connectInfo: import("viem").ProviderConnectInfo): void;
}, {
    [x: `${string}.disconnected`]: true;
    "injected.connected": true;
}>;
export declare const exodus: import("@wagmi/core").CreateConnectorFn<{
    on: <TEvent extends keyof import("viem").EIP1193EventMap>(event: TEvent, listener: import("viem").EIP1193EventMap[TEvent]) => void;
    removeListener: <TEvent_1 extends keyof import("viem").EIP1193EventMap>(event: TEvent_1, listener: import("viem").EIP1193EventMap[TEvent_1]) => void;
    request: import("viem").EIP1193RequestFn<[{
        Method: "web3_clientVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "web3_sha3";
        Parameters: [data: `0x${string}`];
        ReturnType: string;
    }, {
        Method: "net_listening";
        Parameters?: undefined;
        ReturnType: boolean;
    }, {
        Method: "net_peerCount";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "net_version";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_blockNumber";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_call";
        Parameters: [transaction: Partial<import("viem").RpcTransactionRequest>] | [transaction: Partial<import("viem").RpcTransactionRequest>, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_coinbase";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_feeHistory";
        Parameters: [blockCount: `0x${string}`, newestBlock: `0x${string}` | import("viem").BlockTag, rewardPercentiles: number[] | undefined];
        ReturnType: import("viem").RpcFeeHistory;
    }, {
        Method: "eth_gasPrice";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBalance";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockByHash";
        Parameters: [hash: `0x${string}`, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockTransactionCountByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockTransactionCountByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getCode";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getFilterChanges";
        Parameters: [filterId: `0x${string}`];
        ReturnType: `0x${string}`[] | import("viem").RpcLog[];
    }, {
        Method: "eth_getFilterLogs";
        Parameters: [filterId: `0x${string}`];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getLogs";
        Parameters: [{
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        } & ({
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            blockHash?: undefined;
        } | {
            fromBlock?: undefined;
            toBlock?: undefined;
            blockHash?: `0x${string}` | undefined;
        })];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getProof";
        Parameters: [address: `0x${string}`, storageKeys: `0x${string}`[], block: `0x${string}` | import("viem").BlockTag];
        ReturnType: import("viem").RpcProof;
    }, {
        Method: "eth_getStorageAt";
        Parameters: [address: `0x${string}`, index: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionCount";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionReceipt";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransactionReceipt | null;
    }, {
        Method: "eth_getUncleByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleCountByBlockHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getUncleCountByBlockNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_maxPriorityFeePerGas";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newBlockFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newFilter";
        Parameters: [filter: {
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        }];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newPendingTransactionFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_protocolVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_uninstallFilter";
        Parameters: [filterId: `0x${string}`];
        ReturnType: boolean;
    }, {
        Method: "eth_accounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_requestAccounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_sendTransaction";
        Parameters: [transaction: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sign";
        Parameters: [address: `0x${string}`, data: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTransaction";
        Parameters: [request: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTypedData_v4";
        Parameters: [address: `0x${string}`, message: string];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_syncing";
        Parameters?: undefined;
        ReturnType: false | import("viem").NetworkSync;
    }, {
        Method: "personal_sign";
        Parameters: [data: `0x${string}`, address: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "wallet_addEthereumChain";
        Parameters: [chain: import("viem").AddEthereumChainParameter];
        ReturnType: null;
    }, {
        Method: "wallet_getPermissions";
        Parameters?: undefined;
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_requestPermissions";
        Parameters: [permissions: {
            eth_accounts: Record<string, any>;
        }];
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_switchEthereumChain";
        Parameters: [chain: {
            chainId: string;
        }];
        ReturnType: null;
    }, {
        Method: "wallet_watchAsset";
        Parameters: import("viem").WatchAssetParams;
        ReturnType: boolean;
    }]>;
    isApexWallet?: true | undefined;
    isAvalanche?: true | undefined;
    isBackpack?: true | undefined;
    isBifrost?: true | undefined;
    isBitKeep?: true | undefined;
    isBitski?: true | undefined;
    isBlockWallet?: true | undefined;
    isBraveWallet?: true | undefined;
    isCoinbaseWallet?: true | undefined;
    isDawn?: true | undefined;
    isEnkrypt?: true | undefined;
    isExodus?: true | undefined;
    isFrame?: true | undefined;
    isFrontier?: true | undefined;
    isGamestop?: true | undefined;
    isHyperPay?: true | undefined;
    isImToken?: true | undefined;
    isKuCoinWallet?: true | undefined;
    isMathWallet?: true | undefined;
    isMetaMask?: true | undefined;
    isOkxWallet?: true | undefined;
    isOKExWallet?: true | undefined;
    isOneInchAndroidWallet?: true | undefined;
    isOneInchIOSWallet?: true | undefined;
    isOpera?: true | undefined;
    isPhantom?: true | undefined;
    isPortal?: true | undefined;
    isRabby?: true | undefined;
    isRainbow?: true | undefined;
    isStatus?: true | undefined;
    isTally?: true | undefined;
    isTokenPocket?: true | undefined;
    isTokenary?: true | undefined;
    isTrust?: true | undefined;
    isTrustWallet?: true | undefined;
    isXDEFI?: true | undefined;
    isZerion?: true | undefined;
    providers?: any[] | undefined;
    _events?: {
        connect?: (() => void) | undefined;
    } | undefined;
    _state?: {
        accounts?: string[] | undefined;
        initialized?: boolean | undefined;
        isConnected?: boolean | undefined;
        isPermanentlyDisconnected?: boolean | undefined;
        isUnlocked?: boolean | undefined;
    } | undefined;
} | undefined, {
    onConnect(connectInfo: import("viem").ProviderConnectInfo): void;
}, {
    [x: `${string}.disconnected`]: true;
    "injected.connected": true;
}>;
export declare const rabby: import("@wagmi/core").CreateConnectorFn<{
    on: <TEvent extends keyof import("viem").EIP1193EventMap>(event: TEvent, listener: import("viem").EIP1193EventMap[TEvent]) => void;
    removeListener: <TEvent_1 extends keyof import("viem").EIP1193EventMap>(event: TEvent_1, listener: import("viem").EIP1193EventMap[TEvent_1]) => void;
    request: import("viem").EIP1193RequestFn<[{
        Method: "web3_clientVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "web3_sha3";
        Parameters: [data: `0x${string}`];
        ReturnType: string;
    }, {
        Method: "net_listening";
        Parameters?: undefined;
        ReturnType: boolean;
    }, {
        Method: "net_peerCount";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "net_version";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_blockNumber";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_call";
        Parameters: [transaction: Partial<import("viem").RpcTransactionRequest>] | [transaction: Partial<import("viem").RpcTransactionRequest>, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_coinbase";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_feeHistory";
        Parameters: [blockCount: `0x${string}`, newestBlock: `0x${string}` | import("viem").BlockTag, rewardPercentiles: number[] | undefined];
        ReturnType: import("viem").RpcFeeHistory;
    }, {
        Method: "eth_gasPrice";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBalance";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockByHash";
        Parameters: [hash: `0x${string}`, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, includeTransactionObjects: boolean];
        ReturnType: import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>> | null;
    }, {
        Method: "eth_getBlockTransactionCountByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getBlockTransactionCountByNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getCode";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getFilterChanges";
        Parameters: [filterId: `0x${string}`];
        ReturnType: `0x${string}`[] | import("viem").RpcLog[];
    }, {
        Method: "eth_getFilterLogs";
        Parameters: [filterId: `0x${string}`];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getLogs";
        Parameters: [{
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        } & ({
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            blockHash?: undefined;
        } | {
            fromBlock?: undefined;
            toBlock?: undefined;
            blockHash?: `0x${string}` | undefined;
        })];
        ReturnType: import("viem").RpcLog[];
    }, {
        Method: "eth_getProof";
        Parameters: [address: `0x${string}`, storageKeys: `0x${string}`[], block: `0x${string}` | import("viem").BlockTag];
        ReturnType: import("viem").RpcProof;
    }, {
        Method: "eth_getStorageAt";
        Parameters: [address: `0x${string}`, index: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionByHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransaction<boolean> | null;
    }, {
        Method: "eth_getTransactionCount";
        Parameters: [address: `0x${string}`, block: `0x${string}` | import("viem").BlockTag | import("viem").RpcBlockIdentifier];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getTransactionReceipt";
        Parameters: [hash: `0x${string}`];
        ReturnType: import("viem").RpcTransactionReceipt | null;
    }, {
        Method: "eth_getUncleByBlockHashAndIndex";
        Parameters: [hash: `0x${string}`, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleByBlockNumberAndIndex";
        Parameters: [block: `0x${string}` | import("viem").BlockTag, index: `0x${string}`];
        ReturnType: import("viem").RpcUncle | null;
    }, {
        Method: "eth_getUncleCountByBlockHash";
        Parameters: [hash: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_getUncleCountByBlockNumber";
        Parameters: [block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_maxPriorityFeePerGas";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newBlockFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newFilter";
        Parameters: [filter: {
            fromBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            toBlock?: `0x${string}` | import("viem").BlockTag | undefined;
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: import("viem").LogTopic[] | undefined;
        }];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_newPendingTransactionFilter";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_protocolVersion";
        Parameters?: undefined;
        ReturnType: string;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_uninstallFilter";
        Parameters: [filterId: `0x${string}`];
        ReturnType: boolean;
    }, {
        Method: "eth_accounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_chainId";
        Parameters?: undefined;
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_estimateGas";
        Parameters: [transaction: import("viem").RpcTransactionRequest] | [transaction: import("viem").RpcTransactionRequest, block: `0x${string}` | import("viem").BlockTag];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_requestAccounts";
        Parameters?: undefined;
        ReturnType: `0x${string}`[];
    }, {
        Method: "eth_sendTransaction";
        Parameters: [transaction: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sendRawTransaction";
        Parameters: [signedTransaction: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_sign";
        Parameters: [address: `0x${string}`, data: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTransaction";
        Parameters: [request: import("viem").RpcTransactionRequest];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_signTypedData_v4";
        Parameters: [address: `0x${string}`, message: string];
        ReturnType: `0x${string}`;
    }, {
        Method: "eth_syncing";
        Parameters?: undefined;
        ReturnType: false | import("viem").NetworkSync;
    }, {
        Method: "personal_sign";
        Parameters: [data: `0x${string}`, address: `0x${string}`];
        ReturnType: `0x${string}`;
    }, {
        Method: "wallet_addEthereumChain";
        Parameters: [chain: import("viem").AddEthereumChainParameter];
        ReturnType: null;
    }, {
        Method: "wallet_getPermissions";
        Parameters?: undefined;
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_requestPermissions";
        Parameters: [permissions: {
            eth_accounts: Record<string, any>;
        }];
        ReturnType: import("viem").WalletPermission[];
    }, {
        Method: "wallet_switchEthereumChain";
        Parameters: [chain: {
            chainId: string;
        }];
        ReturnType: null;
    }, {
        Method: "wallet_watchAsset";
        Parameters: import("viem").WatchAssetParams;
        ReturnType: boolean;
    }]>;
    isApexWallet?: true | undefined;
    isAvalanche?: true | undefined;
    isBackpack?: true | undefined;
    isBifrost?: true | undefined;
    isBitKeep?: true | undefined;
    isBitski?: true | undefined;
    isBlockWallet?: true | undefined;
    isBraveWallet?: true | undefined;
    isCoinbaseWallet?: true | undefined;
    isDawn?: true | undefined;
    isEnkrypt?: true | undefined;
    isExodus?: true | undefined;
    isFrame?: true | undefined;
    isFrontier?: true | undefined;
    isGamestop?: true | undefined;
    isHyperPay?: true | undefined;
    isImToken?: true | undefined;
    isKuCoinWallet?: true | undefined;
    isMathWallet?: true | undefined;
    isMetaMask?: true | undefined;
    isOkxWallet?: true | undefined;
    isOKExWallet?: true | undefined;
    isOneInchAndroidWallet?: true | undefined;
    isOneInchIOSWallet?: true | undefined;
    isOpera?: true | undefined;
    isPhantom?: true | undefined;
    isPortal?: true | undefined;
    isRabby?: true | undefined;
    isRainbow?: true | undefined;
    isStatus?: true | undefined;
    isTally?: true | undefined;
    isTokenPocket?: true | undefined;
    isTokenary?: true | undefined;
    isTrust?: true | undefined;
    isTrustWallet?: true | undefined;
    isXDEFI?: true | undefined;
    isZerion?: true | undefined;
    providers?: any[] | undefined;
    _events?: {
        connect?: (() => void) | undefined;
    } | undefined;
    _state?: {
        accounts?: string[] | undefined;
        initialized?: boolean | undefined;
        isConnected?: boolean | undefined;
        isPermanentlyDisconnected?: boolean | undefined;
        isUnlocked?: boolean | undefined;
    } | undefined;
} | undefined, {
    onConnect(connectInfo: import("viem").ProviderConnectInfo): void;
}, {
    [x: `${string}.disconnected`]: true;
    "injected.connected": true;
}>;
