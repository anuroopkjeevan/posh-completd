// pages/ConferenceTopics.jsx
import React from 'react';
import { Calendar, Zap, Ship, Cpu, BookOpen, Users, Building, Globe, Award, ChevronRight, Mic, Briefcase } from 'lucide-react';

const TopicSection = ({ title, icon, description, topics }) => (
  <div className="bg-white rounded-2xl p-6 md:p-8 border border-blue-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
    <div className="flex items-start gap-4 mb-6">
      <div className="p-3 rounded-full bg-blue-50 text-blue-600">
        {icon}
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {title}
        </h2>
        {description && (
          <p className="text-gray-600 text-sm mb-4">
            {description}
          </p>
        )}
      </div>
    </div>
    <ul className="space-y-3">
      {topics.map((topic, index) => (
        <li key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
          <ChevronRight className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
          <span className="text-gray-800 text-sm">{topic}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ConferenceTopics = () => {
  // Main conference description from document
  const conferenceDescription = `The MARPORTS GLOBAL Conference & Excellence Awards is a premier international platform that unites maritime leaders, shipowners, port developers, terminal operators, ship designers and builders, digitalization experts, visionaries, and policymakers from around the world.`;

  const conferenceFocus = `Dedicated to shaping the future of the global maritime and port ecosystem, MARPORTS GLOBAL convenes the industry's most influential voices to share insights, explore innovations, and celebrate excellence.`;

  // Conference statistics
  const conferenceStats = [
    { number: "150+", label: "Industry Leaders", icon: <Users className="w-5 h-5" /> },
    { number: "30+", label: "Award Categories", icon: <Award className="w-5 h-5" /> },
    { number: "5", label: "Main Topics", icon: <BookOpen className="w-5 h-5" /> },
    { number: "Global", label: "Platform", icon: <Globe className="w-5 h-5" /> }
  ];

  // Discussion topics from document
  const discussionTopics = [
    {
      title: "Sustainable, Green, and Resilient Shipping",
      icon: <Ship className="w-6 h-6" />,
      description: "Focusing on eco-friendly shipping strategies and operational excellence",
      topics: [
        "Global shipping outlook & trade perspectives from shipowners",
        "Advancing green and sustainable shipping strategies",
        "Fleet optimization: routing, fuel efficiency, predictive maintenance",
        "Shipowner-port partnerships for operational excellence"
      ]
    },
    {
      title: "Port Infrastructure and Strategic Initiatives",
      icon: <Building className="w-6 h-6" />,
      description: "Innovations in port design, development, and sustainable infrastructure",
      topics: [
        "Innovative port design, capacity expansion, and safety enhancements",
        "Climate resilience and future-proofing infrastructure",
        "Collaborative port-led development and support infrastructure",
        "Port-based renewable energy, bunkering, and green hydrogen initiatives"
      ]
    },
    {
      title: "Advanced Ship Design, Shipbuilding, and Modern Shipyards",
      icon: <Zap className="w-6 h-6" />,
      description: "Transforming shipbuilding for efficiency, safety, and sustainability",
      topics: [
        "Innovations in ship design for efficiency and safety",
        "Pathways to carbon-neutral shipping: fuels, propulsion, and vessel design",
        "Transforming shipyards to build modern vessels and offshore platforms",
        "Strengthening shipyard-shipowner collaboration"
      ]
    },
    {
      title: "Digital Transformation, Automation, and Smart Port Ecosystems",
      icon: <Cpu className="w-6 h-6" />,
      description: "Leveraging technology for efficient and resilient maritime operations",
      topics: [
        "AI, IoT, and digital twins enhancing port efficiency",
        "Seamless integration between stakeholders, systems, and infrastructure",
        "Predictive shipping using AI and big data to reduce downtime",
        "Cybersecurity strategies for digital resilience in ports and fleets"
      ]
    },
    {
      title: "Additional Key Topics",
      icon: <BookOpen className="w-6 h-6" />,
      description: "Comprehensive discussions on maritime education, workforce, and strategy",
      topics: [
        "Future-proofing maritime education: adapting to emerging technologies",
        "Upskilling the maritime workforce: bridging academia and industry",
        "Funding and risk management in ports, shipping, and shipbuilding",
        "Strategic alliances in the maritime sector for competitive advantage",
        "Class 2.0: Enabling the Next Wave of Maritime Transformation"
      ]
    }
  ];

  // Target audience from document
  const targetAudience = [
    "Maritime Leaders",
    "Shipowners",
    "Port Developers",
    "Terminal Operators",
    "Ship Designers & Builders",
    "Digitalization Experts",
    "Visionaries & Policymakers"
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-blue-900 to-blue-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1564507004663-b6dfb3e2ede5?q=80&w=1932')] opacity-10 bg-cover bg-center"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Pre-Title */}
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-bold uppercase tracking-[0.2em] px-6 py-2 rounded-full mb-6 border border-white/30">
              12 FEBRUARY 2026 | LEMON TREE HOTEL, TRIVANDRUM
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 tracking-tight leading-none">
              CONFERENCE <span className="text-blue-200">TOPICS</span>
            </h1>
            
            {/* Conference Description */}
            <div className="max-w-5xl mx-auto space-y-6 mb-10">
              <p className="text-lg md:text-xl text-blue-100 font-light leading-relaxed">
                {conferenceDescription}
              </p>
              <p className="text-base md:text-lg text-white font-medium">
                {conferenceFocus}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-12">
              {conferenceStats.map((stat, idx) => (
                <div key={idx} className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="p-3 bg-white/20 rounded-full text-white">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-white">
                      {stat.number}
                    </div>
                    <div className="text-sm text-blue-100 font-semibold uppercase tracking-widest">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Discussion <span className="text-blue-600">Topics</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Invited speakers and panellists can choose from a broad range of cutting-edge topics
            </p>
          </div>

          {/* Target Audience */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-2xl p-8 border-2 border-blue-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Who Should Attend?</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {targetAudience.map((audience, idx) => (
                  <span key={idx} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full border border-blue-200 hover:bg-blue-100 transition-colors">
                    {audience}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Discussion Topics */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {discussionTopics.map((section, index) => (
                <TopicSection key={index} {...section} />
              ))}
            </div>
          </div>

          {/* Additional Key Points */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Conference Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Mic className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Expert Panels</h4>
                    <p className="text-gray-700">Interactive sessions with industry leaders and policymakers</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Networking Opportunities</h4>
                    <p className="text-gray-700">Connect with 150+ maritime leaders and decision-makers</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Excellence Awards</h4>
                    <p className="text-gray-700">Celebrating innovation and leadership in maritime industry</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Briefcase className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Business Development</h4>
                    <p className="text-gray-700">Explore partnerships and investment opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mt-20">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Join the Premier Maritime Gathering
                </h3>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Be part of shaping the future of global maritime commerce, technology, and sustainability
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <button className="group px-8 py-4 bg-white text-blue-700 font-bold rounded-xl text-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                    <span className="flex items-center gap-2">
                      REGISTER FOR CONFERENCE
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                  <button className="group px-8 py-4 bg-white/10 text-white font-bold rounded-xl text-lg hover:bg-white/20 border border-white/30 transition-all duration-300">
                    <span className="flex items-center gap-2">
                      VIEW AWARD CATEGORIES
                      <Award className="w-5 h-5" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white/70 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-2xl font-bold text-white mb-2">MARPORTS GLOBAL 2026</p>
          <p className="text-lg mb-4">Conference & Excellence Awards</p>
          <p className="text-sm mb-4">
            12 February 2026 | Lemon Tree Hotel | Trivandrum, Kerala, India
          </p>
          <p className="text-sm">
            Organized by E HUB EVENTS PRIVATE LIMITED | 
            <a href="https://www.ehub.events" className="hover:text-white transition-colors ml-2">www.ehub.events</a> | 
            <a href="#" className="hover:text-white transition-colors ml-4">Privacy Policy</a> | 
            <a href="#" className="hover:text-white transition-colors ml-4">Contact Us</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ConferenceTopics;