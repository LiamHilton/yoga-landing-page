import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import HeroPage from './components/HeroPage';
import OurMission from './components/OurMission';
import MeetInstructors from './components/MeetInstructors';
import CTA from './components/CTA';
import OurClasses from './components/OurClasses';
import ReviewSection from './components/ReviewSection';
import PricingPage from './components/Pricing/PricingPage';
import FAQSection from './components/FAQ/FAQSection';
import NewsletterSection from './components/NewsletterSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroPage/>
     <OurMission/>
      <MeetInstructors/>
      <ReviewSection/>
      <OurClasses/>
      <CTA/>
      <PricingPage/>
      <FAQSection/>
      <NewsletterSection/>
      <ContactForm/>
      <Footer/>
      
    </div>
  )
}

export default App