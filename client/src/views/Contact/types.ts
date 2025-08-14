export interface ContactInfo {
  type: 'email' | 'phone' | 'address' | 'hours';
  icon: React.ReactNode;
  title: string;
  content: string | string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactHeaderProps {
  title: string;
  subtitle: string;
}

export interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactInfoProps {
  contactInfo: ContactInfo[];
}

export interface ContactInfoItemProps {
  info: ContactInfo;
}

export interface ContactFAQProps {
  faqItems: FAQItem[];
}

export interface ContactFAQItemProps {
  item: FAQItem;
}

export interface ContactContentProps {
  onSubmit: (data: ContactFormData) => void;
  contactInfo: ContactInfo[];
  faqItems: FAQItem[];
}

export interface ContactPageState {
  formData: ContactFormData;
}
