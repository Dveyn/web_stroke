import React from 'react';
import GlassCard from '../common/GlassCard';

const AboutSection = () => {
  return (
    <section className="section">
      <GlassCard data-aos="fade-up">
        <h2>О нас</h2>
        <p>
          ВебШтрих — это студия полного цикла, специализирующаяся на создании эксклюзивных цифровых решений для
          бизнеса премиум-класса. Мы сочетаем передовые технологии, уникальный дизайн и глубокое понимание
          бизнес-процессов.
        </p>
      </GlassCard>
    </section>
  );
};

export default AboutSection;
