import React from 'react';
import './OurMission.css';
import { FaLeaf, FaSpa, FaOm } from 'react-icons/fa';



const OurMission = () => {
  return (
    <div>
      {/* Header Section */}
      <header id='mission' className="page-header">
        <h1>Why YogaFlow</h1>
        <p>We offer a unique and enriching yoga experience</p>
      </header>

      {/* Our Mission Cards Section */}
      <section className="our-mission-cards">
        <div className="card">
          <div className="card-number">01</div>
          <h3>Our Mission <FaSpa size={40} color='#D4A373'/></h3>
          <p>
            We believe in nurturing both body and mind. Our mission is to provide a safe and supportive space for all levels of yoga practitioners to grow.
          </p>
        </div>
        <div className="card">
          <div className="card-number">02</div>
          <h3>Our Values <FaLeaf size={40} color='#D4A373'/></h3>
          <p>
            We embrace diversity, inclusivity, and mindfulness. Our classes and community reflect our commitment to individual growth and well-being.
          </p>
        </div>
        <div className="card">
          <div className="card-number">03 </div>
          <h3>Our Classes  <FaOm size={40} color='#D4A373'/></h3>
          <p>
            We offer a variety of yoga classes, from beginner to advanced, with experienced instructors who cater to each individual's needs.
          </p>
        </div>
        <div>
     
        </div>
      </section>
    </div>
  );
};

export default OurMission;
