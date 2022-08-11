import { format } from 'date-fns'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import BookingModal from './BookingModal';
import Space from './Space';

const AvailableSpaces = ({date}) => {
  const [spaces, setSpaces] = useState([]);
  const [service, setService] = useState(null);

  useEffect(() => {
    fetch('./spaces.json')
    .then(res => res.json())
    .then(data => setSpaces(data));
  })

  return (
    <div className='max-w-screen-2xl mx-auto py-20'>
      <h2 className='text-center font-bold text-3xl text-secondary'>Available Spaces On {date?format(date, 'PP'): ''}</h2>
      <div className='mt-10 px-8 grid grid-cols-1 lg:grid-cols-3 gap-5'>
        {
          spaces.map((space, index) => <Space key={index} setService={setService} space={space} />)
        }
      </div>
      {
        service && <BookingModal service={service} data={date} ></BookingModal>
      }
    </div>
  )
}

export default AvailableSpaces
