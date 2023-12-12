import { ChainId, ChainType } from '@lifi/sdk';
import { useWallet } from '@solana/wallet-adapter-react';
import { useMemo } from 'react';
import { useDisconnect, useAccount as useWagmiAccount } from 'wagmi';
export const useAccount = () => {
    const account = useWagmiAccount();
    const { wallet } = useWallet();
    return useMemo(() => {
        const svm = wallet?.adapter.publicKey
            ? {
                address: wallet?.adapter.publicKey.toString(),
                chainId: ChainId.SOL,
                chainType: ChainType.SVM,
                connector: wallet?.adapter,
                isConnected: Boolean(wallet?.adapter.publicKey),
                isConnecting: false,
                isReconnecting: false,
                isDisconnected: !wallet,
                status: 'connected',
            }
            : {
                chainType: ChainType.SVM,
                isConnected: false,
                isConnecting: false,
                isReconnecting: false,
                isDisconnected: true,
                status: 'disconnected',
            };
        const evm = { ...account, chainType: ChainType.EVM };
        return {
            account: account.isConnected ? evm : svm,
            accounts: [evm, svm],
        };
    }, [account, wallet]);
};
export const useAccountDisconnect = () => {
    const account = useWagmiAccount();
    const { disconnect: wagmiDisconnect } = useDisconnect();
    const { wallet, disconnect } = useWallet();
    return () => {
        if (account.isConnected) {
            wagmiDisconnect();
        }
        if (wallet) {
            disconnect();
        }
    };
};
