// import style from '../../admin/adminStyles/Admin.module.css'
// import AdminHeader from '../components/admin-reusables/AdminHeader.jsx'
// import AdminSideBar from '../components/admin-reusables/AdminSideBar.jsx';
// import React from 'react';
// // import VolunteerTable from '../components/Table.jsx';



// function AdminEvents() {

//     const volunteers = [
//         {
//           title: 'John Doe',
//           image: '123-456-7890',
//           description: '1990-01-01',
//           content: 'New York',
//           date: 'no',
//           status: 'no',
//           delete: 'no',
//           edit: 'no',
//           registered: 'no',
//         },
//         {
//             title: 'John Doe',
//             image: '123-456-7890',
//             description: '1990-01-01',
//             content: 'New York',
//             date: 'no',
//             status: 'no',
//             delete: 'no',
//             edit: 'no',
//             registered: 'no',
//         },
//         // Add more volunteer objects as needed
//       ];
    
//     return (
//         <>

//     <div className={style.componentContent}>
//     <AdminSideBar/>

//     <div className={style.headerContent}>
//     <AdminHeader/>

//     <div>
//       {/* <VolunteerTable volunteers={volunteers} /> */}
//       <table border="1" cellPadding="10" cellSpacing="0" className={style.table}>
//       <thead>
//         <tr className={style.tr}>
//           <th className={style.the}>S/N</th>
//           <th className={style.the}>Title</th>
//           <th className={style.the}>Image</th>
//           <th className={style.the}>Description</th>
//           <th className={style.the}>Content</th>
//           <th className={style.the}>Date</th>
//           <th className={style.the}>Status</th>
//           <th className={style.the}>Delete</th>
//           <th className={style.the}>Edit</th>
//           <th className={style.the}>Registered</th>
//         </tr>
//       </thead>

//       <tbody>
//         {volunteers.map((volunteer, index) => (
//           <tr key={index} className={style.tr}>
//             <td className={style.tde}>{index + 1}</td>
//             <td className={style.tde}>{volunteer.title}</td>
//             <td className={style.tde}>{volunteer.image}</td>
//             <td className={style.tde}>{volunteer.description}</td>
//             <td className={style.tde}>{volunteer.content}</td>
//             <td className={style.tde}>{volunteer.date}</td>
//             <td className={style.tde}>{volunteer.status}</td>
//             <td className={style.tde}>{volunteer.delete}</td>
//             <td className={style.tde}>{volunteer.edit}</td>
//             <td className={style.tde}>{volunteer.registered}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//     </div>
    
//     </div>

//     </div>

//     </>
//     )
// }

// export default AdminEvents

import style from '../../admin/adminStyles/Admin.module.css'
import AdminHeader from '../components/admin-reusables/AdminHeader.jsx'
import AdminSideBar from '../components/admin-reusables/AdminSideBar.jsx';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import eventsTable from '../components/Table.jsx';



function AdminEvents() {

  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

    useEffect(() => {
      const fetchEvents = async () => {
        try {
          const token = localStorage.getItem('adminToken');
          console.log('Token:', token); // Debugging line
  
          if (!token) {
            toast.error('Unauthorized access. Please log in.');
            navigate('/login');
            return;
          }
  
          const response = await axios.get('http://localhost:5000/api/events/all-events', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
  
          console.log('events response data:', response.data); // Debugging line
          if (response.data && Array.isArray(response.data.eventsData)) {
            setEvents(response.data.eventsData);
          } else {
            toast.error('Unexpected response format.');
            console.error('Unexpected response format:', response.data);
          }
  
          toast.success('events loaded successfully!');
        } catch (error) {
          toast.error('Error fetching events');
          console.error('Error fetching events:', error);
        }
      };
  
      fetchEvents();
    }, [navigate]);
    
    return (
        <>

    <div className={style.componentContent}>
    <AdminSideBar/>

    <div className={style.headerContent}>
    <AdminHeader/>

    <div>
      {/* <eventsTable eventss={eventss} /> */}
      <table border="1" cellPadding="10" cellSpacing="0" className={style.table}>
      <thead>
        <tr className={style.tr}>
          <th className={style.the}>S/N</th>
          <th className={style.the}>Title</th>
          <th className={style.the}>Image</th>
          {/* <th className={style.the}>Description</th> */}
          <th className={style.the}>Content</th>
          <th className={style.the}>Date</th>
          <th className={style.the}>Status</th>
          <th className={style.the}>Delete</th>
          <th className={style.the}>Edit</th>
          <th className={style.the}>Registered</th>
        </tr>
      </thead>

      <tbody>
      {events.length > 0 ? (
        events.map((events, index) => (
          <tr key={index} className={style.tr}>
            <td className={style.tde}>{index + 1}</td>
            <td className={style.tde}>{events.title}</td>
            <td className={style.tde}>{events.image}</td>
            {/* <td className={style.tde}>{events.description}</td> */}
            <td className={style.tde}>{events.contents}</td>
            <td className={style.tde}>{events.date}</td>
            <td className={style.tde}>{events.status}</td>
            <td className={style.tde}>{events.delete}</td>
            <td className={style.tde}>{events.edit}</td>
            <td className={style.tde}>{events.registered}</td>
          </tr>
        )) ): (
          <tr>
            <td colSpan="11" className={style.tdb}>No events available.</td>
          </tr>
        )}
      </tbody>
    </table>
    </div>
    
    </div>

    </div>

    </>
    )
}

export default AdminEvents
