import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "../../styles/Header.module.css";

function Header() {
  const [showOptions, setShowOptions] = useState(false);

  const handleGetInvolvedClick = () => {
    setShowOptions(prevState => !prevState);
  };

  return (
    <div>
      <nav className={style.header}>
        {/* <Link to='/'><img src='./images/logo.png' alt="img"className={style.logo} /></Link> */}
        <img src="./images/logo.png" alt="img" className={style.logo} />

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
