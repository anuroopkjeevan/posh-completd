const AwardCard = ({ title, description }) => {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-4">
          <span className="text-xl">🏆</span>
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  };
  
  export default AwardCard;