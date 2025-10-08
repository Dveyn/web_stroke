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
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    aosInit();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    if (!formData.consent) {
      setError('Необходимо согласие на обработку персональных данных');
      setIsSubmitting(false);
      return;
    }

    const sanitizedData = {
      name: DOMPurify.sanitize(formData.name),
      email: DOMPurify.sanitize(formData.email),
      phone: DOMPurify.sanitize(formData.phone),
      message: DOMPurify.sanitize(formData.message),
      consent: formData.consent
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
      console.log('📝 ContactSection: Starting form submission...');
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sanitizedData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('❌ ContactSection: Form submission failed:', errorData);
        throw new Error(errorData.error || 'Ошибка при отправке данных');
      }

      console.log('✅ ContactSection: Form submitted successfully');
      console.log('🔄 ContactSection: Attempting to send Yandex Metrika event...');

      // Отправка события в Яндекс Метрику
      if (typeof window !== 'undefined') {
        console.log('ℹ️ ContactSection: Window object is available');
        if (window.ym) {
          console.log('ℹ️ ContactSection: Yandex Metrika is available');
          try {
            console.log('📤 ContactSection: Sending reachGoal event...');
            console.log('📊 ContactSection: Event details:', {
              counterId: 97829589,
              goal: 'send_leed',
              formData: {
                hasName: !!sanitizedData.name,
                hasEmail: !!sanitizedData.email,
                hasPhone: !!sanitizedData.phone,
                hasMessage: !!sanitizedData.message
              }
            });
            
            // Отправляем событие
            window.ym(97829589, 'reachGoal', 'send_leed', {
              formData: {
                hasName: !!sanitizedData.name,
                hasEmail: !!sanitizedData.email,
                hasPhone: !!sanitizedData.phone,
                hasMessage: !!sanitizedData.message
              }
            });
            
            console.log('✅ ContactSection: Yandex Metrika event sent successfully');
          } catch (error) {
            console.error('❌ ContactSection: Error sending Yandex Metrika event:', error);
            console.error('❌ ContactSection: Error details:', {
              name: error.name,
              message: error.message,
              stack: error.stack
            });
          }
        } else {
          console.warn('⚠️ ContactSection: Yandex Metrika is not available (window.ym is undefined)');
        }
      } else {
        console.warn('⚠️ ContactSection: Window object is not available');
      }

      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '', consent: false });
    } catch (err) {
      console.error('❌ ContactSection: Form submission error:', err);
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
        <p className="contact-subtitle" data-aos="fade-up">
          Нужна <a href="/services/corporate-sites">разработка корпоративного сайта</a> или <a href="/services/ecommerce">создание интернет-магазина</a> в Ростове-на-Дону? Позвоните или напишите нам — команда ВебШтрих ответит в тот же день и подготовит дорожную карту проекта.
        </p>
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
                <div className="form-group">
                  <label className="consent-label">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      required
                    />
                    <span>
                      Я согласен на обработку персональных данных в соответствии с{' '}
                      <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                        политикой конфиденциальности
                      </a>
                    </span>
                  </label>
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
            <p><strong>Веб-студия ВебШтрих</strong></p>
            <p>Email: <a href="mailto:info@webstroke.ru">info@webstroke.ru</a></p>
            <p>Телефон: <a href="tel:+78006009833">8-800-600-98-33</a></p>
            <p>Адрес: г. Ростов-на-Дону, ул. Вавилова, д. 49, офис 111</p>
            <p>Работаем с проектами из Ростова-на-Дону и всей России: <a href="/services/seo">SEO-продвижение</a>, <a href="/services/marketing">реклама сайтов</a>, <a href="/services/web-apps">разработка веб-приложений</a>.</p>
            <div className="contact-map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d896.8941442107491!2d39.70145607624311!3d47.235706256749984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3b87c7c5d4eff%3A0x4b7317d3e2a76d85!2z0JLQtdGA0L7QstCw0YAg0JrRg9C80LXRgNC-0LvQvtCy0LAg0JLQtdC70LjQutC70LDQvdC40Lkg0J7QsdC-0YDQvNCw0Y8!5e0!3m2!1sru!2sru!4v1730998100000!5m2!1sru!2sru"
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
