import logo from './logo.svg';
import './App.css';
import {  Router, Route,Routes } from "react-router-dom";
import Home from './pages/Home';
import NavBar from './components/NavBar';
import LoginPage from './pages/LoginPage';
import Scheduler from './components/Scheduler';
import Footer from './pages/footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Footer/>

        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="login" element={<LoginPage/>}/>
        {/* <Route path="scheduler" element={<Scheduler/>}/> */}
     
        </Routes>
    </div>
  );
}

export default App;
