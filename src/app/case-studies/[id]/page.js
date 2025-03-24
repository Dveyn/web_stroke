import { notFound } from "next/navigation";
import styles from "../caseStudies.module.css"; // импорт стилей

// Статичные данные кейсов
const caseStudyData = {
  "business-coach": {
    title: "Сайт для бизнес-коуча",
    description: "Создание интернет-магазина для бизнес-коуча, предоставляющего услуги по составлению матриц судьбы и персональных консультаций. Сайт включает возможность записи на консультации, оплаты услуг и отображения информации о методиках работы.",
    details: "Создано эффективное веб-приложение для управления курсами и консультациями. Включает онлайн-оплату, аналитику и автоматические рассылки.",
    process: [
      "Разработка UX/UI дизайна",
      "Интеграция с платежными системами",
      "Настройка CRM для коуча",
      "SEO оптимизация сайта"
    ],
    result: "Увеличение клиентского потока на 40% и рост продаж на 30% после внедрения сайта.",
    price: "100 000 ₽", // фиксированная цена
    image: "/img/portfolio/avatar.png", // путь к картинке
    timeline: "1 месяц" // срок выполнения
  },
  "mattress-store": {
    title: "Интернет-магазин матрасов",
    description: "Разработка интернет-магазина для частного производства матрасов под заказ. Сайт позволяет клиентам выбирать размеры, материалы и оформлять заказы с доставкой на дом.",
    details: "Магазин включает в себя интеграцию с CRM-системами и полноценную корзину товаров, возможность онлайн-оплаты.",
    process: [
      "Разработка удобного каталога товаров",
      "Интеграция с системой 1С",
      "Интеграция с платежными системами",
      "SEO-оптимизация магазина"
    ],
    result: "Продажи увеличились на 25% за первый месяц работы сайта.",
    price: "150 000 ₽", // фиксированная цена
    image: "/img/portfolio/matras.png", // путь к картинке
    timeline: "2 месяца" // срок выполнения
  },
  "game-server": {
    title: "Сайт для игрового сервера",
    description: "Создание сайта для игрового сервера, который позволяет игрокам регистрироваться, пополнять баланс, знакомиться с таблицей рейтинга и получать информацию о сервере. Сайт также включает раздел с правилами и поддержкой для игроков.",
    details: "Проект включает в себя панель управления, а также оптимизацию работы сервера и пользовательского интерфейса.",
    process: [
      "Интеграция с внешними API",
      "Разработка функционала управления сервером",
      "Оптимизация производительности",
      "SEO-оптимизация"
    ],
    result: "Рост активности игроков на 50% после внедрения новых функций.",
    price: "120 000 ₽", // фиксированная цена
    image: "/img/portfolio/merstone.png", // путь к картинке
    timeline: "1 месяц" // срок выполнения
  },
  "lawyer-landing": {
    title: "Лендинг для адвоката",
    description: "Разработка лендинга для адвоката, специализирующегося на банкротстве физических лиц. Сайт включает информацию об услугах, отзывы клиентов и форму записи на консультацию.",
    details: "Включает адаптивный дизайн, форму для записи на консультацию, интеграцию с CRM-системами.",
    process: [
      "Создание дизайна под целевую аудиторию",
      "Интеграция с системой управления клиентами",
      "SEO оптимизация страницы"
    ],
    result: "Конверсия записей на консультацию увеличилась на 35%.",
    price: "60 000 ₽", // фиксированная цена
    image: "/img/portfolio/spisanie.png", // путь к картинке
    timeline: "1 месяц" // срок выполнения
  },
};

export async function generateStaticParams() {
  return Object.keys(caseStudyData).map((id) => ({ id }));
}

const CaseStudy = ({ params }) => {
  const { id } = params; // Получаем id из URL
  const caseStudy = caseStudyData[id];

  // Если кейс не найден, показываем 404
  if (!caseStudy) {
    notFound();
  }

  const otherCaseStudies = Object.entries(caseStudyData)
    .filter(([key]) => key !== id)
    .map(([key, data]) => ({ key, ...data }));

  return (
    <div className={styles.caseStudyPage}>
      <div className={styles.caseStudyHeader}>
        <h1 className={styles.title}>{caseStudy.title}</h1>
        <p className={styles.description}>{caseStudy.description}</p>
      </div>

      <div className={styles.caseStudyContent}>
        <div className={styles.caseIconContainer}>
          <img src={caseStudy.image} alt={caseStudy.title} className={styles.caseImage} />
        </div>
        <p className={styles.caseDetails}>{caseStudy.details}</p>
      </div>

      <div className={styles.process}>
        <h2 className={styles.processTitle}>Процесс работы:</h2>
        <ul className={styles.processList}>
          {caseStudy.process.map((step, index) => (
            <li key={index} className={styles.processItem}>{step}</li>
          ))}
        </ul>
      </div>

      <div className={styles.results}>
        <h2 className={styles.resultsTitle}>Результаты:</h2>
        <p>{caseStudy.result}</p>
      </div>

      <div className={styles.priceBlock}>
        <h2>Стоимость:</h2>
        <p>{caseStudy.price}</p>
      </div>

      <div className={styles.timelineBlock}>
        <h2>Сроки выполнения:</h2>
        <p>{caseStudy.timeline}</p>
      </div>

      <div className={styles.ctaContainer}>
        <a href="/#contact" className={styles.ctaButton}>Заказать услугу</a>
      </div>

      <div className={styles.otherCaseStudies}>
        <h2>Другие кейсы</h2>
        <div className={styles.servicesGrid}>
          {otherCaseStudies.map((caseStudy) => (
            <a key={caseStudy.key} href={`/case-studies/${caseStudy.key}`} className={styles.caseCard}>
              <div className={styles.caseIconContainer}>
                <img src={caseStudy.image} alt={caseStudy.title} className={styles.caseImage} />
              </div>
              <h3>{caseStudy.title}</h3>
              <p>{caseStudy.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
