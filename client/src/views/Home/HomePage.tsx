import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeHero from './HomeHero';
import { homeData } from './mockData';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    // Navigate to a relevant page or handle the CTA action
    navigate('/about');
  };

  return (
    <HomeHero
      title={homeData.title}
      subtitle={homeData.subtitle}
      backgroundImage={homeData.backgroundImage}
      ctaText={homeData.ctaText}
      onCtaClick={handleGetStarted}
    />
  );
};

export default HomePage;
