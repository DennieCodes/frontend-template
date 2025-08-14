import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import ContactFAQItem from './ContactFAQItem';
import { ContactFAQProps } from './types';
import { LAYOUT_CONSTANTS, typographyStyles } from '../../constants/layout';

const ContactFAQ: React.FC<ContactFAQProps> = ({ faqItems }) => {
  return (
    <Box>
      <Divider sx={{ my: LAYOUT_CONSTANTS.SPACING.MD }} />

      <Typography
        variant="h5"
        component="h3"
        gutterBottom
        sx={{
          ...typographyStyles.heading,
          mb: LAYOUT_CONSTANTS.SPACING.MD,
        }}
      >
        Frequently Asked Questions
      </Typography>

      {faqItems.map((item, index) => (
        <ContactFAQItem key={index} item={item} />
      ))}
    </Box>
  );
};

export default ContactFAQ;
