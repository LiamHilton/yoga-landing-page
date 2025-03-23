import React, { useState } from "react";
import './ConfirmationModal.css'
import { motion } from "framer-motion";

const ConfirmationModal = ({ isOpen, close }) => {
  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal">
        <motion.div
        className="modal"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
          <h2>Message sent successfully!!</h2>
          <p>We will get back to you soon.</p>
          <button onClick={close}>Close</button>
          </motion.div>
        </div>
      </div>
    )
  );
};

export default ConfirmationModal;
