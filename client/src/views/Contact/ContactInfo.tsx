import React from 'react';
import { Box, Typography } from '@mui/material';
import ContactInfoItem from './ContactInfoItem';
import { ContactInfoProps } from './types';
import { LAYOUT_CONSTANTS, typographyStyles } from '../../constants/layout';

const ContactInfo: React.FC<ContactInfoProps> = ({ contactInfo }) => {
  return (
    <Box sx={{ mb: LAYOUT_CONSTANTS.SPACING.LG }}>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{
          ...typographyStyles.heading,
          mb: LAYOUT_CONSTANTS.SPACING.MD,
        }}
      >
        Contact Information
      </Typography>

      {contactInfo.map((info, index) => (
        <ContactInfoItem key={index} info={info} />
      ))}
    </Box>
  );
};

export default ContactInfo;
