import React, { useState } from 'react';
import GlassCard from '../common/GlassCard';
import { Tilt } from 'react-tilt';

const PortfolioSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const categories = ["Все", "Лендинги", "E-commerce", "Корпоративные сайты"];
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const projects = [
    {
      id: 1,
      image: '/img/portfolio/avatar.png',
      title: 'Сайт для бизнес-коуча',
      description: 'Создание интернет-магазина для бизнес-коуча...',
      caseStudy: '/case-studies/business-coach',
      link: 'https://avalik-avatar.ru/',
      category: 'Лендинги'
    },
    {
      id: 2,
      image: '/img/portfolio/matras.png',
      title: 'Интернет-магазин матрасов',
      description: 'Разработка интернет-магазина для частного производства...',
      caseStudy: '/case-studies/mattress-store',
      link: 'https://xn----gtbdqvfscg4gwb.xn--p1ai',
      category: 'E-commerce'
    },
    {
      id: 3,
      image: '/img/portfolio/merstone.png',
      title: 'Сайт для игрового сервера',
      description: 'Создание сайта для игрового сервера...',
      caseStudy: '/case-studies/game-server',
      link: 'https://merstone.ru',
      category: 'Корпоративные сайты'
    },
    {
      id: 4,
      image: '/img/portfolio/spisanie.png',
      title: 'Лендинг для адвоката',
      description: 'Разработка лендинга для адвоката...',
      caseStudy: '/case-studies/lawyer-landing',
      category: 'Лендинги'
    },
  ];

  const filteredProjects = selectedCategory === "Все"
    ? projects
    : projects.filter(project => project.category && project.category === selectedCategory);

  const showAllProjects = () => {
    setVisibleProjects(filteredProjects.length);
  };

  return (
    <section className="section" id='portfolio'>
      <h2 data-aos="fade-up">Наши работы</h2>
      <div className="portfolio-filter">
        { categories.map((category) => (
          <button
            key={ category }
            className={ `filter-btn ${selectedCategory === category ? 'active' : ''}` }
            onClick={ () => setSelectedCategory(category) }
          >
            { category }
          </button>
        )) }
      </div>
      <div className="grid-3">
        { filteredProjects.slice(0, visibleProjects).map((project) => (
          <Tilt key={ project.id } options={ { max: 0, scale: 1, speed: 300 } }>
            <GlassCard data-aos="fade-up" className="portfolio-card">
              <div className="portfolio-image-container">
                <img
                  src={ project.image }
                  alt={ project.title }
                  style={ { width: '100%', borderRadius: '15px' } }
                />
              </div>
              <div className="portfolio-card-content">
                <h3>{ project.title }</h3>
                <p>{ project.description }</p>
                <div className="portfolio-buttons">
                  { project.caseStudy && (
                    <a href={ project.caseStudy } className="portfolio-link-btn">
                      Читать кейс
                    </a>
                  ) }{
                    project.link &&
                    <a href={ project.link } className="portfolio-link-btn" target="_blank">
                      Посмотреть сайт
                    </a>
                  }

                </div>
              </div>
            </GlassCard>
          </Tilt>
        )) }
      </div>
      { visibleProjects < filteredProjects.length && (
        <div className="portfolio-btn-container">
          <button onClick={ showAllProjects } className="portfolio-btn">
            Показать еще
          </button>
        </div>
      ) }
    </section>
  );
};

export default PortfolioSection;
