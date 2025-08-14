import React, { useState } from 'react';
import { Box } from '@mui/material';
import FAQHeader from './FAQHeader';
import FAQAccordion from './FAQAccordion';
import FAQFooter from './FAQFooter';
import { faqData } from './mockData';
import { FAQPageState } from './types';

const FAQPage: React.FC = () => {
  const [expanded, setExpanded] = useState<FAQPageState['expanded']>(false);

  const handleChange = (panel: string) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ width: '100%' }}>
      {/* Header */}
      <FAQHeader
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our platform and services"
      />

      {/* FAQ Accordion */}
      <FAQAccordion
        faqItems={faqData}
        expanded={expanded}
        onExpandedChange={handleChange}
      />

      {/* Footer */}
      <FAQFooter
        helpText="Still have questions?"
        supportText="Contact our support team for personalized assistance"
      />
    </Box>
  );
};

export default FAQPage;
