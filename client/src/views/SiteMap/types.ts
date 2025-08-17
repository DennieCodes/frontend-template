export interface SiteMapItem {
  name: string;
  path: string;
  description: string;
}

export interface SiteMapSection {
  title: string;
  icon?: React.ReactNode;
  links?: Array<{
    title?: string;
    url?: string;
    name?: string;
    path?: string;
    description?: string;
  }>;
  items?: Array<{
    title?: string;
    url?: string;
    name?: string;
    path?: string;
    description?: string;
  }>;
}

export interface SiteMapHeaderProps {
  title: string;
  subtitle: string;
}

export interface SiteMapSectionCardProps {
  section: SiteMapSection;
}

export interface SiteMapFooterProps {
  helpText: string;
  supportText: string;
}

export interface SiteMapGridProps {
  sections: SiteMapSection[];
}

export interface SiteMapPageState {
  sections: SiteMapSection[];
}
