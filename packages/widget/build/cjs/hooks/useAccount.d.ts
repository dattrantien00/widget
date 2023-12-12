import { ChainType } from '@lifi/sdk';
import type { WalletAdapter } from '@solana/wallet-adapter-base';
import type { Chain } from 'viem';
import type { Connector } from 'wagmi';
export interface AccountBase {
    address?: string;
    addresses?: readonly string[];
    chain?: Chain;
    chainId?: number;
    chainType?: ChainType;
    isConnected: boolean;
    isConnecting: boolean;
    isDisconnected: boolean;
    isReconnecting: boolean;
    status: 'connected' | 'reconnecting' | 'connecting' | 'disconnected';
}
export interface EVMAccount extends AccountBase {
    chainType: ChainType.EVM;
    connector?: Connector;
}
export interface SVMAccount extends AccountBase {
    chainType: ChainType.SVM;
    connector?: WalletAdapter;
}
export type Account = EVMAccount | SVMAccount;
export interface AccountResult {
    account: Account;
    accounts: Account[];
}
export declare const useAccount: () => AccountResult;
export declare const useAccountDisconnect: () => () => void;
