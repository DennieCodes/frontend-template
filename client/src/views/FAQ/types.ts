export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQHeaderProps {
  title: string;
  subtitle: string;
}

export interface FAQAccordionProps {
  faqItems: FAQItem[];
  expanded: string | false;
  onExpandedChange: (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
}

export interface FAQFooterProps {
  helpText: string;
  supportText: string;
}

export interface FAQContentProps {
  faqItems: FAQItem[];
  expanded: string | false;
  onExpandedChange: (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
}

export interface FAQPageState {
  expanded: string | false;
}
