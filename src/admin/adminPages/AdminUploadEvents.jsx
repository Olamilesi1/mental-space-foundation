import style from '../../admin/adminStyles/Admin.module.css'
import AdminHeader from '../components/admin-reusables/AdminHeader.jsx'
import AdminSideBar from '../components/admin-reusables/AdminSideBar.jsx';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';

function AdminUploadEvents() {

      // State to manage form inputs
  const [formData, setFormData] = useState({
    image: null, // Image should be null initially
    title: '',
    summary: '',
    author: '',
    contents: '', // Corrected typo (should be 'contents')
    // date: '',
  });

  // Hook to navigate programmatically
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
  
    if (name === 'image') {
      // Log the file object to ensure it's being captured correctly
      console.log('Selected file:', files[0]);
  
      setFormData({
        ...formData,
        image: files[0], // Store the file object for uploading
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = new FormData();
    data.append('image', formData.image); // Ensure 'image' field is added correctly
    data.append('title', formData.title);
    data.append('summary', formData.summary);
    data.append('author', formData.author);
    data.append('contents', formData.contents);
  
    // Debugging: Log all FormData entries to verify correctness
    for (let [key, value] of data.entries()) {
      console.log(`${key}:`, value);
    }
  
    try {
      const response = await axios.post('https://mental-space-foundation-api.onrender.com/api/events/events-upload', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      toast.success(response.data.message);
      setTimeout(() => {
        navigate('/admin/events');
      }, 2000);
    } catch (error) {
      console.error('Server Error:', error.response?.data); // Log the detailed error
      toast.error(error.response?.data?.message || 'events upload failed!');
    }
  };
    return (
        <>

    <div className={style.componentContent}>
    <AdminSideBar/>

    <div className={style.headerContent}>
    <AdminHeader/>

    <form onSubmit={handleSubmit}>
    <div className={style.blogUpload}>
        <div className={style.textInputs}>
        <h3 className={style.titles}>Events Title</h3>
        <input type="text" placeholder='Enter the title of your Events' className={style.input}  name="title"
                  value={formData.title}
                  onChange={handleChange}/>
        </div>
        
        <div className={style.textInputs}>
        <h3>Events Summary</h3>
        <textarea    name="summary"
                  value={formData.summary}
                  onChange={handleChange}id="text" className={style.input} placeholder="Enter the summary of your Events"></textarea>
        </div>

        <div className={style.textInputs}>
        <h3>Choose Image</h3>
        <input type="file"
                  name="image"
                  onChange={handleChange}
                  required
                  accept="image/*"/>
        </div>

        <div className={style.textInputs}>
        <h3>Author</h3>
        <input type="text" placeholder='Author Name' className={style.input} name="author"
                  value={formData.author}
                  onChange={handleChange}/>
        </div>

        <div className={style.textInputs}>
        <h3>Write Your Content</h3>
       <textarea   name="contents"
                  value={formData.contents}
                  onChange={handleChange}  id="text" className={style.input}></textarea>
       </div>
       
       <button  type="submit" className={style.button}>UPLOAD EVENTS</button>
    

    </div>
    </form>
    
    </div>

    </div>

    </>
    )
}

export default AdminUploadEvents
