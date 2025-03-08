import React, { useEffect, useRef } from "react";
import PropTypes from 'prop-types';

declare global {
  interface Window {
    TradingView: any;
  }
}

const Chart = ({ selectedPair, onCompanyChange }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/tv.js";
        script.async = true;
        script.onload = () => {
            if (window.TradingView) {
                new window.TradingView.widget({
                    "container_id": "tradingview_chart",
                    "width": "100%",
                    "height": "500",
                    "symbol": selectedPair,
                    "interval": "15",
                    "timezone": "Etc/UTC",
                    "theme": "light",
                    "style": "1",
                    "locale": "en",
                    "toolbar_bg": "#f1f3f6",
                    "enable_publishing": false,
                    "hide_side_toolbar": false,
                    "allow_symbol_change": true,
                    "studies": ["RSI@tv-basicstudies"],
                    "show_popup_button": true
                });
            }
        };

        document.body.appendChild(script);

        // Call the callback to update the selected company
        onCompanyChange(selectedPair);
        console.log(`Loading chart for: ${selectedPair}`); // Log the selected pair

        return () => {
            document.body.removeChild(script);
        };
    }, [selectedPair, onCompanyChange]); // Add onCompanyChange to the dependency array

  return ( 
    <div>
      <div className="flex gap-2 mb-4">
        <button 
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={() => console.log('Buy clicked')}
        >
          Buy
        </button>
        <button 
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={() => console.log('Sell clicked')}
        >
          Sell
        </button>
      </div>
      <div className="tradingview-widget-container">
        <div id="tradingview_chart" ref={containerRef}></div>
      </div>
    </div>
    );
};

Chart.propTypes = {
    selectedPair: PropTypes.string.isRequired,
    onCompanyChange: PropTypes.func.isRequired, // Ensure onCompanyChange is a required prop
};
export default Chart;
