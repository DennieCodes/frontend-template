import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/GridLegacy';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';

const ThemeDemo: React.FC = () => {
  const theme = useTheme();
  const [_darkMode, _setDarkMode] = useState(false);

  const colorPalette = [
    { name: 'Primary', color: theme.palette.primary.main },
    { name: 'Secondary', color: theme.palette.secondary.main },
    { name: 'Error', color: theme.palette.error.main },
    { name: 'Warning', color: theme.palette.warning.main },
    { name: 'Info', color: theme.palette.info.main },
    { name: 'Success', color: theme.palette.success.main },
  ];

  const typographyVariants = [
    { variant: 'h1', text: 'Heading 1' },
    { variant: 'h2', text: 'Heading 2' },
    { variant: 'h3', text: 'Heading 3' },
    { variant: 'h4', text: 'Heading 4' },
    { variant: 'h5', text: 'Heading 5' },
    { variant: 'h6', text: 'Heading 6' },
    { variant: 'body1', text: 'Body 1 - This is the default body text' },
    { variant: 'body2', text: 'Body 2 - This is smaller body text' },
    { variant: 'subtitle1', text: 'Subtitle 1' },
    { variant: 'subtitle2', text: 'Subtitle 2' },
    { variant: 'caption', text: 'Caption text' },
    { variant: 'overline', text: 'OVERLINE TEXT' },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Theme Demo
      </Typography>
      <Typography variant="h5" color="text.secondary" paragraph>
        Explore the Material-UI theme system and design tokens
      </Typography>

      {/* Color Palette */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Color Palette
        </Typography>
        <Grid container spacing={3}>
          {colorPalette.map((colorItem) => (
            <Grid xs={12} md={6} key={colorItem.name}>
              <Paper elevation={2} sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: 1,
                      bgcolor: colorItem.color,
                      mr: 2,
                      border: '1px solid',
                      borderColor: 'divider',
                    }}
                  />
                  <Box>
                    <Typography variant="h6">{colorItem.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {colorItem.color}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Typography */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Typography
        </Typography>
        <Paper elevation={2} sx={{ p: 4 }}>
          <Grid container spacing={3}>
            {typographyVariants.map((typographyItem) => (
              <Grid xs={12} key={typographyItem.variant}>
                <Typography variant={typographyItem.variant as any} gutterBottom>
                  {typographyItem.text}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Box>

      {/* Components */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Components
        </Typography>
        <Grid container spacing={3}>
          <Grid xs={12}>
            <Paper elevation={2} sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                Buttons
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
                <Button variant="text">Text</Button>
                <Button variant="contained" color="secondary">Secondary</Button>
                <Button variant="contained" color="error">Error</Button>
                <Button variant="contained" color="warning">Warning</Button>
                <Button variant="contained" color="info">Info</Button>
                <Button variant="contained" color="success">Success</Button>
              </Box>

              <Typography variant="h5" gutterBottom>
                Form Controls
              </Typography>
              <Grid container spacing={3}>
                <Grid xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Text Field"
                    placeholder="Enter some text"
                    sx={{ mb: 2 }}
                  />
                  <FormControlLabel
                    control={<Switch />}
                    label="Switch Control"
                  />
                </Grid>
                <Grid xs={12} md={6}>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                    <Chip label="Default" />
                    <Chip label="Primary" color="primary" />
                    <Chip label="Secondary" color="secondary" />
                    <Chip label="Success" color="success" />
                    <Chip label="Error" color="error" />
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Cards */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Cards
        </Typography>
        <Grid container spacing={3}>
          <Grid xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  Card Title
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This is a sample card with some content. Cards are used to display content and actions about a single topic.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
                <Button size="small">Share</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  Another Card
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Cards can contain various types of content including text, images, and interactive elements.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Action</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  Third Card
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  The Material-UI card component provides a flexible and extensible content container.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Details</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Spacing and Layout */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Spacing and Layout
        </Typography>
        <Paper elevation={2} sx={{ p: 4 }}>
          <Typography variant="body1" paragraph>
            This section demonstrates the spacing system and layout utilities provided by Material-UI.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Box sx={{ p: 1, bgcolor: 'primary.main', color: 'white' }}>p: 1</Box>
            <Box sx={{ p: 2, bgcolor: 'secondary.main', color: 'white' }}>p: 2</Box>
            <Box sx={{ p: 3, bgcolor: 'error.main', color: 'white' }}>p: 3</Box>
            <Box sx={{ p: 4, bgcolor: 'warning.main', color: 'white' }}>p: 4</Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default ThemeDemo;