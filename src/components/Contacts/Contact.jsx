import React from 'react';
import Title from '../Titles/Title';
import SignupForm from '../ContactForm/ContactForm';
import Address from '../ContactAddress/ContactAddress';
import '../Contacts/Contacts.css'


const Contacts = () => {
    return ( 
        <section className="contact-section" id='contact'>
            <Title title='Contacts' />

            <div className='contacts-container'>

                <div className="contacts-left">
                    <Address />
                </div>    
                    
                <div className='form-fields'>  
                    <SignupForm />
                </div>
            </div>
        </section>
     );
}
 
export default Contacts;