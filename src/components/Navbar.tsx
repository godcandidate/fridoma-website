import React from 'react';
import { Home, Building2 } from 'lucide-react';

interface NavbarProps {
  currentPage: 'landing' | 'explore' | 'sell';
  onNavigate: (page: 'landing' | 'explore' | 'sell') => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 px-4 sm:px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div 
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={() => onNavigate('landing')}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 p-2 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow">
              <Building2 className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="flex flex-col min-w-0">
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-orange-600 group-hover:to-orange-500 transition-all duration-300">
              Fridoma
            </h1>
            <span className="text-xs text-gray-500 font-medium tracking-wider hidden sm:block">REAL ESTATE</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-8">
          <button
            onClick={() => onNavigate('landing')}
            className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
              currentPage === 'landing'
                ? 'bg-orange-500 text-white shadow-md'
                : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
            }`}
          >
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">Home</span>
          </button>
          <button
            onClick={() => onNavigate('explore')}
            className={`px-2 sm:px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
              currentPage === 'explore'
                ? 'bg-orange-500 text-white shadow-md'
                : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
            }`}
          >
            Explore
          </button>
          <button
            onClick={() => onNavigate('sell')}
            className={`px-2 sm:px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
              currentPage === 'sell'
                ? 'bg-orange-500 text-white shadow-md'
                : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
            }`}
          >
            Sell
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;