import React, { useState } from "react";
import './FAQ.css';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: "What is Yoga?", answer: "Yoga is an ancient practice of physical and mental discipline." },
    { question: "What are the benefits of Yoga?", answer: "Yoga improves flexibility, strength, and mental clarity." },
    { question: "How often should I practice Yoga?", answer: "For best results, practice 3-4 times a week." },
    { question: "Can beginners do Yoga?", answer: "Yes, Yoga is for all levels, and there are beginner-friendly classes." },
    { question: "What should I wear to a Yoga class?", answer: "Wear comfortable, stretchy clothes that allow movement." },
    { question: "Do I need any equipment for Yoga?", answer: "A mat is recommended, but other props are optional." },
    { question: "Is Yoga good for stress?", answer: "Yes, Yoga can help reduce stress through relaxation techniques." },
    { question: "How long is a typical Yoga session?", answer: "Yoga sessions typically last 45-60 minutes." },
    { question: "Can Yoga help with weight loss?", answer: "Yes, Yoga can help with weight loss through physical activity and mindful eating." },
    { question: "Can I do Yoga during pregnancy?", answer: "Always consult with your doctor, but many Yoga classes are safe for pregnancy." },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the active index
  };

  return (
    <div id='FAQ'  className="faq-container">
      <h2 className="faq-header">Frequently Asked Questions</h2>
      <div className="faq-grid">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleAnswer(index)}>
              {faq.question}
              <span className="faq-icon">{activeIndex === index ? "-" : "+"}</span>
            </button>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
