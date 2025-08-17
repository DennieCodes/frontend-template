import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/GridLegacy';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import ContactMap from './ContactMap';
import ContactFAQ from './ContactFAQ';
import { ContactContentProps } from './types';

const ContactContent: React.FC<ContactContentProps> = ({
  title,
  subtitle,
  contactInfo,
  faqData,
  onFormSubmit,
}) => {
  return (
    <Box sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          {subtitle}
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid xs={12} lg={6}>
          <Paper elevation={2} sx={{ p: 4, height: '100%' }}>
            <ContactForm onSubmit={onFormSubmit} />
          </Paper>
        </Grid>
        <Grid xs={12} lg={6}>
          <ContactInfo contactInfo={contactInfo} />
        </Grid>
      </Grid>

      <Box sx={{ mt: 6 }}>
        <ContactMap />
      </Box>

      <Box sx={{ mt: 6 }}>
        <ContactFAQ faqData={faqData} />
      </Box>
    </Box>
  );
};

export default ContactContent;
