import React from 'react'
import {service_data } from '../Data/Services_Data'
import '../../Styles/Services.css'

const Services = () => {

  return (
    <div>
      <h1 className='service-h1'>Services</h1>
{service_data.map((service)=>{
  return(<>
  <h2>{service.name}</h2>
  <p>{service.description}</p>
  </>)
})}

    </div>
  )
}

export default Services;