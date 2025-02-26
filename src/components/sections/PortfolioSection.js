import React from 'react';
import GlassCard from '../common/GlassCard';

const PortfolioSection = () => {
  return (
    <section className="section">
      <h2 data-aos="fade-up">Наши работы</h2>
      <div className="grid-3">
        <GlassCard data-aos="fade-up">
          <img src="/images/project1.jpg" alt="Проект 1" style={ { width: '100%', borderRadius: '15px' } } />
          <h3 style={ { marginTop: '1rem' } }>Корпоративный сайт</h3>
          <p>Для крупного ритейлера электроники</p>
        </GlassCard>
        {/* Добавьте ещё 2 проекта здесь */ }
      </div>
    </section>
  );
};

export default PortfolioSection;
