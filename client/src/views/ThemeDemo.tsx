import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  Divider,
  Stack,
} from '@mui/material';
import { ThemeToggle } from '../components/ThemeToggle';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const ThemeDemo: React.FC = () => {
  const handleThemeChange = (event: SelectChangeEvent) => {
    const newMode = event.target.value as 'light' | 'dark';
    setTheme(newMode);
  };

  return (
    <Box sx={{ p: 3, maxWidth: 1200, mx: 'auto' }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Theme Toggle Component Demo
      </Typography>

      <Typography variant="body1" color="text.secondary" paragraph>
        This page demonstrates the various configurations and variants of the ThemeToggle component.
        The component is modular, extendable, and highly configurable.
      </Typography>

      <Grid container spacing={3}>
        {/* Basic Variants */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Basic Variants
              </Typography>
              <Stack spacing={2} sx={{ mt: 2 }}>
                <Box>
                  <Typography variant="subtitle2" gutterBottom>
                    Icon Variant (Default)
                  </Typography>
                  <ThemeToggle variant="icon" />
                </Box>

                <Box>
                  <Typography variant="subtitle2" gutterBottom>
                    Switch Variant
                  </Typography>
                  <ThemeToggle variant="switch" />
                </Box>

                <Box>
                  <Typography variant="subtitle2" gutterBottom>
                    Button Variant
                  </Typography>
                  <ThemeToggle variant="button" />
                </Box>

                <Box>
                  <Typography variant="subtitle2" gutterBottom>
                    Chip Variant
                  </Typography>
                  <ThemeToggle variant="chip" />
                </Box>

                <Box>
                  <Typography variant="subtitle2" gutterBottom>
                    Toggle Group Variant
                  </Typography>
                  <ThemeToggle variant="toggle-group" />
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Customized Variants */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Customized Variants
              </Typography>
              <Stack spacing={2} sx={{ mt: 2 }}>
                <Box>
                  <Typography variant="subtitle2" gutterBottom>
                    Custom Icons & Labels
                  </Typography>
                  <ThemeToggle
                    variant="button"
                    icons={{ light: Brightness7, dark: Brightness4 }}
                    labels={{ light: 'Day Mode', dark: 'Night Mode' }}
                    tooltipText="Switch between day and night modes"
                  />
                </Box>

                <Box>
                  <Typography variant="subtitle2" gutterBottom>
                    Small Size
                  </Typography>
                  <ThemeToggle variant="icon" size="small" />
                </Box>

                <Box>
                  <Typography variant="subtitle2" gutterBottom>
                    Large Size
                  </Typography>
                  <ThemeToggle variant="icon" size="large" />
                </Box>

                <Box>
                  <Typography variant="subtitle2" gutterBottom>
                    Secondary Color
                  </Typography>
                  <ThemeToggle variant="chip" color="secondary" />
                </Box>

                <Box>
                  <Typography variant="subtitle2" gutterBottom>
                    Without Labels
                  </Typography>
                  <ThemeToggle variant="toggle-group" showLabels={false} />
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Advanced Configuration */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Advanced Configuration
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                The ThemeToggle component supports callback functions, custom styling, and more.
              </Typography>

              <Divider sx={{ my: 2 }} />

              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <Typography variant="subtitle2" gutterBottom>
                    With Callback
                  </Typography>
                  <ThemeToggle
                    variant="switch"
                    onThemeChange={handleThemeChange}
                    tooltipText="Check console for theme change events"
                  />
                </Grid>

                <Grid item xs={12} md={4}>
                  <Typography variant="subtitle2" gutterBottom>
                    Custom Styling
                  </Typography>
                  <ThemeToggle
                    variant="button"
                    sx={{
                      borderRadius: 2,
                      px: 3,
                      '&:hover': {
                        transform: 'scale(1.05)',
                        transition: 'transform 0.2s',
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={4}>
                  <Typography variant="subtitle2" gutterBottom>
                    Custom Aria Label
                  </Typography>
                  <ThemeToggle
                    variant="icon"
                    ariaLabel="Switch between light and dark themes"
                    tooltipText="Accessible theme toggle"
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Paper sx={{ p: 3, mt: 3 }}>
        <Typography variant="h6" gutterBottom>
          Component Features
        </Typography>
        <Typography variant="body2" component="div">
          <ul>
            <li><strong>Modular:</strong> Standalone component that can be used anywhere</li>
            <li><strong>Extendable:</strong> Easy to add new variants and features</li>
            <li><strong>Configurable:</strong> Multiple props for customization</li>
            <li><strong>Accessible:</strong> Proper ARIA labels and keyboard navigation</li>
            <li><strong>TypeScript:</strong> Fully typed with comprehensive interfaces</li>
            <li><strong>Material-UI:</strong> Built with Material-UI components</li>
            <li><strong>Theme Integration:</strong> Seamlessly integrates with Material-UI theming</li>
            <li><strong>Persistence:</strong> Theme preference is saved to localStorage</li>
          </ul>
        </Typography>
      </Paper>
    </Box>
  );
};

export default ThemeDemo;