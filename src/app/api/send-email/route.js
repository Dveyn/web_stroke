import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, phone, email, message } = await req.json();

    // Создаем транспорт для отправки email
    const transporter = nodemailer.createTransport({
      service: 'yandex',
      auth: {
        user: 'webshtrih@yandex.ru',
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Формируем текст письма
    const mailOptions = {
      from: 'webshtrih@yandex.ru',
      to: 'webshtrih@yandex.ru',
      subject: 'Новая заявка с сайта',
      html: `
        <h2>Новая заявка с сайта</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Сообщение:</strong> ${message}</p>
      `,
    };

    // Отправляем письмо
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email успешно отправлен' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Ошибка при отправке email:', error);
    return NextResponse.json(
      { error: 'Ошибка при отправке email', details: error.message },
      { status: 500 }
    );
  }
} 
