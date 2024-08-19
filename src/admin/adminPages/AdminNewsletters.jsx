import style from '../../admin/adminStyles/Admin.module.css'
import AdminHeader from '../components/admin-reusables/AdminHeader.jsx'
import AdminSideBar from '../components/admin-reusables/AdminSideBar.jsx';
import React from 'react';
// import VolunteerTable from '../components/Table.jsx';



function AdminNewsletters() {

    const volunteers = [
        {
          title: 'john@example.com',
          summary: '1990-01-01',
          image: '123-456-7890',
          author: 'New York',
          contents: '2024-08-14',
          status: 'no',
          approve: 'no',
          date: 'no',
          edit: 'no',
          delete: 'no',
          feedback: 'no'
        },
        {
            title: 'john@example.com',
            summary: '1990-01-01',
            image: '123-456-7890',
            author: 'New York',
            contents: '2024-08-14',
            status: 'no',
            approve: 'no',
            date: 'no',
            edit: 'no',
            delete: 'no',
            feedback: 'no'
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
          <th className={style.thb}>S/N</th>
          <th className={style.thb}>Title</th>
          <th className={style.thb}>Summary</th>
          <th className={style.thb}>Image</th>
          <th className={style.thb}>Author</th>
          <th className={style.thb}>Contents</th>
          <th className={style.thb}>Status</th>
          <th className={style.thb}>Approve</th>
          <th className={style.thb}>Date</th>
          <th className={style.thb}>Edit</th>
          <th className={style.thb}>Delete</th>
          <th className={style.thb}>Feedback</th>
        </tr>
      </thead>

      <tbody>
        {volunteers.map((volunteer, index) => (
          <tr key={index} className={style.tr}>
            <td className={style.tdb}>{index + 1}</td>
            <td className={style.tdb}>{volunteer.title}</td>
            <td className={style.tdb}>{volunteer.summary}</td>
            <td className={style.tdb}>{volunteer.image}</td>
            <td className={style.tdb}>{volunteer.author}</td>
            <td className={style.tdb}>{volunteer.contents}</td>
            <td className={style.tdb}>{volunteer.status}</td>
            <td className={style.tdb}>{volunteer.approve}</td>
            <td className={style.tdb}>{volunteer.date}</td>
            <td className={style.tdb}>{volunteer.edit}</td>
            <td className={style.tdb}>{volunteer.delete}</td>
            <td className={style.tdb}>{volunteer.feedback}</td>
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

export default AdminNewsletters
