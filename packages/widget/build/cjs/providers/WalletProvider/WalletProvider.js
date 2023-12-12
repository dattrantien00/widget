"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const EVMProvider_1 = require("./EVMProvider");
const SDKProviders_1 = require("./SDKProviders");
const SolanaProvider_1 = require("./SolanaProvider");
const WalletProvider = ({ children }) => {
    return ((0, jsx_runtime_1.jsx)(SolanaProvider_1.SolanaProvider, { children: (0, jsx_runtime_1.jsxs)(EVMProvider_1.EVMProvider, { children: [(0, jsx_runtime_1.jsx)(SDKProviders_1.SDKProviders, {}), children] }) }));
};
exports.WalletProvider = WalletProvider;
