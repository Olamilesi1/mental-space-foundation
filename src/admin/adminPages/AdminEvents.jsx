import style from '../../admin/adminStyles/Admin.module.css'
import AdminHeader from '../components/admin-reusables/AdminHeader.jsx'
import AdminSideBar from '../components/admin-reusables/AdminSideBar.jsx';
import React from 'react';
// import VolunteerTable from '../components/Table.jsx';



function AdminEvents() {

    const volunteers = [
        {
          title: 'John Doe',
          image: '123-456-7890',
          description: '1990-01-01',
          content: 'New York',
          date: 'no',
          status: 'no',
          delete: 'no',
          edit: 'no',
          registered: 'no',
        },
        {
            title: 'John Doe',
            image: '123-456-7890',
            description: '1990-01-01',
            content: 'New York',
            date: 'no',
            status: 'no',
            delete: 'no',
            edit: 'no',
            registered: 'no',
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
      {/* <VolunteerTable volunteers={volunteers} /> */}
      <table border="1" cellPadding="10" cellSpacing="0" className={style.table}>
      <thead>
        <tr className={style.tr}>
          <th className={style.the}>S/N</th>
          <th className={style.the}>Title</th>
          <th className={style.the}>Image</th>
          <th className={style.the}>Description</th>
          <th className={style.the}>Content</th>
          <th className={style.the}>Date</th>
          <th className={style.the}>Status</th>
          <th className={style.the}>Delete</th>
          <th className={style.the}>Edit</th>
          <th className={style.the}>Registered</th>
        </tr>
      </thead>

      <tbody>
        {volunteers.map((volunteer, index) => (
          <tr key={index} className={style.tr}>
            <td className={style.tde}>{index + 1}</td>
            <td className={style.tde}>{volunteer.title}</td>
            <td className={style.tde}>{volunteer.image}</td>
            <td className={style.tde}>{volunteer.description}</td>
            <td className={style.tde}>{volunteer.content}</td>
            <td className={style.tde}>{volunteer.date}</td>
            <td className={style.tde}>{volunteer.status}</td>
            <td className={style.tde}>{volunteer.delete}</td>
            <td className={style.tde}>{volunteer.edit}</td>
            <td className={style.tde}>{volunteer.registered}</td>
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

export default AdminEvents