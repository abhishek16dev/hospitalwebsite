import React from "react";
import "./navbar.css";
import call from "../../assets/call_icon.png";
import time from "../../assets/time_icon.png";
import location from "../../assets/locaiton_icon.png";
import searchicon from "../../assets/searchicon.png";

const Navbar = () => {
  return (
    <>
   
    <nav className="navbar">
      <p className="heading"> Medical</p>

      <div className="call">
        <img src={call} alt="" className="calliconimg" />
        <div className="callTextContainer">
          <p className="callText">EMERGENCY</p>
          <p className="callNumber">+91 9999999999</p>
        </div>
      </div>

      <div className="time">
        <img src={time} alt="timeiconimg" className="timeiconimg" />

        <div className="timeTextContainer">
          <p className="timeText">WORK HOUR</p>
          <p className="timeNumber">09:00 - 20:00 Everyday</p>
        </div>

      </div>

      <div className="location">

        <img src={location} alt="locationiconimg" className="locationiconimg" />
        <div className="locaionTextContainer">
          <p className="locationText">location</p>
          <p className="locationNumber">0123 gurugram, haryana</p>
        </div>
      </div>
    </nav>

    <nav className="lowerNavbar">
      <div className="textBtnContainer">
        <p className="homeText">Home</p>
        <p className="aboutusText">About Us</p>
        <p className="servicesText">Services</p>
        <p className="doctorsText">Doctors</p>
        <p className="newsText">News</p>
        <p className="contactText">Contact</p>
      </div>

      <div className="searchapp">
        <div className="search">
          <img src={searchicon} alt="search" className="searchIcon"/>
        </div>

        <button className="appointmentbtn">
          Appointment
        </button>

      </div>
    </nav>

    </>
  );
};

export default Navbar;
