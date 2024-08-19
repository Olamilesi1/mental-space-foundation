import style from '../../admin/adminStyles/Admin.module.css'
import AdminHeader from '../components/admin-reusables/AdminHeader.jsx'
import AdminSideBar from '../components/admin-reusables/AdminSideBar.jsx';
import React from 'react';
// import VolunteerTable from '../components/Table.jsx';



function AdminResources() {

    const volunteers = [
        {
          title: 'John Doe',
          image: '123-456-7890',
          summary: '1990-01-01',
          author: 'john@example.com',
          content: 'New York',
          shares: '2024-08-14',
          date: 'no',
          delete: 'no',
          approve: 'no',
          edit: 'no',
          downloads: 'no',
        },
        {
            title: 'John Doe',
            image: '123-456-7890',
            summary: '1990-01-01',
            author: 'john@example.com',
            content: 'New York',
            shares: '2024-08-14',
            date: 'no',
            delete: 'no',
            approve: 'no',
            edit: 'no',
            downloads: 'no',
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
          <th className={style.thr}>S/N</th>
          <th className={style.thr}>Title</th>
          <th className={style.thr}>Image</th>
          <th className={style.thr}>Summary</th>
          <th className={style.thr}>Author</th>
          <th className={style.thr}>Content</th>
          <th className={style.thr}>Shares</th>
          <th className={style.thr}>Date</th>
          <th className={style.thr}>Delete</th>
          <th className={style.thr}>Approve</th>
          <th className={style.thr}>Edit</th>
          <th className={style.thr}>Downloads</th>
        </tr>
      </thead>

      <tbody>
        {volunteers.map((volunteer, index) => (
          <tr key={index} className={style.tr}>
            <td className={style.tdr}>{index + 1}</td>
            <td className={style.tdr}>{volunteer.title}</td>
            <td className={style.tdr}>{volunteer.image}</td>
            <td className={style.tdr}>{volunteer.summary}</td>
            <td className={style.tdr}>{volunteer.author}</td>
            <td className={style.tdr}>{volunteer.content}</td>
            <td className={style.tdr}>{volunteer.shares}</td>
            <td className={style.tdr}>{volunteer.date}</td>
            <td className={style.tdr}>{volunteer.delete}</td>
            <td className={style.tdr}>{volunteer.approve}</td>
            <td className={style.tdr}>{volunteer.edit}</td>
            <td className={style.tdr}>{volunteer.downloads}</td>
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

export default AdminResources
