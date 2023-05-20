import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

export const Header = () => {
  return (
    <div className="navigation-container">
      <h3 className='logo'>Ecommerce.</h3>
      <div className="navigation-left">
        <Link to="/">Home</Link>
        <div className="dropdown">
          <button className="dropdown-toggle">Username</button>
          <div className="dropdown-menu">
            <Link to="/name">Name</Link>
            <Link to="/email">Email</Link>
          </div>
          
        </div>
      </div>
      <div className="navigation-right">
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};



