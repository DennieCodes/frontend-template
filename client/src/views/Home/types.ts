export interface HomeHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText: string;
  onCtaClick?: () => void;
}

export interface HomeHeroContentProps {
  title: string;
  subtitle: string;
  ctaText: string;
  onCtaClick?: () => void;
}

export interface HomePageState {
  // Add any state management if needed in the future
}

export interface HomePageProps {
  // Add any props if needed in the future
}
