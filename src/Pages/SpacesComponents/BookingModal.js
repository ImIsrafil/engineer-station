import React from "react";

const BookingModal = ({service, date}) => {
    const {name} = service;
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
        <label for="booking-modal" class="btn btn-sm btn-circle btn-primary shadow-lg border-0 bg-gradient-to-r from-primary to-secondary absolute right-2 top-2">✕</label>
          <h3 class="font-bold text-lg">
            {name}
          </h3>
          <form className="mt-5 flex flex-col gap-4" action="">
            <input type="text" name="name" placeholder="Enter Your Name" class="input input-bordered bg-transparent w-full" />
            <input type="email" name="email" placeholder="Enter Your Email" class="input bg-transparent input-bordered w-full" />
            <input type="text" name="phone" placeholder="Enter Your Phone" class="input bg-transparent input-bordered w-full" />
            <input type="text" name="address" placeholder="Enter Your Address" class="input bg-transparent input-bordered w-full" />
            <input type="submit" value="Submit" placeholder="Enter Your Address" class="btn btn-primary shadow-lg border-0 bg-gradient-to-r from-primary to-secondary w-full" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
