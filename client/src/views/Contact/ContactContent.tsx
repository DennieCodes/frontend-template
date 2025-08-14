import React from 'react';
import { Box, Grid } from '@mui/material';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import ContactFAQ from './ContactFAQ';
import { ContactContentProps } from './types';
import { LAYOUT_CONSTANTS, layoutUtils } from '../../constants/layout';

const ContactContent: React.FC<ContactContentProps> = ({ onSubmit, contactInfo, faqItems }) => {
  return (
    <Box sx={{
      ...layoutUtils.getContentLayout('full-width'),
    }}>
      <Box sx={{
        maxWidth: layoutUtils.getContentWidth('wide'),
        mx: 'auto',
      }}>
        <Grid container spacing={LAYOUT_CONSTANTS.GRID.SPACING.LG}>
          {/* Contact Form */}
          <Grid item xs={12} lg={8}>
            <ContactForm onSubmit={onSubmit} />
          </Grid>

          {/* Contact Information & FAQ */}
          <Grid item xs={12} lg={4}>
            <ContactInfo contactInfo={contactInfo} />
            <ContactFAQ faqItems={faqItems} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ContactContent;
