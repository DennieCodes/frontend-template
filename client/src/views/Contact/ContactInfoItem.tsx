import React from 'react';
import { Box, Typography } from '@mui/material';
import { ContactInfoItemProps } from './types';


const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ info }) => {
  const renderContent = () => {
    if (Array.isArray(info.content)) {
      return info.content.map((line, index) => (
        <Typography key={index} variant="body2" color="text.secondary">
          {line}
        </Typography>
      ));
    }
    return (
      <Typography variant="body2" color="text.secondary">
        {info.content}
      </Typography>
    );
  };

  return (
    <Box sx={{ mb: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Box sx={{ color: 'primary.main', mr: 2 }}>
          {info.icon}
        </Box>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {info.title}
          </Typography>
          {renderContent()}
        </Box>
      </Box>
    </Box>
  );
};

export default ContactInfoItem;
