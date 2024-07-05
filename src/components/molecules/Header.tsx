import React from 'react';
import Typography from '../atoms/Typography';

const Header: React.FC = () => {
  return (
    <header className="p-4 bg-primary text-white shadow-lg">
      <Typography variant="h1">Stock Market Dashboard</Typography>
    </header>
  );
}

export default Header;