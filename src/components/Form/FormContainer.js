import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import emailjs from 'emailjs-com';

import Loader from '../Loader';
import '../../styles/components/Form/FormContainer.scss';
import InputForm from './InputForm';
import { expresiones } from '../../utils/regex';

const FormContainer = () => {
  const [name, setName] = useState({ field: '', valid: null });
  const [email, setEmail] = useState({ field: '', valid: null });
  const [subject, setSubject] = useState({ field: '', valid: null });
  const [message, setMessage] = useState({ field: '', valid: null });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [emptyField, setEmptyField] = useState(false);
  const [loading, setLoading] = useState(false);

  const dataEmail = {
    name: name.field,
    email: email.field,
    subject: subject.field,
    message: message.field,
  };

  const handleSendEmail = (e) => {
    setLoading(true);
    e.preventDefault();

    if (name.valid && email.valid && subject.valid) {
      return emailjs
        .send(
          'service_46h9pog',
          'template_ebgztmh',
          dataEmail,
          'user_JbDq4TcoGU2mdWsCg5Akg'
        )
        .then(() => {
          setName({ valid: null, field: '' });
          setEmail({ valid: null, field: '' });
          setSubject({ valid: null, field: '' });
          setMessage({ valid: null, field: '' });
          setLoading(false);
          setEmptyField(false);
          setSuccess(true);
          setTimeout(() => setSuccess(false), 2200);
        })
        .catch(() => {
          setName({ valid: null, field: '' });
          setEmail({ valid: null, field: '' });
          setSubject({ valid: null, field: '' });
          setMessage({ valid: null, field: '' });
          setLoading(false);
          setEmptyField(false);
          setError(true);
          setTimeout(() => setError(false), 2200);
        });
    } else {
      setLoading(false);

      return setEmptyField(true);
    }
  };

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
          className={
            message.valid == null
              ? 'input'
              : message.valid
              ? 'input'
              : 'input .invalidTextArea'
          }
          value={message.field}
          onChange={onChange}
          onKeyUp={validateRegex}
        ></textarea>
        {loading ? (
          <div className="loaderContainer">
            <Loader />
          </div>
        ) : (
          <div className="button-container">
            <button onClick={handleSendEmail}>Enviar mensaje</button>
            {emptyField ? (
              <p style={{ color: '#d11717' }}>
                Por favor, completa todos los campos
              </p>
            ) : null}
          </div>
        )}
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
      <div
        className={
          error
            ? 'messageContainer dangerMessage active'
            : 'messageContainer dangerMessage'
        }
      >
        <div className="message">
          <h3>Error al enviar el mensaje</h3>
        </div>
      </div>
      <div
        className={
          success
            ? 'messageContainer successMessage active'
            : 'messageContainer successMessage'
        }
      >
        <div className="message">
          <h3>Mensaje enviado con éxito</h3>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
