import { useEffect, useState } from 'react';
import { fetchStockData } from '../services/stockService';
import { StockData } from '../types/stock';

export const useStockData = (symbol: string, interval: string) => {
  const [data, setData] = useState<StockData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const stockData = await fetchStockData(symbol, interval);
        setData(stockData);
      } catch (err) {
        setError('Failed to fetch stock data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [symbol, interval]);

  return { data, loading, error };
};
