import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { ResourcePageState } from './types';
import { mockResources } from '../Resources/mockData';
import ResourceBreadcrumbs from './ResourceBreadcrumbs';
import ResourceHeader from './ResourceHeader';
import ResourceTabs from './ResourceTabs';
import ResourceOverview from './ResourceOverview';
import ResourceServices from './ResourceServices';
import ResourceContactHours from './ResourceContactHours';
import ResourceReviews from './ResourceReviews';
import ResourceSidebar from './ResourceSidebar';

const ResourcePage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  // Find the resource by ID
  const resource = mockResources.find(r => r.id === id);

  const [state, setState] = useState<ResourcePageState>({
    activeTab: 0,
    isBookmarked: false,
  });

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setState(prev => ({ ...prev, activeTab: newValue }));
  };

  const handleBookmarkToggle = () => {
    setState(prev => ({ ...prev, isBookmarked: !prev.isBookmarked }));
  };

  const handleBackToResources = () => {
    navigate('/resources');
  };

  // Show loading or error state if resource not found
  if (!resource) {
    return (
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <div style={{ textAlign: 'center', padding: '4rem 0' }}>
          <h2>Resource Not Found</h2>
          <p>The resource you're looking for doesn't exist.</p>
          <button onClick={handleBackToResources}>Back to Resources</button>
        </div>
      </Container>
    );
  }

  const renderTabContent = () => {
    switch (state.activeTab) {
      case 0:
        return <ResourceOverview resource={resource} />;
      case 1:
        return <ResourceServices services={resource.services} />;
      case 2:
        return <ResourceContactHours resource={resource} />;
      case 3:
        return <ResourceReviews />;
      default:
        return <ResourceOverview resource={resource} />;
    }
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <ResourceBreadcrumbs resourceName={resource.name} />

      <Grid container spacing={4}>
        {/* Main Content */}
        <Grid item xs={12} lg={8}>
          <ResourceHeader
            resource={resource}
            isBookmarked={state.isBookmarked}
            onBookmarkToggle={handleBookmarkToggle}
          />

          <ResourceTabs
            activeTab={state.activeTab}
            onTabChange={handleTabChange}
          />

          {renderTabContent()}
        </Grid>

        {/* Sidebar */}
        <Grid item xs={12} lg={4}>
          <ResourceSidebar resource={resource} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ResourcePage;
