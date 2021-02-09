import React from 'react'
import logo from '../assets/images/watchFlixLogo.png'
import linkedin from '../assets/images/linkedin.svg'
import github from '../assets/images/github.svg'
import Styles from '../assets/stylesheets/Footer.module.css'


const Footer = () => {
    return (
        <div className={Styles.footer}>
            <div>
                <img className={Styles.logo} src={logo} alt="Logo"/>
            </div>
            <div>
                <p class="text-white pt-2"> Made with <span class={Styles.heart}>&#9825;</span> by Mari Roque Developer</p>
            </div>
            <div  className={Styles.right}> 
                <p>Connect with the developer: </p>
                <a href="https://www.linkedin.com/in/roquemarilena/"><img className={Styles.logo} src={linkedin} alt="Linkedin Logo"/></a>
                <a href="https://github.com/MarilenaRoque"><img src={github} className={Styles.logo} alt="Github Logo"/></a>
            </div>
        </div>
    )
}

export default Footer
