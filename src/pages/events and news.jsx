// pages/Partners.jsx
import React from 'react';
import { Building, Globe, Handshake } from 'lucide-react';

const PartnerLogo = ({ name }) => (
  <div className="w-full h-24 flex items-center justify-center bg-gray-800 rounded-lg p-4 shadow-xl hover:bg-gray-700 transition-colors duration-300">
    <span className="text-3xl font-extrabold text-white opacity-70 hover:opacity-100 transition-opacity">
        {name}
    </span>
  </div>
);

const Partners = () => {
  const goldPartners = ["DNV", "Maersk", "Shell Energy", "Mitsubishi Heavy"];
  const silverPartners = ["ABB", "Wärtsilä", "Cargill", "Inmarsat"];
  
  return (
    <section className="bg-gray-900 min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-white text-center mb-4 flex items-center justify-center gap-4">
          <Building className="w-8 h-8 text-blue-400" /> Industry Partners
        </h1>
        <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
          We proudly partner with the innovators driving global maritime excellence.
        </p>

        {/* Gold Partners */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-yellow-500 mb-6 flex items-center justify-center">
            <Handshake className="w-6 h-6 mr-2" /> Gold Sponsors
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {goldPartners.map((name, index) => <PartnerLogo key={index} name={name} />)}
          </div>
        </div>

        {/* Silver Partners */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-400 mb-6 flex items-center justify-center">
            <Globe className="w-6 h-6 mr-2" /> Silver Sponsors
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {silverPartners.map((name, index) => <PartnerLogo key={index} name={name} />)}
          </div>
        </div>
        
        {/* CTA to Become a Partner */}
        <div className="text-center mt-16 p-10 bg-blue-900/40 rounded-xl border border-blue-500/50">
          <h3 className="text-3xl font-bold text-white mb-4">Want to Join Them?</h3>
          <p className="text-lg text-gray-300 mb-6">
            Explore exclusive sponsorship packages to showcase your brand to 7,500+ attendees.
          </p>
          <button className="px-8 py-3 bg-emerald-500 text-white font-bold rounded-lg hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/30">
            Request Partnership Guide
          </button>
        </div>

      </div>
    </section>
  );
};

export default Partners;