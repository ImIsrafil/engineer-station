import React from 'react';
import carWashingImg from '../../assets/car-washing.jpg';
import carWhileChangingImg from '../../assets/car-while-changing.jpg';
import carPolishingImg from '../../assets/car-polishing.jpg';
import Service from './Service';
import { useState } from 'react';
import BookingModal from '../SpacesComponents/BookingModal';

const services = [
    {
        _id: 1,
        name: 'Car Washing',
        img: carWashingImg,
        desc: 'Wash your car by a caring hand',
        price: 10,
        durations: 30,
    },
    {
        _id: 2,
        name: 'Car Polishing',
        img: carPolishingImg,
        desc: 'Polish your car by a caring hand',
        price: 30,
        durations: 30,
    },
    {
        _id: 3,
        name: 'Car While Changing',
        img: carWhileChangingImg,
        desc: 'Change your car while by a expert',
        price: 10,
        durations: 30,
    }
]

const Services = () => {
  const [quickService, setQuickService] = useState(null);
  return (
    <div className='max-w-screen-2xl mx-auto my-32'>
      <div className='py-10'>
        <h3 className='text-center font-bold text-4xl capitalize text-accent'>Our quick services</h3>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-3 px-8'>
        {
            services.map(service => <Service setQuickService={setQuickService} key={service._id} service={service} />)
        }
      </div>
      {
        quickService && <BookingModal service={quickService}></BookingModal>
      }
    </div>
  )
}

export default Services
