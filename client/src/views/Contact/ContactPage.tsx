import React from 'react';
import { Box } from '@mui/material';
import ContactHeader from './ContactHeader';
import ContactContent from './ContactContent';
import { contactInfo, faqItems } from './mockData';
import { ContactFormData } from './types';

const ContactPage: React.FC = () => {
  const handleSubmit = (data: ContactFormData) => {
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <Box sx={{ width: '100%' }}>
      {/* Header */}
      <ContactHeader
        title="Get in Touch"
        subtitle="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
      />

      {/* Contact Content */}
      <ContactContent
        onSubmit={handleSubmit}
        contactInfo={contactInfo}
        faqItems={faqItems}
      />
    </Box>
  );
};

export default ContactPage;
