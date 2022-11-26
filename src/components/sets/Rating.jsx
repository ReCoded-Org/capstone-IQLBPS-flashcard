import { useState } from 'react';

const Rating = ({ setRatingValue }) => {
  const [rating, setRating] = useState(setRatingValue);
  const [hover, setHover] = useState(0);
  const stars = [...Array(5)].map((star, idx) => {
    const ratingValue = idx + 1;
    return (
      <button
        type="button"
        key={ratingValue}
        className={
          ratingValue <= (hover || rating) ? 'text-yellow-500' : 'text-gray-400'
        }
        onClick={() => setRating(ratingValue)}
        onMouseEnter={() => setHover(ratingValue)}
        onMouseLeave={() => setHover(rating)}
      >
        <span className="text-2xl">&#9733;</span>
      </button>
    );
  });

  return <div className="cursor-pointer bg-transparent">{stars}</div>;
};
export default Rating;
