import React from 'react'
import clockIcon from '../../assets/icons/clock.svg';
import markerIcon from '../../assets/icons/marker.svg';
import phoneIcon from '../../assets/icons/phone.svg';
import IdentityInfo from './IdentityInfo';

const identityInfos = [
    {
        _id: 1,
        name: 'time',
        title: 'Opening hours',
        desc: '08:00 AM - 8:00 PM',
        icon: clockIcon
    },
    {
        _id: 2,
        name: 'location',
        title: 'Visit our location',
        desc: 'Manikganj 1800 Dhaka BD',
        icon: markerIcon
    },
    {
        _id: 3,
        name: 'phone',
        title: 'Contact us',
        desc: '01234567890',
        icon: phoneIcon
    }
]

const IdentityInfos = () => {
  return (
    <div className='max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-8 -mt-20'>
      {
        identityInfos.map(identityInfo => <IdentityInfo key={identityInfo._id} identityInfo={identityInfo} />)
      }
    </div>
  )
}

export default IdentityInfos
