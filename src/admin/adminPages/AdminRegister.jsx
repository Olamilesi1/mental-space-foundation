import style from '../../admin/adminStyles/Admin.module.css'
import {NavLink} from 'react-router-dom'
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

function AdminRegister() {

     // State to manage form inputs
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    // number: '' 
  });

  // Hook to navigate programmatically
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     const response = await axios.post('https://mental-space-foundation-api.onrender.com/admins/register', formData);

      // Display success message using toastify
      toast.success(response.data.message);

      // Redirect to the login page after a short delay
      setTimeout(() => {
        navigate('/admin/login');
      }, 2000); // Delay for 2 seconds before redirecting
    } catch (error) {
      // Display error message using toastify
      toast.error(error.response?.data?.message || 'Registration failed!');
    }
  };

    return (
        <>

    <div className={style.dashboard}>
    <img src="/images/be-mentally-whole-home.jpg" alt="be-mentally" className={style.loginImage} />


   <form onSubmit={handleSubmit} className={style.settings}>
    <div  className={style.login}>
        <div>
            <h1>Register</h1>
        </div>

        <div className={style.textInputs}>
        <input type="text"  name="username"
              value={formData.username}
              onChange={handleChange}
              required placeholder='Username' className={style.input}/>
        </div>
        
        <div className={style.textInputs}>
        <input type="email" name="email"
              value={formData.email}
              onChange={handleChange}
              required placeholder='Email' className={style.input}/>
        </div>


        {/* <div className={style.textInputs}>
        <input type="text" placeholder='Phone Number' name="number"
              value={formData.number}
              onChange={handleChange}
              required className={style.input}/>
        </div> */}

        <div className={style.textInputs}>
        <input type="password" placeholder='Password' name="password"
              value={formData.password}
              onChange={handleChange}
              required className={style.input}/>
        </div>

        {/* <div className={style.textInputs}>
        <h3>Choose Image</h3>
        <input type="file" name="Choose Image" id="" accept="image/*"/>
        </div> */}

        <h3 className={style.register}>Already Have An Account? <NavLink to='/admin/login'>Login</NavLink></h3>
       <button type= 'submit' className={style.button}>REGISTER</button>
    </div>
    </form>
    </div>

    </>
    )
}

export default AdminRegister