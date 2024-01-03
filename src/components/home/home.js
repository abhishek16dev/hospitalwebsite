import React from "react";
import "./home.css";
import doctor from "../../assets/doctor.png"
import doctorwithbg from "../../assets/doctorwithBG.png"
import rectangle from "../../assets/Rectangle.png"
import frame from "../../assets/Framebg.png"

const Home = () => {
  return (
    <>
      <div className="doctorimgcontainer">
        <img src={doctorwithbg} alt="" className="doctor" />
        <img src={rectangle} alt="" className="rectangle" />
        <img src={doctor} alt="" className="doctoronly" />
        <img src={frame} alt="" className="frame" />
      </div>

      <span className="doctorText">
        <p className="smallText">Caring for Life</p>
        <p className="largeText">Leading the Way
          in Medical Excellence</p>

          <button className="ourservices">
            <p className="btntext">Our Services</p></button>
      </span>
    </>
  );



};

export default Home;
