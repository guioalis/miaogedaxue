import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedPrograms from '../components/home/FeaturedPrograms';
import NewsHighlights from '../components/home/NewsHighlights';
import StatsSection from '../components/home/StatsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedPrograms />
      <NewsHighlights />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;