import React from 'react'
import ContactUs from './HomeComponents/ContactUs'
import EngineServicesReview from './HomeComponents/EngineServicesReview'
import HomeBanner from './HomeComponents/HomeBanner'
import IdentityInfos from './HomeComponents/IdentityInfos'
import Services from './HomeComponents/Services'
import ServicesReview from './HomeComponents/ServicesReview'
import Testimonial from './HomeComponents/Testimonial'

const Home = () => {
  return (
    <>
      <HomeBanner></HomeBanner>
      <IdentityInfos></IdentityInfos>
      <ServicesReview></ServicesReview>
      <EngineServicesReview></EngineServicesReview>
      <Services></Services>
      <Testimonial></Testimonial>
      <ContactUs></ContactUs>
    </>
  )
}

export default Home
