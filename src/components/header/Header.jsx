import React, { useState } from 'react';
import styles from './Header.module.css';
import logo from '../../assets/logo.png';
import bar from '../../assets/bar.png';
import { Link } from 'react-scroll';

function Header() {
  const mobile = window.innerWidth <= 768; // true if mobile view
  const [menuOpened, setMenuOpened] = useState(false); // Track menu state

  return (
    <div className={styles.header}>
      {/* Logo */}
      <img src={logo} alt="Logo" className={styles.fitclub} />

      {/* Mobile Menu Icon - only visible on mobile */}
      {mobile && (
        <div
          className={styles.menuIcon}
          onClick={() => setMenuOpened(!menuOpened)} // Toggle menu on click
        >
          <img
            src={bar} // Always show the hamburger icon
            alt="Menu"
            className={styles.barIcon}
          />
        </div>
      )}

      {/* Desktop Menu Links - Always visible on desktop */}
      <ul className={`${styles.header_menu} ${menuOpened ? styles.opened : ''}`}>
        <li>
          <Link
            onClick={() => setMenuOpened(false)} // Close the menu after clicking a link
            to="hero"
            smooth={true}
            spy={true}
            duration={500}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            onClick={() => setMenuOpened(false)}
            to="programs"
            smooth={true}
            spy={true}
            duration={500}
          >
            Programs
          </Link>
        </li>

        <li>
          <Link
            onClick={() => setMenuOpened(false)}
            to="Reasons"
            smooth={true}
            spy={true}
            duration={500}
          >
            Why Us
          </Link>
        </li>

        <li>
          <Link
            onClick={() => setMenuOpened(false)}
            to="plans_container"
            smooth={true}
            spy={true}
            duration={500}
          >
            Plans
          </Link>
        </li>

        <li>
          <Link
            onClick={() => setMenuOpened(false)}
            to="Testimonials"
            smooth={true}
            spy={true}
            duration={500}
          >
            Testimonials
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
