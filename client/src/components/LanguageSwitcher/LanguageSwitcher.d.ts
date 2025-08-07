import React from 'react';
interface LanguageSwitcherProps {
    variant?: 'select' | 'buttons';
    size?: 'small' | 'medium' | 'large';
    showLabel?: boolean;
    className?: string;
}
declare const LanguageSwitcher: React.FC<LanguageSwitcherProps>;
export default LanguageSwitcher;
