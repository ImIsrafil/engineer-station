import React, { useState } from 'react'
import AboutBanner from './SpacesComponents/AboutBanner';
import AvailableSpaces from './SpacesComponents/AvailableSpaces';
import SpacesDateBanner from './SpacesComponents/SpacesDateBanner'

const Spaces = () => {
  const [date, setDate] = useState();
  return (
    <div>
      <SpacesDateBanner date={date} setDate={setDate}></SpacesDateBanner>
      <AvailableSpaces date={date}></AvailableSpaces>
      <AboutBanner></AboutBanner>
    </div>
  )
}

export default Spaces
