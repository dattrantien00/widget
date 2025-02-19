import { EVM, Solana, config } from '@lifi/sdk';
import { useWallet } from '@solana/wallet-adapter-react';
import { getWalletClient, switchChain } from '@wagmi/core';
import { useEffect } from 'react';
import { useConfig } from 'wagmi';
export const SDKProviders = () => {
    const { wallet } = useWallet();
    const wagmiConfig = useConfig();
    useEffect(() => {
        // Configure SDK Providers
        config.setProviders([
            EVM({
                getWalletClient: () => getWalletClient(wagmiConfig),
                switchChain: async (chainId) => {
                    await switchChain(wagmiConfig, { chainId });
                    return getWalletClient(wagmiConfig);
                },
            }),
            Solana({
                async getWalletAdapter() {
                    return wallet?.adapter;
                },
            }),
        ]);
    }, [wagmiConfig, wallet?.adapter]);
    return null;
};
