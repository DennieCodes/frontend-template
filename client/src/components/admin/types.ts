export interface SiteSettings {
  siteName?: string;
  siteDescription?: string;
  contactEmail?: string;
  maintenanceMode?: boolean;
  contactPhone?: string;
  timezone?: string;
  language?: string;
  allowRegistration?: boolean;
  requireEmailVerification?: boolean;
  maxFileSize?: number;
  sessionTimeout?: number;
}

export interface SiteSettingsPanelProps {
  settings?: SiteSettings;
  onSave: (settings: SiteSettings) => void;
}
