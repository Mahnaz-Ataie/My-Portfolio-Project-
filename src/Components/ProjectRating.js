import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./ProjectRating.css";
export default function Rating() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className="rating">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <lable>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(currentRating)}
            />
            <FaStar    
              className="star"
              size={30}
              color={ratingValue <= (hover || rating) ? "#ffc107" : "gray"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </lable>
        );
      })}
      {/* <p>{ratingValue}</p>
      <p className="last-p">your rating is {rating}</p> */}
    </div>
  );
}
