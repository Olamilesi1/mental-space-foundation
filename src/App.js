// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
    
//     </div>
//   );
// }

// export default App;

import Pages from "./components/Pages";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/reusables/Header";
import Footer from "./components/reusables/Footer";

function App() {
  return (
    <div>
      <Router>
      <Header/> 
      <Pages />
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
