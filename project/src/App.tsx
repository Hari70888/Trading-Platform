import React, { useState } from 'react';
import { FiSearch, FiStar, FiBell, FiMaximize2 } from 'react-icons/fi';
import { Chart } from './components/Chart';
import { MarketList } from './components/MarketList';
import { OrdersTable } from './components/OrdersTable';
import { SideNavigation } from './components/SideNavigation';
import { Leaderboard } from './components/Leaderboard';

function App() {
  const [selectedTab, setSelectedTab] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const marketData = [
    { pair: 'BTCUSD', price: '94348.99', secondPrice: '94324.99', change: 'S: 2407.0', subChange: 'H: 94489.60 L: 92446.97', isUp: false },
    { pair: 'EURUSD', price: '1.02914', secondPrice: '1.02904', change: 'S: 1.0', subChange: 'H: 1.02041 L: 1.02806', isUp: true },
    { pair: 'ETHUSD', price: '3290.10', secondPrice: '3288.25', change: 'S: 18.5', subChange: 'H: 3291.64 L: 2912.66', isUp: true },
    { pair: 'USDJPY', price: '158.410', secondPrice: '158.388', change: 'S: 2.2', subChange: 'H: 158.416 L: 157.925', isUp: true },
    { pair: 'GBPUSD', price: '1.22910', secondPrice: '1.22897', change: 'S: 1.3', subChange: 'H: 1.22820 L: 1.22660', isUp: true },
    { pair: 'NAS100', price: '21126.1', secondPrice: '21122.8', change: 'S: 3.3', subChange: 'H: 21166.7 L: 21018.3', isUp: false },
    { pair: 'US30', price: '42629.7', secondPrice: '42624.4', change: 'S: 4.3', subChange: 'H: 42629.4 L: 42461.1', isUp: true },
    { pair: 'GBPJPY', price: '194.691', secondPrice: '194.667', change: 'S: 2.4', subChange: 'H: 194.767 L: 194.216', isUp: false },
    { pair: 'XTIUSD', price: '74.03', secondPrice: '73.92', change: 'S: 1.1', subChange: 'H: 73.55 L: 73.38', isUp: false }
  ];

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
      {/* Left Navigation */}
      <SideNavigation />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center px-4 py-2 border-b border-gray-800">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-lg">EURUSD</span>
              <FiStar className="text-gray-400" />
            </div>
            <span className="text-gray-400">|</span>
            <span>M1</span>
            <button className="text-blue-500 border border-blue-500 rounded px-2 py-1 text-sm">New order</button>
            <div className="text-xs text-gray-400">
              <span>O: 1.02876 H: 1.02876 L: 1.02868 C: 1.02360 -0.00015 (-0.02%)</span>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-gray-400 text-sm">
              <span>Margin</span>
              <div className="text-white">$61.74</div>
            </div>
            <div className="text-gray-400 text-sm">
              <span>Free margin</span>
              <div className="text-white">$9,928.78</div>
            </div>
            <div className="text-gray-400 text-sm">
              <span>Margin level</span>
              <div className="text-white">16,181.60%</div>
            </div>
            <div className="text-gray-400 text-sm">
              <span>Equity</span>
              <div className="text-white">$9,990.52</div>
            </div>
            <div className="text-gray-400 text-sm">
              <span>Floating profit</span>
              <div className="text-red-500">-$8.40</div>
            </div>
            <div className="flex items-center space-x-2">
              <span>321411100</span>
              <button className="bg-blue-600 px-4 py-1 rounded text-sm">TOP UP</button>
            </div>
          </div>
        </header>

        {/* Trading Interface */}
        <div className="flex flex-1">
          {/* Market List */}
          <div className="w-80 border-r border-gray-800 p-4">
            <div className="relative">
              <FiSearch className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search instruments"
                className="w-full bg-gray-800 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {['All', 'Forex', 'Crypto', 'Indices', 'Metals', 'Energies', 'Intraday'].map((tab) => (
                <button
                  key={tab}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedTab === tab ? 'bg-blue-600' : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                  onClick={() => setSelectedTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <MarketList data={marketData} />
          </div>

          {/* Chart and Orders */}
          <div className="flex-1 p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <button className="bg-red-500 px-4 py-2 rounded">
                    SELL<br/>1.02904
                  </button>
                  <div className="flex flex-col items-center px-2">
                    <button className="text-lg">−</button>
                    <span>0.30</span>
                    <button className="text-lg">+</button>
                  </div>
                  <button className="bg-green-500 px-4 py-2 rounded">
                    BUY<br/>1.02914
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="text-gray-400 hover:text-white">
                  <FiMaximize2 size={20} />
                </button>
              </div>
            </div>

            <Chart />
            <OrdersTable orders={orders} />
          </div>

          {/* Leaderboard */}
          <Leaderboard />
        </div>
      </div>
    </div>
  );
}

export default App;