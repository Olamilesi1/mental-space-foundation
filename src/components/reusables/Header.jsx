import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "../../styles/Header.module.css";

function Header() {
  const [showOptions, setShowOptions] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleGetInvolvedClick = () => {
    setShowOptions(prevState => !prevState);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

      <div className={style.logoquerydiv}>
        <img src="./images/logo.png" alt="img" className={style.logoquery} />
        <div className={style.menu} onClick={handleMenuClick} >
          <span class="material-symbols-outlined" >   {isMenuOpen ? "cancel" : "menu"}</span>
        </div>
      </div>

      <nav className={`${style.header} ${isMenuOpen && style.showHeader}`}>
        {/* <Link to='/'><img src='./images/logo.png' alt="img"className={style.logo} /></Link> */}
        <img src="./images/logo.png" alt="img" className={style.logo} />

        <div className={style.menu} onClick={handleMenuClick} >
          <span class="material-symbols-outlined" >   {isMenuOpen ? "cancel" : "menu"}</span>
        </div>

        <ul className={style.navUl}>
          <li className={style.navLi}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={style.navLi}>
            <NavLink to="/about-us">About us</NavLink>
          </li>
          <li className={style.navLi}>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li className={style.navLi}>
            <NavLink to="/contact-us">Contact</NavLink>
          </li>
          <li className={style.navLi}>
            <NavLink to="/resources">Resources</NavLink>
          </li>
          <li className={style.navLi}>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li className={style.navLi}>
            <NavLink to="/event">Events</NavLink>
          </li>
          <li className={style.navLi}>
            <NavLink to="/book-an-appointment">Book an Appointment</NavLink>
          </li>
        </ul>

        <div className={style.btnInvolve}>
          <button onClick={handleGetInvolvedClick} className={style.button}>
            Get Involved
          </button>

          {showOptions && (
            <div className={style.optionsContainer}>
              <ul className={style.navUl}>

                <div className={style.option}>
                  <li className={style.navLi}><NavLink to="/volunteer">Volunteer</NavLink></li>
                </div>

                <div className={style.option}>
                  <li className={style.navLi}><NavLink to="/donate">Donate</NavLink></li>
                </div>
              </ul>
            </div>
          )}
        </div>
      </nav>

    </div>
  );
}

export default Header;
