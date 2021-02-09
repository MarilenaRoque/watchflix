import React from 'react'
import logo from '../assets/images/watchFlixLogo.png'
import { Link } from 'react-router-dom'
import Styles from '../assets/stylesheets/Navbar.module.css'

const Navbar = () => {
    return (
        <navbar className={Styles.navbar}>
            <Link to={"/"}>            
                    <div className={Styles.navItems}>
                    <img className={Styles.logo} src={logo} alt='Logo'></img>
                    <h2> WATCHFLIX </h2>
                </div>
            </Link>

            <div className={Styles.navItems}>
                <a target={"_blank"} href={"https://www.themoviedb.org/documentation/api"}>API</a>
                <a target={"_blank"} href={"https://www.behance.net/gallery/97859577/X-MOVIES?tracking_source=search_projects_recommended%7Cmovies"}>Design</a>
                <a target={"_blank"} href={"https://github.com/MarilenaRoque/watchflix"}>Development</a>
            </div>  
        </navbar>
    )
}

export default Navbar
