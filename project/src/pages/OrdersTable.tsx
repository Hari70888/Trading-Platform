import React from 'react';

interface Order {
  symbol: string;
  direction: string;
  volume: number;
  priceChange: string;
  takeProfit: string;
  stopLoss: string;
  floatingProfit: string;
}

interface OrdersTableProps {
  orders: Order[];
}

export const OrdersTable: React.FC<OrdersTableProps> = ({ orders }) => {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-2">
          <button className="bg-blue-600 px-4 py-1 rounded">Open</button>
          <button className="bg-gray-800 px-4 py-1 rounded">Pending</button>
          <button className="bg-gray-800 px-4 py-1 rounded">Closed</button>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-400">Floating profit:</span>
          <span className="text-red-500">-$8.40</span>
          <button className="bg-blue-600 px-4 py-1 rounded flex items-center">
            Close
            <span className="ml-1">▼</span>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-gray-400 border-b border-gray-800">
              <th className="text-left py-2">Symbol</th>
              <th className="text-left">Direction</th>
              <th className="text-left">Volume, lots</th>
              <th className="text-left">Price change</th>
              <th className="text-left">Take profit</th>
              <th className="text-left">Stop loss</th>
              <th className="text-left">Floating profit</th>
              <th className="text-left"></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border-b border-gray-800">
                <td className="py-2">{order.symbol}</td>
                <td className="text-green-500">↑ {order.direction}</td>
                <td>{order.volume}</td>
                <td>{order.priceChange}</td>
                <td>{order.takeProfit}</td>
                <td>{order.stopLoss}</td>
                <td className="text-red-500">{order.floatingProfit}</td>
                <td>
                  <button className="text-red-500 hover:text-red-400">×</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}