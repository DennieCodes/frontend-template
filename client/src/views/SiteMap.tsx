import React from 'react';
import {
  Container,
  Typography,
  Grid,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Paper,
  Divider,
} from '@mui/material';
import {
  Home as HomeIcon,
  Article as ArticleIcon,
  AdminPanelSettings as AdminIcon,
  AccountCircle as AccountIcon,
  Description as DescriptionIcon,
  Help as HelpIcon,
  Map as MapIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

interface SiteMapSection {
  title: string;
  icon: React.ReactNode;
  items: {
    name: string;
    path: string;
    description: string;
  }[];
}

const siteMapData: SiteMapSection[] = [
  {
    title: 'Main Pages',
    icon: <HomeIcon />,
    items: [
      {
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

const SiteMap: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: 2,
            color: 'primary.main',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          <MapIcon sx={{ fontSize: 'inherit' }} />
          Site Map
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            maxWidth: '700px',
            mx: 'auto',
            lineHeight: 1.6,
          }}
        >
          Complete overview of all pages and sections available on our platform
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {siteMapData.map((section, sectionIndex) => (
          <Grid item xs={12} md={6} key={sectionIndex}>
            <Paper
              elevation={2}
              sx={{
                height: '100%',
                borderRadius: 3,
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  p: 3,
                  backgroundColor: 'primary.main',
                  color: 'primary.contrastText',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                {section.icon}
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {section.title}
                </Typography>
              </Box>

              <CardContent sx={{ p: 0 }}>
                <List sx={{ p: 0 }}>
                  {section.items.map((item, itemIndex) => (
                    <React.Fragment key={itemIndex}>
                      <ListItem
                        sx={{
                          px: 3,
                          py: 2,
                          '&:hover': {
                            backgroundColor: 'action.hover',
                          },
                        }}
                      >
                        <ListItemIcon sx={{ minWidth: 40 }}>
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: '50%',
                              backgroundColor: 'primary.main',
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Link
                              to={item.path}
                              style={{
                                textDecoration: 'none',
                                color: 'inherit',
                                fontWeight: 600,
                              }}
                            >
                              {item.name}
                            </Link>
                          }
                          secondary={
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              sx={{ mt: 0.5 }}
                            >
                              {item.description}
                            </Typography>
                          }
                        />
                      </ListItem>
                      {itemIndex < section.items.length - 1 && (
                        <Divider sx={{ ml: 6 }} />
                      )}
                    </React.Fragment>
                  ))}
                </List>
              </CardContent>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 2 }}
        >
          Can't find what you're looking for?
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
        >
          Check our FAQ page or contact our support team for assistance
        </Typography>
      </Box>
    </Container>
  );
};

export default SiteMap;