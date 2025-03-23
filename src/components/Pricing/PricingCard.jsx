import React from "react";

const PricingCard = ({ title, price, features, isPopular }) => {
  return (
    <div className={`pricing-card ${isPopular ? "popular" : ""}`}>
      <h3>{title}</h3>
      <p className="price">{price}</p>

      {/* Feature List */}
      <ul className="features">
        {features.map((feature, index) => (
          <li key={index}> ✔️ {feature}</li>
        ))}
      </ul>

      <button className="choose-plan">Choose Plan</button>
    </div>
  );
};

export default PricingCard;
