import React from 'react'
import './Services.css'
import bulb from '../../assets/bulb.jpg'
import Services_Data from '../../assets/services_data'
import arrow from '../../assets/arrow.svg'

const Services = () => {
  return (
    <div className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={bulb} alt="Bulb" style={{width: "200px", height: 'auto' }} />
      </div>
      <div className="services-container">
        {Services_Data.map((service,index) => {
            return <div key={index} className="services-format">
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
                <div className="services-readmore">
                    <p>Read More</p>
                    <img src={arrow} alt=""loading='lazy' style={{ width: "200px", height: "50px"  }} />
                </div>
            </div>
        })}
      </div>
    </div>
  );
};

export default Services
