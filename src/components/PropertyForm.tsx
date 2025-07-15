import React, { useState } from 'react';
import { Calculator, Plus, Minus } from 'lucide-react';

interface PropertyFormProps {
  onPredict: (formData: any) => void;
}

const PropertyForm: React.FC<PropertyFormProps> = ({ onPredict }) => {
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
            placeholder="e.g., 1200"
            required
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
                onClick={() => handleCountChange('bedrooms', false)}
                className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg border border-gray-300 hover:border-orange-500 hover:bg-orange-50 transition-all duration-200"
              >
                <Minus className="w-4 h-4 text-gray-600" />
              </button>
              <div className="flex-1 text-center">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">{formData.bedrooms}</div>
                <div className="text-xs text-gray-500 hidden sm:block">bedroom{formData.bedrooms !== 1 ? 's' : ''}</div>
              </div>
              <button
                type="button"
                onClick={() => handleCountChange('bedrooms', true)}
                className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg border border-gray-300 hover:border-orange-500 hover:bg-orange-50 transition-all duration-200"
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
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
        >
          <Calculator className="w-5 h-5" />
          <span>Predict Price</span>
        </button>
      </form>
    </div>
  );
};

export default PropertyForm;