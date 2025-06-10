import { useState } from 'react';
import { Stack, IconButton, CommandBar, ICommandBarStyles ,ICommandBarItemProps } from '@fluentui/react';
import { useStyles } from './Header.Styles';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const styles = useStyles();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const itemStyles: ICommandBarStyles = {
    root: {
      fontSize: '24px',
    },
  };

  const items: ICommandBarItemProps[] = [
    {
      key: 'home',
      text: 'Home',
      iconProps: { iconName: 'Home' },
      onClick: () => {
        navigate('/');
      },
    },
    {
      key: 'about',
      text: 'About',
      iconProps: { iconName: 'Info' },
      onClick: () => {
        navigate('/about');
      }
    },
    {
      key: 'contact',
      text: 'Contact',
      iconProps: { iconName: 'Mail' },
      onClick: () => {
        navigate('/contact');
      }
    },
  ];

  return (
    <Stack className={styles.header} horizontal verticalAlign="center" horizontalAlign="end" tokens={{ childrenGap: 10 }}>
      <CommandBar
        items={items}
        className={menuOpen ? '' : styles.navItems}
        ariaLabel="Main navigation"
        styles={itemStyles}
      />
    </Stack>
  );
};

export default Header;