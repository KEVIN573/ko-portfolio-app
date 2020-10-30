import React from 'react';
import Title from '../Titles/Title';
import SignupForm from '../ContactForm/ContactForm';
import Address from '../ContactAddress/ContactAddress';
import '../Contacts/Contacts.css';

const Contacts = () => {
  const aboutText =
    'Feel free to drop me a line! I will get back to you within 24 hours. ';
  return (
    <section className='section contact-section' id='contact'>
      <Title
        smallTitle='contact'
        bigTitle='Get in Touch'
        titleText={aboutText}
      />

      <div className='contacts-container'>
        <div className='contacts-left'>
          <Address />
        </div>

        <div className='form-fields'>
          <SignupForm />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
