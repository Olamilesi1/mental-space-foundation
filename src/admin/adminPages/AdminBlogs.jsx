// import style from '../../admin/adminStyles/Admin.module.css'
// import AdminHeader from '../components/admin-reusables/AdminHeader.jsx'
// import AdminSideBar from '../components/admin-reusables/AdminSideBar.jsx';
// // import VolunteerTable from '../components/Table.jsx';
// import React, { useState, useEffect } from 'react';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';



// function AdminBlogs() {

//   const [blogs, setBlogs] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const token = localStorage.getItem('adminToken');
//         console.log('Token:', token); // Debugging line

//         if (!token) {
//           toast.error('Unauthorized access. Please log in.');
//           navigate('/login');
//           return;
//         }

//         const response = await axios.get('http://localhost:5000/api/blogs/all-blogs', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         console.log('Blogs response data:', response.data); // Debugging line
//         if (response.data && Array.isArray(response.data.blogData)) {
//           setBlogs(response.data.blogData);
//         } else {
//           toast.error('Unexpected response format.');
//           console.error('Unexpected response format:', response.data);
//         }

//         toast.success('Blog loaded successfully!');
//       } catch (error) {
//         toast.error('Error fetching blogs');
//         console.error('Error fetching blogs:', error);
//       }
//     };

//     fetchBlogs();
//   }, [navigate]);

//   console.log('blogs state:', blogs); // Debu

//     // const volunteers = [
//     //     {
//     //       title: 'john@example.com',
//     //       summary: '1990-01-01',
//     //       image: '123-456-7890',
//     //       author: 'New York',
//     //       contents: '2024-08-14',
//     //       status: 'no',
//     //       approve: 'no',
//     //       date: 'no',
//     //       edit: 'no',
//     //       delete: 'no',
//     //       comments: 'no'
//     //     },
//     //     {
//     //         title: 'john@example.com',
//     //         summary: '1990-01-01',
//     //         image: '123-456-7890',
//     //         author: 'New York',
//     //         contents: '2024-08-14',
//     //         status: 'no',
//     //         approve: 'no',
//     //         date: 'no',
//     //         edit: 'no',
//     //         delete: 'no',
//     //         comments: 'no'
//     //     },
//     //     // Add more volunteer objects as needed
//     //   ];
    
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
//           <th className={style.thb}>S/N</th>
//           <th className={style.thb}>Title</th>
//           <th className={style.thb}>Summary</th>
//           <th className={style.thb}>Image</th>
//           <th className={style.thb}>Author</th>
//           <th className={style.thb}>Contents</th>
//           <th className={style.thb}>Status</th>
//           <th className={style.thb}>Approve</th>
//           {/* <th className={style.thb}>Date</th> */}
//           <th className={style.thb}>Edit</th>
//           <th className={style.thb}>Delete</th>
//           <th className={style.thb}>Comments</th>
//         </tr>
//       </thead>

//       <tbody>
//         {/* {volunteers.map((volunteer, index) => (
//           <tr key={index} className={style.tr}>
//             <td className={style.tdb}>{index + 1}</td>
//             <td className={style.tdb}>{volunteer.title}</td>
//             <td className={style.tdb}>{volunteer.summary}</td>
//             <td className={style.tdb}>{volunteer.image}</td>
//             <td className={style.tdb}>{volunteer.author}</td>
//             <td className={style.tdb}>{volunteer.contents}</td>
//             <td className={style.tdb}>{volunteer.status}</td>
//             <td className={style.tdb}>{volunteer.approve}</td>
//             <td className={style.tdb}>{volunteer.date}</td>
//             <td className={style.tdb}>{volunteer.edit}</td>
//             <td className={style.tdb}>{volunteer.delete}</td>
//             <td className={style.tdb}>{volunteer.comments}</td>
//           </tr>
//         ))} */}

// {blogs.length > 0 ? (
//           blogs.map((blog, index) => (
//             // <div key={blog._id} className="border border-gray-300 rounded-lg p-4">
//             //   <img src={`http://localhost:5000/uploads/${blog.blogCover}`} alt={blog.title} className="w-full h-48 object-cover mb-4" />
//             //   <h3 className="text-xl font-semibold">{blog.title}</h3>
//             //   <p className="text-gray-700">by {blog.author}</p>
//             //   <p className="mt-2">{blog.category}</p>
//             //   <p className="mt-2">{blog.publicationDate}</p>
//             //   <p className="mt-2">ISBN: {blog.ISBN}</p>
//             // </div>

//             <tr key={index} className={style.tr}>
//             <td className={style.tdb}>{index + 1}</td>
//             <td className={style.tdb}>{blog.title}</td>
//             <td className={style.tdb}>{blog.summary}</td>
//             <td className={style.tdb}>{blog.image}</td>
//             <td className={style.tdb}>{blog.author}</td>
//             <td className={style.tdb}>{blog.contents}</td>
//             <td className={style.tdb}>{blog.status}</td>
//             <td className={style.tdb}>{blog.approve}</td>
//             {/* <td className={style.tdb}>{blog.date}</td> */}
//             <td className={style.tdb}>{blog.edit}</td>
//             <td className={style.tdb}>{blog.delete}</td>
//             <td className={style.tdb}>{blog.comments}</td>
//           </tr>
//           ))
//         ) : (
//           <p className="text-center">No blogs available.</p>
//         )}
//       </tbody>
//     </table>
//     </div>
    
//     </div>

//     </div>

//     </>
//     )
// }

// export default AdminBlogs


import style from '../../admin/adminStyles/Admin.module.css';
import AdminHeader from '../components/admin-reusables/AdminHeader.jsx';
import AdminSideBar from '../components/admin-reusables/AdminSideBar.jsx';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdminBlogs() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        console.log('Token:', token); // Debugging line

        if (!token) {
          toast.error('Unauthorized access. Please log in.');
          navigate('/login');
          return;
        }

        const response = await axios.get('http://localhost:5000/api/blogs/all-blogs', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log('Blogs response data:', response.data); // Debugging line
        if (response.data && Array.isArray(response.data.blogData)) {
          setBlogs(response.data.blogData);
        } else {
          toast.error('Unexpected response format.');
          console.error('Unexpected response format:', response.data);
        }

        toast.success('Blogs loaded successfully!');
      } catch (error) {
        toast.error('Error fetching blogs');
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, [navigate]);

  return (
    <>
      <div className={style.componentContent}>
        <AdminSideBar />
        <div className={style.headerContent}>
          <AdminHeader />
          <div>
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
                  <th className={style.thb}>Edit</th>
                  <th className={style.thb}>Delete</th>
                  <th className={style.thb}>Comments</th>
                </tr>
              </thead>
              <tbody>
                {blogs.length > 0 ? (
                  blogs.map((blog, index) => (
                    <tr key={index} className={style.tr}>
                      <td className={style.tdb}>{index + 1}</td>
                      <td className={style.tdb}>{blog.title}</td>
                      <td className={style.tdb}>{blog.summary}</td>
                      <td className={style.tdb}>
                        <img src={`http://localhost:5000/uploads/${blog.image}`} alt={blog.title} style={{ width: '50px' }} />
                      </td>
                      <td className={style.tdb}>{blog.author}</td>
                      <td className={style.tdb}>{blog.contents}</td>
                      <td className={style.tdb}>{blog.status}</td>
                      <td className={style.tdb}>{blog.approve}</td>
                      <td className={style.tdb}>
                        <button>Edit</button>
                      </td>
                      <td className={style.tdb}>
                        <button>Delete</button>
                      </td>
                      <td className={style.tdb}>{blog.comments}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="11" className={style.tdb}>No blogs available.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminBlogs;
