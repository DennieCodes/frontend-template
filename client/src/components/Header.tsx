import { useState } from 'react';
import { Stack, IconButton, CommandBar, ICommandBarItemProps } from '@fluentui/react';
import { useStyles } from './Header.Styles';

const Header: React.FC = () => {
  const styles = useStyles();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const items: ICommandBarItemProps[] = [
    {
      key: 'home',
      text: 'Home',
      iconProps: { iconName: 'Home' },
    },
    {
      key: 'about',
      text: 'About',
      iconProps: { iconName: 'Info' },
    },
    {
      key: 'contact',
      text: 'Contact',
      iconProps: { iconName: 'Mail' },
    },
  ];

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <Stack className={styles.header} horizontal verticalAlign="center" horizontalAlign="end" tokens={{ childrenGap: 10 }}>
      <IconButton
        iconProps={{ iconName: menuOpen ? 'Cancel' : 'GlobalNavButton' }}
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        ariaLabel="Toggle navigation menu"
      />
      <CommandBar
        items={items}
        className={menuOpen ? '' : styles.navItems}
        ariaLabel="Main navigation"
      />
      <IconButton
        iconProps={{ iconName: isDarkMode ? 'Sunny' : 'ClearNight' }}
        className={styles.darkModeButton}
        onClick={toggleDarkMode}
        ariaLabel="Toggle dark mode"
      />
    </Stack>
  );
};

export default Header;