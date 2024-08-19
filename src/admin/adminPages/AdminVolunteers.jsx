import style from '../../admin/adminStyles/Admin.module.css'
import AdminHeader from '../components/admin-reusables/AdminHeader.jsx'
import AdminSideBar from '../components/admin-reusables/AdminSideBar.jsx';
import React from 'react';
// import VolunteerTable from '../components/Table.jsx';



function AdminVolunteers() {

    const volunteers = [
        {
          name: 'John Doe',
          email: 'john@example.com',
          image: 'yes',
          dob: '1990-01-01',
          phone: '123-456-7890',
          placeOfOrigin: 'New York',
          reason: 'To help the community',
          date: '2024-08-14',
          block: 'no'
        },
        {
          name: 'Jane Smith',
          email: 'jane@example.com',
          image: 'jane@example.com',
          dob: '1985-05-15',
          phone: '987-654-3210',
          placeOfOrigin: 'Los Angeles',
          reason: 'Volunteer experience',
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
      {/* <VolunteerTable volunteers={volunteers} /> */}
      <table border="1" cellPadding="10" cellSpacing="0" className={style.table}>
      <thead>
        <tr className={style.tr}>
          <th className={style.th}>S/N</th>
          <th className={style.th}>Name</th>
          <th className={style.th}>Email</th>
          <th className={style.th}>Image</th>
          <th className={style.th}>DOB</th>
          <th className={style.th}>Phone</th>
          <th className={style.th}>Place of Origin</th>
          <th className={style.th}>Reason</th>
          <th className={style.th}>Date</th>
          <th className={style.th}>Block</th>
        </tr>
      </thead>

      <tbody>
        {volunteers.map((volunteer, index) => (
          <tr key={index} className={style.tr}>
            <td className={style.td}>{index + 1}</td>
            <td className={style.td}>{volunteer.name}</td>
            <td className={style.td}>{volunteer.email}</td>
            <td className={style.td}>{volunteer.image}</td>
            <td className={style.td}>{volunteer.dob}</td>
            <td className={style.td}>{volunteer.phone}</td>
            <td className={style.td}>{volunteer.placeOfOrigin}</td>
            <td className={style.td}>{volunteer.reason}</td>
            <td className={style.td}>{volunteer.date}</td>
            <td className={style.td}>{volunteer.block}</td>
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

export default AdminVolunteers
