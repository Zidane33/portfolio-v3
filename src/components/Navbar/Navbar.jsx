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
        <button id='menu-button' type="button" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} size="lg" />
            {menuHidden && (
                <span className='menu-title'>Menu</span>
            )}
        </button>
        {!menuHidden && (
          <>
            <ScrollLink to="hero" className="menu-link">
              Home
            </ScrollLink>
            <ScrollLink to="about" className="menu-link">
              Resume
            </ScrollLink>
            <ScrollLink to="projects" className="menu-link">
              Projects
            </ScrollLink>
            <ScrollLink to="contact" className="menu-link">
              Contact Me
            </ScrollLink>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
