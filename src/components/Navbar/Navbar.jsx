import React, { useState } from 'react';
import Scroll from 'react-scroll';
import '../../style/components/_navbar.scss';

const Navbar = () => {
  const [menuHidden, setMenuHidden] = useState(false);
  const toggleMenu = () => setMenuHidden(!menuHidden);

  const ScrollLink = Scroll.Link;
  return (
    <>
      <div className="nav-menu">
        <button type="button" onClick={toggleMenu}>
          Toggle Menu
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
