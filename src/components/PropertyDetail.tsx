import React from 'react';
import { ArrowLeft, Bed, Bath, MapPin, Calendar, Home, Star } from 'lucide-react';

interface PropertyDetailProps {
  property: any;
  onBack: () => void;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property, onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-orange-500 hover:text-orange-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to listings</span>
        </button>
        
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="h-64 sm:h-80 lg:h-96 overflow-hidden">
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row items-start justify-between mb-6 space-y-4 sm:space-y-0">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{property.name}</h1>
                <div className="flex items-center space-x-1 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  <span className="text-base sm:text-lg">{property.location}</span>
                </div>
              </div>
              <div className="text-left sm:text-right">
                <div className="text-2xl sm:text-3xl font-bold text-orange-500">${property.price?.toLocaleString()}</div>
                <div className="flex items-center space-x-1 mt-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">4.5/5</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 text-base sm:text-lg mb-8">{property.description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Home className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Square Footage</div>
                  <div className="font-semibold">{property.sqft} sqft</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Bed className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Bedrooms</div>
                  <div className="font-semibold">{property.bedrooms}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Bath className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Bathrooms</div>
                  <div className="font-semibold">{property.bathrooms}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Calendar className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Year Built</div>
                  <div className="font-semibold">{property.year_built}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <Star className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Condition</div>
                  <div className="font-semibold capitalize">{property.condition}</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 sm:py-4 px-6 rounded-lg font-semibold transition-colors">
                Contact Seller
              </button>
              <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 sm:py-4 px-6 rounded-lg font-semibold transition-colors">
                Request Information
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;