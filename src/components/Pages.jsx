import { Routes, Route } from "react-router-dom"
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Resources from "../pages/Resources"
import NotFound from "../pages/NotFound"
import Event from "../pages/Event"
import Blog from "../pages/Blog"
import Services from "../pages/Services"
import Donate from "../pages/Donate"
import Volunteer from "../pages/Volunteer"
import Calendy from "./Calendly"


import AdminBlogs from "../admin/adminPages/AdminBlogs"
import AdminDashboard from "../admin/adminPages/AdminDashboard"
import AdminDonations from "../admin/adminPages/AdminDonations"
import AdminEvents from "../admin/adminPages/AdminEvents"
import AdminUploadEvents from "../admin/adminPages/AdminUploadEvents"
import AdminHome from "../admin/adminPages/AdminHome"
import AdminLogin from "../admin/adminPages/AdminLogin"
import AdminNewsletters from "../admin/adminPages/AdminNewsletters"
import AdminUploadNewsletters from "../admin/adminPages/AdminUploadNewsletters"
import AdminVolunteers from "../admin/adminPages/AdminVolunteers"
import AdminSubscribers from "../admin/adminPages/AdminSubscribers"
import AdminUploadBlog from "../admin/adminPages/AdminUploadBlogs"
import AdminUploadResources from "../admin/adminPages/AdminUploadResources"
import AdminResources from "../admin/adminPages/AdminResources"
import AdminSettings from "../admin/adminPages/AdminSettings"
import AdminRegister from "../admin/adminPages/AdminRegister"

function Pages() {
    return (
        <div>
            <Routes>
                 {/* Main website routes */}
                <Route path="/" element={<Home/>}/>
                <Route path="/about-us" element={<About/>}/>
                <Route path="/contact-us" element={<Contact/>}/>
                <Route path="/resources" element={<Resources/>}/>
                <Route path="/event" element={<Event/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/donate" element={<Donate/>}/>
                <Route path="/volunteer" element={<Volunteer/>}/>
                <Route path="/book-an-appointment" element={<Calendy/>}/>
                <Route path="*" element = {<NotFound/>}/>
            
                {/* Admin Pages*/}

      <Route path="/admin/blogs" element = {<AdminBlogs/>}/> 
      <Route path="/admin/dashboard" element = {<AdminDashboard/>}/> 
      <Route path="/admin/donations" element = {<AdminDonations/>}/> 
      <Route path="/admin/events" element = {<AdminEvents/>}/> 
      <Route path="/admin/upload-events" element = {<AdminUploadEvents/>}/> 
      <Route path="/admin/home" element = {<AdminHome/>}/> 
      <Route path="/admin/login" element = {<AdminLogin/>}/> 
      <Route path="/admin/register" element = {<AdminRegister/>}/> 
      <Route path="/admin/newsletters" element = {<AdminNewsletters/>}/> 
      <Route path="/admin/upload-newsletters" element = {<AdminUploadNewsletters/>}/> 
      <Route path="/admin/volunteers" element = {<AdminVolunteers/>}/> 
      <Route path="/admin/subscribers" element = {<AdminSubscribers/>}/> 
      <Route path="/admin/upload-blogs" element = {<AdminUploadBlog/>}/> 
      <Route path="/admin/upload-resources" element = {<AdminUploadResources/>}/> 
      <Route path="/admin/resources" element = {<AdminResources/>}/> 
      <Route path="/admin/settings" element = {<AdminSettings/>}/> 

            </Routes>
        </div>
    )
}

export default Pages
