import React from 'react';
import { Home, Users, Cpu, TrendingUp } from 'lucide-react';

const StatisticsSection: React.FC = () => {
  const stats = [
    {
      icon: Home,
      value: '382M',
      label: 'Properties Available',
      color: 'text-blue-500'
    },
    {
      icon: Users,
      value: '9/10',
      label: 'People Happy',
      color: 'text-green-500'
    },
    {
      icon: Cpu,
      value: 'v1.0',
      label: 'Fridoma Model',
      color: 'text-purple-500'
    },
    {
      icon: TrendingUp,
      value: '2.4M',
      label: 'Predictions Made',
      color: 'text-orange-500'
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-orange-200">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium text-xs sm:text-sm tracking-wide">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;