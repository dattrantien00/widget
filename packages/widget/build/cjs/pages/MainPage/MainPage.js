"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainPage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const ActiveTransactions_1 = require("../../components/ActiveTransactions");
const AmountInput_1 = require("../../components/AmountInput");
const ContractComponent_1 = require("../../components/ContractComponent");
const GasMessage_1 = require("../../components/GasMessage");
const Routes_1 = require("../../components/Routes");
const SelectChainAndToken_1 = require("../../components/SelectChainAndToken");
const SendToWallet_1 = require("../../components/SendToWallet");
const hooks_1 = require("../../hooks");
const providers_1 = require("../../providers");
const MainGasMessage_1 = require("./MainGasMessage");
const MainPage_style_1 = require("./MainPage.style");
const ReviewButton_1 = require("./ReviewButton");
const MainPage = () => {
    const expandable = (0, hooks_1.useExpandableVariant)();
    const { subvariant, contractComponent } = (0, providers_1.useWidgetConfig)();
    const nft = subvariant === 'nft';
    return ((0, jsx_runtime_1.jsxs)(MainPage_style_1.FormContainer, { disableGutters: true, children: [(0, jsx_runtime_1.jsx)(ActiveTransactions_1.ActiveTransactions, { mx: 3, mt: 1, mb: 1 }), nft ? ((0, jsx_runtime_1.jsx)(ContractComponent_1.ContractComponent, { mx: 3, mt: 1, mb: 1, children: contractComponent })) : null, (0, jsx_runtime_1.jsx)(SelectChainAndToken_1.SelectChainAndToken, { mt: 1, mx: 3, mb: 2 }), !nft ? (0, jsx_runtime_1.jsx)(AmountInput_1.AmountInput, { formType: "from", mx: 3, mb: 2 }) : null, !expandable ? (0, jsx_runtime_1.jsx)(Routes_1.Routes, { mx: 3, mb: 2 }) : null, (0, jsx_runtime_1.jsx)(SendToWallet_1.SendToWallet, { mx: 3, mb: 2 }), (0, jsx_runtime_1.jsx)(GasMessage_1.GasRefuelMessage, { mx: 3, mb: 2 }), (0, jsx_runtime_1.jsx)(MainGasMessage_1.MainGasMessage, { mx: 3, mb: 2 }), (0, jsx_runtime_1.jsxs)(material_1.Box, { display: "flex", mx: 3, mb: 1, children: [(0, jsx_runtime_1.jsx)(ReviewButton_1.ReviewButton, {}), (0, jsx_runtime_1.jsx)(SendToWallet_1.SendToWalletButton, {})] })] }));
};
exports.MainPage = MainPage;
