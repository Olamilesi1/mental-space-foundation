import style from '../../admin/adminStyles/Admin.module.css'
import AdminHeader from '../components/admin-reusables/AdminHeader.jsx'
import AdminSideBar from '../components/admin-reusables/AdminSideBar.jsx';
import React from 'react';

function AdminSubscribers() {

    const volunteers = [
        {
          name: 'John Doe',
          email: 'john@example.com',
          date: '2024-08-14',
          block: 'no'
        },
        {
          name: 'Jane Smith',
          email: 'jane@example.com',
          date: '2024-08-15',
          block: 'no'
        },
        // Add more volunteer objects as needed
      ];
    
    return (
        <>

    <div className={style.componentContent}>
    <AdminSideBar/>

    <div className={style.headerContent}>
    <AdminHeader/>

    <div>
     
      <table border="1" cellPadding="10" cellSpacing="0" className={style.table}>
      <thead>
        <tr className={style.tr}>
          <th className={style.ths}>S/N</th>
          <th className={style.ths}>Name</th>
          <th className={style.ths}>Email</th>
          <th className={style.ths}>Date</th>
          <th className={style.ths}>Block</th>
        </tr>
      </thead>

      <tbody>
        {volunteers.map((volunteer, index) => (
          <tr key={index} className={style.tr}>
            <td className={style.tds}>{index + 1}</td>
            <td className={style.tds}>{volunteer.name}</td>
            <td className={style.tds}>{volunteer.email}</td>
            <td className={style.tds}>{volunteer.date}</td>
            <td className={style.tds}>{volunteer.block}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    
    </div>

    </div>

    </>
    )
}

export default AdminSubscribers
