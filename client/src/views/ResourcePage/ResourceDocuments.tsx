import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

interface ResourceDocumentsProps {
  resource?: {
    documents?: Array<{ name: string }>;
  };
}

const ResourceDocuments: React.FC<ResourceDocumentsProps> = ({ resource }) => {
  return (
    <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Documents
      </Typography>
      {resource?.documents && resource.documents.length > 0 ? (
        <Box>
          {resource.documents.map((doc, index) => (
            <Typography key={index} variant="body2" color="text.secondary">
              {doc.name}
            </Typography>
          ))}
        </Box>
      ) : (
        <Typography variant="body2" color="text.secondary">
          No documents available.
        </Typography>
      )}
    </Paper>
  );
};

export default ResourceDocuments;
