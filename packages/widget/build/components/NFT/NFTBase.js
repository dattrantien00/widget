import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Link, Skeleton, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Token } from '../Token';
import { PreviewAvatar } from './NFT.style';
export const NFTBase = ({ imageUrl, isLoading, collectionName, assetName, owner, token, }) => {
    const { t } = useTranslation();
    return (_jsxs(Box, { p: 2, children: [_jsxs(Box, { display: "flex", children: [isLoading ? (_jsx(Skeleton, { width: 96, height: 96, variant: "rectangular", sx: { borderRadius: 1 } })) : (_jsx(PreviewAvatar, { src: imageUrl })), _jsxs(Box, { ml: 2, children: [isLoading ? (_jsx(Skeleton, { width: 144, height: 21, variant: "text" })) : (_jsx(Typography, { fontSize: 14, color: "text.secondary", children: collectionName })), isLoading ? (_jsx(Skeleton, { width: 112, height: 27, variant: "text" })) : (_jsx(Typography, { fontSize: 18, fontWeight: 600, children: assetName })), isLoading ? (_jsx(Skeleton, { width: 128, height: 21, variant: "text" })) : owner ? (_jsxs(Typography, { fontSize: 14, color: "text.secondary", children: [t('main.ownedBy'), ' ', _jsx(Link, { href: owner.url, target: "_blank", underline: "none", color: "primary", children: owner.name })] })) : null] })] }), _jsx(Token, { token: token, isLoading: isLoading, mt: 2 })] }));
};
