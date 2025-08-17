import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

interface ResourceFAQProps {
  resource?: {
    faqs?: Array<{
      question: string;
      answer: string;
    }>;
  };
}

const ResourceFAQ: React.FC<ResourceFAQProps> = ({ resource }) => {
  return (
    <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Frequently Asked Questions
      </Typography>
      {resource?.faqs && resource.faqs.length > 0 ? (
        <Box>
          {resource.faqs.map((faq, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography variant="subtitle1" fontWeight="bold">
                {faq.question}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {faq.answer}
              </Typography>
            </Box>
          ))}
        </Box>
      ) : (
        <Typography variant="body2" color="text.secondary">
          No FAQs available.
        </Typography>
      )}
    </Paper>
  );
};

export default ResourceFAQ;
