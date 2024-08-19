import style from '../../admin/adminStyles/Admin.module.css'
import AdminHeader from '../components/admin-reusables/AdminHeader.jsx'
import AdminSideBar from '../components/admin-reusables/AdminSideBar.jsx';
import React from 'react';
// import VolunteerTable from '../components/Table.jsx';



function AdminDonations() {

    const volunteers = [
        {
          name: 'John Doe',
          status: 'yes',
          email: 'john@example.com',
          refNo: '1990-01-01',
          phone: '123-456-7890',
          amount: '100$',
          dateDonated: '2024-08-14'
        },
        {
            name: 'John Doe',
            status: 'yes',
            email: 'john@example.com',
            refNo: '1990-01-01',
            phone: '123-456-7890',
            amount: '100$',
            dateDonated: '2024-08-14'
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
          <th className={style.thd}>S/N</th>
          <th className={style.thd}>Status</th>
          <th className={style.thd}>Name</th>
          <th className={style.thd}>Email</th>
          <th className={style.thd}>Reference Number</th>
          <th className={style.thd}>Phone</th>
          <th className={style.thd}>Amount</th>
          <th className={style.thd}>Date Donated</th>
        </tr>
      </thead>

      <tbody>
        {volunteers.map((volunteer, index) => (
          <tr key={index} className={style.tr}>
            <td className={style.tdd}>{index + 1}</td>
            <td className={style.tdd}>{volunteer.status}</td>
            <td className={style.tdd}>{volunteer.name}</td>
            <td className={style.tdd}>{volunteer.email}</td>
            <td className={style.tdd}>{volunteer.refNo}</td>
            <td className={style.tdd}>{volunteer.phone}</td>
            <td className={style.tdd}>{volunteer.amount}</td>
            <td className={style.tdd}>{volunteer.dateDonated}</td>
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

export default AdminDonations
