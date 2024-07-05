import React, { useState } from "react";
import "./DiscriptionBox.css"
const ProductDescriptionBox = ({ product }) => {
  const { description, rating, reviews } = product;
  const [showDescription, setShowDescription] = useState(true);

  const handleDescriptionClick = () => {
    setShowDescription(true);
  };

  const handleReviewClick = () => {
    setShowDescription(false);
  };

  return (
    <div className="description-box">
      <div className="button-container">
        {" "}
        <div className="tab" onClick={handleDescriptionClick}>
          Description
        </div>
        <div className="tab" onClick={handleReviewClick}>
          Review
        </div>
      </div>
      {showDescription && <div className="rating-info">Rating: {rating}</div>}

      <div className="content">{showDescription? description:''}</div>
      <div className="content"> {!showDescription && reviews.map((review, index) => (
              <div key={index} className="review">
                <div className="user-box">
                <i class="fa-regular fa-user"></i>   
                <div className="user">{review.user}</div>
                </div>
          
                <div className="comment">{review.comment}</div>
              </div>
            ))}</div>

    </div>
  );
};

export default ProductDescriptionBox;
