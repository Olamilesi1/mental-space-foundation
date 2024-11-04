import style from "../styles/Blog.module.css";
import Header from "../components/reusables/Header";
import Footer from "../components/reusables/Footer";
import axios from "axios"
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

function Blog() {
 
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsResponse = await axios.get('http://localhost:5000/api/blogs/all-blogs');
        // const categoriesResponse = await axios.get('http://localhost:7000/api/books/category');
        setBlogs(blogsResponse.data.blogData);
        // setCategories(categoriesResponse.data);
        toast.success('Blogs loaded successfully!');
      } catch (error) {
        toast.error('Error fetching blogs');
        console.error('Error fetching books:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <Header />
      <br /> <br />
      <div className={style.blogText}>
        <h1>BLOG</h1>
        <p>Page: Blog</p>
      </div>
    
    <div className={style.blogs}>
      {blogs.map((blog) => (
        <div className={style.blog}>
          <img className={style.image} src={blog.image} alt="blogimg" />
          <h2 className={style.blogTitle}>{blog.title}</h2>
          <h4>{blog.summary}</h4>
          <h4>{blog.author}</h4>
          <p>{blog.date}</p>
          <button className={style.button}>Continue Reading</button>
        </div>
       
      ))}
       </div>
      <Footer />
    </div>
  );
}

export default Blog;
