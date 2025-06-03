import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

// Схема валидации данных формы
const contactSchema = z.object({
  name: z.string().min(2, 'Имя должно содержать минимум 2 символа').transform(str => str.replace(/[<>]/g, '')),
  email: z.string().email('Некорректный email').transform(str => str.replace(/[<>]/g, '')),
  phone: z.string().min(10, 'Некорректный номер телефона').transform(str => str.replace(/[<>]/g, '')),
  message: z.string().optional().transform(str => str ? str.replace(/[<>]/g, '') : ''),
  consent: z.boolean().refine((val) => val === true, {
    message: 'Необходимо согласие на обработку персональных данных'
  })
});

// Создаем транспортер для отправки писем
const transporter = nodemailer.createTransport({
  host: 'smtp.yandex.ru',
  port: 465,
  secure: true,
  auth: {
    user: process.env.YANDEX_360_EMAIL,
    pass: process.env.YANDEX_360_APP_PASSWORD,
  },
});

// Функция для проверки reCAPTCHA
async function verifyRecaptcha(token) {
  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
  });
  
  const data = await response.json();
  return data.success;
}

// Функция для создания задачи в Яндекс.Трекере
async function createTrackerIssue(data) {
  const response = await fetch(`https://api.tracker.yandex.net/v2/issues`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `OAuth ${process.env.TRACKER_TOKEN}`,
      'X-Org-ID': process.env.TRACKER_ORG_ID,
    },
    body: JSON.stringify({
      summary: `Новая заявка от ${data.name}`,
      description: `
Имя: ${data.name}
Email: ${data.email}
Телефон: ${data.phone}
${data.message ? `Сообщение: ${data.message}` : ''}
Дата: ${new Date().toLocaleString('ru-RU')}
      `.trim(),
      queue: process.env.TRACKER_QUEUE_KEY,
      type: 'task',
      priority: 'high',
      tags: ['заявка-с-сайта']
    })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Ошибка при создании задачи в Трекере: ${JSON.stringify(error)}`);
  }

  return response.json();
}

// Функция для отправки уведомления на почту
async function sendEmailNotification(data) {
  const mailOptions = {
    from: process.env.YANDEX_360_EMAIL,
    to: process.env.YANDEX_360_EMAIL,
    subject: `Новая заявка от ${data.name}`,
    html: `
      <h2>Новая заявка с сайта</h2>
      <p><strong>Имя:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Телефон:</strong> ${data.phone}</p>
      ${data.message ? `<p><strong>Сообщение:</strong> ${data.message}</p>` : ''}
      <p><strong>Дата:</strong> ${new Date().toLocaleString('ru-RU')}</p>
      <p style="margin-top: 20px; color: #666;">
        Заявка также создана в Яндекс.Трекере. Проверьте очередь "${process.env.TRACKER_QUEUE_KEY}".
      </p>
    `,
  };

  await transporter.sendMail(mailOptions);
}

// Функция для очистки данных
function sanitizeData(data) {
  return {
    name: DOMPurify.sanitize(data.name),
    email: DOMPurify.sanitize(data.email),
    phone: DOMPurify.sanitize(data.phone),
    message: data.message ? DOMPurify.sanitize(data.message) : '',
    consent: data.consent
  };
}

export async function POST(request) {
  try {
    // Получаем данные из запроса
    const body = await request.json();
    
    // Проверяем reCAPTCHA
    if (!body.recaptchaToken || !(await verifyRecaptcha(body.recaptchaToken))) {
      return NextResponse.json(
        { error: 'Ошибка проверки reCAPTCHA' },
        { status: 400 }
      );
    }

    // Очищаем данные от потенциально опасного контента
    const sanitizedData = sanitizeData(body);

    // Валидируем данные формы
    const validatedData = contactSchema.parse(sanitizedData);

    // Параллельно отправляем и в трекер, и на почту
    await Promise.all([
      createTrackerIssue(validatedData),
      sendEmailNotification(validatedData)
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Ошибка при отправке формы:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Ошибка валидации данных', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    );
  }
} 
