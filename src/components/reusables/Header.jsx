
import {NavLink} from 'react-router-dom'
import style from '../../styles/Header.module.css'

function Header() {

    return (
        <div> 
            <nav className={style.header}>
                {/* <Link to='/'><img src='./images/logo.png' alt="img"className={style.logo} /></Link> */}
                <img src='./images/logo.png' alt="img" className={style.logo}/>
            
                <ul className={style.navUl}>
                    <li className={style.navLi} ><NavLink to='/'>Home</NavLink></li>
                    <li className={style.navLi}><NavLink  to='about-us' >About us</NavLink></li>
                    <li className={style.navLi}><NavLink to='services'>Services</NavLink></li>
                    <li className={style.navLi}><NavLink to='contact-us'>Contact</NavLink></li>
                    <li className={style.navLi}><NavLink to='resources'>Resources</NavLink></li>
                    <li className={style.navLi}><NavLink to='blog'>Blog</NavLink></li>
                    <li className={style.navLi}><NavLink to='book-an-appointment'>Book an Appointment</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header

