import React from 'react';

const ConferenceTopicsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight uppercase">
            Conference Topics
          </h1>
          <div className="w-24 h-1.5 bg-blue-600 rounded-full mt-4"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl">
            Exploring the future of maritime through comprehensive panel discussions and speaking sessions
          </p>
        </div>

        {/* Panel Discussion Topics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-gray-200">
            PANEL DISCUSSION TOPICS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sustainable, Green, and Resilient Shipping */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-blue-700 py-4 px-6">
                <h3 className="text-xl font-bold text-white">
                  Sustainable, Green, and Resilient Shipping
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Global shipping outlook & trade perspectives from shipowners</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Advancing green and sustainable shipping strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Fleet optimization: routing, fuel efficiency, predictive maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Shipowner-port partnerships for operational excellence</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Port Infrastructure and Strategic Initiatives */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-blue-700 py-4 px-6">
                <h3 className="text-xl font-bold text-white">
                  Port Infrastructure and Strategic Initiatives
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Innovative port design, capacity expansion, and safety enhancements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Climate resilience and future-proofing infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Collaborative port-led development and support infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Port-based renewable energy, bunkering, and green hydrogen initiatives</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Advanced Ship Design, Shipbuilding, and Modern Shipyards */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-blue-700 py-4 px-6">
                <h3 className="text-xl font-bold text-white">
                  Advanced Ship Design, Shipbuilding, and Modern Shipyards
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Innovations in ship design for efficiency and safety</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Pathways to carbon-neutral shipping: fuels, propulsion, and vessel design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Transforming shipyards to build modern vessels and offshore platforms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Strengthening shipyard-shipowner collaboration</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Digital Transformation, Automation, and Smart Port Ecosystems */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-blue-700 py-4 px-6">
                <h3 className="text-xl font-bold text-white">
                  Digital Transformation, Automation, and Smart Port Ecosystems
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">AI, IoT, and digital twins enhancing port efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Seamless integration between stakeholders, systems, and infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Predictive shipping using AI and big data to reduce downtime</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Cybersecurity strategies for digital resilience in ports and fleets</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Speaking Topics */}
        <div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Speaking Topics Grid */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow md:col-span-2">
            
              
            </div>
             <div className="bg-blue-700 py-4 px-6">
                <h3 className="text-xl font-bold text-white">
                  Final Conference Agenda Will Be Updated Soon
                </h3>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConferenceTopicsPage;