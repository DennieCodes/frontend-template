import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
} from '@mui/material';
import {
  Edit as EditIcon,
} from '@mui/icons-material';
import { UserProfileBioProps } from './types';
import { LAYOUT_CONSTANTS } from '../../constants/layout';

const UserProfileBio: React.FC<UserProfileBioProps> = ({
  user,
  isOwnProfile = false,
  onEditBio,
}) => {
  return (
    <Box sx={{ mb: LAYOUT_CONSTANTS.SPACING.XL }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: LAYOUT_CONSTANTS.SPACING.MD }}>
        <Typography variant="h5" component="h2">
          About
        </Typography>

        {isOwnProfile && (
          <Button
            variant="outlined"
            size="small"
            startIcon={<EditIcon />}
            onClick={onEditBio}
          >
            Edit Bio
          </Button>
        )}
      </Stack>

      <Card sx={{ bgcolor: 'background.paper' }}>
        <CardContent>
          {user.bio ? (
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.6,
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
              }}
            >
              {user.bio}
            </Typography>
          ) : (
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ fontStyle: 'italic' }}
            >
              {isOwnProfile
                ? "You haven't added a bio yet. Click 'Edit Bio' to add one!"
                : "This user hasn't added a bio yet."}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserProfileBio;
