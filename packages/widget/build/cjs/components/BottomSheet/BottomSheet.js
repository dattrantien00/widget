"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottomSheet = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_1 = require("react");
const hooks_1 = require("../../hooks");
const Dialog_1 = require("../Dialog");
exports.BottomSheet = (0, react_1.forwardRef)(({ elementRef, children, open, onClose }, ref) => {
    const getContainer = (0, hooks_1.useGetScrollableContainer)();
    const openRef = (0, react_1.useRef)(open);
    const [drawerOpen, setDrawerOpen] = (0, react_1.useState)(open);
    const close = (0, react_1.useCallback)(() => {
        setDrawerOpen(false);
        openRef.current = false;
        onClose?.();
    }, [onClose]);
    (0, react_1.useImperativeHandle)(ref, () => ({
        isOpen: () => openRef.current,
        open: () => {
            setDrawerOpen(true);
            openRef.current = true;
        },
        close,
    }), [close]);
    return ((0, jsx_runtime_1.jsx)(material_1.Drawer, { container: getContainer, ref: elementRef, anchor: "bottom", open: drawerOpen, onClose: close, ModalProps: Dialog_1.modalProps, PaperProps: Dialog_1.paperProps, BackdropProps: Dialog_1.backdropProps, disableAutoFocus: true, children: children }));
});
