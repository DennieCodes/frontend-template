import React, { useState } from 'react';
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Paper,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { LAYOUT_CONSTANTS, layoutUtils, typographyStyles } from '../constants/layout';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is this platform about?",
    answer: "This platform is a modern, scalable solution designed to help you build and manage your next big idea. It provides a comprehensive set of tools and features to support your project development needs."
  },
  {
    question: "How do I get started?",
    answer: "Getting started is easy! Simply create an account, explore our features, and begin building your project. Our intuitive interface makes it simple to navigate and use all available tools."
  },
  {
    question: "What features are available?",
    answer: "Our platform includes user authentication, article management, resource directories, admin dashboards, theme customization, and much more. Each feature is designed to enhance your project development experience."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we take data security seriously. All user data is encrypted and stored securely. We follow industry best practices to ensure your information remains protected at all times."
  },
  {
    question: "Can I customize the appearance?",
    answer: "Absolutely! Our platform includes a theme system that allows you to customize colors, layouts, and overall appearance to match your brand or preferences. You can switch between light and dark modes as well."
  },
  {
    question: "How do I contact support?",
    answer: "You can reach our support team through the contact page, where you'll find multiple ways to get in touch. We typically respond within 24 hours during business days."
  },
  {
    question: "Are there any usage limits?",
    answer: "Currently, we offer generous usage limits for all features. Premium plans may be available in the future with additional benefits and higher limits."
  },
  {
    question: "Can I export my data?",
    answer: "Yes, we provide data export functionality for your convenience. You can export your articles, resources, and other content in various formats to ensure you always have access to your work."
  }
];

const FAQ: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ width: '100%' }}>
      {/* Header Section - Centered with whitespace */}
      <Box sx={{
        ...layoutUtils.getContentLayout('centered'),
        py: LAYOUT_CONSTANTS.CONTAINER.PADDING.MD,
        textAlign: 'center',
        mb: LAYOUT_CONSTANTS.SPACING.LG,
      }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            ...typographyStyles.heading,
            mb: LAYOUT_CONSTANTS.SPACING.SM,
            maxWidth: layoutUtils.getContentWidth('standard'),
            mx: 'auto',
            color: 'primary.main',
          }}
        >
          Frequently Asked Questions
        </Typography>
        <Typography
          variant="h6"
          sx={{
            ...typographyStyles.body,
            maxWidth: layoutUtils.getContentWidth('standard'),
            mx: 'auto',
          }}
        >
          Find answers to common questions about our platform and services
        </Typography>
      </Box>

      {/* FAQ Content - Centered with whitespace */}
      <Box sx={{
        ...layoutUtils.getContentLayout('centered'),
      }}>
        <Box sx={{
          maxWidth: layoutUtils.getContentWidth('standard'),
          mx: 'auto',
        }}>
          <Paper
            elevation={2}
            sx={{
              borderRadius: 3,
              overflow: 'hidden',
            }}
          >
        {faqData.map((item, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            sx={{
              '&:not(:last-child)': {
                borderBottom: '1px solid',
                borderColor: 'divider',
              },
              '&:before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                px: 3,
                py: 2,
                '&:hover': {
                  backgroundColor: 'action.hover',
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: 'text.primary',
                }}
              >
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                px: 3,
                pb: 3,
                backgroundColor: 'background.default',
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.7,
                  color: 'text.secondary',
                }}
              >
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
          </Paper>
        </Box>
      </Box>

      {/* Footer Section - Centered with whitespace */}
      <Box sx={{
        ...layoutUtils.getContentLayout('centered'),
        mt: LAYOUT_CONSTANTS.SPACING.LG,
        textAlign: 'center',
      }}>
        <Typography
          variant="body1"
          sx={{
            mb: LAYOUT_CONSTANTS.SPACING.SM,
            ...typographyStyles.body,
          }}
        >
          Still have questions?
        </Typography>
        <Typography
          variant="body2"
          sx={{
            ...typographyStyles.body,
          }}
        >
          Contact our support team for personalized assistance
        </Typography>
      </Box>
    </Box>
  );
};

export default FAQ;