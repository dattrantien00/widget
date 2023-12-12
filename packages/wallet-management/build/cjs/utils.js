"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWalletInstalledAsync = exports.isWalletInstalled = void 0;
const isWalletInstalled = (id) => {
    switch (id) {
        case 'default':
            return window.ethereum && !window.ethereum?.isMetaMask;
        case 'io.metamask':
        case 'metaMaskSDK':
            return window?.ethereum?.isMetaMask;
        case 'walletConnect':
            return true;
        case 'coinbaseWalletSDK':
            return window?.coinbaseWalletExtension;
        case 'app.phantom':
            return window?.phantom?.ethereum?.isPhantom;
        case 'gate':
            return window?.gatewallet;
        case 'frontier':
            return window?.frontier;
        case 'math':
            return window?.ethereum?.isMathWallet;
        case 'brave':
            return navigator?.brave && window._web3Ref;
        case 'safepal':
            return window?.safepal;
        case 'taho':
            return window?.tally && window.tally?.isTally;
        case 'block':
            return window?.ethereum?.isBlockWallet;
        case 'binance':
            return window?.BinanceChain;
        case 'trust':
            return window?.trustWallet;
        case 'status':
            return window?.ethereum?.isStatus;
        case 'alpha':
            return window?.ethereum?.isAlphaWallet;
        case 'bitpie':
            return window?.ethereum?.Bitpie;
        case 'dcent':
            return window?.ethereum?.isDcentWallet;
        case 'frame':
            return window?.frame;
        case 'hyperpay':
            return window?.ethereum?.hiWallet;
        case 'imtoken':
            return window?.ethereum?.isImToken;
        case 'liquality':
            return window?.liquality;
        case 'ownbit':
            return window?.ethereum?.isOwnbit;
        case 'xdefi':
            return window?.ethereum?.__XDEFI;
        case 'tokenpocket':
            return (window?.ethereum?.isTokenPocket &&
                !window.ethereum?.isTp);
        case 'oneinch':
            return window?.ethereum?.isOneInchIOSWallet;
        case 'tokenary':
            return window.ethereum?.isTokenary;
        case 'okx':
            return window.okxwallet;
        case 'exodus':
            return window.exodus?.ethereum;
        default:
            return false;
    }
};
exports.isWalletInstalled = isWalletInstalled;
const isWalletInstalledAsync = async (id) => {
    switch (id) {
        case 'safe': {
            // in Multisig env, window.parent is not equal to window
            const isIFrameEnvironment = window?.parent !== window;
            if (!isIFrameEnvironment) {
                return false;
            }
            const sdk = new (await Promise.resolve().then(() => require('@safe-global/safe-apps-sdk'))).default();
            try {
                const accountInfo = await Promise.race([
                    sdk.safe.getInfo(),
                    new Promise((resolve) => setTimeout(resolve, 200)),
                ]);
                return !!accountInfo?.safeAddress;
            }
            catch (error) {
                return false;
            }
        }
        default:
            return (0, exports.isWalletInstalled)(id);
    }
};
exports.isWalletInstalledAsync = isWalletInstalledAsync;
