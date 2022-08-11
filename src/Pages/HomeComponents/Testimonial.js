import React from "react";
import people1Img from "../../assets/people1.png";
import people2Img from "../../assets/people2.png";
import people3Img from "../../assets/people3.png";
import quoteImg from "../../assets/icons/quote.svg";
import Review from "./Review";

const reviews = [
  {
    name: "SS. Arish",
    img: people1Img,
    city: "Dhaka, BD",
    comment:
      "Professionals are Experts to their job. I alwas get best service from EngDoc. They have digtal technology to take care of customars need and works with very functional way",
  },
  {
    name: "Dianna",
    img: people2Img,
    city: "Dhaka, BD",
    comment:
      "Professionals are Experts to their job. I alwas get best service from EngDoc. They have digtal technology to take care of customars need and works with very functional way",
  },
  {
    name: "Karolina",
    img: people3Img,
    city: "Dhaka, BD",
    comment:
      "Professionals are Experts to their job. I alwas get best service from EngDoc. They have digtal technology to take care of customars need and works with very functional way",
  },
];

const Testimonial = () => {
  return (
    <div className="max-w-screen-2xl mx-auto my-28">
      <div className="text-center">
        <h3 className="text-4xl font-bold uppercase text-secondary py-5">
          Testimonial
        </h3>
      </div>
      <div className="px-8 py-8 flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="text-center lg:text-left">
          <p className="text-xs font-bold text-accent pb-4">
            We always want to see our customers smile
          </p>
          <h1 className="text-3xl font-bold text-accent">
            What Our Customers Say
          </h1>
        </div>
        <img className="w-40 lg:w-48" src={quoteImg} alt="" />
      </div>
      <div className="px-8 grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20">
        {reviews.map((review, index) => (
          <Review key={index} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
