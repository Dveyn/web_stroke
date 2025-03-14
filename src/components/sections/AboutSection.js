import React from 'react';
import GlassCard from '../common/GlassCard';
import { FiCheckCircle, FiCpu, FiSettings, FiShield, FiTrendingUp } from "react-icons/fi";

const AboutSection = () => {
  return (
    <section className="section" id='about'>
      <GlassCard data-aos="fade-up">
        <h2>О нас</h2>
        <p>
          Веб-студия <strong>«ВебШтрих»</strong> – создаем технологичные и эффективные веб-решения для бизнеса.
        </p>
        <p>
          Разрабатываем <strong>сайты, веб-приложения</strong> и <strong>цифровые платформы</strong>, которые помогают привлекать клиентов, автоматизировать процессы и масштабировать бизнес.
        </p>
        <p>
          Работаем с <strong>Next.js, TypeScript, Node.js, Express</strong>. Гарантируем скорость, надежность и адаптацию под современные бизнес-задачи.
        </p>

        <h3 className='h2_section'>Почему выбирают нас</h3>

        <ul className="features-list">
          <li><FiCheckCircle /> <strong>Опыт и экспертиза.</strong> Более 3 лет создаем цифровые продукты.</li>
          <li><FiCpu /> <strong>Комплексный подход.</strong> От идеи до поддержки и продвижения.</li>
          <li><FiSettings /> <strong>Современные технологии.</strong> Высокая скорость, безопасность и стабильность.</li>
          <li><FiShield /> <strong>Гарантия качества.</strong> Работаем официально, фиксируем условия договора.</li>
          <li><FiTrendingUp /> <strong>Масштабируемые решения.</strong> Гибкие системы, легко адаптируемые под рынок.</li>
        </ul>

        <p className="cta">
          <strong>Мы создаем сайты, которые не просто выглядят стильно, но и работают на результат.</strong>
        </p>

        <div className="cta-container">
          <a href="/#contact" className="cta-button">Оставить заявку</a>
        </div>
      </GlassCard>

    </section>
  );
};

export default AboutSection;
