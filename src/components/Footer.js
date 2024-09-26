import React from 'react'

import Logo from "../Assets/FitBlendLogo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>About</span>
          <span>Contact</span>
          <span>Share</span>
          <span>Careers</span>
          <span>Testimonials</span>
          <span>Tools</span>
        </div>
        <div className="footer-section-columns">
          <span>123-456-7890</span>
          <span>WellnessWave@gmail.com</span>
          <span>ExerciseWWave@gmail.com</span>
          <span>contactWWave@gmail.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};
export default Footer