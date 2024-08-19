import style from '../../adminStyles/Admin.module.css'

function AdminHeader() {
return (
    <div className={style.header}>
    <h2 className={style.headerName}>Welcome Lesi</h2>
     <img src='/images/profile.jpeg' alt="img" className={style.profile}/>
    </div>
)
}
export default AdminHeader