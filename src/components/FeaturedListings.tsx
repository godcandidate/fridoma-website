import React from 'react';
import { Star, Bed, Wifi } from 'lucide-react';

const FeaturedListings: React.FC = () => {
  const listings = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400',
      name: 'De Flecce',
      price: '$47,298/mo',
      rating: 4.5,
      sqft: 529,
      bedrooms: 3,
      internet: '10gb'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=400',
      name: 'Modern Villa',
      price: '$62,450/mo',
      rating: 4.8,
      sqft: 850,
      bedrooms: 4,
      internet: '50gb'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
      name: 'City Apartment',
      price: '$35,200/mo',
      rating: 4.3,
      sqft: 420,
      bedrooms: 2,
      internet: '25gb'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=400',
      name: 'Luxury Penthouse',
      price: '$89,750/mo',
      rating: 4.9,
      sqft: 1200,
      bedrooms: 5,
      internet: '100gb'
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
          <p className="text-lg sm:text-xl text-gray-600 px-4">Discover our handpicked selection of premium properties</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {listings.map((listing) => (
            <div key={listing.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={listing.image}
                  alt={listing.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{listing.rating}</span>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{listing.name}</h3>
                <div className="text-xl sm:text-2xl font-bold text-orange-500 mb-4">{listing.price}</div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{listing.sqft} sqft</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bed className="w-4 h-4" />
                    <span>{listing.bedrooms} bedrooms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Wifi className="w-4 h-4" />
                    <span>{listing.internet} internet</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedListings;