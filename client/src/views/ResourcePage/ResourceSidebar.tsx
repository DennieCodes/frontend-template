import React from 'react';
import ResourceContactCard from './ResourceContactCard';
import ResourceAdditionalInfo from './ResourceAdditionalInfo';
import { ResourceSidebarProps } from './types';

const ResourceSidebar: React.FC<ResourceSidebarProps> = ({ resource }) => {
  return (
    <>
      <ResourceContactCard resource={resource} />
      <ResourceAdditionalInfo resource={resource} />
    </>
  );
};

export default ResourceSidebar;
