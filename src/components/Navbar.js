import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/watchFlixLogo.png';
import Styles from '../assets/stylesheets/Navbar.module.css';

const Navbar = () => (
  <div className={Styles.navbar}>
    <Link to="/">
      <div className={Styles.navItems}>
        <img className={Styles.logo} src={logo} alt="Logo" />
        <h2> WATCHFLIX </h2>
      </div>
    </Link>

    <div className={Styles.navItems}>
      <a target="_blank" rel="noreferrer" href="https://www.themoviedb.org/documentation/api">
        API
      </a>
      <a target="_blank" rel="noreferrer" href="https://www.behance.net/gallery/97859577/X-MOVIES?tracking_source=search_projects_recommended%7Cmovies">
        Design
      </a>
      <a target="_blank" rel="noreferrer" href="https://github.com/MarilenaRoque/watchflix">
        Development
      </a>
    </div>
  </div>
);

export default Navbar;
