import React from "react";

const Space = ({ space, setService }) => {
  const { name, img, spaces } = space;
  return (
    <div className="card max-w-xs lg:max-w-sm mx-auto bg-base-100 shadow-xl image-full">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="p-4 z-20">
        <h2 className="card-title text-secondary">{name}</h2>
        <p className="text-primary">If a dog chews shoes whose shoes does he choose?</p>
        <p className="text-secondary">Available Spaces <span className="font-bold text-primary">{spaces}</span></p>
        <div className="card-actions justify-end">
          <label htmlFor="booking-modal" onClick={() => setService(space)} className="btn btn-primary">Book Space</label>
        </div>
      </div>
    </div>
  );
};

export default Space;
