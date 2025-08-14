import React from 'react';
interface HeaderDropdownMenusProps {
    navigationAnchorEl: HTMLElement | null;
    resourcesAnchorEl: HTMLElement | null;
    accountAnchorEl: HTMLElement | null;
    onClose: () => void;
    onNavigationClick: (path: string) => void;
    onLogoutClick: () => void;
}
declare const HeaderDropdownMenus: React.FC<HeaderDropdownMenusProps>;
export default HeaderDropdownMenus;
