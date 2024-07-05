import React from 'react';
import { useStockData } from '../../hooks/useStockData';
import StockList from '../../components/organisms/StockList';
import Header from '../organisms/Header';
import Button from '../atoms/Button';

const App: React.FC = () => {
  const { data, loading, error } = useStockData('AAPL', '1min');

  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 min-h-screen p-8">
      <Header />
      <div className="my-4">
        <Button text="Click Me!" onClick={handleButtonClick} />
      </div>
      <StockList data={data} loading={loading} error={error} />
    </div>
  );
};

export default App;
