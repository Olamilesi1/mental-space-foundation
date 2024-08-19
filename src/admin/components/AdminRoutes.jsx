import { BrowserRouter as Routes, Route } from "react-router-dom";
import AdminHome from "../adminPages/AdminHome"
import AdminBlogs from "../adminPages/AdminBlogs"
import AdminDashboard from "../adminPages/AdminDashboard"
import AdminDonations from "../adminPages/AdminDonations"
import AdminEvents from "../adminPages/AdminEvents"
import AdminLogout from "../adminPages/AdminLogout"
import AdminNewsletters from "../adminPages/AdminNewsletters"
import AdminVolunteers from "../adminPages/AdminVolunteers"
import AdminSubscribers from "../adminPages/AdminSubscribers"
import AdminUploadBlog from "../adminPages/AdminUploadBlogs"
import AdminUploadResources from "../adminPages/AdminUploadResources"
import AdminResources from "../adminPages/AdminResources"
import AdminSettings from "../adminPages/AdminSettings"

function AdminRoutes() {
  return (
    <Routes>
 
      <Route path="/admin/" element = {<AdminHome/>}> 

      <Route path="blogs" element = {<AdminBlogs/>}/> 
      <Route path="dashboard" element = {<AdminDashboard/>}/> 
      <Route path="donations" element = {<AdminDonations/>}/> 
      <Route path="events" element = {<AdminEvents/>}/> 
      <Route path="log-out" element = {<AdminLogout/>}/> 
      <Route path="news-letters" element = {<AdminNewsletters/>}/> 
      <Route path="volunteer" element = {<AdminVolunteers/>}/> 
      <Route path="subscribers" element = {<AdminSubscribers/>}/> 
      <Route path="upload-blog" element = {<AdminUploadBlog/>}/> 
      <Route path="upload-resources" element = {<AdminUploadResources/>}/> 
      <Route path="resources" element = {<AdminResources/>}/> 
      <Route path="settings" element = {<AdminSettings/>}/> 

      </Route>
     
    </Routes>
  );
}

export default AdminRoutes;
