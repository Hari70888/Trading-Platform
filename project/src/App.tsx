import React, { useState, useEffect } from 'react';
import { FiStar } from 'react-icons/fi';
import { fetchMarketData } from './services/marketDataService';
import Chart from './components/Chart';
import { MarketList } from './components/MarketList';
import { OrdersTable } from './components/OrdersTable';
import { SideNavigation } from './components/SideNavigation';

export type MarketData = {
  pair: string;
  price: string;
  secondPrice: string;
  change: string;
  subChange: string;
  isUp: boolean;
};

function App(): JSX.Element {
  const [selectedCompany, setSelectedCompany] = useState('AAPL'); // Default selected company
  const [selectedMarket, setSelectedMarket] = useState<MarketData | null>(null); // To hold the selected market data
  const [marketData, setMarketData] = useState<MarketData[]>([]);

  // Fetch market data once when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMarketData();
      setMarketData(data);
    };

    fetchData(); // Initial fetch
  }, []);

  useEffect(() => {
    const market: MarketData | undefined = marketData.find(m => m.pair === selectedCompany);
    if (market) {
      setSelectedMarket(market);
    }
  }, [selectedCompany]);

  const handleCompanyChange = (pair: string) => {
    setSelectedCompany(pair);
  };

  const orders = [
    {
      symbol: 'EURUSD',
      direction: 'Buy',
      volume: 0.30,
      priceChange: '1.02914 → 1.02904',
      takeProfit: '-',
      stopLoss: '-',
      floatingProfit: '-$3.30'
    },
    {
      symbol: 'EURUSD',
      direction: 'Buy',
      volume: 0.30,
      priceChange: '1.02920 → 1.02904',
      takeProfit: '-',
      stopLoss: '-',
      floatingProfit: '-$5.10'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0d1c] text-white flex">
      <SideNavigation />
      <div className="flex-1 flex flex-col">
        <header className="flex justify-between items-center px-4 py-2 border-b border-gray-800">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-lg">{selectedMarket ? selectedMarket.pair : selectedCompany}</span>
              <FiStar className="text-gray-400" />
            </div>
            <span className="text-gray-400">|</span>
            <span>M1</span>
            <button className="text-blue-500 border border-blue-500 rounded px-2 py-1 text-sm">New order</button>
            <div className="text-xs text-gray-400">
              {selectedMarket && (
                <span>O: {selectedMarket.secondPrice} H: {selectedMarket.change} L: {selectedMarket.subChange}</span>
              )}
            </div>
          </div>
        </header>

        <div className="flex flex-1">
          <div className="w-80 border-r border-gray-800 p-4">
            <MarketList data={marketData} onCompanySelect={handleCompanyChange} />
          </div>

          <div className="flex-1 p-4">
            <Chart selectedPair={selectedCompany} onCompanyChange={handleCompanyChange} />
            <OrdersTable orders={orders} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;