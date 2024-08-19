import style from "../styles/Blog.module.css";
import Header from "../components/reusables/Header";
import Footer from "../components/reusables/Footer";
import axios from "axios"
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

function Resources() {
  // const resources = [
  //   {
  //     title: "Prioritize Mental",
  //     summary: "Be responsible!",
  //     image: "./images/profile.jpeg",
  //     author: "Paul Achikl",
  //     contents: "2024-08-14",
  //     date: "2024-05-06",
  //     download: "Download",
  //     comments: "no",
  //   },
  //   {
  //     title: "50 50 Mental",
  //     summary: "Don't loose guard",
  //     image: "./images/profile.jpeg",
  //     author: "Achikl Paul",
  //     contents: "2024-08-14",
  //     date: "2024-05-06",
  //     download: "Download",
  //     comments: "no",
  //   },
  // ];

  const [resources, setResources] = useState([]);
  useEffect(() => {
    const fetchResources = async () => {
      try {
        const resourcesResponse = await axios.get('http://localhost:5000/api/resources/all-resources');
        // const categoriesResponse = await axios.get('http://localhost:7000/api/books/category');
        setResources(resourcesResponse.data.resourcesData);
        // setCategories(categoriesResponse.data);
        toast.success('Resources loaded successfully!');
      } catch (error) {
        toast.error('Error fetching resources');
        console.error('Error fetching resources:', error);
      }
    };

    fetchResources();
  }, []);

  return (
    <div>
      <Header />
      <br /> <br />
      {/* <div className={style.dashboard}> */}
      <div className={style.blogText}>
        <h1>RESOURCES</h1>
        <p>Page: Resources</p>
      </div>
    
    <div className={style.blogs}>
      {resources.map((resources) => (
        <div className={style.blog}>
          <img className={style.image} src={resources.image} alt="resourceimg" />
          <h2 className={style.blogTitle}>{resources.title}</h2>
          <h4>{resources.summary}</h4>
          <h4>{resources.author}</h4>
          <p>{resources.date}</p>
          <button className={style.button}>{resources.download}</button>
        </div>
       
      ))}
       </div>
       {/* </div> */}
      <Footer />
    </div>
  );
}

export default Resources;
