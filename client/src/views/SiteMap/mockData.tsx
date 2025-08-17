import React from 'react';
import {
  Home as HomeIcon,
  Article as ArticleIcon,
  AdminPanelSettings as AdminIcon,
  AccountCircle as AccountIcon,
  Description as DescriptionIcon,
  Help as HelpIcon,
} from '@mui/icons-material';
import { SiteMapSection } from './types';

export const siteMapData: SiteMapSection[] = [
  {
    title: 'Main Pages',
    icon: <HomeIcon />,
    items: [
      {
        title: 'Home',
        url: '/',
        name: 'Home',
        path: '/',
        description: 'Welcome page with platform overview and getting started information'
      },
      {
        name: 'About',
        path: '/about',
        description: 'Learn more about our platform and mission'
      },
      {
        name: 'Contact',
        path: '/contact',
        description: 'Get in touch with our support team'
      },
      {
        name: 'FAQ',
        path: '/faq',
        description: 'Frequently asked questions and answers'
      },
      {
        name: 'Site Map',
        path: '/sitemap',
        description: 'Complete overview of all available pages'
      }
    ]
  },
  {
    title: 'Content & Resources',
    icon: <ArticleIcon />,
    items: [
      {
        name: 'Articles Directory',
        path: '/articles',
        description: 'Browse and search through our article collection'
      },
      {
        name: 'Individual Articles',
        path: '/articles/:id',
        description: 'View detailed article content and information'
      },
      {
        name: 'Resources Directory',
        path: '/resources',
        description: 'Access helpful resources and tools'
      }
    ]
  },
  {
    title: 'User Account',
    icon: <AccountIcon />,
    items: [
      {
        name: 'Login',
        path: '/login',
        description: 'Sign in to your account'
      },
      {
        name: 'Register',
        path: '/register',
        description: 'Create a new account'
      },
      {
        name: 'User Dashboard',
        path: '/dashboard',
        description: 'Personal dashboard with your projects and activities'
      },
      {
        name: 'Account Settings',
        path: '/account',
        description: 'Manage your profile, security, and preferences'
      }
    ]
  },
  {
    title: 'Administration',
    icon: <AdminIcon />,
    items: [
      {
        name: 'Admin Dashboard',
        path: '/admin',
        description: 'Administrative panel for system management'
      }
    ]
  },
  {
    title: 'Legal & Information',
    icon: <DescriptionIcon />,
    items: [
      {
        name: 'Terms of Service',
        path: '/terms',
        description: 'Platform terms and conditions'
      },
      {
        name: 'Privacy Policy',
        path: '/privacy',
        description: 'How we handle and protect your data'
      }
    ]
  },
  {
    title: 'Features & Tools',
    icon: <HelpIcon />,
    items: [
      {
        name: 'Theme Demo',
        path: '/theme-demo',
        description: 'Explore theme customization options'
      }
    ]
  }
];
