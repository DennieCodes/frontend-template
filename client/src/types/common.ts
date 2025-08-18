// Generic base interfaces to replace 'any' types
export interface BaseEntity {
  id: string;
  name: string;
}

export interface BaseCategory extends BaseEntity {
  description?: string;
  slug?: string;
}

export interface BaseProduct extends BaseEntity {
  description?: string;
  price?: number;
  currency?: string;
  category?: string;
  thumbnail?: string;
  images?: string[];
  featured?: boolean;
  onSale?: boolean;
  discountPercentage?: number;
  rating?: number;
  reviewCount?: number;
  tags?: string[];
}

export interface BaseEvent extends BaseEntity {
  description?: string;
  date?: string;
  time?: string;
  location?: string | { address: string; city: string; state: string; zipCode: string };
  thumbnail?: string;
  images?: string[];
  featured?: boolean;
  price?: { type: string; currency?: string; amount?: number };
  capacity?: number;
  organizer?: string;
  speakers?: string[];
  tags?: string[];
  status?: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
}

export interface BaseResource extends BaseEntity {
  description?: string;
  category?: string;
  thumbnail?: string;
  images?: string[];
  rating?: number;
  reviewCount?: number;
  tags?: string[];
  location?: string | { address: string; city: string; state: string; zipCode: string };
  contactInfo?: {
    phone?: string;
    email?: string;
    website?: string;
  };
  hours?: {
    open?: string;
    close?: string;
    days?: string[];
  };
}

export interface BaseUser extends BaseEntity {
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string;
  bio?: string;
  location?: string;
  website?: string;
  company?: string;
  jobTitle?: string;
  department?: string;
  startDate?: string;
  isOnline?: boolean;
  joinDate?: string;
  lastActive?: string;
  followers?: number;
  following?: number;
  posts?: number;
  badges?: BaseBadge[];
  socialLinks?: BaseSocialLink[];
}

export interface BaseBadge extends BaseEntity {
  description?: string;
  icon?: string;
  color?: string;
  earnedAt?: string;
}

export interface BaseSocialLink extends BaseEntity {
  platform: string;
  url: string;
  username?: string;
}

export interface BaseArticle extends BaseEntity {
  description?: string;
  content?: string;
  author?: string;
  date?: string;
  readTime?: string;
  thumbnail?: string;
  images?: string[];
  tags?: string[];
  category?: string;
  featured?: boolean;
  url?: string;
}

export interface BaseSearchResult extends BaseEntity {
  description?: string;
  type: 'article' | 'resource' | 'page' | 'event' | 'product';
  author?: string;
  date?: string;
  readTime?: string;
  tags?: string[];
  url?: string;
}

export interface BaseContactInfo {
  title: string;
  content: string | string[];
  icon: React.ReactNode;
}

export interface BaseContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface BaseFAQItem {
  question: string;
  answer: string;
}

export interface BaseDocument {
  name: string;
  type: string;
  size: string;
  url: string;
  uploadedAt: string;
}

export interface BaseService {
  name: string;
  description: string;
  price?: string;
  duration?: string;
}

export interface BaseReview {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface BaseSocialMedia {
  platform: string;
  url: string;
  username?: string;
}

export interface BaseLocation {
  address: string;
  city: string;
  state: string;
  zipCode: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface BaseCoordinates {
  lat: number;
  lng: number;
}

export interface BaseQuestion {
  id: string;
  question: string;
  type: 'multiple-choice' | 'text' | 'textarea';
  options?: string[];
  required?: boolean;
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
  maxLength?: number;
}

export interface BaseQuizStep {
  id: string;
  title: string;
  description?: string;
}

export interface BaseSurveyStep {
  id: string;
  title: string;
  description?: string;
}

export interface BaseNavigationItem {
  label: string;
  path: string;
  icon?: React.ReactNode;
  requiresAuth?: boolean;
}

export interface BaseSiteMapSection {
  title: string;
  icon?: React.ReactNode;
  links?: BaseSiteMapLink[];
  items?: BaseSiteMapItem[];
}

export interface BaseSiteMapLink {
  title?: string;
  url?: string;
  name?: string;
  path?: string;
  description?: string;
}

export interface BaseSiteMapItem {
  title?: string;
  url?: string;
  name?: string;
  path?: string;
  description?: string;
}

export interface BaseStatItem {
  id: string;
  label: string;
  value: string | number;
  change?: string;
  color?: string;
  icon?: React.ReactNode;
}

export interface BaseActivityItem {
  id: string;
  type: 'post' | 'comment' | 'like';
  title: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
}

export interface BaseTeamMember {
  name: string;
  role: string;
  bio?: string;
  avatar?: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
}

export interface BaseValue {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface BaseArticleContent {
  title: string;
  content: string;
  author?: string;
  date?: string;
  tags?: string[];
}

export interface BaseArticleHeader {
  title: string;
  subtitle?: string;
  author?: string;
  date?: string;
  readTime?: string;
  tags?: string[];
  onBack?: () => void;
}

export interface BaseContactContent {
  title?: string;
  subtitle?: string;
  faqData?: BaseFAQItem[];
  onFormSubmit?: (data: BaseContactFormData) => void;
  contactInfo?: BaseContactInfo[];
  onSubmit?: (data: BaseContactFormData) => void;
}

export interface BaseDashboardContent {
  title?: string;
  subtitle?: string;
  stats?: BaseStatItem[];
  recentActivity?: BaseActivityItem[];
  quickActions?: BaseNavigationItem[];
  user?: BaseUser;
}

export interface BaseQuizNavigation {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onBack: () => void;
  onCancel: () => void;
  onSubmit: (answers?: Record<string, unknown>) => void;
  canProceed: boolean;
}

export interface BaseSurveyNavigation {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onBack: () => void;
  onCancel: () => void;
  onSubmit: (answers?: Record<string, unknown>) => void;
  canProceed: boolean;
}

export interface BaseAboutTeam {
  title?: string;
  subtitle?: string;
  description?: string;
  teamMembers?: BaseTeamMember[];
  values?: BaseValue[];
}

export interface BaseAboutValues {
  title?: string;
  subtitle?: string;
  values?: BaseValue[];
}

export interface BaseUserAccountDashboardGrid {
  children?: React.ReactNode;
}

export interface BaseAccountSummary {
  user?: BaseUser;
  stats?: BaseStatItem[];
}

export interface BaseArticlesResults {
  articles?: BaseArticle[];
  totalArticles?: number;
  filteredArticles?: BaseArticle[];
  hasActiveFilters?: boolean;
}
