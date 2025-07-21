const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

interface PredictionResponse {
  predicted_price: number;
  confidence_interval: [number, number];
  prediction_id: string;
}

export const predictPrice = async (data: {
  sqft: number;
  bedrooms: number;
  bathrooms: number;
  location: string;
  year_built: number;
  condition: string;
}): Promise<PredictionResponse> => {
  const response = await fetch(`${API_URL}/predict`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to get prediction');
  }

  return response.json();
};

export const submitFeedback = async (data: {
  prediction_id: string;
  user_feedback: 'positive' | 'negative';
  expected_price?: number;
}) => {
  const response = await fetch(`${API_URL}/feedback`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to submit feedback');
  }

  return response.json();
};
