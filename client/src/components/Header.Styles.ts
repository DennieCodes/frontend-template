import { makeStyles, tokens } from '@fluentui/react-components';

export const useStyles = makeStyles({
  header: {
    backgroundColor: '#f3f2f1',
    padding: '0 16px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  navItems: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  hamburger: {
    display: 'none',
  },
  darkModeButton: {
    marginLeft: 'auto',
  },
  mobile: {
    [`@media (max-width: 768px)`]: {
      hamburger: {
        display: 'block',
      },
      navItems: {
        display: 'none',
      },
    },
  },
});