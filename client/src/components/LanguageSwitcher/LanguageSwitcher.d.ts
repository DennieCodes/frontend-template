import React from 'react';
interface LanguageSwitcherProps {
    variant?: 'select' | 'buttons';
    size?: 'small' | 'medium';
    showLabel?: boolean;
    className?: string;
}
declare const LanguageSwitcher: React.FC<LanguageSwitcherProps>;
export default LanguageSwitcher;
