import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import ConfirmationModal from "./ConfirmationModal/ConfirmationModal";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import "./ContactForm.css";

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [modalOpen, setModalOpen] = useState(false); // Modal state


  const onSubmit = (data) => {
    const serviceID = "service_so2nd6q"; 
    const templateID = "template_drtkhz4"; 
    const publicKey = "UJo7S4_yYQom0gxLd"; 

  const emailData = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    emailjs.send(serviceID, templateID, emailData, publicKey)
      .then((response) => {
        console.log("Message sent successfully!", response);
        setModalOpen(true); // Open the confirmation modal

        reset(); // Clears the form
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        alert("Failed to send message. Please try again.");
      });
  };

    const closeModal = () => setModalOpen(false); // Close modal


  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <div className="contact-header">
            <h2>Get in touch with us today</h2>
            <p>We’d love to hear from you. Reach out to us using the form below!</p>
          </div>

          <div className="contact-box">
            <a href="mailto:contact@yourbusiness.com" className="contact-link">
              <FaEnvelope size={30} />
              <p>contact@yourbusiness.com</p>
            </a>
          </div>
          <div className="contact-box">
            <a href="https://www.google.com/maps?q=Your+Business+Location" target="_blank" rel="noopener noreferrer" className="contact-link">
              <FaMapMarkerAlt size={30} />
              <p>Get Directions</p>
            </a>
          </div>
          <div className="contact-box">
            <a href="tel:+1234567890" className="contact-link">
              <FaPhone size={30} />
              <p>+123-456-7890</p>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
              placeholder="Your Name"
              className={errors.name ? "input-error" : ""}
       
            />
            {errors.name && <span className="error">{errors.name.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required", pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                message: "Please enter a valid email"
              },
              minLength: {
                value: 5,
                message: "Email should be at least 5 characters long"
              },
              maxLength: {
                value: 30,
                message: "Email should not exceed 100 characters"
              }
             })}
              placeholder="Your Email"
              className={errors.email ? "input-error" : ""} 
            />
            {errors.email && <span className="error">{errors.email.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              {...register("message", { required: "Message is required" })}
              placeholder="Your Message"
              className={errors.message ? "input-error" : ""} 
            />
            {errors.message && <span className="error">{errors.message.message}</span>}
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>

      <ConfirmationModal isOpen={modalOpen} close={closeModal} />

    </section>
  );
};

export default ContactForm;
