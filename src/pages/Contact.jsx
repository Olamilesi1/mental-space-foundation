import style from '../styles/Contact.module.css'
import Header from "../components/reusables/Header";
import Footer from "../components/reusables/Footer";
import React, { useState } from 'react';

function Contact() {

    const [showSection, setShowSection] = useState(true);
    const [showSuccess, setShowSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        gender: '',
        challenge: ''
      });

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
  
    const handleClick = () => {
        const { name, email, phone, gender, challenge } = formData;
        if (name && email && phone && gender && challenge) {
          setShowSection(false);
          setShowSuccess(true);
        } else {
          alert('Please fill out all fields correctly.');
        }
      };
  
    const handleBackToHome = () => {
      // Redirect to home page or perform any action
      window.location.href = '/';
    };
    return (
        <>
         <Header/> 
        <div className={style.contactUs}>
            <h1>Contact Us</h1>
        </div>
        
            <div className={style.second}>
                
            <div className={style.secondLeft}>
<p>GET IN TOUCH</p>
<h2>Contact Details</h2>
<div className={style.detail}>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
<span class="material-symbols-outlined">mail</span>
<div>
    <h6>Address</h6>
    <p>No. 2 ARUSHA CRESCENT WUSE ZONE 1</p>
</div>
</div>

<div  className={style.detail}>
<span class="material-symbols-outlined">mail</span>
<div>
    <h6>Address</h6>
    <p>No. 2 ARUSHA CRESCENT WUSE ZONE 1</p>
</div>
</div>

<div  className={style.detail}>
<span class="material-symbols-outlined">mail</span>
<div>
    <h6>Address</h6>
    <p>No. 2 ARUSHA CRESCENT WUSE ZONE 1</p>
</div>
</div>

<h2>Follow Us</h2>
<div className={style.icons}>
<span class="material-symbols-outlined">mail</span>
<span class="material-symbols-outlined">mail</span>
<span class="material-symbols-outlined">mail</span>
</div>
            </div>

            <div className={style.secondRight} >
            
            {showSection && (
             <div >
                <p>FREE ESTIMATION</p>
              <h2>Request A Counsellor</h2>
              
              <form className={style.form}>
                  <input type="text" placeholder='Name*' required className={style.input}  name="name"  value={formData.name} onChange={handleInputChange}/>
                  <input type="email" placeholder='Email*' required className={style.input}  name="email" value={formData.email} onChange={handleInputChange}/>
                  <input type="number" placeholder='Phone Number*'  required className={style.input} name="phone" value={formData.phone} onChange={handleInputChange} />
                  <input type="text" placeholder='Gender*' required className={style.input} name="gender"  value={formData.gender} onChange={handleInputChange}/>
                  <input type="text" placeholder='Challenge*' required className={style.input}  name="challenge" value={formData.challenge} onChange={handleInputChange}/>
              </form>
              <button type="button" className={style.button} onClick={handleClick}>Get a Counsellor</button>   
                </div>
            
        )}

        {showSuccess && (
            <div className={style.success}>
                <p>Successful! A Counsellor Will Reach You Soon</p>
                <button className={style.button} onClick={handleBackToHome}>Back To Home Page</button>
            </div>
        )}

        </div>

</div>
        <Footer/>
        </>
    )
}

export default Contact
