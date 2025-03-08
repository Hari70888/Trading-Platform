import React from 'react';
import { FiStar } from 'react-icons/fi';

interface MarketItem {
  pair: string;
  price: string;
  secondPrice: string;
  change: string;
  subChange: string;
  isUp: boolean;
}

interface MarketListProps {
  data: MarketItem[];
  onCompanySelect: (pair: string) => void; // Add callback prop for company selection
}

export const MarketList: React.FC<MarketListProps> = ({ data, onCompanySelect }) => {
  return (
    <div className="mt-4">
      {data.map((item) => (
        <div key={item.pair} className="flex justify-between items-center py-2 hover:bg-gray-800 rounded px-2 cursor-pointer" onClick={() => onCompanySelect(item.pair)}>
          <div className="flex items-center gap-2">
            <FiStar className="text-gray-400 hover:text-yellow-400" />
            <div>
              <div className="font-semibold">{item.pair}</div>
              <div className="text-sm text-gray-400">{item.change}</div>
            </div>
          </div>
          <div className="text-right">
            <div className={item.isUp ? 'text-green-500' : 'text-red-500'}>
              {item.price}
            </div>
            <div className="text-sm text-gray-400">{item.subChange}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
