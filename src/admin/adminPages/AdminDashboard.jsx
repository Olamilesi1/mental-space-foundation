import style from '../../admin/adminStyles/Admin.module.css'
import { Outlet } from 'react-router-dom';
import AdminHeader from '../components/admin-reusables/AdminHeader.jsx'
import AdminSideBar from '../components/admin-reusables/AdminSideBar.jsx';

function AdminHome() {
  return (
    <>

    <div className={style.componentContent}>
    <AdminSideBar/>

    <div className={style.headerContent}>
    <AdminHeader/>
    <Outlet/>
    </div>

    </div>

    </>
  );
}

export default AdminHome;


