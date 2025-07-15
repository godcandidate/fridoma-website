import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, Save, TrendingUp } from 'lucide-react';

interface PricePredictionProps {
  prediction: {
    price: number;
    confidenceMin: number;
    confidenceMax: number;
  };
}

const PricePrediction: React.FC<PricePredictionProps> = ({ prediction }) => {
  const [feedback, setFeedback] = useState<'positive' | 'negative' | null>(null);
  const [saved, setSaved] = useState(false);

  const handleFeedback = (type: 'positive' | 'negative') => {
    setFeedback(type);
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 lg:p-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
          <TrendingUp className="w-8 h-8 text-orange-500" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Price Prediction</h2>
        <p className="text-gray-600">Based on your property details</p>
      </div>
      
      <div className="space-y-6">
        <div className="text-center">
          <div className="flex flex-col items-center">
            <span className="text-gray-600 font-medium mb-2">Estimated Price</span>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500">
              ${prediction.price.toLocaleString()}
            </div>
            <div className="text-gray-600 mt-2">
              <span className="font-medium">Confidence Range:</span>
              <br />
              ${prediction.confidenceMin.toLocaleString()} - ${prediction.confidenceMax.toLocaleString()}
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col items-center">
            <span className="text-gray-600 font-medium mb-2">Confidence Score</span>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500">
              {Math.round((prediction.confidenceMax - prediction.confidenceMin) / prediction.price * 100)}%
            </div>
          </div>
        </div>

        <div className="text-center mb-6">
          <div className="text-gray-600">
            <span className="font-medium">Top Factors Affecting Price:</span>
            <br />
            Square Footage, Number of Bedrooms/Bathrooms
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600 mb-4">How accurate is this prediction?</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => handleFeedback('positive')}
              className={`flex items-center justify-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                feedback === 'positive'
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-green-100'
              }`}
            >
              <ThumbsUp className="w-4 h-4" />
              <span>Positive</span>
            </button>
            <button
              onClick={() => handleFeedback('negative')}
              className={`flex items-center justify-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                feedback === 'negative'
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-red-100'
              }`}
            >
              <ThumbsDown className="w-4 h-4" />
              <span>Negative</span>
            </button>
          </div>
        </div>

        <div className="flex justify-center pt-4 border-t border-gray-200">
          <button
            onClick={handleSave}
            className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg transition-colors ${
              saved
                ? 'bg-orange-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-orange-100'
            }`}
          >
            <Save className="w-4 h-4" />
            <span>{saved ? 'Saved' : 'Save Property'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricePrediction;