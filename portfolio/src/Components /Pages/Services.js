import React from 'react'
import {service_data } from '../Data/Services_Data'
import '../../Styles/Services.css'

const Services = () => {

  return (
    <div>
      <h1 className='service-h1'>SERVICES</h1>
{service_data.map((service)=>{
  return(<div className={service.class}>
  <h2 className='service-h2'>{service.name}</h2>
  <p className='service-p'>{service.description}</p>
  </div>)
})}
    </div>
  )
}

export default Services;