import React from 'react';
import HeroSection from '../components/HeroSection';
import StatisticsSection from '../components/StatisticsSection';
import FeaturedListings from '../components/FeaturedListings';

interface LandingProps {
  onExploreClick: () => void;
}

const Landing: React.FC<LandingProps> = ({ onExploreClick }) => {
  return (
    <div className="min-h-screen">
      <HeroSection onExploreClick={onExploreClick} />
      <StatisticsSection />
      <FeaturedListings />
    </div>
  );
};

export default Landing;