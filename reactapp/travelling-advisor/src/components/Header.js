import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <h1>Theo's travelling advisor</h1>
      <div className="week-selector">
        <span>Week of the advice:</span>
        <button>This week</button>
        <button>Next week</button>
      </div>
    </div>
  );
};

export default Header;
