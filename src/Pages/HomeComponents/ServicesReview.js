import React from "react";
import serviceImg from "../../assets/service.jpg";
import ButtonPrimary from "../Shared/ButtonPrimary";

const ServicesReview = () => {
  return (
    <div className="hero min-h-screen my-20 lg:my-0">
      <div className="hero-content flex-col lg:flex-row">
        <div className="flex-1 flex justify-center">
          <img
            src={serviceImg}
            className="max-w-xs md:max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
        </div>
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl font-bold">
            We Provide Master Class Services To Your Mechine
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>

          <ButtonPrimary>Get Service</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default ServicesReview;
