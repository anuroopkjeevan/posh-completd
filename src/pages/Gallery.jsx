// pages/Gallery.jsx
import React from 'react';
import { Camera } from 'lucide-react';

const Gallery = () => {
  return (
    <section className="bg-gray-900 min-h-screen py-16 md:py-24 text-center text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-extrabold mb-4 flex items-center justify-center gap-4">
          <Camera className="w-8 h-8 text-blue-400" /> Event Gallery
        </h1>
        <p className="text-xl text-gray-400 mb-12">
          A visual showcase of our past successful events and attendees.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-64 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500">Photo Placeholder 1</div>
          <div className="h-64 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500">Photo Placeholder 2</div>
          <div className="h-64 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500">Photo Placeholder 3</div>
          <div className="h-64 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500">Photo Placeholder 4</div>
          <div className="h-64 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500">Photo Placeholder 5</div>
          <div className="h-64 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500">Photo Placeholder 6</div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;