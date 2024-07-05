import React from 'react';
import StockCard from '../molecules/StockCard';
import { StockData } from '../../types/stock';
import Spinner from '../atoms/Spinner';

interface StockListProps {
  data: StockData | null;
  loading: boolean;
  error: string | null;
}

const StockList: React.FC<StockListProps> = ({ data, loading, error }) => {
  if (loading) return <Spinner />;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data && Object.entries(data).map(([timestamp, entry]) => (
        <StockCard key={timestamp} timestamp={timestamp} entry={entry} />
      ))}
    </div>
  );
};

export default StockList;
