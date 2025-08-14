import React from 'react';
import { Box, Typography } from '@mui/material';
import { ContactFAQItemProps } from './types';

const ContactFAQItem: React.FC<ContactFAQItemProps> = ({ item }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
        {item.question}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {item.answer}
      </Typography>
    </Box>
  );
};

export default ContactFAQItem;
