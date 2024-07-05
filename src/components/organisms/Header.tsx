import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 p-4 rounded-lg shadow-md text-white text-center">
      <h1 className="text-3xl font-bold">Stock Data Viewer</h1>
    </header>
  );
};

export default Header;
