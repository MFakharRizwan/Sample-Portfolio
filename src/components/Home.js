import React from "react";
import "./Home.css";
import profile from "../assets/profile.jpg";
 // Replace with the actual path to your profile picture

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="profile-container">
        <img src={profile} alt="Profile" className="profile-pic" />
      </div>
      <h1>MERN Stack Developer</h1>
      <p>
        Developing powerful web solutions with a focus on performance and scalability.
      </p>
    </section>
  );
};

export default Home;

