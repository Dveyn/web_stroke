import React, { useState } from 'react';
import GlassCard from '../common/GlassCard';
import {Tilt} from 'react-tilt';

const PortfolioSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const projects = [
    {
      id: 1,
      image: '/img/portfolio/avatar.png',
      title: 'Сайт для бизнес-коуча',
      description: 'Создание интернет-магазина для бизнес-коуча, предоставляющего услуги по составлению матриц судьбы и персональных консультаций. Сайт включает возможность записи на консультации, оплаты услуг и отображения информации о методиках работы.',
    },
    {
      id: 2,
      image: '/img/portfolio/matras.png',
      title: 'Интернет-магазин матрасов',
      description: 'Разработка интернет-магазина для частного производства матрасов под заказ. Сайт позволяет клиентам выбирать размеры, материалы и оформлять заказы с доставкой на дом.',
    },
    {
      id: 3,
      image: '/img/portfolio/merstone.png',
      title: 'Сайт для игрового сервера',
      description: 'Создание сайта для игрового сервера, который позволяет игрокам регистрироваться, пополнять баланс, знакомиться с таблицей рейтинга и получать информацию о сервере. Сайт также включает раздел с правилами и поддержкой для игроков.',
    },
    {
      id: 4,
      image: '/img/portfolio/spisanie.png',
      title: 'Лендинг для адвоката',
      description: 'Разработка лендинга для адвоката, специализирующегося на банкротстве физических лиц. Сайт включает информацию об услугах, отзывы клиентов и форму записи на консультацию.',
    },
  ];

  const showAllProjects = () => {
    setVisibleProjects(projects.length);
  };

  return (
    <section className="section" id='portfolio'>
      <h2 data-aos="fade-up">Наши работы</h2>
      <div className="grid-3">
        {projects.slice(0, visibleProjects).map((project) => (
          <Tilt key={project.id} options={{ max: 15, scale: 1.05, speed: 500 }}>
            <GlassCard data-aos="fade-up" className="portfolio-card">
              <img
                src={project.image}
                alt={project.title}
                style={{ width: '100%', borderRadius: '15px' }}
              />
              <h3 style={{ marginTop: '1rem' }}>{project.title}</h3>
              <p>{project.description}</p>
            </GlassCard>
          </Tilt>
        ))}
      </div>
      {visibleProjects < projects.length && (
        <div className="portfolio-btn-container">
          <button onClick={showAllProjects} className="portfolio-btn">
            Показать еще
          </button>
        </div>
      )}

    </section>
  );
};

export default PortfolioSection;
