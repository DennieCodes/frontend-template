import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Paper,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FAQAccordionProps } from './types';
import { layoutUtils } from '../../constants/layout';

const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqItems, expanded, onExpandedChange }) => {
  return (
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
          {faqItems.map((item, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={onExpandedChange(`panel${index}`)}
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
  );
};

export default FAQAccordion;
