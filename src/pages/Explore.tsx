import React, { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import PropertyDetail from '../components/PropertyDetail';
import { mockProperties } from '../data/mockData';

const Explore: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState<any>(null);

  if (selectedProperty) {
    return (
      <PropertyDetail
        property={selectedProperty}
        onBack={() => setSelectedProperty(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Explore Properties</h1>
          <p className="text-lg sm:text-xl text-gray-600">Discover amazing properties in your preferred location</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {mockProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onClick={() => setSelectedProperty(property)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;