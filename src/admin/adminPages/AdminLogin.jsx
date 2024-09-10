import style from '../../admin/adminStyles/Admin.module.css'
import {NavLink} from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

function AdminRegister() {

     // State to manage form inputs
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    const response = await axios.post('http://localhost:5000/admins/login', formData);

    // Correctly access the token from the response
    const token = response.data.authToken;

    if (token) {
      // Store the token in localStorage
      localStorage.setItem('adminToken', token);

    //   toast.success('Login successful!');
      toast.success(response.data.message); 

      // Redirect to the admin dashboard after a short delay
      setTimeout(() => {
        navigate('/admin/home');
      }, 2000); // Delay for 2 seconds before redirecting
    } else {
      throw new Error('Token is missing from the response.');
    }

  } catch (error) {
    // Handle errors, including missing token or network errors
    console.error('Login error:', error);
    toast.error(error.response?.data?.message || 'Login failed!');
  }
};

    return (
        <>
    <div className={style.dashboardLogin}>
   <img src="/images/be-mentally-whole-home.jpg" alt="be-mentally" className={style.loginImage} />

   <form className={style.settings} onSubmit={handleSubmit}>
    <div  className={style.login}>
        <div>
            <h1>Login</h1>
        </div>
        
        <div className={style.textInputs}>
        <input type="email" placeholder='Email' name="email"
              value={formData.email}
              onChange={handleChange}
              required className={style.input}/>
        </div>

        <div className={style.textInputs}>
        <input type="password" name="password"
              value={formData.password}
              onChange={handleChange}
              required placeholder='Password' className={style.input}/>
        </div>

        <h3 className={style.register}>Don't Have An Account? <NavLink to='/admin/register'>Register</NavLink></h3>
       <button type= "submit" className={style.button}>LOGIN</button>
    </div>
    </form>
    
    <ToastContainer />
    </div>

    </>
    )
}

export default AdminRegister