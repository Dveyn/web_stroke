import styles from "../services.module.css";
import { FaBuilding, FaShoppingCart, FaLaptopCode, FaSearch, FaBullhorn } from "react-icons/fa";

const serviceData = {
  "corporate-sites": {
    title: "Корпоративные сайты",
    description: "Создание представительских платформ для крупного бизнеса с уникальным дизайном и функционалом.",
    details: "Каждый корпоративный сайт разрабатывается с учетом специфики бизнеса. Мы анализируем вашу целевую аудиторию, внедряем удобную навигацию и интегрируем CRM-системы для автоматизации процессов.",
    features: ["🔥 Уникальный дизайн", "⚡️ Быстрая загрузка", "🔗 Интеграция с сервисами", "📊 Аналитика посещаемости"],
    price: "от 50 000 ₽",
    icon: <FaBuilding className={styles.serviceIcon} />,
  },
  "ecommerce": {
    title: "Интернет-магазины",
    description: "Разрабатываем мощные интернет-магазины, готовые к приему клиентов и онлайн-оплате.",
    details: "Мы создаем интернет-магазины, оптимизированные под поисковые системы, с удобным каталогом товаров и быстрой системой оформления заказа.",
    features: ["🛒 Готовые к продажам", "💳 Онлайн-оплата", "📈 Аналитика продаж", "🔄 Интеграция с 1С"],
    price: "от 80 000 ₽",
    icon: <FaShoppingCart className={styles.serviceIcon} />,
  },
  "web-apps": {
    title: "Веб-приложения",
    description: "Разработка сложных веб-приложений с использованием современных технологий.",
    details: "Мы создаем высоконагруженные веб-приложения с продуманной архитектурой, удобным интерфейсом и интеграцией внешних API.",
    features: ["🚀 Высокая скорость", "🔒 Безопасность", "🔄 Интеграция API"],
    price: "от 100 000 ₽",
    icon: <FaLaptopCode className={styles.serviceIcon} />,
  },
  "seo": {
    title: "SEO анализ и продвижение",
    description: "Оптимизация сайтов под поисковые системы, увеличение видимости и привлечение целевой аудитории.",
    details: "Мы проводим комплексный аудит вашего сайта, устраняем технические ошибки и улучшаем контент.",
    features: ["📊 Анализ конкурентов", "🔍 SEO-оптимизация", "📢 Контент-маркетинг"],
    price: "от 30 000 ₽",
    icon: <FaSearch className={styles.serviceIcon} />,
  },
  "marketing": {
    title: "Маркетинг и реклама",
    description: "Разработка и запуск рекламных кампаний для увеличения трафика и конверсий.",
    details: "Наши специалисты анализируют вашу аудиторию и разрабатывают стратегию продвижения в интернете.",
    features: ["🎯 Таргетированная реклама", "📢 Контент-стратегия", "📈 Аналитика и рост"],
    price: "от 40 000 ₽",
    icon: <FaBullhorn className={styles.serviceIcon} />,
  },
};

export async function generateStaticParams() {
  return Object.keys(serviceData).map((id) => ({ id }));
}

export default function ServiceDetail({ params }) {
  const service = serviceData[params.id];

  if (!service) {
    return <p>Услуга не найдена</p>;
  }

  const otherServices = Object.entries(serviceData)
    .filter(([key]) => key !== params.id)
    .map(([key, data]) => ({ key, ...data }));

  return (
    <div className={styles.servicePage}>
      <div className={styles.header}>
        <h1>{service.title}</h1>
        <p>{service.description}</p>
      </div>

      <div className={styles.serviceContent}>
        <div className={styles.serviceIconContainer}>{service.icon}</div>
        <p className={styles.serviceDetails}>{service.details}</p>
      </div>

      <div className={styles.features}>
        <h2>Что входит в услугу:</h2>
        <ul>
          {service.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className={styles.priceBlock}>
        <h2>Стоимость:</h2>
        <p>{service.price}</p>
      </div>

      <div className={styles.ctaContainer}>
        <a href="/#contact" className={styles.ctaButton}>Заказать услугу</a>
      </div>

      <div className={styles.otherServices}>
        <h2>Другие услуги</h2>
        <div className={styles.servicesGrid}>
          {otherServices.map((s) => (
            <a key={s.key} href={`/services/${s.key}`} className={styles.serviceCard}>
              <div className={styles.serviceIconContainer}>{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
