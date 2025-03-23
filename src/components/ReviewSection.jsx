import { useState } from "react";
import "./ReviewSection.css";
import image1 from '../assets/image-1.jpg'
import image2 from '../assets/image-2.jpg'
import image3 from '../assets/image-3.jpg'
import image4 from '../assets/image-1.jpg'
import image5 from '../assets/image-2.jpg'
import image6 from '../assets/image-3.jpg'


const reviews = [
  { id: 1, name: "Emily Johnson", image: image1, stars: 5, review: "Absolutely love the yoga classes! The instructors are amazing and very supportive." },
  { id: 2, name: "Michael Lee", image: image2, stars: 4, review: "A great place to find peace and balance. The sessions are refreshing and energizing!" },
  { id: 3, name: "Sophia Martinez", image:image3, stars: 5, review: "The perfect place to unwind and relax. Highly recommend the meditation classes!" },
  { id: 4, name: "Daniel Kim", image:image1, stars: 4, review: "The atmosphere is so calming, and the instructors are very professional. Love it here!" },
  { id: 5, name: "Olivia Brown", image:image2, stars: 5, review: "This place changed my life! I feel so much healthier and more relaxed." },
  { id: 6, name: "James Wilson", image: image3, stars: 5, review: "An incredible experience. I always leave feeling refreshed and motivated." },
];

const ReviewSection = () => {
  const [index, setIndex] = useState(0); // Controls which two reviews are shown

  const goToReviews = (dotIndex) => {
    setIndex(dotIndex * 2); // Jump to the selected pair
  };

  return (
    <section className="review-section">
      <h2>What Our Clients Are Saying</h2>
      <div className="review-container">
        {reviews.slice(index, index + 2).map((review) => (
          <div key={review.id} className="review-card fade-in">
            <img src={review.image} alt={review.name} className="review-img" />
            <h3>{review.name}</h3>
            <p className="stars">{"★".repeat(review.stars)}</p>
            <p className="review-text">{review.review}</p>
          </div>
        ))}
      </div>

      {/* Toggle Dots */}
      <div className="dots">
        {Array.from({ length: reviews.length / 2 }).map((_, dotIndex) => (
          <span
            key={dotIndex}
            className={`dot ${index / 2 === dotIndex ? "active" : ""}`}
            onClick={() => goToReviews(dotIndex)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
