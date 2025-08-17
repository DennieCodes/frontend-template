export interface AddressInfoProps {
  address?: {
    streetAddress?: string;
    apartment?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
    addressType?: string;
    isDefault?: boolean;
  };
  onSave: (address: any) => void;
}

export interface ProfileInfoProps {
  profile?: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    dateOfBirth?: string;
    gender?: string;
    bio?: string;
    location?: string;
    website?: string;
    company?: string;
    jobTitle?: string;
    department?: string;
    startDate?: string;
    avatar?: string;
  };
  onSave: (profile: any) => void;
}

export interface SecuritySettingsProps {
  settings?: {
    twoFactorEnabled?: boolean;
    emailNotifications?: boolean;
    passwordLastChanged?: string;
    loginAlerts?: boolean;
    sessionTimeout?: number;
  };
  onSave: (settings: any) => void;
}

export interface SubscriptionPlanProps {
  currentPlan?: {
    type?: string;
    name?: string;
    plan?: string;
    status?: string;
    nextBilling?: string;
    nextBillingDate?: string;
    amount?: number;
  };
  onPlanChange?: (plan: any) => void;
  onSave: (subscription: any) => void;
}
