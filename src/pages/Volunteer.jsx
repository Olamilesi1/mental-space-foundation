import style from '../styles/Volunter.module.css'

import Header from "../components/reusables/Header";
import Footer from "../components/reusables/Footer";
import React, { useState } from 'react';

function Volunteer() {

    const [showSection, setShowSection] = useState(true);
    const [showSuccess, setShowSuccess] = useState(false);


    const handleClick = () => {
        setShowSection(false);
        setShowSuccess(true);
      };

    const handleBackToHome = () => {
        // Redirect to home page or perform any action
        window.location.href = '/';
      };

    return (
        <>
        <div className={style.body}>
 <Header/> 
    <div className={style.dashboard}>

    {showSection && (
   <form className={style.settings}>
    <div  className={style.login}>
        <div>
            <h1>Volunteer</h1>
        </div>

        <div className={style.textInputs}>
            <h3>Name</h3>
        <input type="text" placeholder='Your Full Name' className={style.input}/>
        </div>
        
        <div className={style.textInputs}>
        <h3>Email</h3>
        <input type="text" placeholder='Your Email' className={style.input}/>
        </div>

        <div className={style.textInputs}>
        <h3>Date Of Birth</h3>
        <input type="text" placeholder='Your Date Of Birth' className={style.input}/>
        </div>

        <div className={style.textInputs}>
        <h3>Phone Number</h3>
        <input type="text" placeholder='Your Phone Number' className={style.input}/>
        </div>

        <div className={style.textInputs}>
        <h3>Place Of Origin</h3>
        <input type="text" placeholder='Your Place Of Origin' className={style.input}/>
        </div>

        <div className={style.textInputs}>
        <h3>Your Photo</h3>
        <input type="file" name="Choose Image" id="" accept="image/*"/>
        </div>

        <div className={style.textInputs}>
        <h3>Why Do You Want To Volunteer With Us?</h3>
        <textarea name="why" id="why" placeholder='Why Do You Want To Volunteer With Us?' className={style.input}></textarea>
        </div>

       <button onClick={handleClick} className={style.button}>VOLUNTEER</button> 
         </div>
    </form>    
        )}

        {showSuccess && (
            <div className={style.success}>
                <p>Successful! We Can't Wait To Have You In Our Team</p>
                <button className={style.button} onClick={handleBackToHome}>Back To Home Page</button>
            </div>
        )}
    </div>
    <Footer/>
    </div>
    </>
    )
}

export default Volunteer