import React from 'react';
import { Box, Paper, Typography, Grid } from '@mui/material';
import { AccountSummaryProps, SummaryItem } from './types';
import { LAYOUT_CONSTANTS, layoutUtils, typographyStyles } from '../../constants/layout';

const AccountSummary: React.FC<AccountSummaryProps> = ({ summaryItems }) => {
  return (
    <Box sx={{ mt: LAYOUT_CONSTANTS.SPACING.LG }}>
      <Paper sx={{
        p: LAYOUT_CONSTANTS.SPACING.MD,
        maxWidth: layoutUtils.getContentWidth('wide'),
        mx: 'auto',
      }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            ...typographyStyles.title,
            mb: LAYOUT_CONSTANTS.SPACING.MD,
          }}
        >
          Account Summary
        </Typography>
        <Grid container spacing={LAYOUT_CONSTANTS.GRID.SPACING.MD}>
          {summaryItems.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography
                  variant="h4"
                  color={`${item.color}.main`}
                  sx={{
                    ...typographyStyles.heading,
                    mb: LAYOUT_CONSTANTS.SPACING.XS,
                  }}
                >
                  {item.value}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    ...typographyStyles.body,
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default AccountSummary;
