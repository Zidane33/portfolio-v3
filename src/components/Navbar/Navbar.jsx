import React, { useState } from 'react';
import Scroll from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [menuHidden, setMenuHidden] = useState(true);
  const toggleMenu = () => setMenuHidden(!menuHidden);

  const ScrollLink = Scroll.Link;
  return (
    <>
      <div className="nav-menu">
        <button id="menu-button" type="button" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} size="lg" />
          {menuHidden && <span className="menu-title">Menu</span>}
        </button>
        {!menuHidden && (
          <>
            <ScrollLink to="hero" className="menu-link" onClick={toggleMenu}>
              Home
            </ScrollLink>
            <ScrollLink to="about" className="menu-link" onClick={toggleMenu}>
              Resume
            </ScrollLink>
            <ScrollLink to="projects" className="menu-link" onClick={toggleMenu}>
              Projects
            </ScrollLink>
            <ScrollLink to="contact" className="menu-link" onClick={toggleMenu}>
              Contact Me
            </ScrollLink>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
