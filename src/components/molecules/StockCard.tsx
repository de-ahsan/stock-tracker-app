import React from 'react';
import { StockEntry } from '../../types/stock';

interface StockCardProps {
  timestamp: string;
  entry: StockEntry;
}

const StockCard: React.FC<StockCardProps> = ({ timestamp, entry }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-xl font-bold mb-2">{timestamp}</h3>
      <p>Open: {entry["1. open"]}</p>
      <p>High: {entry["2. high"]}</p>
      <p>Low: {entry["3. low"]}</p>
      <p>Close: {entry["4. close"]}</p>
      <p>Volume: {entry["5. volume"]}</p>
    </div>
  );
};

export default StockCard;
