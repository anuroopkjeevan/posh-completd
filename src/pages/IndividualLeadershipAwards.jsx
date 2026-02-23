// pages/IndividualLeadershipAwards.jsx
import React from 'react';
import { Trophy, Award } from 'lucide-react'; // Import Trophy and Award for better thematic icons

const IndividualLeadershipAwards = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 md:py-24 flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-7xl text-center">
        
        {/* Header Section */}
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="p-4 rounded-full bg-blue-600 text-white">
            <Award className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            <span className="text-blue-600">Awards </span>
          </h1>
        </div>
        
  
      </div>
    </div>
  );
};

export default IndividualLeadershipAwards;