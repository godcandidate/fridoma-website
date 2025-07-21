import React, { useState } from 'react';
import { Calculator, Plus, Minus } from 'lucide-react';

interface PropertyFormProps {
  onPredict: (formData: {
    sqft: number;
    bedrooms: number;
    bathrooms: number;
    location: string;
    year_built: number;
    condition: string;
  }) => void;
  isLoading?: boolean;
}

const PropertyForm: React.FC<PropertyFormProps> = ({ onPredict, isLoading = false }) => {
  const [formData, setFormData] = useState({
    sqft: '',
    bedrooms: 1,
    bathrooms: 1,
    location: '',
    year_built: '',
    condition: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;
    
    onPredict({
      ...formData,
      sqft: parseInt(formData.sqft),
      bedrooms: formData.bedrooms,
      bathrooms: formData.bathrooms,
      year_built: parseInt(formData.year_built)
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCountChange = (field: 'bedrooms' | 'bathrooms', increment: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: increment 
        ? Math.min(prev[field] + 1, 10) 
        : Math.max(prev[field] - 1, 1)
    }));
  };
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 lg:p-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Property Details</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Square Footage
          </label>
          <input
            type="number"
            name="sqft"
            value={formData.sqft}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 ${
              isLoading ? 'opacity-75 cursor-not-allowed' : ''
            }`}
            placeholder="e.g., 1200"
            required
            disabled={isLoading}
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bedrooms
            </label>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <button
                type="button"
                onClick={() => !isLoading && handleCountChange('bedrooms', false)}
                className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg border border-gray-300 transition-all duration-200 ${
                  isLoading 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:border-orange-500 hover:bg-orange-50'
                }`}
                disabled={isLoading}
              >
                <Minus className="w-4 h-4 text-gray-600" />
              </button>
              <div className="flex-1 text-center">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">{formData.bedrooms}</div>
                <div className="text-xs text-gray-500 hidden sm:block">bedroom{formData.bedrooms !== 1 ? 's' : ''}</div>
              </div>
              <button
                type="button"
                onClick={() => !isLoading && handleCountChange('bedrooms', true)}
                className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg border border-gray-300 transition-all duration-200 ${
                  isLoading 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:border-orange-500 hover:bg-orange-50'
                }`}
                disabled={isLoading}
              >
                <Plus className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bathrooms
            </label>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <button
                type="button"
                onClick={() => handleCountChange('bathrooms', false)}
                className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg border border-gray-300 hover:border-orange-500 hover:bg-orange-50 transition-all duration-200"
              >
                <Minus className="w-4 h-4 text-gray-600" />
              </button>
              <div className="flex-1 text-center">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">{formData.bathrooms}</div>
                <div className="text-xs text-gray-500 hidden sm:block">bathroom{formData.bathrooms !== 1 ? 's' : ''}</div>
              </div>
              <button
                type="button"
                onClick={() => handleCountChange('bathrooms', true)}
                className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg border border-gray-300 hover:border-orange-500 hover:bg-orange-50 transition-all duration-200"
              >
                <Plus className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
            placeholder="e.g., New York, NY"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Year Built
          </label>
          <input
            type="number"
            name="year_built"
            value={formData.year_built}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
            placeholder="e.g., 2010"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Condition
          </label>
          <div className="relative">
            <select
            name="condition"
            value={formData.condition}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none bg-white transition-all duration-200 cursor-pointer"
            required
          >
            <option value="">Select condition</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
        
        <button
          type="submit"
          className={`w-full bg-orange-500 text-white py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 flex items-center justify-center space-x-2 ${
            isLoading ? 'opacity-75 cursor-not-allowed' : 'hover:bg-orange-600'
          }`}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Calculating...</span>
            </>
          ) : (
            <>
              <Calculator className="w-5 h-5" />
              <span>Calculate Price</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default PropertyForm;