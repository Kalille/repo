import React, { useEffect } from 'react';
import "./NavBarStyles.css";
import Home from "../pages/Home";
import { NavLink } from "react-router-dom";


const NavBar = () => {
  useEffect(() => {
    fetch("http://127.0.0.1:3001/api/users")
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  }, []);

  return (


<ul className="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist" style={{'--bs-nav-link-color': 'var(--bs-white)', '--bs-nav-pills-link-active-color': 'var(--bs-primary)', '--bs-nav-pills-link-active-bg': 'var(--bs-white)'}}>
      <li className="nav-item" role="presentation">
        <button className="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Sign Up / Sign In</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Profile</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Schedule Appointment</button>
      </li>
    </ul>
  );
};

export default NavBar;



