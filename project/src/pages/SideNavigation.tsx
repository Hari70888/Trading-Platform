import React from 'react';
import { FiDollarSign, FiArrowDown, FiRefreshCw, FiClock, FiCalendar } from 'react-icons/fi';

export const SideNavigation: React.FC = () => {
  return (
    <div className="w-16 bg-[#0a0d1c] border-r border-gray-800">
      <div className="flex flex-col items-center py-4">
        <div className="mb-4">
          <span className="text-xl font-bold">JJ</span>
        </div>
        <nav className="flex flex-col items-center space-y-6">
          <button className="p-2 rounded hover:bg-gray-800">
            <FiDollarSign size={20} />
          </button>
          <button className="p-2 rounded hover:bg-gray-800">
            <FiArrowDown size={20} />
          </button>
          <button className="p-2 rounded hover:bg-gray-800">
            <FiRefreshCw size={20} />
          </button>
          <button className="p-2 rounded hover:bg-gray-800">
            <FiClock size={20} />
          </button>
          <button className="p-2 rounded hover:bg-gray-800">
            <FiCalendar size={20} />
          </button>
        </nav>
      </div>
    </div>
  );
}