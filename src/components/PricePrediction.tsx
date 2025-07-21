import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, Save, TrendingUp } from 'lucide-react';

interface PricePredictionProps {
  prediction: {
    price: number;
    confidenceMin: number;
    confidenceMax: number;
  };
  onFeedback: (feedback: 'positive' | 'negative', expectedPrice?: number) => Promise<void>;
}

const PricePrediction: React.FC<PricePredictionProps> = ({ prediction, onFeedback }) => {
  const [feedback, setFeedback] = useState<'positive' | 'negative' | null>(null);
  const [saved, setSaved] = useState(false);
  const [expectedPrice, setExpectedPrice] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFeedback = (type: 'positive' | 'negative') => {
    setFeedback(type);
    if (type === 'positive') {
      setExpectedPrice('');
    }
  };

  const handleExpectedPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allow only numbers and decimal points
    const value = e.target.value.replace(/[^0-9.]/g, '');
    setExpectedPrice(value);
  };

  const handleSubmitFeedback = async () => {
    if (!feedback || (feedback === 'negative' && !expectedPrice)) return;
    
    setIsSubmitting(true);
    try {
      const price = feedback === 'negative' ? parseFloat(expectedPrice) : undefined;
      await onFeedback(feedback, price);
      setFeedback(null);
      setExpectedPrice('');
    } catch (error) {
      console.error('Error submitting feedback:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 lg:p-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-5">
          <TrendingUp className="w-8 h-8 text-orange-500" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Price Prediction</h2>
        <p className="text-gray-600 mb-8">Based on your property details</p>
        
        <div className="space-y-6">
          <div>
            <div className="text-gray-600 mb-1">Estimated Price</div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-500">
              ${prediction.price.toLocaleString()}
            </div>
          </div>
          
          <div>
            <div className="text-gray-600 mb-1">Confidence Range</div>
            <div className="text-xl sm:text-2xl font-medium text-orange-500">
              ${prediction.confidenceMin.toLocaleString()} - ${prediction.confidenceMax.toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        {feedback === null ? (
          <>
            <p className="text-sm text-gray-600 mb-4">How accurate is this prediction?</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => handleFeedback('positive')}
                className="flex items-center justify-center space-x-2 px-4 py-2 rounded-lg transition-colors bg-gray-100 text-gray-700 hover:bg-green-100"
              >
                <ThumbsUp className="w-4 h-4" />
                <span>Positive</span>
              </button>
              <button
                onClick={() => handleFeedback('negative')}
                className="flex items-center justify-center space-x-2 px-4 py-2 rounded-lg transition-colors bg-gray-100 text-gray-700 hover:bg-red-100"
              >
                <ThumbsDown className="w-4 h-4" />
                <span>Negative</span>
              </button>
            </div>
          </>
        ) : (
          <div className="space-y-4">
            {feedback === 'negative' && (
              <div className="text-left">
                <label htmlFor="expectedPrice" className="block text-sm font-medium text-gray-700 mb-1">
                  What price were you expecting?
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="text"
                    name="expectedPrice"
                    id="expectedPrice"
                    value={expectedPrice}
                    onChange={handleExpectedPriceChange}
                    className="focus:ring-orange-500 focus:border-orange-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md py-2 border"
                    placeholder="0.00"
                    aria-describedby="price-currency"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm" id="price-currency">
                      USD
                    </span>
                  </div>
                </div>
              </div>
            )}
            <div className="flex justify-center space-x-3 pt-2">
              <button
                onClick={() => {
                  setFeedback(null);
                  setExpectedPrice('');
                }}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitFeedback}
                disabled={isSubmitting || (feedback === 'negative' && !expectedPrice)}
                className={`px-4 py-2 text-sm font-medium text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ${
                  isSubmitting || (feedback === 'negative' && !expectedPrice)
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-orange-500 hover:bg-orange-600'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-center pt-4 border-t border-gray-200 mt-6">
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
  );
};

export default PricePrediction;