"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormKeyHelper = exports.FormKey = void 0;
var FormKey;
(function (FormKey) {
    FormKey["ContractOutputsToken"] = "contractOutputsToken";
    FormKey["FromAmount"] = "fromAmount";
    FormKey["FromChain"] = "fromChain";
    FormKey["FromToken"] = "fromToken";
    FormKey["ToAddress"] = "toAddress";
    FormKey["ToAmount"] = "toAmount";
    FormKey["ToChain"] = "toChain";
    FormKey["ToContractAddress"] = "toContractAddress";
    FormKey["ToContractCallData"] = "toContractCallData";
    FormKey["ToContractGasLimit"] = "ToContractGasLimit";
    FormKey["ToToken"] = "toToken";
    FormKey["TokenSearchFilter"] = "tokenSearchFilter";
})(FormKey || (exports.FormKey = FormKey = {}));
exports.FormKeyHelper = {
    getChainKey: (formType) => `${formType}Chain`,
    getTokenKey: (formType) => `${formType}Token`,
    getAmountKey: (formType) => `${formType}Amount`,
};
