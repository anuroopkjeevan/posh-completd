// // pages/Awards.jsx
// import React from 'react';
// import { Award, Star, Ship, Users, Building, Cpu, Zap, ChevronRight, Globe, Trophy, Calendar } from 'lucide-react';

// const AwardCategory = ({ title, category, description, icon }) => (
//   <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1 h-full">
//     <div className="flex items-start gap-4 mb-4">
//       <div className="p-3 rounded-full bg-blue-50 text-blue-600">
//         {icon}
//       </div>
//       <div className="flex-1">
//         <div className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-1">
//           {category}
//         </div>
//         <h3 className="text-xl font-bold text-gray-900 mb-3">
//           {title}
//         </h3>
//         {description && (
//           <p className="text-gray-600">
//             {description}
//           </p>
//         )}
//       </div>
//     </div>
//   </div>
// );

// const AwardSection = ({ title, awards, icon }) => (
//   <div className="mb-16">
//     <div className="flex items-center gap-3 mb-8">
//       <div className="p-3 rounded-full bg-blue-600 text-white">
//         {icon}
//       </div>
//       <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
//     </div>
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {awards.map((award, idx) => (
//         <AwardCategory key={idx} {...award} />
//       ))}
//     </div>
//   </div>
// );

// [
//     {
//       title: "Company & Organization Awards",
//       icon: <Building className="w-6 h-6" />,
//       awards: [
//         { title: "Shipowner of the Year", category: "Corporate Excellence", icon: <Ship className="w-5 h-5" /> },
//         { title: "Shipping Line of the Year", category: "Corporate Excellence", icon: <Ship className="w-5 h-5" /> },
//         { title: "Port Developer of the Year", category: "Infrastructure", icon: <Building className="w-5 h-5" /> },
//         { title: "Emerging Port of the Year", category: "Infrastructure", icon: <Building className="w-5 h-5" /> },
//         { title: "Ship Management Company of the Year", category: "Operations", icon: <Users className="w-5 h-5" /> },
//         { title: "Ship Agency of the Year", category: "Operations", icon: <Users className="w-5 h-5" /> },
//         { title: "Shipyard of the Year", category: "Manufacturing", icon: <Ship className="w-5 h-5" /> },
//         { title: "Maritime AI Startup of the Year", category: "Innovation", icon: <Cpu className="w-5 h-5" /> },
//         { title: "Best Classification Society of the Year", category: "Regulatory Excellence", icon: <Award className="w-5 h-5" /> },
//         { title: "Best Maritime Association", category: "Industry Leadership", icon: <Users className="w-5 h-5" /> },
//         { title: "Best Maritime Digital Media", category: "Communications", icon: <Globe className="w-5 h-5" /> },
//         { title: "Best Service Provider – Maritime", category: "Services", icon: <Users className="w-5 h-5" /> },
//         { title: "Best Maritime University", category: "Education", icon: <Award className="w-5 h-5" /> },
//       ]
//     },
//     {
//       title: "Individual & Leadership Awards",
//       icon: <Users className="w-6 h-6" />,
//       awards: [
//         { title: "CEO of the Year", category: "Leadership", icon: <Users className="w-5 h-5" /> },
//         { title: "Woman Personality of the Year – Shipping", category: "Diversity & Inclusion", icon: <Star className="w-5 h-5" /> },
//         { title: "Young Entrepreneur of the Year – Maritime", category: "Entrepreneurship", icon: <Zap className="w-5 h-5" /> },
//         { title: "Best Maritime Personality", category: "Industry Recognition", icon: <Star className="w-5 h-5" /> },
//       ]
//     },
//     {
//       title: "Excellence & Achievement Awards",
//       icon: <Trophy className="w-6 h-6" />,
//       awards: [
//         { title: "Excellence in Port Strategy", category: "Strategic Planning", icon: <Building className="w-5 h-5" /> },
//         { title: "Excellence in Public Sector Leadership", category: "Government", icon: <Users className="w-5 h-5" /> },
//         { title: "Excellence in Port Development", category: "Infrastructure", icon: <Building className="w-5 h-5" /> },
//         { title: "Excellence in Legal Maritime Affairs", category: "Legal Excellence", icon: <Award className="w-5 h-5" /> },
//         { title: "Excellence in Green Shipping Initiative", category: "Sustainability", icon: <Zap className="w-5 h-5" /> },
//         { title: "Best CSR Initiative in Maritime Sector", category: "Corporate Responsibility", icon: <Star className="w-5 h-5" /> },
//         { title: "Excellence in Maritime Services", category: "Service Excellence", icon: <Users className="w-5 h-5" /> },
//         { title: "Best Employer of the Year", category: "Workplace Excellence", icon: <Users className="w-5 h-5" /> },
//         { title: "Outstanding Contribution to the Global Maritime Industry", category: "Industry Impact", icon: <Globe className="w-5 h-5" /> },
//       ]
//     },
//     {
//       title: "Lifetime Achievement Awards",
//       icon: <Award className="w-6 h-6" />,
//       awards: [
//         { title: "Lifetime Achievement Award – Maritime Services", category: "Career Excellence", icon: <Award className="w-5 h-5" /> },
//         { title: "Lifetime Achievement Award – Entrepreneurship", category: "Entrepreneurial Legacy", icon: <Zap className="w-5 h-5" /> },
//         { title: "Lifetime Achievement Award – Ship Design and Technology", category: "Technical Innovation", icon: <Ship className="w-5 h-5" /> },
//         { title: "Lifetime Achievement Award – Port Management", category: "Port Leadership", icon: <Building className="w-5 h-5" /> },
//       ]
//     }
//   ];

//   // Award ceremony information
//   const awardCeremonyInfo = {
//     date: "12 February 2026",
//     venue: "Lemon Tree Hotel, Trivandrum, Kerala, India",
//     description: "The MARPORTS GLOBAL Excellence Awards ceremony celebrates and honors pioneers redefining maritime leadership across 30+ categories."
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Hero Section */}
//       <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-blue-900 to-blue-800">
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1630154464043-c6ab5a6cac9f?q=80&w=1932')] opacity-10 bg-cover bg-center"></div>
        
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="max-w-6xl mx-auto text-center">
//             {/* Pre-Title */}
//             <div className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-bold uppercase tracking-[0.2em] px-6 py-2 rounded-full mb-6 border border-white/30">
//               AWARDS CEREMONY: {awardCeremonyInfo.date}
//             </div>

//             {/* Main Title */}
//             <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 tracking-tight leading-none">
//               EXCELLENCE <span className="text-blue-200">AWARDS</span>
//             </h1>
            
//             {/* Description */}
//             <div className="max-w-4xl mx-auto space-y-6 mb-10">
//               <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed">
//                 {awardCeremonyInfo.description}
//               </p>
//               <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 rounded-full border border-white/30">
//                 <Trophy className="w-5 h-5 text-white" />
//                 <span className="text-white font-semibold">{awardCeremonyInfo.venue}</span>
//               </div>
//             </div>

//             {/* Award Stats */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-12">
//               {[
//                 { number: "30+", label: "Award Categories", icon: <Award className="w-5 h-5" /> },
//                 { number: "4", label: "Award Sections", icon: <Trophy className="w-5 h-5" /> },
//                 { number: "150+", label: "Industry Leaders", icon: <Users className="w-5 h-5" /> },
//                 { number: "Global", label: "Recognition", icon: <Globe className="w-5 h-5" /> }
//               ].map((stat, idx) => (
//                 <div key={idx} className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300">
//                   <div className="flex flex-col items-center text-center space-y-3">
//                     <div className="p-3 bg-white/20 rounded-full text-white">
//                       {stat.icon}
//                     </div>
//                     <div className="text-3xl font-bold text-white">
//                       {stat.number}
//                     </div>
//                     <div className="text-sm text-blue-100 font-semibold uppercase tracking-widest">
//                       {stat.label}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="py-16 md:py-24 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               Award <span className="text-blue-600">Categories</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Celebrating excellence across all aspects of the maritime industry
//             </p>
//           </div>

//           {/* Award Sections */}
//           <div className="max-w-7xl mx-auto">
//             {awardSections.map((section, idx) => (
//               <AwardSection key={idx} {...section} />
//             ))}
//           </div>

//           {/* Nomination Section */}
//           <div className="max-w-6xl mx-auto mt-20">
//             <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12">
//               <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
//                 <div className="text-center lg:text-left">
//                   <h3 className="text-3xl font-bold text-white mb-4">
//                     Nominations for 2026 Awards Now Open
//                   </h3>
//                   <p className="text-xl text-blue-100 mb-6 max-w-2xl">
//                     Recognize excellence in your organization or nominate an industry leader for these prestigious awards
//                   </p>
//                   <div className="flex flex-wrap gap-4 mb-6">
//                     <div className="flex items-center gap-2 text-blue-200">
//                       <Star className="w-4 h-4" />
//                       <span>Open to all maritime organizations</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-blue-200">
//                       <Calendar className="w-4 h-4" />
//                       <span>Deadline: 30 November 2025</span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex-shrink-0">
//                   <button className="group px-8 py-4 bg-white text-blue-700 font-bold rounded-xl text-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
//                     <span className="flex items-center gap-2">
//                       SUBMIT NOMINATION
//                       <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                     </span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Judging Criteria */}
//           <div className="max-w-6xl mx-auto mt-16">
//             <div className="bg-white rounded-3xl p-8 border border-blue-200 shadow-lg">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Judging Criteria</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {[
//                   { title: "Innovation", description: "Novelty and creativity in approach", icon: "💡" },
//                   { title: "Impact", description: "Measurable positive effect on industry", icon: "📈" },
//                   { title: "Sustainability", description: "Environmental and social responsibility", icon: "🌱" },
//                   { title: "Excellence", description: "Consistent high-quality performance", icon: "⭐" }
//                 ].map((criterion, idx) => (
//                   <div key={idx} className="bg-blue-50 rounded-xl p-6 text-center hover:bg-blue-100 transition-colors">
//                     <div className="text-3xl mb-3">{criterion.icon}</div>
//                     <h4 className="text-xl font-bold text-gray-900 mb-2">{criterion.title}</h4>
//                     <p className="text-gray-600">{criterion.description}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white/70 py-12">
//         <div className="container mx-auto px-4 text-center">
//           <p className="text-2xl font-bold text-white mb-2">MARPORTS GLOBAL 2026</p>
//           <p className="text-lg text-blue-300 mb-4">Excellence Awards Ceremony</p>
//           <p className="text-sm text-gray-400">
//             {awardCeremonyInfo.date} | {awardCeremonyInfo.venue}
//           </p>
//           <p className="text-sm text-gray-400 mt-4">
//             Organized by E HUB EVENTS PRIVATE LIMITED | 
//             <a href="https://www.ehub.events" className="hover:text-white transition-colors ml-2">www.ehub.events</a>
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Awards;