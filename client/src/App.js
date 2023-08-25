import logo from './logo.svg';
import './App.css';
import {  Router, Route,Routes } from "react-router-dom";
import Home from './pages/Home';
import NavBar from './components/NavBar';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
      <NavBar/>

        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="login" element={<LoginPage/>}/>
     
        </Routes>
    </div>
  );
}

export default App;
