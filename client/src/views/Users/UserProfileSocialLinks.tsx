import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  Button,
  Chip,
} from '@mui/material';
import {
  Twitter as TwitterIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Language as WebsiteIcon,
  OpenInNew as ExternalLinkIcon,
} from '@mui/icons-material';
import { UserProfileSocialLinksProps } from './types';
import { LAYOUT_CONSTANTS } from '../../constants/layout';

const UserProfileSocialLinks: React.FC<UserProfileSocialLinksProps> = ({ socialLinks }) => {
  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'twitter':
        return <TwitterIcon />;
      case 'github':
        return <GitHubIcon />;
      case 'linkedin':
        return <LinkedInIcon />;
      case 'website':
        return <WebsiteIcon />;
      default:
        return <ExternalLinkIcon />;
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'twitter':
        return '#1DA1F2';
      case 'github':
        return '#333';
      case 'linkedin':
        return '#0077B5';
      case 'website':
        return '#666';
      default:
        return '#666';
    }
  };

  const getPlatformName = (platform: string) => {
    switch (platform) {
      case 'twitter':
        return 'Twitter';
      case 'github':
        return 'GitHub';
      case 'linkedin':
        return 'LinkedIn';
      case 'website':
        return 'Website';
      default:
        return platform;
    }
  };

  return (
    <Box sx={{ mb: LAYOUT_CONSTANTS.SPACING.XL }}>
      <Typography variant="h5" component="h2" sx={{ mb: LAYOUT_CONSTANTS.SPACING.MD }}>
        Social Links ({socialLinks.length})
      </Typography>

      <Card sx={{ bgcolor: 'background.paper' }}>
        <CardContent>
          {socialLinks.length > 0 ? (
            <Stack spacing={2}>
              {socialLinks.map((link, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    p: 2,
                    border: 1,
                    borderColor: 'divider',
                    borderRadius: 2,
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      borderColor: getPlatformColor(link.platform),
                      bgcolor: `${getPlatformColor(link.platform)}08`,
                    },
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      sx={{
                        color: getPlatformColor(link.platform),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        bgcolor: `${getPlatformColor(link.platform)}15`,
                      }}
                    >
                      {getPlatformIcon(link.platform)}
                    </Box>

                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {getPlatformName(link.platform)}
                      </Typography>

                      {link.username && (
                        <Typography variant="body2" color="text.secondary">
                          {link.username}
                        </Typography>
                      )}
                    </Box>
                  </Stack>

                  <Button
                    variant="outlined"
                    size="small"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    endIcon={<ExternalLinkIcon />}
                    sx={{
                      borderColor: getPlatformColor(link.platform),
                      color: getPlatformColor(link.platform),
                      '&:hover': {
                        borderColor: getPlatformColor(link.platform),
                        bgcolor: `${getPlatformColor(link.platform)}15`,
                      },
                    }}
                  >
                    Visit
                  </Button>
                </Box>
              ))}
            </Stack>
          ) : (
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ textAlign: 'center', py: 4, fontStyle: 'italic' }}
            >
              No social links added yet.
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserProfileSocialLinks;
