import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="relative h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent">
        <img
          src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Beautiful house"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">
            Find Your Dream Home
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-12 drop-shadow-lg max-w-2xl mx-auto px-4">
            Discover stunning properties with affordable pricing tailored to your needs.
          </p>
          
          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-2xl mx-auto px-4">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by city or country..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 sm:py-4 rounded-lg text-base sm:text-lg bg-white/95 backdrop-blur-sm border-0 focus:ring-2 focus:ring-orange-500 focus:outline-none shadow-lg"
              />
            </div>
            <button
              onClick={onExploreClick}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-200 w-full sm:w-auto"
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;