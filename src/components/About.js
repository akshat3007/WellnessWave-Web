import React from 'react'

import AboutBackground from "../Assets/about-us-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Nutrition Tailored for You: AI-Driven Diet Recommendations
        </h1>
        <p className="primary-text">
        Our AI-powered diet tool analyzes the nutritional values you provide and recommends a personalized meal plan tailored to your health goals. 
        Whether you’re looking to lose weight, build muscle, or maintain a balanced diet, we ensure that every recommendation aligns with your unique nutritional needs.
        </p>

        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <a href="https://wellnesswave1.streamlit.app/" target="_blank">
            <button  className="watch-video-button">
                <BsFillPlayCircleFill /> Try It
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About