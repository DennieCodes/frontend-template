import React from 'react';
import { Paper, Tabs, Tab } from '@mui/material';
import { ResourceTabsProps } from './types';

const ResourceTabs: React.FC<ResourceTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <Paper sx={{ mb: 3 }}>
      <Tabs value={activeTab} onChange={onTabChange} sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tab label="Overview" />
        <Tab label="Services" />
        <Tab label="Contact & Hours" />
        <Tab label="Reviews" />
      </Tabs>
    </Paper>
  );
};

export default ResourceTabs;
