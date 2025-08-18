export interface AddressInfo {
  streetAddress?: string;
  apartment?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  addressType?: string;
  isDefault?: boolean;
}

export interface AddressInfoProps {
  address?: AddressInfo;
  onSave: (address: AddressInfo) => void;
}

export interface ProfileInfo {
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
}

export interface ProfileInfoProps {
  profile?: ProfileInfo;
  onSave: (profile: ProfileInfo) => void;
}

export interface SecuritySettings {
  twoFactorEnabled?: boolean;
  emailNotifications?: boolean;
  passwordLastChanged?: string;
  loginAlerts?: boolean;
  sessionTimeout?: number;
}

export interface SecuritySettingsProps {
  settings?: SecuritySettings;
  onSave: (settings: SecuritySettings) => void;
}

export interface SubscriptionPlan {
  type?: string;
  name?: string;
  plan?: string;
  status?: string;
  nextBilling?: string;
  nextBillingDate?: string;
  amount?: number;
}

export interface SubscriptionPlanProps {
  currentPlan?: SubscriptionPlan;
  onPlanChange?: (plan: SubscriptionPlan) => void;
  onSave: (subscription: SubscriptionPlan) => void;
}
