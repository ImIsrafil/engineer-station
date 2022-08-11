import React from 'react'

const ContactUs = () => {
  return (
    <div className='py-20 px-8 mt-20 bg-gradient-to-r from-primary to-secondary'>
      <div className='max-w-xs md:max-w-md mx-auto'>
        <h4 className='text-3xl uppercase font-bold text-accent text-center'>Contact Us</h4>
        <form className='mt-10 flex flex-col gap-4' action="">
        <input type="email" placeholder="Your Email Address" className="input input-bordered w-full" />
        <input type="text" placeholder="Subject" className="input input-bordered w-full" />
        <textarea className="textarea textarea-bordered w-full" placeholder="Messages"></textarea>
        <input type="submit" value='Submit' className="btn btn-primary shadow-lg border-0 bg-gradient-to-r from-primary to-secondary  input input-bordered w-full" />
        </form>
      </div>
    </div>
  )
}

export default ContactUs
