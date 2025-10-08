"use client";

import { useState } from "react";
import DOMPurify from "dompurify";
import styles from "./ServiceLeadForm.module.css";

const initialState = {
  name: "",
  phone: "",
  email: "",
  company: "",
  message: "",
  consent: false,
};

const ServiceLeadForm = ({ serviceName }) => {
  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.consent) {
      setError("Для отправки необходимо согласиться с обработкой персональных данных.");
      return;
    }

    if (!formData.phone && !formData.email) {
      setError("Укажите телефон или email, чтобы мы смогли с вами связаться.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    const payload = {
      service: serviceName,
      name: DOMPurify.sanitize(formData.name),
      phone: DOMPurify.sanitize(formData.phone),
      email: DOMPurify.sanitize(formData.email),
      company: DOMPurify.sanitize(formData.company),
      message: DOMPurify.sanitize(formData.message),
      consent: formData.consent,
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Не удалось отправить заявку. Попробуйте ещё раз или свяжитесь с нами по телефону.");
      }

      setIsSuccess(true);
      setFormData(initialState);
    } catch (err) {
      setError(err.message || "Произошла ошибка при отправке. Попробуйте позднее.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={ styles.success }>
        <h3>Спасибо!</h3>
        <p>Мы получили вашу заявку и свяжемся в течение рабочего дня.</p>
        <button
          type="button"
          className={ styles.secondaryButton }
          onClick={ () => setIsSuccess(false) }
        >
          Отправить ещё одну заявку
        </button>
      </div>
    );
  }

  return (
    <form className={ styles.form } onSubmit={ handleSubmit }>
      <div className={ styles.heading }>
        <h3>Получите индивидуальное предложение</h3>
        <p>Оставьте контакты — подготовим расчёт проекта и пошаговый план внедрения.</p>
      </div>

      <div className={ styles.grid }>
        <div className={ styles.fieldGroup }>
          <label htmlFor="name">Имя*</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Как к вам обращаться"
            required
            value={ formData.name }
            onChange={ handleChange }
          />
        </div>
        <div className={ styles.fieldGroup }>
          <label htmlFor="company">Компания</label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder='ООО "ВебШтрих"'
            value={ formData.company }
            onChange={ handleChange }
          />
        </div>
      </div>

      <div className={ styles.grid }>
        <div className={ styles.fieldGroup }>
          <label htmlFor="phone">Телефон</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+7 (___) ___-__-__"
            value={ formData.phone }
            onChange={ handleChange }
          />
        </div>
        <div className={ styles.fieldGroup }>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="example@company.ru"
            value={ formData.email }
            onChange={ handleChange }
          />
        </div>
      </div>

      <div className={ styles.fieldGroup }>
        <label htmlFor="message">Опишите задачу*</label>
        <textarea
          id="message"
          name="message"
          rows={ 5 }
          placeholder={ `Какие цели хотите решить? Чем может помочь ${serviceName || "наша команда"}?` }
          required
          value={ formData.message }
          onChange={ handleChange }
        />
      </div>

      <label className={ styles.checkbox }>
        <input
          type="checkbox"
          name="consent"
          checked={ formData.consent }
          onChange={ handleChange }
        />
        <span>
          Я согласен на обработку персональных данных и принимаю
          <a href="/privacy-policy" target="_blank" rel="noreferrer"> политику конфиденциальности</a>.
        </span>
      </label>

      { error && <p className={ styles.error }>{ error }</p> }

      <button type="submit" className={ styles.submit } disabled={ isSubmitting }>
        { isSubmitting ? "Отправляем..." : "Получить предложение" }
      </button>
      <p className={ styles.note }>
        Нажимая кнопку, вы получите { serviceName?.toLowerCase() } с подробным планом и рекомендациями.
      </p>
    </form>
  );
};

export default ServiceLeadForm;
