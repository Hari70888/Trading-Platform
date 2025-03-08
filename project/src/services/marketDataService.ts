import { MarketData } from '../App';

// Mock function to simulate fetching real-time market data
export const fetchMarketData = async (): Promise<MarketData[]> => {
  // In a real application, this would make an API call to fetch live market data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { pair: 'AAPL', price: (Math.random() * 200).toFixed(2), secondPrice: (Math.random() * 200).toFixed(2), change: 'S: 1.05', subChange: 'H: 175.00 L: 172.00', isUp: Math.random() > 0.5 },
        { pair: 'NVDA', price: (Math.random() * 500).toFixed(2), secondPrice: (Math.random() * 500).toFixed(2), change: 'S: 5.00', subChange: 'H: 455.00 L: 440.00', isUp: Math.random() > 0.5 },
        { pair: 'MSFT', price: (Math.random() * 300).toFixed(2), secondPrice: (Math.random() * 300).toFixed(2), change: 'S: 5.00', subChange: 'H: 305.00 L: 290.00', isUp: Math.random() > 0.5 },
        { pair: 'AMZN', price: (Math.random() * 150).toFixed(2), secondPrice: (Math.random() * 150).toFixed(2), change: 'S: 2.00', subChange: 'H: 155.00 L: 145.00', isUp: Math.random() > 0.5 },
        { pair: 'GOOG', price: (Math.random() * 2800).toFixed(2), secondPrice: (Math.random() * 2800).toFixed(2), change: 'S: 50.00', subChange: 'H: 2850.00 L: 2700.00', isUp: Math.random() > 0.5 },
        { pair: 'META', price: (Math.random() * 350).toFixed(2), secondPrice: (Math.random() * 350).toFixed(2), change: 'S: 10.00', subChange: 'H: 360.00 L: 335.00', isUp: Math.random() > 0.5 },
        { pair: 'BRK.B', price: (Math.random() * 300).toFixed(2), secondPrice: (Math.random() * 300).toFixed(2), change: 'S: 5.00', subChange: 'H: 305.00 L: 290.00', isUp: Math.random() > 0.5 },
        { pair: 'TSLA', price: (Math.random() * 800).toFixed(2), secondPrice: (Math.random() * 800).toFixed(2), change: 'S: 20.00', subChange: 'H: 820.00 L: 770.00', isUp: Math.random() > 0.5 },
        { pair: 'AVGO', price: (Math.random() * 600).toFixed(2), secondPrice: (Math.random() * 600).toFixed(2), change: 'S: 10.00', subChange: 'H: 610.00 L: 580.00', isUp: Math.random() > 0.5 },
        { pair: 'WMT', price: (Math.random() * 150).toFixed(2), secondPrice: (Math.random() * 150).toFixed(2), change: 'S: 2.00', subChange: 'H: 155.00 L: 145.00', isUp: Math.random() > 0.5 },
        { pair: 'JPM', price: (Math.random() * 160).toFixed(2), secondPrice: (Math.random() * 160).toFixed(2), change: 'S: 2.00', subChange: 'H: 165.00 L: 155.00', isUp: Math.random() > 0.5 },
        { pair: 'LLY', price: (Math.random() * 400).toFixed(2), secondPrice: (Math.random() * 400).toFixed(2), change: 'S: 10.00', subChange: 'H: 410.00 L: 385.00', isUp: Math.random() > 0.5 },
        { pair: 'V', price: (Math.random() * 230).toFixed(2), secondPrice: (Math.random() * 230).toFixed(2), change: 'S: 5.00', subChange: 'H: 235.00 L: 220.00', isUp: Math.random() > 0.5 },
        { pair: 'MA', price: (Math.random() * 350).toFixed(2), secondPrice: (Math.random() * 350).toFixed(2), change: 'S: 10.00', subChange: 'H: 360.00 L: 335.00', isUp: Math.random() > 0.5 },
        { pair: 'ORCL', price: (Math.random() * 90).toFixed(2), secondPrice: (Math.random() * 90).toFixed(2), change: 'S: 2.00', subChange: 'H: 95.00 L: 85.00', isUp: Math.random() > 0.5 },
        { pair: 'UNH', price: (Math.random() * 500).toFixed(2), secondPrice: (Math.random() * 500).toFixed(2), change: 'S: 10.00', subChange: 'H: 510.00 L: 485.00', isUp: Math.random() > 0.5 },
        { pair: 'COST', price: (Math.random() * 500).toFixed(2), secondPrice: (Math.random() * 500).toFixed(2), change: 'S: 10.极00', subChange: 'H: 510.00 L: 485.00', isUp: Math.random() > 0.5 },
        { pair: 'XOM', price: (Math.random() * 100).toFixed(2), secondPrice: (Math.random() * 100).toFixed(2), change: 'S: 2.00', subChange: 'H: 105.00 L极: 95.00', isUp: Math.random() > 0.5 },
        { pair: 'NFLX', price: (Math.random() * 600).toFixed(2), secondPrice: (Math.random() * 600).toFixed(2), change: 'S: 10.00', subChange: 'H: 610.00 L: 580.00', isUp: Math.random() > 0.5 },
        { pair: 'HD', price: (Math.random() * 350).toFixed(2), secondPrice: (Math.random() * 350).toFixed(2), change: 'S: 10.00', subChange: 'H: 360.00 L: 335.00', isUp: Math.random() > 0.5 }
      ]);
    }, 1000); // Simulate network delay
  });
};
