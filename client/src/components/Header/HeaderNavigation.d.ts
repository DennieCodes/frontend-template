import React from 'react';
interface HeaderNavigationProps {
    onNavigationClick: (path: string) => void;
    onAboutMenuClick: (event: React.MouseEvent<HTMLElement>) => void;
    onContentMenuClick: (event: React.MouseEvent<HTMLElement>) => void;
}
declare const HeaderNavigation: React.FC<HeaderNavigationProps>;
export default HeaderNavigation;
