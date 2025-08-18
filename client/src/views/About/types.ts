export interface AboutHeroProps {
  title: string;
  subtitle: string;
}

export interface AboutMissionProps {
  title: string;
  content: string[];
}

import { BaseValue, BaseTeamMember } from '../../types/common';

export interface AboutValuesProps {
  title?: string;
  subtitle?: string;
  values?: BaseValue[];
}

export interface Value {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface AboutTeamProps {
  title?: string;
  subtitle?: string;
  description?: string;
  teamMembers?: BaseTeamMember[];
}

export interface TeamMember {
  initials: string;
  name: string;
  position: string;
  avatarColor: string;
}

export interface AboutPageState {
  // Add any state management if needed in the future
}

export interface AboutPageProps {
  // Add any props if needed in the future
}
