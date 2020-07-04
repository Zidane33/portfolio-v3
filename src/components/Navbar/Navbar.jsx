import React, { useContext } from 'react';
import Scroll from 'react-scroll';
import PortfolioContext from '../../context/context';

const Navbar = () => {
  const { footer } = useContext(PortfolioContext)
  const { networks } = footer;

  const ScrollLink = Scroll.Link;
  return (
    <>
      <div className="nav-menu">
        <div className="network-links">
          {networks &&
            networks.map(network => {
              const { id, name, url } = network;
              return (
                <a
                  key={id}
                  href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                </a>
              );
            })}
        </div>
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
      </div>
    </>
  );
};

export default Navbar;
