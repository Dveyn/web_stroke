import React, { useState } from 'react';
import GlassCard from '../common/GlassCard';

const PortfolioSection = () => {
  // Состояние для управления количеством отображаемых проектов
  const [visibleProjects, setVisibleProjects] = useState(3);

  // Массив с данными проектов
  const projects = [
    {
      id: 1,
      image: '/images/project1.jpg',
      title: 'Корпоративный сайт',
      description: 'Для крупного ритейлера электроники',
    },
    {
      id: 2,
      image: '/images/project2.jpg',
      title: 'Интернет-магазин',
      description: 'Для сети магазинов одежды',
    },
    {
      id: 3,
      image: '/images/project3.jpg',
      title: 'Веб-приложение',
      description: 'Для управления проектами',
    },
    {
      id: 4,
      image: '/images/project4.jpg',
      title: 'Лендинг',
      description: 'Для продвижения нового продукта',
    },
    {
      id: 5,
      image: '/images/project5.jpg',
      title: 'Корпоративный портал',
      description: 'Для внутреннего использования',
    },
  ];

  // Функция для отображения всех проектов
  const showAllProjects = () => {
    setVisibleProjects(projects.length);
  };

  return (
    <section className="section" id='portfolio'>
      <h2 data-aos="fade-up">Наши работы</h2>
      <div className="grid-3">
        {projects.slice(0, visibleProjects).map((project) => (
          <GlassCard key={project.id} data-aos="fade-up">
            <img
              src={project.image}
              alt={project.title}
              style={{ width: '100%', borderRadius: '15px' }}
            />
            <h3 style={{ marginTop: '1rem' }}>{project.title}</h3>
            <p>{project.description}</p>
          </GlassCard>
        ))}
      </div>
      {visibleProjects < projects.length && (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button
            onClick={showAllProjects}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            Показать еще
          </button>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
