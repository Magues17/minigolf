import React from "react";
import "./About.css";
import about_img from "../../assets/ssa/community.png";
import play_icon from "../../assets/edusity/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        {/* <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        /> */}
      </div>
      <div className="about-right">
        <h3> ABOUT Us </h3>
        <h2> Serving The Community</h2>
        
<p>Silver Springs Heating & Cooling is a veteran-owned and operated local business, founded with the values of integrity, service, and commitment. Originally established in Vallejo, California as GCE HVAC Emergency Prevention Services, we’ve recently expanded to serve Silver Springs and surrounding areas. Our company is proudly owned and operated by former U.S. Marine John Medlin, who brings a strong sense of duty and dedication to ensuring the comfort and satisfaction of every client.</p>

<p><strong>Our Mission</strong></p>
<p><em>Low Cost, High Quality:</em> At Silver Springs Heating & Cooling, we believe in providing top-quality parts and services at an affordable price. We are committed to delivering exceptional value without compromising on quality.</p>

<p><em>Personable Customer Service:</em> We treat each client like family, providing fast, reliable service with peace of mind guarantees. Our goal is to make every customer feel confident and comfortable with their heating and cooling systems.</p>

<p><em>Expert Technicians:</em> Our team of skilled technicians is trained to service all makes and models of heating and air conditioning equipment, following manufacturers’ specifications and industry standards. We also prioritize educating our clients about their systems, empowering them to make informed decisions about maintenance and upgrades.</p>

<p>Whether it’s a routine maintenance check or an emergency repair, Silver Springs Heating & Cooling is dedicated to delivering reliable, high-quality HVAC solutions that ensure the comfort, safety, and satisfaction of our community.</p>

      </div>
    </div>
  );
};

export default About;
