import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

import '../../styles/components/Form/FormContainer.scss';
import InputForm from './InputForm';
import { expresiones } from '../../utils/regex';

const FormContainer = () => {
  const [name, setName] = useState({ field: '', valid: null });
  const [email, setEmail] = useState({ field: '', valid: null });
  const [subject, setSubject] = useState({ field: '', valid: null });
  const [message, setMessage] = useState({ field: '', valid: null });

  const onChange = (e) => {
    setMessage({ ...message, field: e.target.value });
  };

  const validateRegex = () => {
    const regex = expresiones.max140;
    if (regex) {
      if (regex.test(message.field)) {
        setMessage({ ...message, valid: true });
      } else {
        setMessage({ ...message, valid: false });
      }
    }
  };

  return (
    <div className="form-container">
      <form action="" className="contactForm">
        <InputForm
          state={name}
          setState={setName}
          type="text"
          label="Nombre"
          name="name"
          placeholder="Nombre"
          id="name"
          regex={expresiones.nombre}
        />
        <InputForm
          state={email}
          setState={setEmail}
          type="text"
          label="Correo electrónico"
          name="email"
          placeholder="example@email.com"
          id="email"
          regex={expresiones.correo}
        />
        <InputForm
          state={subject}
          setState={setSubject}
          type="text"
          label="Asunto"
          name="subject"
          placeholder="Asunto"
          id="subject"
          regex={expresiones.nombre}
        />
        <textarea
          name="message"
          placeholder="Mensaje"
          id="message"
          className="input"
          value={message.field}
          onChange={onChange}
          onKeyUp={validateRegex}
        ></textarea>
        <div className="button-container">
          <button>Enviar mensaje</button>
        </div>
      </form>
      <div className="contact-info">
        <div className="social-media">
          <a href="https://www.linkedin.com/in/gabrielrodhrld" target="_blank">
            <FaLinkedin className="icon" />
          </a>
          <p>@gabrielrodhrld/</p>
        </div>

        <div className="social-media">
          <a href="https://github.com/HeraldHRLD" target="_blank">
            <FaGithub className="icon" />
          </a>
          <p>@heraldHRLD</p>
        </div>
        <div className="social-media">
          <a href="https://twitter.com/gabriel_hrld" target="_blank">
            <FaTwitter className="icon" />
          </a>
          <p>@gabriel_hrld</p>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
