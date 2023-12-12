"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDifferentChainType = void 0;
const react_hook_form_1 = require("react-hook-form");
const hooks_1 = require("../../hooks");
const providers_1 = require("../../providers");
const useDifferentChainType = () => {
    const [fromChainId, toChainId] = (0, react_hook_form_1.useWatch)({
        name: [providers_1.FormKey.FromChain, providers_1.FormKey.ToChain],
    });
    const { chain: fromChain } = (0, hooks_1.useChain)(fromChainId);
    const { chain: toChain } = (0, hooks_1.useChain)(toChainId);
    const differentChainType = fromChain && toChain && fromChain.chainType !== toChain.chainType;
    return differentChainType;
};
exports.useDifferentChainType = useDifferentChainType;
