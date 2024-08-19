import {NavLink} from 'react-router-dom'
import style from '../../adminStyles/Admin.module.css'

function AdminSideBar() {
  return <div className={style.bar}>
    
    <img src='/images/logo.png' alt="img" className={style.logos}/>
    {/* <img src='./images/logo.png' alt="logo" className={style.logo}/> */}
   
    <nav className={style.sideHeader}>
    
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

                <ul className={style.navUl}>
                    <li className={style.navLi} ><NavLink to='/admin/home'><span class="material-symbols-outlined">home</span>Home</NavLink></li>
                    <li className={style.navLi}><NavLink  to='/admin/volunteers' ><span class="material-symbols-outlined">group</span>Volunteers</NavLink></li>
                    <li className={style.navLi}><NavLink  to='/admin/subscribers' ><span class="material-symbols-outlined">person</span>Subscribers</NavLink></li>
                    <li className={style.navLi}><NavLink to='/admin/donations'><span class="material-symbols-outlined">volunteer_activism</span>Donations</NavLink></li>
                    <li className={style.navLi}><NavLink to='/admin/blogs'><span class="material-symbols-outlined">rss_feed</span>Blogs</NavLink></li>
                    <li className={style.navLi}><NavLink to='/admin/upload-blogs'><span class="material-symbols-outlined">upload</span>Upload Blogs</NavLink></li>
                    <li className={style.navLi}><NavLink to='/admin/resources'><span class="material-symbols-outlined">rss_feed</span>Resources</NavLink></li>
                    <li className={style.navLi}><NavLink to='/admin/upload-resources'><span class="material-symbols-outlined">upload</span>Upload Resources</NavLink></li>
                    <li className={style.navLi}><NavLink to='/admin/events'><span class="material-symbols-outlined">rss_feed</span>Events</NavLink></li>
                    <li className={style.navLi}><NavLink to='/admin/upload-events'><span class="material-symbols-outlined">upload</span>Upload Events</NavLink></li>
                    <li className={style.navLi}><NavLink to='/admin/newsletters'><span class="material-symbols-outlined">mail</span>NewsLetters</NavLink></li>
                    <li className={style.navLi}><NavLink to='/admin/upload-newsletters'><span class="material-symbols-outlined">upload</span>Upload NewsLetters</NavLink></li>
                    <li className={style.navLi}><NavLink to='/admin/settings'><span class="material-symbols-outlined">settings</span>Profile Settings</NavLink></li>
                    <li className={style.navLi}><NavLink to='/admin/login'><span class="material-symbols-outlined">logout</span>Logout</NavLink></li>
                </ul>
            </nav>
{/* <li className={style.navLi}><NavLink to='/admin/home'><img src={homeIcon} alt="Home" className="navImage" />Home</NavLink></li> */}
  </div>;
}

export default AdminSideBar;
