import React, { Component } from 'react';
import { FaLaptopCode, FaCogs, FaServer, FaHandsHelping } from "react-icons/fa";
import Title from '../Titles/Title';
import '../Services/Services.css'


class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
          {
            icon: <FaLaptopCode />,
            title: "WEB DEVELOPMENT",
            info: "When it comes to functional and responsive websites, I got you covered."
          },
          {
            icon: <FaCogs />,
            title: "WEB MAINTENANCE",
            info: "In a position to doctor your website with the latest technologies."
          },
          {
            icon: <FaServer />,
            title: "BACKEND DEVELOPMENT",
            info: "I'm also specialized in back-end architecture of websites."
          },
          {
            icon: <FaHandsHelping />,
            title: "FREELANCER",
            info: "I do freelancing, helping small businesses grow."
          }
        ]
    };

  }
    
    render() { 
        return (  
            <section className="services-container" id='services'>
                <Title title='Services' />
                <div className="services-center">

                    {this.state.services.map(serviceCard => {
                        return (
                          <article key={serviceCard.title} className="service">
                            <span>{serviceCard.icon}</span>
                            <h6>{serviceCard.title}</h6>
                            <p>{serviceCard.info}</p>
                          </article>
                        );
                    })}

                </div>
            </section>
        );
    }
}
 
export default Services;
