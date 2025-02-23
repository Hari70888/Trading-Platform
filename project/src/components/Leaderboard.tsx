import React from 'react';

export const Leaderboard: React.FC = () => {
  return (
    <div className="bg-[#0a0d1c] border-l border-gray-800 w-72 p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Space</h2>
        <button className="text-gray-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      
      <div className="bg-[#141828] rounded-lg p-4 mb-4">
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold mb-2">Meet the Space feed</h3>
          <p className="text-gray-400">Your guide to analysis and smart trading</p>
        </div>
        
        <div className="relative mt-6">
          <div className="bg-[#1a1f2e] rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <div className="w-6 h-6 bg-blue-600 rounded"></div>
              <div className="text-xs text-gray-400">Buy</div>
            </div>
            <div className="h-16 bg-[#141828] rounded"></div>
          </div>
          
          <div className="absolute -right-2 top-1/2 w-4 h-4 bg-orange-500 rounded-full"></div>
        </div>
        
        <p className="text-sm text-gray-400 mt-4">
          Read timely analysis, learn how it is built, compare expert insights with your own, and master analytical skills.
        </p>
        
        <button className="w-full bg-blue-600 text-white rounded-lg py-2 mt-4">
          CUSTOMISE FEED
        </button>
      </div>
    </div>
  );
}