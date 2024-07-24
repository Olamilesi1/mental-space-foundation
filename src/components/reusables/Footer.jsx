import style from '../../styles/Footer.module.css'
import {NavLink} from 'react-router-dom'

function Footer () {
    return (
  <div className= {style.footer}>
        <div className={style.footerRow}>
           <img  className = {style.logo} src='./images/be-mentally-logo.png' alt='be-mentally-logo' /> 
           
           <div className = {style.services}>
            <p className={style.servicesText}>SERVICES</p>
            <p>Mental Health Journey Transformation</p>
            <hr/>
            <p>Transformative Therapy and Mindfulness</p>
            <hr/>
            <p> Empower Your Mind, Body, and Spirit</p>
           </div>

           <div className = {style.company}>
            <p className={style.servicesText}>COMPANY</p>
            <nav className={style.header}>
                <ul className={style.navUl}>
                    <li className={style.navLi} ><NavLink to='/'>Home</NavLink></li>
                    <li className={style.navLi}><NavLink to='about-us' >About us</NavLink></li>
                    <li className={style.navLi}><NavLink to='services'>Services</NavLink></li>
                    <li className={style.navLi}><NavLink to='contact-us'>Contact</NavLink></li>
                    <li className={style.navLi}><NavLink to='book-an-appointment'>Book an Appointment</NavLink></li>
                </ul>
            </nav>
           </div>

           <div className = {style.signUp}>
            <p>Signup to our newsletter to get update information, news, insight or promotions.</p>
            
            <div className={style.emailbtn}>
                <input className= {style.input} type='email' placeholder='Email'/>
                <button className={style.footerButton}>Sign Up <span class="material-symbols-outlined ">mail</span> </button>
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
         <p>Copyright © 2024 Be Mentally Whole, All rights reserved.</p>   
        </div>
        </div>

        </div>
    )
    
    }

    export default Footer