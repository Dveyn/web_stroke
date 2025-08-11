import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  console.log('📧 Email API: Starting email processing...');
  
  try {
    const { name, phone, email, message } = await req.json();
    // Basic server-side validation and sanitization
    const trimmed = {
      name: (name || '').toString().slice(0, 200).trim(),
      phone: (phone || '').toString().slice(0, 50).trim(),
      email: (email || '').toString().slice(0, 200).trim(),
      message: (message || '').toString().slice(0, 5000).trim(),
    };
    if (!trimmed.email && !trimmed.phone) {
      return NextResponse.json({ error: 'Укажите телефон или email' }, { status: 400 });
    }
    if (!trimmed.message) {
      return NextResponse.json({ error: 'Пустое сообщение' }, { status: 400 });
    }
    console.log('📧 Email API: Received form data:', { name, phone, email, messageLength: message?.length });

    // Создаем транспорт для отправки email
    const transporter = nodemailer.createTransport({
      host: 'mail.webstroke.ru',
      port: 465,
      secure: true, // true для порта 465
      auth: {
        user: 'task@webstroke.ru',
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: true
      },
    });

    // Проверяем подключение
    console.log('📧 Email API: Verifying SMTP connection...');
    await transporter.verify();
    console.log('✅ Email API: SMTP connection verified');

    // Формируем текст письма
    const mailOptions = {
      from: {
        name: 'ВебШтрих - Форма обратной связи',
        address: 'task@webstroke.ru'
      },
      to: 'task@webstroke.ru',
      subject: 'Новая заявка с сайта',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Новая заявка с сайта</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 5px;">
            <p><strong>Имя:</strong> ${trimmed.name || 'Не указано'}</p>
            <p><strong>Телефон:</strong> ${trimmed.phone || 'Не указан'}</p>
            <p><strong>Email:</strong> ${trimmed.email || 'Не указан'}</p>
            <p><strong>Сообщение:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 3px; margin-top: 10px;">
              ${trimmed.message || 'Сообщение отсутствует'}
            </div>
          </div>
          <div style="margin-top: 20px; font-size: 12px; color: #666;">
            <p>Это письмо отправлено автоматически с сайта webstroke.ru</p>
          </div>
        </div>
      `,
    };

    // Отправляем письмо
    console.log('📧 Email API: Sending email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email API: Email sent successfully', info);

    return NextResponse.json(
      { message: 'Email успешно отправлен', messageId: info.messageId },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Email API: Error sending email:', error);
    
    // Детальное логирование ошибки
    const errorDetails = {
      name: error.name,
      message: error.message,
      code: error.code,
      command: error.command,
      responseCode: error.responseCode,
      response: error.response,
      stack: error.stack
    };
    console.error('❌ Email API: Error details:', errorDetails);

    return NextResponse.json(
      { 
        error: 'Ошибка при отправке email',
        details: error.message,
        code: error.code
      },
      { status: 500 }
    );
  }
} 
