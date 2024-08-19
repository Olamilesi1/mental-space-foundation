import style from '../../admin/adminStyles/Admin.module.css'
import AdminHeader from '../components/admin-reusables/AdminHeader.jsx'
import AdminSideBar from '../components/admin-reusables/AdminSideBar.jsx';


function AdminSettings() {
    return (
        <>

    <div className={style.componentContent}>
    <AdminSideBar/>

    <div className={style.headerContent}>
    <AdminHeader/>
<form>
    <div className={style.blogUpload}>
        <div className={style.setting}>
            <h1>Edit Profile</h1>
        </div>

        <div className={style.textInputs}>
        <input type="text" placeholder='Username' className={style.input}/>
        </div>
        
        <div className={style.textInputs}>
        <input type="text" placeholder='Email' className={style.input}/>
        </div>


        <div className={style.textInputs}>
        <input type="text" placeholder='Phone Number' className={style.input}/>
        </div>

        <div className={style.textInputs}>
        <input type="password" placeholder='Password' className={style.input}/>
        </div>

        <div className={style.textInputs}>
        <h3>Choose Image</h3>
        <input type="file" name="Choose Image" id="" accept="image/*"/>
        </div>

       <button className={style.button}>UPDATE PROFILE</button>
    </div>
    </form>
    </div>

    </div>

    </>
    )
}

export default AdminSettings
