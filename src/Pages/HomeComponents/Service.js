import React from "react";
import ButtonPrimary from "../Shared/ButtonPrimary";

const Service = ({ service, setQuickService }) => {
  const { name, img, price, desc, durations } = service;
  return (
    <div className="card max-w-md h-60 mx-auto shadow-xl image-full">
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div className="p-5 z-20 text-white">
        <h2 className="card-title text-secondary">{name}</h2>
        <p>{desc}</p>
        <p className="text-xs">It will take <span className="text-secondary">{durations}</span> Min (Estimated)</p>
        <p className="font-bold text-sm">$${price}</p>
        <div className="card-actions justify-end">
        <label htmlFor="booking-modal" onClick={() => setQuickService(service)} className="btn btn-primary shadow-lg border-0 bg-gradient-to-r from-primary to-secondary">Book Service</label>
        </div>
      </div>
    </div>
  );
};

export default Service;
