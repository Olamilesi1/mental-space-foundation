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
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Router>
      <Header/> 
      <Pages />
      </Router>
    </div>
  );
}

export default App;
