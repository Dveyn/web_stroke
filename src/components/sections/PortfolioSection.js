"use client";

import React, { useEffect, useState } from 'react';
import { Tilt } from 'react-tilt';
import aosInit from '@@/utils/aosInit';

const PortfolioSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const categories = ["Все", "Лендинги", "E-commerce", "Корпоративные сайты"];
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const projects = [
    {
      id: 6,
      image: '/img/portfolio/maxflow.png',
      title: 'MaxFlow — рекламная сеть для мессенджера Max',
      description: 'MaxFlow: мы разработали прототип корпоративного сайта для рекламной сети в Ростове. Благодаря SEO-оптимизации страница привлекла более 500 партнёров за первый месяц и снизила стоимость лида на 35%.',
      caseStudy: '/case-studies/maxflow',
      category: 'Корпоративные сайты'
    },
    {
      id: 5,
      image: '/img/portfolio/connectmax.png',
      title: 'ConnectMax — каталог',
      description: 'ConnectMax: каталог чатов и ботов с умным поиском и фильтрами. Привёл более 10 000 посещений за первый месяц, а доля возвратного трафика выросла до 42% благодаря персонализированным подборкам.',
      caseStudy: '/case-studies/connectmax',
      link: 'https://connectmax.ru/',
      category: 'Корпоративные сайты'
    },
    {
      id: 1,
      image: '/img/portfolio/avatar.png',
      title: 'Сайт для бизнес-коуча',
      description: 'Сайт для бизнес-коуча: одностраничник с оплатой и записью на консультацию. Первый клиент пришёл в день запуска, а база подписчиков выросла на 280% за счёт цепочки писем и лид-магнита.',
      caseStudy: '/case-studies/business-coach',
      link: 'https://avalik-avatar.ru/',
      category: 'Лендинги'
    },
    {
      id: 2,
      image: '/img/portfolio/matras.png',
      title: 'Магазин матрасов',
      description: 'Магазин матрасов: полноценный интернет-магазин с онлайн-оплатой и интеграциями. Через две недели после запуска продажи выросли на 27%, а средний чек увеличился на 18% за счёт допродаж.',
      caseStudy: '/case-studies/mattress-store',
      link: 'https://xn----gtbdqvfscg4gwb.xn--p1ai',
      category: 'E-commerce'
    },
    {
      id: 3,
      image: '/img/portfolio/merstone.png',
      title: 'Сайт игрового сервера',
      description: 'Сайт игрового сервера: подключили онлайн-статистику и автоматическое пополнение баланса. За первый месяц — 2 000 новых регистраций и х2 удержание благодаря push-уведомлениям.',
      caseStudy: '/case-studies/game-server',
      link: 'https://merstone.ru',
      category: 'Корпоративные сайты'
    },
    {
      id: 4,
      image: '/img/portfolio/spisanie.png',
      title: 'Лендинг для адвоката',
      description: 'Лендинг для адвоката: интегрировали онлайн-консультации и чат. За первую неделю получено +12 новых клиентов, а конверсия из посетителя в обращение выросла до 7,8%.',
      caseStudy: '/case-studies/lawyer-landing',
      category: 'Лендинги'
    }
  ];

  useEffect(() => {
    aosInit();
  }, []);

  const filteredProjects = selectedCategory === "Все"
    ? projects
    : projects.filter(project => project.category && project.category === selectedCategory);

  const showAllProjects = () => {
    setVisibleProjects(filteredProjects.length);
  };

  return (
    <section id="portfolio">
      <div className="portfolio-container">
        <h2 className="portfolio-title" data-aos="fade-up">
          Примеры наших работ
          <span className="portfolio-title-underline" />
        </h2>
        <p style={ { textAlign: 'center', color: '#ccc', marginBottom: '2rem', fontSize: '1.2rem' } }>
          Вот сайты, которые мы сделали для клиентов. Каждый из них уже помогает зарабатывать и привлекать новых покупателей.
        </p>
        <div className="portfolio-filter">
          { categories.map((category) => (
            <button
              key={ category }
              className={ `filter-btn ${selectedCategory === category ? 'active' : ''}` }
              onClick={ () => setSelectedCategory(category) }
            >
              { category === 'Все' ? 'Все проекты' :
                category === 'Лендинги' ? 'Лендинги (одностраничные)' :
                  category === 'E-commerce' ? 'Интернет-магазины' :
                    category === 'Корпоративные сайты' ? 'Сайты для бизнеса' : category }
            </button>
          )) }
        </div>
        <div className="portfolio-grid">
          { filteredProjects.slice(0, visibleProjects).map((project) => (
            <Tilt key={ project.id } options={ { max: 8, scale: 1.03, speed: 400 } }>
              <div className="glass-card portfolio-card ultra" data-aos="fade-up">
                <div className="portfolio-image-container">
                  <img
                    src={ project.image }
                    alt={ project.title }
                    className="portfolio-image"
                  />
                  <div className="portfolio-image-overlay" />
                </div>
                <div className="portfolio-card-content">
                  <h3>{ project.title }</h3>
                  <p>{ project.description }</p>
                  <div className="portfolio-buttons">
                    { project.caseStudy && (
                      <a href={ project.caseStudy } className="portfolio-link-btn">
                        Читать кейс
                      </a>
                    ) }
                    { project.link && (
                      <a href={ project.link } className="portfolio-link-btn" target="_blank" rel="noopener noreferrer">
                        Посмотреть сайт
                      </a>
                    ) }
                  </div>
                </div>
              </div>
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
      </div>
    </section>
  );
};

export default PortfolioSection;
