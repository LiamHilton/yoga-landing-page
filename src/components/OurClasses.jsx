import React, { useState } from 'react';
import './OurClasses.css';

import class1 from '../assets/Class1.jpg';
import class2 from '../assets/Class2.jpg';
import class3 from '../assets/Class3.jpg';
import class4 from '../assets/Class4.jpg';
import class5 from '../assets/Class5.jpg';




// Images for different yoga types (add your actual images to the assets folder)
// 

const OurClasses = () => {
  const [selectedClass, setSelectedClass] = useState('vinyasa'); // Default class is vinyasa

  // Descriptions for each class type
  const classDescriptions = {
    vinyasa: {
      image: class1,
      description: 'A dynamic flow of yoga postures linked with breath, improving strength and flexibility.',
    },
    hatha: {
      image: class2,
      description: 'A slower, more deliberate style of yoga, focusing on basic poses and breathing.',
    },
    ashtanga: {
      image: class3,
      description: 'A rigorous form of yoga that follows a specific sequence of postures and breath control.',
    },
    bikram: {
      image: class4,
      description: 'A form of hot yoga practiced in a room heated to 105°F (40.6°C) with 40% humidity.',
    },
    iyengar: {
      image: class5,
      description: 'A precise, alignment-based yoga that uses props such as belts, blocks, and blankets.',
    },
  };

  return (
    <div  id="classes"
    className="our-classes">
      {/* Header Section */}
      <header className="classes-header">
        <h1>Our Classes</h1>
        <p>Explore the different types of yoga we offer, each designed to support your journey.</p>
      </header>

      {/* setSelectedClass(classType) is a function that updates the 
      selectedClass state with the current yoga class that was clicked. */}

      {/* Yoga Type Buttons */}
      <div className="classes-buttons">
        {Object.keys(classDescriptions).map((classType) => (
          <button
            key={classType}
            className={`class-btn ${selectedClass === classType ? 'active' : ''}`}
            onClick={() => setSelectedClass(classType)}
          >
            {classType.charAt(0).toUpperCase() + classType.slice(1)} 
          </button>
        ))}
      </div>

      {/* Image and Description Section */}
      <div className="class-display">
        <img src={classDescriptions[selectedClass].image} alt={selectedClass} className="class-image" />
        <div className="class-description">
          <p>{classDescriptions[selectedClass].description}</p>
          <a href="#pricing" className="class-arrow">→</a>
        </div>
      </div>
    </div>
  );
};

export default OurClasses;
