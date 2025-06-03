"use client"
import React, { useEffect, useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaCommentDots } from "react-icons/fa";
import { PatternFormat } from 'react-number-format';
import DOMPurify from 'dompurify';
import aosInit from '@@/utils/aosInit';

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

  useEffect(() => {
    aosInit();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    const sanitizedData = {
      name: DOMPurify.sanitize(formData.name),
      email: DOMPurify.sanitize(formData.email),
      phone: DOMPurify.sanitize(formData.phone),
      message: DOMPurify.sanitize(formData.message),
    };
    if (!sanitizedData.email.trim() && !sanitizedData.phone.trim()) {
      setError('Укажите хотя бы один контакт: телефон или email.');
      setIsSubmitting(false);
      return;
    }
    if (sanitizedData.message.trim().length === 0) {
      setError('Введите сообщение.');
      setIsSubmitting(false);
      return;
    }
    try {
      const response = await fetch('https://b24-wsl00q.bitrix24.ru/rest/1/pcrorxl3f65pf5zf/crm.lead.add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
      if (!response.ok) throw new Error('Ошибка при отправке данных');
      try { ym(97829589,'reachGoal','send_leed'); } catch (error) { console.error('Ошибка при отправке Yandex Metrika:', error); }
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setError('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <h2 className="contact-title" data-aos="fade-up">
          Контакты
          <span className="contact-title-underline" />
        </h2>
        <div className="contact-grid">
          <div className="glass-card ultra contact-form" data-aos="fade-up">
            <h3>Форма обратной связи</h3>
            {isSuccess ? (
              <p className="success-message">Спасибо! Ваше сообщение успешно отправлено.</p>
            ) : (
              <form onSubmit={handleSubmit} autoComplete="off">
                <div className="form-group">
                  <label htmlFor="name"><FaUser className="input-icon" /> Имя:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email"><FaEnvelope className="input-icon" /> Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
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
                    value={formData.phone}
                    onValueChange={(values) => setFormData({ ...formData, phone: values.value })}
                    isNumericString={true}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message"><FaCommentDots className="input-icon" /> Сообщение:</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="cta-button" disabled={isSubmitting}>
                  {isSubmitting ? 'Отправка...' : 'Отправить'}
                </button>
              </form>
            )}
          </div>

          <div className="glass-card ultra contact-info" data-aos="fade-up">
            <h3>Наши контакты</h3>
            <p>Email: <a href="mailto:info@webstroke.ru">info@webstroke.ru</a></p>
            <p>Телефон: <a href="tel:+78006009833">8-800-600-98-33</a></p>
            <p>Адрес: г. Ростов-на-Дону, ул. Вавилова, д. 49, офис 111</p>
            <div className="contact-map-container">
              <iframe
                src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=140530117890"
                width="100%"
                height="320"
                frameBorder="0"
                style={{ borderRadius: '1.2em', boxShadow: '0 2px 12px rgba(80,70,255,0.10)' }}
                allowFullScreen
                title="Карта"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
