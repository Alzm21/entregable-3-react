import React from 'react'
import './styles/LocationData.css'

const LocationData = ({locations}) => {

  console.log(locations)
  return (
    <section className='location'>
      <h2 className='location_name'> {locations?.name} </h2>
      <ul className='location_list'>
        <li className='location_item'><span>Type: </span><span> {locations?.type} </span></li>
        <li className='location_item'><span>Dimension: </span> {locations?.dimension } <span></span></li>
        <li className='location_item'><span>Population: </span><span> {locations?.residents.length} </span></li>
      </ul>
    </section>
  )
}

export default LocationData