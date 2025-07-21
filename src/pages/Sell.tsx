import React, { useState } from 'react';
import PropertyForm from '../components/PropertyForm';
import PricePrediction from '../components/PricePrediction';
import ServerDown from '../components/ServerDown';
import { predictPrice, submitFeedback } from '../utils/api';

const Sell: React.FC = () => {
  const [prediction, setPrediction] = useState<{
    price: number;
    confidenceMin: number;
    confidenceMax: number;
    predictionId: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showServerError, setShowServerError] = useState(false);

  const handlePredict = async (formData: {
    sqft: number;
    bedrooms: number;
    bathrooms: number;
    location: string;
    year_built: number;
    condition: string;
  }) => {
    setIsLoading(true);
    
    try {
      const data = await predictPrice(formData);
      setPrediction({
        price: data.predicted_price,
        confidenceMin: data.confidence_interval[0],
        confidenceMax: data.confidence_interval[1],
        predictionId: data.prediction_id
      });
    } catch (error) {
      console.error('Prediction error:', error);
      setShowServerError(true);
      setPrediction(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    setShowServerError(false);
  };

  const handleDismissError = () => {
    setShowServerError(false);
  };

  const handleFeedback = async (feedback: 'positive' | 'negative', expectedPrice?: number) => {
    if (!prediction) return;

    try {
      await submitFeedback({
        prediction_id: prediction.predictionId,
        user_feedback: feedback,
        expected_price: expectedPrice
      });
      
      // Clear the prediction after successful feedback
      setPrediction(null);
    } catch (error) {
      console.error('Feedback submission error:', error);
      setServerError(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {showServerError && (
        <ServerDown 
          onRetry={handleRetry}
          onDismiss={handleDismissError}
        />
      )}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Sell Your Property</h1>
          <p className="text-lg sm:text-xl text-gray-600">Get an instant price prediction for your property</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <PropertyForm 
            onPredict={handlePredict} 
            isLoading={isLoading} 
          />
          
          {prediction ? (
            <PricePrediction 
              prediction={{
                price: prediction.price,
                confidenceMin: prediction.confidenceMin,
                confidenceMax: prediction.confidenceMax
              }} 
              onFeedback={handleFeedback}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Sell;