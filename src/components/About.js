import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="content-container">
        <h2 data-aos="fade-up">Who Am I?</h2>
        <p data-aos="fade-up" data-aos-delay="200">
          I am a MERN Stack web developer specialized in ReactJS. Plus, I also
          know React Native front-end development with Expo. Programming is my
          passion, that's the reason I am enjoying it at the core of my
          academic career. Additionally, I like to play PC games and read
          story-type books in my leisure time, which is kind of fun and
          relaxing!
        </p>
      </div>
    </section>
  );
};

export default About;
