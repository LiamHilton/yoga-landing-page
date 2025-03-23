import React from 'react';
import './Newsletter.css'

const NewsletterSection = () => {
  return (
    <div className="newsletter-container">
      <div className="newsletter-content">
        <h2 className="newsletter-header">Join Our Newsletter</h2>
        <p className="newsletter-paragraph">
          Stay updated with the latest news and offers. <br />Subscribe today for more!
        </p>
        <form 
          action="mailto:business@example.com" 
          method="POST" 
          enctype="multipart/form-data"
          className="newsletter-form"
        >
          <input 
            type="email" 
            name="email" 
            placeholder="Enter your email" 
            className="newsletter-input" 
            required
          />
          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSection;
