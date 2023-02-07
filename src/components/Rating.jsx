import React, { useState } from "react";
import "./Rating.css";
import { AiFillStar } from "react-icons/ai";
const Rating = () => {
  const [rating, setRating] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const ratingHandle = (rate) => {
    setRating(rate);
  };
  const handleSubmit = () => {
    if (rating) {
      setIsSubmitted(true);
    }
  };
  return isSubmitted ? (
    <div className="thank-you-rating">
      <img
        src="https://images.unsplash.com/photo-1526614180703-827d23e7c8f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        alt=""
        width={100}
      />
      <p className="selected-rating">You selected {rating} out of 5</p>
      <h1 className="thank-you-title">Thank you!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, dolore?
      </p>
    </div>
  ) : (
    <div className="rating">
      <AiFillStar color="orange" className="star" />
      <h1 className="title">How did we do?</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque saepe sit
        voluptas alias, molestias ducimus!
      </p>

      <div className="btn-group">
        {[1, 2, 3, 4, 5].map((el) => (
          <button onClick={() => ratingHandle(el)}>{el}</button>
        ))}
      </div>
      <button onClick={handleSubmit} className="submit-btn">
        Submit
      </button>
    </div>
  );
};

export default Rating;
