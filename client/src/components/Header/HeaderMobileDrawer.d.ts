import React from 'react';
interface HeaderMobileDrawerProps {
    onNavigationClick: (path: string) => void;
    onLogoutClick: () => void;
}
declare const HeaderMobileDrawer: React.FC<HeaderMobileDrawerProps>;
export default HeaderMobileDrawer;
