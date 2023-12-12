import { jsx as _jsx } from "react/jsx-runtime";
import { Drawer } from '@mui/material';
import { forwardRef, useCallback, useImperativeHandle, useRef, useState, } from 'react';
import { useGetScrollableContainer } from '../../hooks';
import { backdropProps, modalProps, paperProps } from '../Dialog';
export const BottomSheet = forwardRef(({ elementRef, children, open, onClose }, ref) => {
    const getContainer = useGetScrollableContainer();
    const openRef = useRef(open);
    const [drawerOpen, setDrawerOpen] = useState(open);
    const close = useCallback(() => {
        setDrawerOpen(false);
        openRef.current = false;
        onClose?.();
    }, [onClose]);
    useImperativeHandle(ref, () => ({
        isOpen: () => openRef.current,
        open: () => {
            setDrawerOpen(true);
            openRef.current = true;
        },
        close,
    }), [close]);
    return (_jsx(Drawer, { container: getContainer, ref: elementRef, anchor: "bottom", open: drawerOpen, onClose: close, ModalProps: modalProps, PaperProps: paperProps, BackdropProps: backdropProps, disableAutoFocus: true, children: children }));
});
