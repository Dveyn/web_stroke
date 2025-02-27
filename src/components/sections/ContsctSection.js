import React, { useState } from 'react';
import GlassCard from '../common/GlassCard';


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

    try {
      // Отправка данных в Bitrix24 через API
      const response = await fetch('https://b24-wsl00q.bitrix24.ru/rest/1/pcrorxl3f65pf5zf/crm.lead.add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: {
            TITLE: `Новый лид от ${formData.name}`,
            NAME: formData.name,
            EMAIL: [{ VALUE: formData.email, VALUE_TYPE: 'WORK' }],
            PHONE: [{ VALUE: formData.phone, VALUE_TYPE: 'WORK' }],
            COMMENTS: formData.message,
          },
        }),
      });

      if (!response.ok) {
        throw new Error('Ошибка при отправке данных');
      }

      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' }); // Очистка формы
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

        <GlassCard data-aos="fade-up" style={{marginBottom: "40px"}} data-aos-delay="100">
          <h3>Форма обратной связи</h3>
          {isSuccess ? (
            <p style={{ color: 'green' }}>Спасибо! Ваше сообщение успешно отправлено.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Имя:</label>
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
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Телефон:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Сообщение:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Отправка...' : 'Отправить'}
              </button>
            </form>
          )}
        </GlassCard>

        <GlassCard data-aos="fade-up">
          <h3>Наши контакты</h3>
          {/* <p>Телефон: +7 (XXX) XXX-XX-XX</p> */}
          <p>Email: info@webstroke.ru</p>
          <p>Адрес: г. Ростов-на-Дону, ул. Вавилова, д. 49, офис 111</p>
          <iframe src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=140530117890" width="100%" height="400" frameborder="0"></iframe>
        </GlassCard>
      </div>
    </section>
  );
};

export default ContactSection;
