import React from "react";
import { DayPicker } from "react-day-picker";
import 'react-day-picker/dist/style.css';
import ButtonPrimary from "../Shared/ButtonPrimary";

const SpacesDateBanner = ({date, setDate}) => {
    
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col-reverse lg:flex-row">
        <div className="flex-1 flex justify-center">
        <DayPicker
          mode="single"
          selected={date}
          onSelect={setDate}
          
        />
        </div>
        <div className="flex-1 text-center lg:text-rigth">
          <h1 class="text-5xl font-bold text-accent">Get A Spaces From Availables To Service Your Trasport Mechine</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <ButtonPrimary>Get Spaces</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default SpacesDateBanner;
