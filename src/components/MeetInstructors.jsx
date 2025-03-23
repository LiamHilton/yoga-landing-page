import React from 'react';
import './MeetInstructors.css';
import instructor1 from "../assets/instructor-1.jpg";
import instructor2 from "../assets/instructor-2.jpg";
import instructor3 from "../assets/instructor-3.jpg";
import instructor4 from "../assets/instructor-4.jpg";
import instructor5 from "../assets/instructor-5.jpg";
import instructor6 from "../assets/instructor-6.jpg";



const instructors = [
  { id: 1, name: 'John Doe',image: instructor6, specialties: 'Vinyasa, Hatha',
  yearsExperience: 8,
  description: "Jane has been practicing yoga for over 10 years and specializes in Hatha and Vinyasa yoga. She emphasizes mindfulness in every session.",
}, 
  { id: 2, name: 'Jane Smith', image: instructor1, specialties: 'Ashtanga, Meditation',
  yearsExperience: 5,
  description: "John has a deep passion for Vinyasa yoga and loves to help others connect their breath with movement. He has been teaching for 5 years.",
}, 
  { id: 3, name: 'Alice Brown', image: instructor2, specialties: 'Iyengar, Restorative',
  yearsExperience: 5,
  description: "John has a deep passion for Vinyasa yoga and loves to help others connect their breath with movement. He has been teaching for 5 years.",
}, 
  { id: 4, name: 'Bob White', image: instructor3 , specialties: 'Power Yoga, Flexibility' ,yearsExperience: 5,
  description: "John has a deep passion for Vinyasa yoga and loves to help others connect their breath with movement. He has been teaching for 5 years.",
},
  { id: 5, name: 'Lisa Green', image:instructor4 , specialties: 'Kundalini, Breathing ',
  yearsExperience: 5,
  description: "John has a deep passion for Vinyasa yoga and loves to help others connect their breath with movement. He has been teaching for 5 years.",
},
  { id: 6, name: 'Tom Black', image:instructor5 , specialties: 'Yoga Therapy, Strength',
  yearsExperience: 5,
  description: "John has a deep passion for Vinyasa yoga and loves to help others connect their breath with movement. He has been teaching for 5 years.",
},
];

const MeetInstructors = () => {
  return (
    <section id='instructors' className="instructors-section">
    <h2>Meet Our Instructors</h2>
    <div className="instructors-container">
      {instructors.map((instructor) => (
        <div key={instructor.id} className="instructor-card">
          <img src={instructor.image} alt={instructor.name} className="instructor-image" />
          <div className="instructor-details">
            <h3>{instructor.name}</h3>
            <p> <span>{instructor.specialties}</span></p>
            <p><strong>Years of Experience:</strong> {instructor.yearsExperience}</p>
            <p>{instructor.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);
};
export default MeetInstructors;
