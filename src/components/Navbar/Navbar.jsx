import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/components/_navbar.scss';

const Navbar = () => {
  return (
    <>
      <div className="nav-menu">
        <Link to="/" className="menu-link">
          Home
        </Link>
        <Link to="/about" className="menu-link">
          Resume
        </Link>
        <Link to="/projects" className="menu-link">
          Projects
        </Link>
        <Link to="/contact" className="menu-link">
          Contact Me
        </Link>
      </div>
    </>
  );
};

export default Navbar;
