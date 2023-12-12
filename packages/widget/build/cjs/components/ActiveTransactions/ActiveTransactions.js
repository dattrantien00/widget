"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActiveTransactions = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_i18next_1 = require("react-i18next");
const react_router_dom_1 = require("react-router-dom");
const hooks_1 = require("../../hooks");
const stores_1 = require("../../stores");
const utils_1 = require("../../utils");
const Card_1 = require("../Card");
const ActiveTransactionItem_1 = require("./ActiveTransactionItem");
const ActiveTransactions_style_1 = require("./ActiveTransactions.style");
const ActiveTransactions = (props) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { account } = (0, hooks_1.useAccount)();
    const executingRoutes = (0, stores_1.useExecutingRoutesIds)(account.address);
    if (!executingRoutes?.length) {
        return null;
    }
    const handleShowAll = () => {
        navigate(utils_1.navigationRoutes.activeTransactions);
    };
    const hasShowAll = executingRoutes?.length > 2;
    return ((0, jsx_runtime_1.jsxs)(Card_1.Card, { variant: "selected", selectionColor: "secondary", ...props, children: [(0, jsx_runtime_1.jsx)(Card_1.CardTitle, { children: t('header.activeTransactions') }), (0, jsx_runtime_1.jsx)(material_1.Stack, { spacing: 1.5, pt: 1.5, pb: hasShowAll ? 0 : 2, children: executingRoutes.slice(0, 2).map((routeId) => ((0, jsx_runtime_1.jsx)(ActiveTransactionItem_1.ActiveTransactionItem, { routeId: routeId, dense: true }, routeId))) }), hasShowAll ? ((0, jsx_runtime_1.jsx)(ActiveTransactions_style_1.ShowAllButton, { disableRipple: true, fullWidth: true, onClick: handleShowAll, children: t('button.showAll') })) : null] }));
};
exports.ActiveTransactions = ActiveTransactions;
