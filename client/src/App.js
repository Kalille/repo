import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Home from './pages/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Routes>
        <Route path="/" element={<Home/>}/>
     
        </Routes>
     
         
       

      </Router>
    
    </div>
  );
}

export default App;
