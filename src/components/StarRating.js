import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StarRating = ({ totalStars, initialRating, onRatingChange }) => {
  const handleRatingChange = (selectedRating) => {
    if (onRatingChange) {
      onRatingChange(selectedRating);
    }
  };

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleRatingChange(index + 1)}
          style={{
            cursor: 'pointer',
            color: index < initialRating ? 'gold' : 'gray',
          }}
        >
          <FontAwesomeIcon icon={faStar} />
        </span>
      ))}
    </div>
  );
};

export default StarRating;
