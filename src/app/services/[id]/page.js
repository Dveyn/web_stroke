import Head from "next/head";
import styles from "../services.module.css";
import {
  FaBuilding, FaShoppingCart, FaLaptopCode,
  FaSearch, FaBullhorn, FaCheck, FaClock,
  FaChartLine, FaHeadset, FaListOl, FaPenFancy,
  FaCode, FaCheckCircle, FaRocket, FaUsers, FaHandshake,
  FaFileAlt, FaChartPie, FaLightbulb
} from "react-icons/fa";
import { BtnCta } from "@@/components/common/btnCta";

const serviceData = {
  "corporate-sites": {
    title: "Корпоративные сайты",
    description: "Создаём сайты, которые привлекают клиентов и увеличивают продажи вашего бизнеса.",
    details: "Разрабатываем уникальные корпоративные сайты с современным дизайном и удобным интерфейсом. Ваш сайт станет мощным инструментом продаж и повысит доверие к вашему бренду.",
    features: [
      "🔥 Уникальный дизайн, выделяющий вас среди конкурентов",
      "⚡ Быстрая загрузка для комфортного пользования",
      "🔗 Интеграция с CRM и бизнес-системами",
      "📊 Аналитика для оценки эффективности сайта"
    ],
    price: "от 50 000 ₽",
    timeline: "от 2 недель",
    icon: <FaBuilding className={ styles.serviceIcon } />,
  },
  "ecommerce": {
    title: "Интернет-магазины",
    description: "Создаём интернет-магазины, которые увеличивают продажи и доверие к вашему бренду.",
    details: "Реализуем удобные каталоги, автоматизируем процессы продаж и подключаем безопасные платёжные системы, чтобы ваш магазин работал безупречно и приносил прибыль.",
    features: [
      "🛒 Удобная навигация и каталог товаров",
      "💳 Подключение современных платёжных систем",
      "📈 Аналитика для контроля продаж",
      "🔄 Синхронизация с 1С и другими сервисами"
    ],
    price: "от 80 000 ₽",
    timeline: "от 3 недель",
    icon: <FaShoppingCart className={ styles.serviceIcon } />,
  },
  "web-apps": {
    title: "Веб-приложения",
    description: "Разрабатываем надёжные веб-приложения для автоматизации и роста вашего бизнеса.",
    details: "Создаём высоконагруженные решения с интуитивным интерфейсом, интеграциями и безопасностью, которые помогают масштабировать и оптимизировать процессы.",
    features: [
      "🚀 Высокая производительность и устойчивость к нагрузкам",
      "🔒 Защита данных и безопасность пользователей",
      "🔄 Интеграция с внешними API и системами"
    ],
    price: "от 100 000 ₽",
    timeline: "от 4 недель",
    icon: <FaLaptopCode className={ styles.serviceIcon } />,
  },
  "seo": {
    title: "SEO анализ и продвижение",
    description: "Выводим сайты в топ поисков, увеличиваем трафик и обеспечиваем стабильный поток клиентов.",
    details: "Проводим аудит, устраняем ошибки и внедряем комплексные SEO-решения, которые делают ваш сайт видимым и эффективным в интернете.",
    features: [
      "📊 Анализ конкурентов и рынка",
      "🔍 SEO-оптимизация по актуальным стандартам",
      "📢 Контент-маркетинг для вовлечения аудитории"
    ],
    price: "от 30 000 ₽",
    timeline: "от 1 недели",
    icon: <FaSearch className={ styles.serviceIcon } />,
  },
  "marketing": {
    title: "Маркетинг и реклама",
    description: "Создаём стратегии и кампании, которые делают ваш бренд узнаваемым и прибыльным.",
    details: "Анализируем аудиторию, разрабатываем уникальный контент и настраиваем рекламу с постоянным контролем и оптимизацией для максимальной отдачи.",
    features: [
      "🎯 Таргетинг по вашей ЦА для точных показов",
      "📢 Креативный контент, который цепляет",
      "📈 Мониторинг и оптимизация кампаний"
    ],
    price: "от 40 000 ₽",
    timeline: "от 2 недель",
    icon: <FaBullhorn className={ styles.serviceIcon } />,
  },
};


export async function generateMetadata({ params }) {
  const { id } = params; // Получаем id из URL
  const service = serviceData[id];

  // Если кейс не найден, показываем 404
  if (!service) {
    notFound();
  }

  return {
    title: `Услуга - ${service.title} | ВебШтрих`,
    description: service.description,
    openGraph: {
      title: `Услуга - ${service.title} | ВебШтрих`,
      description: service.description,
      images: [service.image], // Можно добавить изображение для Open Graph
    },
  };
}


export default function ServiceDetail({ params }) {
  const service = serviceData[params.id];

  if (!service) {
    return (
      <div className={ styles.errorPage }>
        <h1>Услуга не найдена</h1>
        <p>
          Проверьте правильность ссылки или вернитесь на{ " " }
          <a href="/services" className={ styles.link }>
            страницу услуг
          </a>.
        </p>
      </div>
    );
  }

  const otherServices = Object.entries(serviceData)
    .filter(([key]) => key !== params.id)
    .map(([key, data]) => ({ key, ...data }));

  return (
    <>
      <Head>
        <title>{ service.title } | ВебШтрих</title>
        <meta name="description" content={ service.description } />
      </Head>

      <div className={ styles.servicePage }>
        {/* Hero Section с сильным CTA */ }
        <section className={ styles.hero }>
          <div className={ styles.heroContent }>
            <h1>{ service.title }</h1>
            <p className={ styles.heroDescription }>{ service.description }</p>
            <div className={ styles.heroCta }>
              <BtnCta text="Оставить заявку" />
              <div className={ styles.heroGuarantee }>
                <FaCheck /> Гарантия результата
              </div>
            </div>
          </div>
          <div className={ styles.heroImage }>
            { service.icon }
          </div>
        </section>

        {/* Блок проблемы/решения */ }
        <section className={ styles.problemSolution }>
          <div className={ styles.problemBlock }>
            <h2>Вы сталкиваетесь с этими проблемами?</h2>
            <ul>
              <li><FaClock /> Низкая конверсия сайта</li>
              <li><FaChartLine /> Недостаточно клиентов</li>
              <li><FaHeadset /> Сложности с технической реализацией</li>
            </ul>
          </div>
          <div className={ styles.solutionBlock }>
            <h2>Наше решение для вас</h2>
            <p>{ service.details }</p>
            <BtnCta text="Решить мою проблему" />
          </div>
        </section>

        {/* Детали услуги с акцентом на выгоды */ }
        {/* <section className={ styles.serviceDetails }>
          <h2>Что входит в услугу</h2>
          <div className={ styles.detailsGrid }>
            { service.features.map((feature, index) => (
              <div key={ index } className={ styles.detailCard }>
                <div className={ styles.detailIcon }>{ feature.match(/^[^\s]+/)[0] }</div>
                <p>{ feature.replace(/^[^\s]+\s/, '') }</p>
              </div>
            )) }
          </div>
        </section> */}

        <section className={ styles.workSteps }>
          <h2>Как мы работаем</h2>
          <p className={ styles.sectionSubtitle }>Четкий процесс, который гарантирует результат</p>

          <div className={ styles.stepsContainer }>
            <div className={ styles.step }>
              <div className={ styles.stepNumber }>1</div>
              <FaListOl className={ styles.stepIcon } />
              <h3>Анализ и планирование</h3>
              <ul>
                <li>Обсуждаем ваши цели</li>
                <li>Анализируем конкурентов</li>
                <li>Составляем техническое задание</li>
              </ul>
            </div>

            <div className={ styles.step }>
              <div className={ styles.stepNumber }>2</div>
              <FaPenFancy className={ styles.stepIcon } />
              <h3>Дизайн и прототипирование</h3>
              <ul>
                <li>Создаем концепцию дизайна</li>
                <li>Разрабатываем прототип</li>
                <li>Согласовываем с вами</li>
              </ul>
            </div>

            <div className={ styles.step }>
              <div className={ styles.stepNumber }>3</div>
              <FaCode className={ styles.stepIcon } />
              <h3>Разработка</h3>
              <ul>
                <li>Реализуем техническую часть</li>
                <li>Тестируем функционал</li>
                <li>Оптимизируем производительность</li>
              </ul>
            </div>

            <div className={ styles.step }>
              <div className={ styles.stepNumber }>4</div>
              <FaCheckCircle className={ styles.stepIcon } />
              <h3>Тестирование и сдача</h3>
              <ul>
                <li>Проводим полный аудит</li>
                <li>Исправляем недочеты</li>
                <li>Обучаем вашу команду</li>
              </ul>
            </div>

            <div className={ styles.step }>
              <div className={ styles.stepNumber }>5</div>
              <FaRocket className={ styles.stepIcon } />
              <h3>Запуск и поддержка</h3>
              <ul>
                <li>Помогаем с запуском</li>
                <li>Мониторим работу</li>
                <li>Предоставляем поддержку</li>
              </ul>
            </div>
          </div>

          <div className={ styles.stepsCta }>
            <p>Каждый этап согласовывается с вами — вы полностью контролируете процесс</p>
            <BtnCta text="Оставить заявку" />
          </div>
        </section>

        <section className={ styles.expertise }>
          <div className={ styles.expertiseContent }>
            <h2>Почему выбирают нас</h2>
            <div className={ styles.expertiseGrid }>
              <div className={ styles.expertiseCard }>
                <FaUsers className={ styles.expertiseIcon } />
                <h3>Молодая и мотивированная команда</h3>
                <p>Мы вкладываем максимум усилий в каждый проект, чтобы вы получили лучший результат.</p>
              </div>
              <div className={ styles.expertiseCard }>
                <FaHandshake className={ styles.expertiseIcon } />
                <h3>Индивидуальный подход</h3>
                <p>Учитываем особенности вашего бизнеса и создаём уникальные решения именно для вас.</p>
              </div>
              <div className={ styles.expertiseCard }>
                <FaFileAlt className={ styles.expertiseIcon } />
                <h3>Прозрачные условия</h3>
                <p>Фиксированная стоимость и подробный договор без скрытых платежей.</p>
              </div>
              <div className={ styles.expertiseCard }>
                <FaChartPie className={ styles.expertiseIcon } />
                <h3>Открытая коммуникация</h3>
                <p>Регулярные отчёты и консультации на всех этапах работы.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Ценность и тайминг с акцентом на CTA */ }
        <section className={ styles.pricing }>
          <div className={ styles.pricingCard }>
            <h2>Стоимость и сроки</h2>
            <div className={ styles.priceTag }>{ service.price }</div>
            <div className={ styles.timeline }>Срок выполнения: { service.timeline }</div>
            <div className={ styles.valueProps }>
              <p><FaCheck /> Бесплатная консультация</p>
              <p><FaCheck /> Гибкие условия оплаты</p>
              <p><FaCheck /> Техническая поддержка 3 месяца</p>
            </div>
            <BtnCta text="Обсудить проект" fullWidth />
          </div>
        </section>

        {/* FAQ секция */ }
        <section className={ styles.faq }>
          <h2>Частые вопросы</h2>
          <div className={ styles.faqItem }>
            <h3>Как происходит процесс работы?</h3>
            <p>Мы проводим консультацию, составляем ТЗ, разрабатываем дизайн, согласовываем с вами и реализуем техническую часть.</p>
          </div>
          <div className={ styles.faqItem }>
            <h3>Какие гарантии вы предоставляете?</h3>
            <p>Мы фиксируем все условия в договоре и предоставляем бесплатную поддержку после сдачи проекта.</p>
          </div>
        </section>

        {/* Заключительный CTA */ }
        <section className={ styles.finalCta }>
          <h2>Готовы увеличить прибыль вашего бизнеса?</h2>
          <p>Оставьте заявку и получите бесплатную консультацию нашего специалиста</p>
          <BtnCta text="Начать проект" size="large" />
        </section>

        {/* Другие услуги */ }
        <section className={ styles.otherServices }>
          <h2>Вам также может быть интересно</h2>
          <div className={ styles.servicesGrid }>
            { otherServices.map((s) => (
              <a key={ s.key } href={ `/services/${s.key}` } className={ styles.serviceCard }>
                <div className={ styles.serviceIconContainer }>{ s.icon }</div>
                <h3>{ s.title }</h3>
                <p>{ s.description.substring(0, 100) }...</p>
                <p className={ styles.price }>{ s.price }</p>
              </a>
            )) }
          </div>
        </section>
      </div>
    </>
  );
}
