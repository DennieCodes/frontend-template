import React from 'react';
import { Container, Typography, Box, Grid, Paper, Avatar } from '@mui/material';
import { Business, Lightbulb, Group, TrendingUp } from '@mui/icons-material';
import { LAYOUT_CONSTANTS, layoutUtils, typographyStyles } from '../constants/layout';

const About: React.FC = () => {
  return (
    <Box sx={{ width: '100%' }}>
      {/* Hero Section - Centered with whitespace */}
      <Box sx={{
        ...layoutUtils.getContentLayout('centered'),
        py: LAYOUT_CONSTANTS.CONTAINER.PADDING.MD,
        textAlign: 'center',
        mb: LAYOUT_CONSTANTS.SPACING.LG,
      }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            ...typographyStyles.heading,
            mb: LAYOUT_CONSTANTS.SPACING.MD,
            maxWidth: layoutUtils.getContentWidth('standard'),
            mx: 'auto',
          }}
        >
          About Our Company
        </Typography>
        <Typography
          variant="h5"
          sx={{
            ...typographyStyles.body,
            maxWidth: layoutUtils.getContentWidth('standard'),
            mx: 'auto',
          }}
        >
          We're passionate about creating innovative solutions that make a difference in people's lives.
        </Typography>
      </Box>

      {/* Mission Section - Centered with whitespace */}
      <Box sx={{
        ...layoutUtils.getContentLayout('centered'),
        mb: LAYOUT_CONSTANTS.SPACING.LG,
      }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            ...typographyStyles.heading,
            mb: LAYOUT_CONSTANTS.SPACING.MD,
            maxWidth: layoutUtils.getContentWidth('standard'),
            mx: 'auto',
          }}
        >
          Our Mission
        </Typography>
        <Typography
          variant="body1"
          sx={{
            ...typographyStyles.body,
            mb: LAYOUT_CONSTANTS.SPACING.MD,
            maxWidth: layoutUtils.getContentWidth('standard'),
            mx: 'auto',
          }}
        >
          To deliver exceptional value to our customers through innovative technology solutions,
          while maintaining the highest standards of quality and customer service. We believe in
          creating products that not only meet current needs but anticipate future challenges.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            ...typographyStyles.body,
            maxWidth: layoutUtils.getContentWidth('standard'),
            mx: 'auto',
          }}
        >
          Our team is dedicated to continuous improvement and staying at the forefront of
          industry trends to provide cutting-edge solutions that drive success for our clients.
        </Typography>
      </Box>

      {/* Values Section - Full width with constrained content */}
      <Box sx={{
        ...layoutUtils.getContentLayout('full-width'),
        mb: LAYOUT_CONSTANTS.SPACING.LG,
      }}>
        <Box sx={{
          maxWidth: layoutUtils.getContentWidth('wide'),
          mx: 'auto',
        }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              ...typographyStyles.heading,
              mb: LAYOUT_CONSTANTS.SPACING.MD,
              textAlign: 'center',
            }}
          >
            Our Values
          </Typography>
          <Grid container spacing={LAYOUT_CONSTANTS.GRID.SPACING.MD}>
            <Grid item xs={12} md={6} lg={3}>
              <Paper elevation={2} sx={{ p: LAYOUT_CONSTANTS.SPACING.MD, textAlign: 'center', height: '100%' }}>
                <Business sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Integrity
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We conduct business with honesty, transparency, and ethical practices in everything we do.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Paper elevation={2} sx={{ p: LAYOUT_CONSTANTS.SPACING.MD, textAlign: 'center', height: '100%' }}>
                <Lightbulb sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Innovation
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Paper elevation={2} sx={{ p: LAYOUT_CONSTANTS.SPACING.MD, textAlign: 'center', height: '100%' }}>
                <Group sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Collaboration
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We believe in the power of teamwork and foster an environment of mutual respect and support.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Paper elevation={2} sx={{ p: LAYOUT_CONSTANTS.SPACING.MD, textAlign: 'center', height: '100%' }}>
                <TrendingUp sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Excellence
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We strive for excellence in every project, delivering quality results that exceed expectations.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Team Section - Centered with whitespace */}
      <Box sx={{
        ...layoutUtils.getContentLayout('centered'),
      }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            ...typographyStyles.heading,
            mb: LAYOUT_CONSTANTS.SPACING.MD,
            maxWidth: layoutUtils.getContentWidth('standard'),
            mx: 'auto',
            textAlign: 'center',
          }}
        >
          Our Team
        </Typography>
        <Typography
          variant="body1"
          sx={{
            ...typographyStyles.body,
            mb: LAYOUT_CONSTANTS.SPACING.LG,
            maxWidth: layoutUtils.getContentWidth('standard'),
            mx: 'auto',
            textAlign: 'center',
          }}
        >
          Our diverse team brings together expertise from various fields, creating a dynamic
          environment where innovation thrives. We're united by our passion for technology
          and commitment to delivering exceptional results.
        </Typography>
        <Box sx={{
          maxWidth: layoutUtils.getContentWidth('wide'),
          mx: 'auto',
        }}>
          <Grid container spacing={LAYOUT_CONSTANTS.GRID.SPACING.MD}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar sx={{ width: 120, height: 120, mx: 'auto', mb: 2, bgcolor: 'primary.main' }}>
                  <Typography variant="h4">JD</Typography>
                </Avatar>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  John Doe
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Chief Executive Officer
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar sx={{ width: 120, height: 120, mx: 'auto', mb: 2, bgcolor: 'secondary.main' }}>
                  <Typography variant="h4">JS</Typography>
                </Avatar>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Jane Smith
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Chief Technology Officer
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar sx={{ width: 120, height: 120, mx: 'auto', mb: 2, bgcolor: 'success.main' }}>
                  <Typography variant="h4">MJ</Typography>
                </Avatar>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Mike Johnson
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Head of Product
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default About;