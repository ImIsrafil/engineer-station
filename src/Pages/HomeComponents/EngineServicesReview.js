import React from "react";
import engineImg from "../../assets/engine.jpg";
import ButtonPrimary from "../Shared/ButtonPrimary";

const EngineServicesReview = () => {
  return (
    <div className="hero min-h-screen bg-gradient-to-r from-primary to-secondary">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1 flex justify-center">
          <img src={engineImg} className="max-w-xs lg:max-w-sm rounded-lg shadow-2xl" alt="" />
        </div>
        <div className="flex-1 text-center lg:text-right">
          <h1 className="text-5xl font-bold">
            Service Your Cars Heart (Engine) by a Expert
          </h1>
          <p className="py-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod odio
            ab architecto, doloremque dicta hic laboriosam eligendi repellendus
            assumenda necessitatibus.
          </p>

          <ButtonPrimary>Get Service</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default EngineServicesReview;
