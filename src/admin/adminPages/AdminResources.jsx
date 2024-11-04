import style from '../../admin/adminStyles/Admin.module.css'
import AdminHeader from '../components/admin-reusables/AdminHeader.jsx'
import AdminSideBar from '../components/admin-reusables/AdminSideBar.jsx';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import resourcesTable from '../components/Table.jsx';



function AdminResources() {
  const [resources, setResources] = useState([]);
  const navigate = useNavigate();

    useEffect(() => {
      const fetchResources = async () => {
        try {
          const token = localStorage.getItem('adminToken');
          console.log('Token:', token); // Debugging line
  
          if (!token) {
            toast.error('Unauthorized access. Please log in.');
            navigate('/login');
            return;
          }
  
          const response = await axios.get('https://mental-space-foundation-api.onrender.com/api/resources/all-resources', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
  
          console.log('Resources response data:', response.data); // Debugging line
          if (response.data && Array.isArray(response.data.resourcesData)) {
            setResources(response.data.resourcesData);
          } else {
            toast.error('Unexpected response format.');
            console.error('Unexpected response format:', response.data);
          }
  
          toast.success('Resources loaded successfully!');
        } catch (error) {
          toast.error('Error fetching resources');
          console.error('Error fetching resources:', error);
        }
      };
  
      fetchResources();
    }, [navigate]);

    return (
        <>
    <div className={style.componentContent}>
    <AdminSideBar/>

    <div className={style.headerContent}>
    <AdminHeader/>

    <div>
      {/* <resourcesTable resourcess={resourcess} /> */}
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
          {/* <th className={style.thr}>Date</th> */}
          <th className={style.thr}>Delete</th>
          <th className={style.thr}>Approve</th>
          <th className={style.thr}>Edit</th>
          <th className={style.thr}>Downloads</th>
        </tr>
      </thead>

      <tbody>
      {resources.length > 0 ? (
        resources.map((resources, index) => (
          <tr key={index} className={style.tr}>
            <td className={style.tdr}>{index + 1}</td>
            <td className={style.tdr}>{resources.title}</td>
            <td className={style.tdr}>
                        <img src={`https://mental-space-foundation-api.onrender.com/${resources.image}`} alt={resources.title} style={{ width: '50px' }} />
                      </td>
            <td className={style.tdr}>{resources.summary}</td>
            <td className={style.tdr}>{resources.author}</td>
            <td className={style.tdr}>{resources.content}</td>
            <td className={style.tdr}>{resources.shares}</td>
            {/* <td className={style.tdr}>{resources.date}</td> */}
            <td className={style.tdb}>
                        <button>Delete</button>
                      </td>
            <td className={style.tdr}>{resources.approve}</td>
            <td className={style.tdb}>
                        <button>Edit</button>
                      </td>
            <td className={style.tdr}>{resources.downloads}</td>
          </tr>
        ))
        ): (
          <tr>
            <td colSpan="11" className={style.tdb}>No resource available.</td>
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

export default AdminResources
