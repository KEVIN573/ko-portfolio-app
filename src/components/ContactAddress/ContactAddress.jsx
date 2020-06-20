import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaRegEnvelope} from "react-icons/fa";
import '../ContactAddress/ContactAddress.css'

const Address = () => {
    return (  
        <React.Fragment>

            <div className="contact-info">
                <span><FaPhone /></span>
                <div className="info">
                    <h4>Phone : </h4>
                    <p>+254 758231661</p>
                </div>
            </div>
            
        
            <div className="contact-info">
                <span><FaMapMarkerAlt /></span>
                <div className="info">
                    <h4>Residence : </h4>
                    <p>Kenya, Kisumu</p>
                </div>
            </div>
        
            <div className="contact-info">
                <span><FaRegEnvelope /></span>
                <div className="info">
                    <h4>Email : </h4>
                    <p>kevinohkelvin932@gmail.com</p>
                </div>
            </div>

        </React.Fragment>    
    );
}
 
export default Address;