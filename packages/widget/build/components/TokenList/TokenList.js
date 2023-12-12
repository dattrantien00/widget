import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box } from '@mui/material';
import { useRef } from 'react';
import { useWatch } from 'react-hook-form';
import { useAccount, useChain, useDebouncedWatch, useTokenBalances, useTokenSearch, } from '../../hooks';
import { FormKey, FormKeyHelper } from '../../providers';
import { TokenNotFound } from './TokenNotFound';
import { VirtualizedTokenList } from './VirtualizedTokenList';
import { useTokenSelect } from './useTokenSelect';
export const TokenList = ({ formType, height, onClick, }) => {
    const parentRef = useRef(null);
    const { account } = useAccount();
    const [selectedChainId] = useWatch({
        name: [FormKeyHelper.getChainKey(formType)],
    });
    const [tokenSearchFilter] = useDebouncedWatch([FormKey.TokenSearchFilter], 320);
    const { chain, isLoading: isChainLoading } = useChain(selectedChainId);
    const { tokens: chainTokens, tokensWithBalance, isLoading: isTokensLoading, isBalanceLoading, featuredTokens, } = useTokenBalances(selectedChainId);
    let filteredTokens = (tokensWithBalance ??
        chainTokens ??
        []);
    const searchFilter = tokenSearchFilter?.toUpperCase() ?? '';
    filteredTokens = tokenSearchFilter
        ? filteredTokens.filter((token) => token.name.toUpperCase().includes(searchFilter) ||
            token.symbol.toUpperCase().includes(searchFilter) ||
            token.address.toUpperCase().includes(searchFilter))
        : filteredTokens;
    const tokenSearchEnabled = !isTokensLoading &&
        !filteredTokens.length &&
        !!tokenSearchFilter &&
        !!selectedChainId;
    const { token: searchedToken, isLoading: isSearchedTokenLoading } = useTokenSearch(selectedChainId, tokenSearchFilter, tokenSearchEnabled);
    const isLoading = isTokensLoading ||
        isChainLoading ||
        (tokenSearchEnabled && isSearchedTokenLoading);
    const tokens = filteredTokens.length
        ? filteredTokens
        : searchedToken
            ? [searchedToken]
            : filteredTokens;
    const handleTokenClick = useTokenSelect(formType, onClick);
    return (_jsxs(Box, { ref: parentRef, style: { height, overflow: 'auto' }, children: [!tokens.length && !isLoading ? (_jsx(TokenNotFound, { formType: formType })) : null, _jsx(VirtualizedTokenList, { tokens: tokens, featuredTokensLength: featuredTokens?.length, scrollElementRef: parentRef, chainId: selectedChainId, chain: chain, isLoading: isLoading, isBalanceLoading: isBalanceLoading, showBalance: account.isConnected, showFeatured: !tokenSearchFilter, onClick: handleTokenClick })] }));
};
