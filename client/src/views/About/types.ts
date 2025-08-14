export interface AboutHeroProps {
  title: string;
  subtitle: string;
}

export interface AboutMissionProps {
  title: string;
  content: string[];
}

export interface AboutValuesProps {
  title: string;
  values: Value[];
}

export interface Value {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

export interface AboutTeamProps {
  title: string;
  description: string;
  teamMembers: TeamMember[];
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
