import style from '../../styles/Footer.module.css'
import {NavLink} from 'react-router-dom'
import React, { useState } from 'react';

function Footer () {

    const [showSection, setShowSection] = useState(true);
    const [showSuccess, setShowSuccess] = useState(false);
    const [formData, setFormData] = useState({
        email: ''
      });

    const handleClick = () => {
        const { email} = formData;
        if (email ) {
          setShowSection(false);
          setShowSuccess(true);
        } else {
          alert('Please fill out all fields correctly.');
        }
      };

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

    return (
  <div className= {style.footer}>
        <div className={style.footerRow}>
           <img  className = {style.logo} src='./images/be-mentally-logo.png' alt='be-mentally-logo' /> 
           
           <div className = {style.services}>
            <p className={style.servicesText}>SERVICES</p>
            <p className={style.p}>Mental Health Journey Transformation</p>
            <hr/>
            <p className={style.p}>Transformative Therapy and Mindfulness</p>
            <hr/>
            <p className={style.p}> Empower Your Mind, Body, and Spirit</p>
           </div>

           <div className = {style.company}>
            <p className={style.servicesText}>COMPANY</p>
            <nav className={style.header}>
                <ul className={style.navUl}>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                    <li className={style.navLi} ><NavLink to='/'>Home</NavLink></li>
                    <li className={style.navLi}><NavLink to='/about-us' >About us</NavLink></li>
                    <li className={style.navLi}><NavLink to='/services'>Services</NavLink></li>
                    <li className={style.navLi}><NavLink to='/contact-us'>Contact</NavLink></li>
                    <li className={style.navLi}><NavLink to='/book-an-appointment'>Book an Appointment</NavLink></li>
                </ul>
            </nav>
           </div>

           <div className = {style.signUp}>
            <p className={style.p}>Signup to our newsletter to get update information, news, insight or promotions.</p>
            
            <div >
            {showSection && (
            <form className={style.emailbtn}>
                <input className= {style.input} name="email" value={formData.email} onChange={handleInputChange} type='email' placeholder='Email'/>
                <button type="button" onClick={handleClick} className={style.footerButton}>Sign Up <span class="material-symbols-outlined ">mail</span> </button>
            </form>
             )}

             {showSuccess && (
                 <div className={style.success}>
                     <p>Subscribed!</p>
                     {/* <button className={style.button} onClick={handleBackToHome}>Back To Home Page</button> */}
                 </div>
             )}
            </div>

           </div>

        </div>

        <hr className={style.hr}/>

        <div className={style.mediaCopy}>
        <div className={style.socialMedia}>
        <span class="material-symbols-outlined">youtube_activity</span> 
        <span class="material-symbols-outlined">subscriptions</span>
        <span class="material-symbols-outlined">subscriptions</span>
        <span class="material-symbols-outlined">subscriptions</span>
        </div>

        <div className={style.copy}>
         <p className={style.p}>Copyright © 2024 Be Mentally Whole, All rights reserved.</p>   
        </div>
        </div>

        </div>
    )
    
    }

    export default Footer