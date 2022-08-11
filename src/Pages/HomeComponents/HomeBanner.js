import React from "react";
import bgImg from "../../assets/bg.jpg";
import ButtonPrimary from "../Shared/ButtonPrimary";

const HomeBanner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        backgrountPosition: 'center',
        backgroundSize: 'cover'
      }}
      className="hero relative  min-h-screen bg-base-200 after:content-[''] after:h-full after:w-full after:absolute after:top-0 after:left-0 after:bg-[rgba(0,0,0,0.5)] after:block -z-30">
      <div className="hero-content text-center z-10">
        <div className="max-w-md  z-30">
          <h1 className="text-5xl font-bold text-secondary">We Are Here For Take Care of Your Car and Engine</h1>
          <p className="py-6 text-gray-100">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <ButtonPrimary>Get Started</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
