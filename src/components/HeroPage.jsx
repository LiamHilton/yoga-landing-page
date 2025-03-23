import React from 'react';
import './HeroPage.css';

import image2 from "../assets/image-2.jpg"
import image3 from "../assets/image-3.jpg"

import image5 from "../assets/image-5.jpg"


const scrollToSection = (id) => {
  setTimeout(() => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 50,
        behavior: "smooth",
      });
    }
  }, 500); // Delays scrolling by 500ms
};



const HeroPage = () => {
  return (
    <div className="hero-container">
    {/* First Section: Header with slogan and image */}
    <div className="hero-header">
      <div className="hero-text">
        <h1 className="hero-title">
          <strong>Awaken Your Mind</strong>, <span>Body </span>& <em>Soul</em> </h1>
        <p className="slogan">Step into a world where movement meets mindfulness. Our yoga practice is inspired by nature’s rhythm, helping you align with your breath, body, and the present moment. Let's grow together in balance and harmony.</p>
        <a className="start" href="#pricing">Get started</a>
      </div>
      {/* <div className="hero-image">
        <img src={image1} alt="Yoga Image" />
      </div> */}
    </div>
      
       {/* Second Section: Grid Layout with 3 boxes */}
      <div className="hero-grid">
        <div className="hero-grid-item ">
        <img src={image2} alt="Yoga Class 1" className="grid-image" />

       
          <h2 className="grid-header">Improved <br />Flexibility</h2>
          <button onClick={() => scrollToSection("classes")}
          
          className="cta-button1"> ➔</button>  
        </div>
        <div className="hero-grid-item">
        <img src={image3} alt="Yoga Class 2" className="grid-image" />

       
       
          <h2 className="grid-header">Packages</h2>
          <button onClick={() => scrollToSection("pricing")}
          
          className="cta-button1">➔</button>
        </div>


        <div className="hero-grid-item">
       
        <img src={image5} alt="Get Started" className="grid-image" />


        <h2 className="grid-header">Instructors</h2>
          <button onClick={() => scrollToSection("instructors")}
          
          className="cta-button1">➔</button>
        </div>
      </div>
      </div>
    
  );
};

export default HeroPage;
