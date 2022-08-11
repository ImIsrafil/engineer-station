import React from "react";

const Review = ({ review }) => {
  const { name, img, city, comment } = review;
  return (
    <div className="max-w-sm text-center">
      <div className="flex items-center gap-6 text-left">
        <div className="avatar">
          <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img} alt="" />
          </div>
        </div>
        <div>
          <h4 className="text-xl font-bold text-secondary">{name}</h4>
          <h5 className="text-sm font-semibold text-accent">{city}</h5>
        </div>
      </div>
      <div className="mt-5">
        <p className="text-xs font-bold text-accent">{comment}</p>
      </div>
    </div>
  );
};

export default Review;
