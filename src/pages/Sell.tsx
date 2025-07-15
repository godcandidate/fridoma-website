import React, { useState } from 'react';
import PropertyForm from '../components/PropertyForm';
import PricePrediction from '../components/PricePrediction';

const Sell: React.FC = () => {
  const [prediction, setPrediction] = useState<{
    price: number;
    confidenceMin: number;
    confidenceMax: number;
  } | null>(null);

  const handlePredict = (formData: any) => {
    // Simulate price prediction based on form data
    const basePrice = 200000;
    const sqftMultiplier = formData.sqft * 150;
    const bedroomMultiplier = formData.bedrooms * 25000;
    const bathroomMultiplier = formData.bathrooms * 15000;
    const yearBuiltMultiplier = (formData.year_built - 1900) * 500;
    const conditionMultiplier = formData.condition === 'excellent' ? 50000 : 
                               formData.condition === 'good' ? 25000 : 0;
    
    const predictedPrice = basePrice + sqftMultiplier + bedroomMultiplier + 
                          bathroomMultiplier + yearBuiltMultiplier + conditionMultiplier;
    
    const confidenceRange = predictedPrice * 0.1;
    
    setPrediction({
      price: predictedPrice,
      confidenceMin: predictedPrice - confidenceRange,
      confidenceMax: predictedPrice + confidenceRange
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Sell Your Property</h1>
          <p className="text-lg sm:text-xl text-gray-600">Get an instant price prediction for your property</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <PropertyForm onPredict={handlePredict} />
          {prediction && <PricePrediction prediction={prediction} />}
        </div>
      </div>
    </div>
  );
};

export default Sell;