export interface SiteSettingsPanelProps {
  settings?: {
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
  };
  onSave: (settings: any) => void;
}
