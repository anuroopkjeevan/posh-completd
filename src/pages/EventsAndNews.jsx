// pages/EventsAndNews.jsx
import React from 'react';
import { Megaphone, MessageSquare } from 'lucide-react';

const NewsCard = ({ title, date }) => (
    <div className="p-6 bg-gray-800 rounded-xl shadow-lg border border-blue-600/30 hover:bg-gray-700 transition-colors">
        <p className="text-sm font-semibold text-blue-400 mb-2">{date}</p>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400">Read about the latest updates from MARPORTS GLOBAL and the maritime industry.</p>
    </div>
);

const EventsAndNews = () => {
  const newsItems = [
    { title: "Keynote Speaker Announcement: Dr. Sharma joins the lineup", date: "Dec 15, 2025" },
    { title: "Sponsorship Opportunities for MARPORTS 2026 now open", date: "Dec 10, 2025" },
    { title: "Maritime Digitalization Report 2025 Released", date: "Nov 28, 2025" },
  ];

  return (
    <section className="bg-gray-900 min-h-screen py-16 md:py-24 text-center text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-extrabold mb-4 flex items-center justify-center gap-4">
          <Megaphone className="w-8 h-8 text-blue-400" /> Events & News
        </h1>
        <p className="text-xl text-gray-400 mb-12">
          Stay informed with all the latest developments concerning the conference and the maritime sector.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {newsItems.map((item, index) => (
              <NewsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsAndNews;