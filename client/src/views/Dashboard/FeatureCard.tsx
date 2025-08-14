import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { FeatureCardProps } from './types';
import { LAYOUT_CONSTANTS, layoutUtils, typographyStyles } from '../../constants/layout';

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <Card sx={{
      ...layoutUtils.getCardStyles('default'),
      height: '100%',
    }}>
      <CardContent sx={{
        p: LAYOUT_CONSTANTS.CARD.CONTENT.PADDING,
      }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            ...typographyStyles.title,
            mb: LAYOUT_CONSTANTS.CARD.CONTENT.TITLE_MARGIN,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            ...typographyStyles.body,
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
