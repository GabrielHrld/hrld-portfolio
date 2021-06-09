import React from 'react';

import FormContainer from './Form/FormContainer.js';

import '../styles/components/ContactContainer.scss';

const ContactContainer = () => {
  return (
    <div className="contact-wrapper" id="contact">
      <div className="title">
        <p>Contacto</p>
      </div>
      <FormContainer />
    </div>
  );
};

export default ContactContainer;
