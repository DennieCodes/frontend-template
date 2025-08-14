import React from 'react';
import { Card, CardContent, Typography, Accordion, AccordionSummary, AccordionDetails, Box, Chip } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { ResourceAdditionalInfoProps } from './types';

const ResourceAdditionalInfo: React.FC<ResourceAdditionalInfoProps> = ({ resource }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Additional Information
        </Typography>

        {resource.accessibility && resource.accessibility.length > 0 && (
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="subtitle2">Accessibility</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {resource.accessibility.map((item, index) => (
                  <Chip key={index} label={item} size="small" />
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>
        )}

        {resource.languages && resource.languages.length > 0 && (
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="subtitle2">Languages</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {resource.languages.map((language, index) => (
                  <Chip key={index} label={language} size="small" />
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>
        )}
      </CardContent>
    </Card>
  );
};

export default ResourceAdditionalInfo;
