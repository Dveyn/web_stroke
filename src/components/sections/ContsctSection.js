import React, { useState } from 'react';
import GlassCard from '../common/GlassCard';
import { FaUser, FaEnvelope, FaPhone, FaCommentDots } from "react-icons/fa";
import { PatternFormat } from 'react-number-format';
import DOMPurify from 'dompurify';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Очистка данных от XSS-атак
    const sanitizedData = {
      name: DOMPurify.sanitize(formData.name),
      email: DOMPurify.sanitize(formData.email),
      phone: DOMPurify.sanitize(formData.phone),
      message: DOMPurify.sanitize(formData.message),
    };

    // Валидация: должен быть указан либо email, либо телефон
    if (!sanitizedData.email.trim() && !sanitizedData.phone.trim()) {
      setError('Укажите хотя бы один контакт: телефон или email.');
      setIsSubmitting(false);
      return;
    }

    // Валидация: сообщение не должно быть пустым
    if (sanitizedData.message.trim().length === 0) {
      setError('Введите сообщение.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://b24-wsl00q.bitrix24.ru/rest/1/pcrorxl3f65pf5zf/crm.lead.add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: {
            TITLE: `Новый лид от ${sanitizedData.name}`,
            NAME: sanitizedData.name,
            EMAIL: [{ VALUE: sanitizedData.email, VALUE_TYPE: 'WORK' }],
            PHONE: [{ VALUE: sanitizedData.phone, VALUE_TYPE: 'WORK' }],
            COMMENTS: sanitizedData.message,
          },
        }),
      });

      if (!response.ok) {
        throw new Error('Ошибка при отправке данных');
      }

      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setError('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section" id='contact'>
      <h2 data-aos="fade-up">Контакты</h2>
      <div className="grid-2">

        <GlassCard data-aos="fade-up" className="contact-form">
          <h3>Форма обратной связи</h3>
          { isSuccess ? (
            <p className="success-message">Спасибо! Ваше сообщение успешно отправлено.</p>
          ) : (
            <form onSubmit={ handleSubmit }>
              <div className="form-group">
                <label htmlFor="name"><FaUser className="input-icon" /> Имя:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={ formData.name }
                  onChange={ handleChange }
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email"><FaEnvelope className="input-icon" /> Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={ formData.email }
                  onChange={ handleChange }
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone"><FaPhone className="input-icon" /> Телефон:</label>
                <PatternFormat
                  format="+7 (###) ###-##-##"
                  mask="_"
                  type="tel"
                  id="phone"
                  name="phone"
                  value={ formData.phone }
                  onValueChange={ (values) => setFormData({ ...formData, phone: values.value }) }
                  isNumericString={ true }
                />
              </div>
              <div className="form-group">
                <label htmlFor="message"><FaCommentDots className="input-icon" /> Сообщение:</label>
                <textarea
                  id="message"
                  name="message"
                  value={ formData.message }
                  onChange={ handleChange }
                  required
                />
              </div>
              { error && <p className="error-message">{ error }</p> }
              <button type="submit" className="submit-button" disabled={ isSubmitting }>
                { isSubmitting ? 'Отправка...' : 'Отправить' }
              </button>
            </form>
          ) }
        </GlassCard>

        <GlassCard data-aos="fade-up">
          <h3>Наши контакты</h3>
          <p>Email: info@webstroke.ru</p>
          <p>Адрес: г. Ростов-на-Дону, ул. Вавилова, д. 49, офис 111</p>
          <iframe src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=140530117890" width="100%" height="400" frameBorder="0"></iframe>
        </GlassCard>
      </div>
    </section>
  );
};

export default ContactSection;
