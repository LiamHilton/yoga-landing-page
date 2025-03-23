import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2 className="cta-header">Ready to Start Your Journey?</h2>
        <p className="cta-paragraph">
          Join us today to experience the transformative power of yoga. Discover your inner peace and strength with our expert instructors.
        </p>
        <a href="/classes" className="cta-button">Get Started</a>
      </div>
    </section>
  );
};

export default CTA;
