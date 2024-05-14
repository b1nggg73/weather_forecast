import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="logo-header">
          <Link to={'/'} className="a-logo-header">
            Dark Weather
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
