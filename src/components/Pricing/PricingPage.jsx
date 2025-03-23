import React from "react";
import PricingCard from "./PricingCard"; // Ensure correct path
import './Pricing.css';

const pricingPlans = [
  {
    title: "Trial Plan",
    price: "Free",
    features: ["Access to all classes", "One-week duration", "No commitment"],
    // isPopular: false,
  },
  {
    title: "Weekly Plan",
    price: "$15/week",
    features: ["Unlimited weekly access", "Flexible schedule", "Cancel anytime"],
    // isPopular: false,
  },
  {
    title: "Monthly Plan",
    price: "$50/month",
    features: ["Full access to all classes", "Priority booking", "Exclusive workshops"],
    // isPopular: true,
  },
  {
    title: "Annual Plan",
    price: "$500/year",
    features: ["Best value", "VIP support", "One free guest pass per month"],
    // isPopular: false,
  },
];

const PricingPage = () => {
  return (
    <div id="pricing" className="pricing-container">
      <h2>Our Pricing Plans</h2>
      <p>Choose the plan that works best for you.</p>

      <div className="pricing-grid">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
