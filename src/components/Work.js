import React from 'react'

import PickMeals from "../Assets/diet.png";
import Exercise from "../Assets/exercise.png";
import Tracking from "../Assets/track.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Diet Recommender",
      text: "Get personalized meal suggestions based on your nutritional needs and health goals, powered by our AI-driven diet tool.",
    },
    {
      image: Exercise,
      title: "Exercise Recommender",
      text: "Discover tailored workout routines designed to match your fitness goals, pace, and preferences with our smart exercise recommender.",
    },
    {
      image: Tracking,
      title: "Progress Tracker",
      text: "Monitor your fitness journey by tracking changes in weight, muscle mass, and other key metrics to stay motivated and on target.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Tools</p>
        <h1 className="primary-heading">Tools We Provide</h1>
        <p className="primary-text">
        Our tools help you stay on track with personalized diet plans, tailored workout recommendations, and a progress tracker to monitor your fitness journey.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work