import style from "../styles/Blog.module.css";
import Header from "../components/reusables/Header";
import Footer from "../components/reusables/Footer";
import axios from "axios"
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

function Event() {
  // const events = [
  //   {
  //     title: "Beach",
  //     summary: "unwinding",
  //     image: "./images/profile.jpeg",
  //     contents: "2024-08-14",
  //     date: "2024-05-06",
  //     attend: "Attend",
  //     comments: "no",
  //   },
  //   {
  //     title: "Cinema",
  //     summary: "movie date",
  //     image: "./images/profile.jpeg",
  //     contents: "2024-08-14",
  //     date: "2024-05-06",
  //     attend: "Attend",
  //     comments: "no",
  //   },
  // ];

  const [events, setEvents] = useState([]);
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsResponse = await axios.get('https://mental-space-foundation-api.onrender.com/api/events/all-events');
        // const categoriesResponse = await axios.get('http://localhost:7000/api/books/category');
        setEvents(eventsResponse.data.eventData);
        // setCategories(categoriesResponse.data);
        toast.success('Events loaded successfully!');
      } catch (error) {
        toast.error('Error fetching events');
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <Header />
      <br /> <br />
      <div className={style.blogText}>
        <h1>Events</h1>
        <p>Page: Events</p>
      </div>
    
    <div className={style.blogs}>
      {events.map((event) => (
        <div className={style.blog}>
          <img className={style.image} src={event.image} alt="eventimg" />
          <h2 className={style.blogTitle}>{event.title}</h2>
          <h4>{event.summary}</h4>
          <p>{event.date}</p>
          <button className={style.button}>Continue Reading</button>
        </div>
       
      ))}
       </div>
      <Footer />
    </div>
  );
}

export default Event;
