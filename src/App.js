
import Pages from "./components/Pages";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from "react-router-dom";
// import Header from "./components/reusables/Header";
// import Footer from "./components/reusables/Footer";


function App() {
  return (
    <div>
          {/* <ToastContainer position="top-right" autoClose={3000} /> */}
      <Router> 
        {/* <Header/> */}
      <Pages />
      {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;