import React, { useState, useEffect } from "react";
import { FaMedal, FaComment, FaStar, FaEye } from "react-icons/fa";

interface Trader {
  id: number;
  name: string;
  role: string;
  profit: number;
}

const initialTraders: Trader[] = [
  { id: 1, name: "Thomas L. Fletcher", role: "Product Designer", profit: 6400 },
  { id: 2, name: "Jane Cooper", role: "UI Designer", profit: 6400 },
  { id: 3, name: "Wade Warren", role: "Medical Assistant", profit: 6400 },
  { id: 4, name: "Esther Howard", role: "President of Sales", profit: 6400 },
  { id: 5, name: "Brooklyn Simmons", role: "Marketing Coordinator", profit: 6400 },
  { id: 6, name: "Courtney Henry", role: "Medical Assistant", profit: 6400 },
  { id: 7, name: "Darrell Steward", role: "Web Designer", profit: 6400 },
];

const Leaderboard: React.FC = () => {
  const [traders, setTraders] = useState<Trader[]>(initialTraders);

  useEffect(() => {
    const interval = setInterval(() => {
      setTraders((prevTraders) =>
        prevTraders
          .map((trader) => ({
            ...trader,
            profit: trader.profit + Math.floor(Math.random() * 200 - 100),
          }))
          .sort((a, b) => b.profit - a.profit)
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getMedal = (index: number) => {
    if (index === 0) return <FaMedal className="text-yellow-500" size={20} />;
    if (index === 1) return <FaMedal className="text-gray-400" size={20} />;
    if (index === 2) return <FaMedal className="text-orange-500" size={20} />;
    return <span className="font-bold text-white">{index + 1}</span>;
  };

  return (
    <div className="p-4 max-w-lg mx-auto bg-gradient-to-b from-blue-900 to-black shadow-lg rounded-lg text-white">
      <h2 className="text-xl font-bold mb-4 text-center">Leaderboard</h2>
      <div className="flex space-x-4 mb-4 justify-center">
        <button className="bg-purple-600 text-white px-4 py-1 rounded-md">Reviews</button>
        <button className="bg-gray-700 text-white px-4 py-1 rounded-md">Ratings</button>
        <button className="bg-gray-700 text-white px-4 py-1 rounded-md">Followers</button>
      </div>
      <ul>
        {traders.map((trader, index) => (
          <li
            key={trader.id}
            className="flex justify-between items-center p-3 border-b border-gray-600"
          >
            <div className="flex items-center space-x-3">
              {getMedal(index)}
              <div>
                <p className="font-bold text-white">{trader.name}</p>
                <p className="text-sm text-gray-300">{trader.role}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FaComment className="text-gray-400" /> <span>2.4k</span>
              <FaStar className="text-yellow-500" /> <span>{trader.profit}</span>
              <FaEye className="text-gray-400" /> <span>456</span>
              <button className="bg-orange-500 text-white px-3 py-1 rounded-md">Follow</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;