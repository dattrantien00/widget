import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useRef } from 'react';
import { createWithEqualityFn } from 'zustand/traditional';
export const SplitSubvariantStoreContext = createContext(null);
const shouldRecreateStore = (store, props) => {
    const { state } = store.getState();
    return state !== props.state;
};
export function SplitSubvariantStoreProvider({ children, ...props }) {
    const storeRef = useRef();
    if (!storeRef.current || shouldRecreateStore(storeRef.current, props)) {
        storeRef.current = createSplitSubvariantStore(props);
    }
    return (_jsx(SplitSubvariantStoreContext.Provider, { value: storeRef.current, children: children }));
}
export function useSplitSubvariantStore(selector) {
    const useStore = useContext(SplitSubvariantStoreContext);
    if (!useStore) {
        throw new Error(`You forgot to wrap your component in <${SplitSubvariantStoreProvider.name}>.`);
    }
    return useStore(selector);
}
export function useSplitSubvariantStoreContext() {
    const useStore = useContext(SplitSubvariantStoreContext);
    if (!useStore) {
        throw new Error(`You forgot to wrap your component in <${SplitSubvariantStoreProvider.name}>.`);
    }
    return useStore;
}
export const createSplitSubvariantStore = ({ state }) => createWithEqualityFn((set) => ({
    state,
    setState(state) {
        set(() => ({
            state,
        }));
    },
}), Object.is);
