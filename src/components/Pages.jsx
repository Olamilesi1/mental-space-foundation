import { Routes, Route } from "react-router-dom"
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Resources from "../pages/Resources"
import NotFound from "../pages/NotFound"
import Appointment from "../pages/Appointment"
import Blog from "../pages/Blog"
import Services from "../pages/Services"

function Pages() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about-us" element={<About/>}/>
                <Route path="/contact-us" element={<Contact/>}/>
                <Route path="/resources" element={<Resources/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="book-an-appointment" element={<Appointment/>}/>
                <Route path="*" element = {<NotFound/>}/>
            </Routes>
        </div>
    )
}

export default Pages
