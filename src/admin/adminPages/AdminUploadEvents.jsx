import style from '../../admin/adminStyles/Admin.module.css'
import AdminHeader from '../components/admin-reusables/AdminHeader.jsx'
import AdminSideBar from '../components/admin-reusables/AdminSideBar.jsx';


function AdminUploadEvents() {
    return (
        <>

    <div className={style.componentContent}>
    <AdminSideBar/>

    <div className={style.headerContent}>
    <AdminHeader/>

    <form>
    <div className={style.blogUpload}>
        <div className={style.textInputs}>
        <h3 className={style.titles}>Events Title</h3>
        <input type="text" placeholder='Enter the title of your Events' className={style.input}/>
        </div>
        
        <div className={style.textInputs}>
        <h3>Events Summary</h3>
        <textarea name="text" id="text" className={style.input} placeholder="Enter the summary of your Events"></textarea>
        </div>

        <div className={style.textInputs}>
        <h3>Choose Image</h3>
        <input type="file" name="Choose Image" id="" accept="image/*"/>
        </div>

        <div className={style.textInputs}>
        <h3>Author</h3>
        <input type="text" placeholder='Author Name' className={style.input}/>
        </div>

        <div className={style.textInputs}>
        <h3>Write Your Content</h3>
       <textarea name="text" id="text" className={style.input}></textarea>
       </div>
       
       <button className={style.button}>UPLOAD EVENTS</button>
    

    </div>
    </form>
    
    </div>

    </div>

    </>
    )
}

export default AdminUploadEvents
