import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/GridLegacy';

import Box from '@mui/material/Box';
import ResourceHeader from './ResourceHeader';
import ResourceDescription from './ResourceDescription';
import ResourceContactInfo from './ResourceContactInfo';
import ResourceContactHours from './ResourceContactHours';
import ResourceLocation from './ResourceLocation';
import ResourceServices from './ResourceServices';
import ResourceReviews from './ResourceReviews';
import ResourceMap from './ResourceMap';
import ResourceAdditionalInfo from './ResourceAdditionalInfo';
import ResourceRelatedResources from './ResourceRelatedResources';
import ResourceSocialMedia from './ResourceSocialMedia';
import ResourceDocuments from './ResourceDocuments';
import ResourceFAQ from './ResourceFAQ';
import { ResourcePageProps } from './types';

const ResourcePage: React.FC<ResourcePageProps> = ({ resource }) => {
  if (!resource) {
    return <div>Resource not found</div>;
  }

  // Create a complete resource object with all required properties
  const completeResource = {
    ...resource,
    services: resource.services || [],
    faqs: resource.faqs || [],
    contactInfo: resource.contactInfo || {},
    location: resource.location || {},
    socialMedia: resource.socialMedia || {},
    documents: resource.documents || [],
    relatedResources: resource.relatedResources || [],
    coordinates: resource.coordinates || {},
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <ResourceHeader
        resource={completeResource}
        isBookmarked={false}
        onBookmarkToggle={() => {}}
      />

      <Grid container spacing={4}>
        <Grid xs={12} lg={8}>
          <ResourceDescription resource={completeResource} />
          <ResourceServices resource={completeResource} />
          <ResourceReviews resource={completeResource} />
          <ResourceMap resource={completeResource} />
          <ResourceAdditionalInfo resource={completeResource} />
          <ResourceFAQ resource={completeResource} />
        </Grid>
        <Grid xs={12} lg={4}>
          <ResourceContactInfo resource={completeResource} />
          <ResourceContactHours hours={completeResource.hours} />
          <ResourceLocation resource={completeResource} />
          <ResourceSocialMedia resource={completeResource} />
          <ResourceDocuments resource={completeResource} />
        </Grid>
      </Grid>

      <Box sx={{ mt: 6 }}>
        <ResourceRelatedResources resource={completeResource} />
      </Box>
    </Container>
  );
};

export default ResourcePage;
