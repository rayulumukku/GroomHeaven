import React from 'react';
import './index.css';

const reviews = [
  {
    name: 'Dasaradha',
    stars: 3,
    text: 'Costly compared to other barbershops with better haircuts.'
  },
  {
    name: 'Rayulu',
    stars: 4,
    text: 'Staff were friendly, but I had to wait longer than expected.'
  },
  {
    name: 'Rama',
    stars: 5,
    text: 'Amazing ambiance and clean tools. Loved the experience!'
  }
];

const Reviews = () => (
  <section className="reviews-section">
    <h2>Customer Reviews</h2>
    <div className="reviews-grid">
      {reviews.map((review, index) => (
        <div className="review-card" key={index}>
          <div className="stars">
            {'★'.repeat(review.stars)}{'☆'.repeat(5 - review.stars)}
          </div>
          <p className="review-text">"{review.text}"</p>
          <div className="reviewer">— {review.name}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Reviews;
