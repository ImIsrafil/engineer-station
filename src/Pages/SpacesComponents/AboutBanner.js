import React from 'react'
import engineerWorkingImg from '../../assets/engineer-working.jpg';
import ButtonPrimary from '../Shared/ButtonPrimary';

const AboutBanner = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
            <div className='flex-1 flex justify-center'>
                <img src={engineerWorkingImg} class="max-w-xs lg:max-w-sm rounded-lg shadow-2xl" alt='' />
            </div>
            <div className='flex-1 text-center lg:text-left'>
            <h1 class="text-5xl font-bold">We Values Quality Service And Get Customers Trust</h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <ButtonPrimary>Learn More</ButtonPrimary>
            </div>
        </div>
    </div>
  )
}

export default AboutBanner
