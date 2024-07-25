import style from '../styles/Contact.module.css'

function Contact() {
    return (
        <>
        <div className={style.contactUs}>
            <h6>Get In Touch</h6>
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
            <div className={style.secondRight}>
<p>FREE ESTIMATION</p>
<h2>Request A Counsellor</h2>

<form className={style.form}>
    <input type="text" placeholder='Name*' className={style.input} />
    <input type="email" placeholder='Email*' className={style.input} />
    <input type="number" placeholder='Phone Number*' className={style.input} />
    <input type="text" placeholder='Gender*' className={style.input} />
    <input type="text" placeholder='Challenge*' className={style.input} />
</form>
<button className={style.button}>Get a Counsellor</button>
            </div>
        </div>
        </>
    )
}

export default Contact
