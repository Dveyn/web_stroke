import { notFound } from "next/navigation";
import styles from "../caseStudies.module.css"; // импорт стилей
import Head from "next/head";
import { BtnCta } from "@@/components/common/btnCta";

// Статичные данные кейсов
const caseStudyData = {
  "business-coach": {
    title: "Сайт для бизнес-коуча",
    description: "Создали интернет-магазин для бизнес-коуча с удобной записью на консультации и оплатой услуг, который помогает раскрыть потенциал клиентов и увеличить продажи.",
    details: "Реализована автоматизация взаимодействия с клиентами — от записи до аналитики. Встроены онлайн-оплата, email-рассылки и CRM для удобного управления клиентами.",
    process: [
      "Анализ целевой аудитории и конкурентов",
      "Уникальный UX/UI дизайн, ориентированный на комфорт пользователей",
      "Интеграция с безопасными платежными системами",
      "Настройка CRM-системы для управления клиентами",
      "SEO-оптимизация для повышения видимости сайта",
      "Подключение инструментов рассылок и аналитики"
    ],
    result: "Поток клиентов вырос на 40%, продажи увеличились на 30%, укреплена репутация коуча как эксперта.",
    price: "100 000 ₽",
    image: "/img/portfolio/avatar.png",
    timeline: "1 месяц"
  },
  "mattress-store": {
    title: "Интернет-магазин матрасов",
    description: "Разработан удобный интернет-магазин с возможностью создания индивидуальных заказов, выбора параметров и доставки на дом.",
    details: "Создан современный магазин с корзиной, CRM и онлайн-оплатой. Решение повышает лояльность клиентов и упрощает процесс заказа.",
    process: [
      "Проектирование структуры и UX с упором на удобство пользователя",
      "Разработка каталога товаров с настраиваемыми параметрами (размер, материал и др.)",
      "Интеграция с 1С для учета заказов и остатков",
      "Подключение популярных платежных систем",
      "SEO-оптимизация для роста видимости",
      "Тестирование функционала и запуск маркетинга"
    ],
    result: "Продажи выросли на 25% в первый месяц после запуска, увеличилось доверие к бренду.",
    price: "150 000 ₽",
    image: "/img/portfolio/matras.png",
    timeline: "2 месяца"
  },
  "game-server": {
    title: "Сайт для игрового сервера",
    description: "Создан сайт для игрового сервера с регистрацией, пополнением баланса, правилами, рейтингами и поддержкой игроков.",
    details: "Разработана панель управления для администраторов и оптимизирован удобный интерфейс для пользователей.",
    process: [
      "Аудит сервера и анализ потребностей игроков",
      "Проектирование интуитивного интерфейса",
      "Интеграция внешних API для расширения функционала",
      "Создание панели управления для админов",
      "Оптимизация производительности сайта",
      "SEO для привлечения новой аудитории"
    ],
    result: "Активность игроков выросла на 50%, улучшена вовлеченность и популярность сервера.",
    price: "120 000 ₽",
    image: "/img/portfolio/merstone.png",
    timeline: "1 месяц"
  },
  "lawyer-landing": {
    title: "Лендинг для адвоката",
    description: "Современный лендинг для адвоката по банкротству физических лиц с профессиональным дизайном, отзывами клиентов и полезной информацией.",
    details: "Адаптивный дизайн, интеграция с CRM, формы записи и обратной связи, SEO-оптимизация для увеличения трафика.",
    process: [
      "Индивидуальный дизайн с учётом целевой аудитории",
      "Структурирование и оптимизация контента",
      "Интеграция CRM для автоматизации обработки запросов",
      "Формы записи и онлайн-консультаций",
      "SEO для роста органического трафика",
      "Тестирование на всех устройствах и браузерах"
    ],
    result: "Конверсия записей увеличилась на 35%, доверие клиентов значительно выросло.",
    price: "60 000 ₽",
    image: "/img/portfolio/spisanie.png",
    timeline: "1 месяц"
  },
  "connectmax": {
    title: "ConnectMax — каталог для Max",
    description: "Каталог чатов, ботов и каналов для мессенджера Max с удобным поиском, фильтрацией и добавлением проектов через модерацию.",
    details: "Создан масштабируемый каталог с высокой производительностью и удобным интерфейсом.",
    process: [
      "Анализ аудитории и конкурентов",
      "Проработка UX/UI и структуры каталога",
      "Разработка фронтенда и бэкенда",
      "Интеграция поиска и фильтров",
      "Тестирование и оптимизация",
      "Запуск и поддержка проекта"
    ],
    result: "Каталог получил положительные отзывы и помогает пользователям находить лучшие сообщества и ботов.",
    price: "от 120 000 ₽",
    timeline: "2 месяца",
    image: "/img/portfolio/connectmax.png"
  },
  maxflow: {
    title: "MaxFlow — прототип рекламной сети для Max",
    description: "Демо-платформа, которая помогает быстро тестировать запуск рекламы в мессенджере Max и получать первые результаты.",
    details: "Прототип сервиса с базовым функционалом: понятный интерфейс, личный кабинет и автоматический подбор каналов. Это минимально жизнеспособный продукт (MVP) для демонстрации возможностей и сбора обратной связи.",
    process: [
      "Обсуждение с заказчиком концепции и требований",
      "Разработка простого и понятного дизайна",
      "Создание базового личного кабинета для управления рекламой",
      "Настройка автоматического подбора каналов",
      "Показ демо, сбор и внедрение обратной связи",
      "Запуск прототипа и обучение заказчика"
    ],
    result: "Успешно создан прототип, позволяющий экономить время и ресурсы на запуск рекламы, а также собирающий данные для дальнейшей доработки.",
    price: "от 180 000 ₽",
    timeline: "1,5 месяца",
    image: "/img/portfolio/maxflow.png"
  }
};

export async function generateMetadata({ params }) {
  const { id } = params; // Получаем id из URL
  const caseStudy = caseStudyData[id];

  // Если кейс не найден, показываем 404
  if (!caseStudy) {
    notFound();
  }

  return {
    title: `Кейс - ${caseStudy.title} | ВебШтрих`,
    description: caseStudy.description,
    openGraph: {
      title: `Кейс - ${caseStudy.title} | ВебШтрих`,
      description: caseStudy.description,
      images: [caseStudy.image], // Можно добавить изображение для Open Graph
    },
  };
}

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
    <>
      <Head>
        <title>{ caseStudy.title }</title>
        <meta name="description" content={ caseStudy.description } />
      </Head>
      <div className={ styles.caseStudyPage }>
        <div className={ styles.caseStudyHeader }>
          <h1 className={ styles.title }>{ caseStudy.title }</h1>
          <p className={ styles.description }>{ caseStudy.description }</p>
        </div>

        <div className={ styles.caseStudyContent }>
          <div className={ styles.caseIconContainer }>
            <img src={ caseStudy.image } alt={ caseStudy.title } className={ styles.caseImage } />
          </div>
          <p className={ styles.caseDetails }>{ caseStudy.details }</p>
        </div>

        <div className={ styles.process }>
          <h2 className={ styles.processTitle }>Процесс работы:</h2>
          <ul className={ styles.processList }>
            { caseStudy.process.map((step, index) => (
              <li key={ index } className={ styles.processItem }>{ step }</li>
            )) }
          </ul>
        </div>

        <div className={ styles.results }>
          <h2 className={ styles.resultsTitle }>Результаты:</h2>
          <p>{ caseStudy.result }</p>
        </div>

        <div className={ styles.priceBlock }>
          <h2>Стоимость:</h2>
          <p>{ caseStudy.price }</p>
        </div>

        <div className={ styles.timelineBlock }>
          <h2>Сроки выполнения:</h2>
          <p>{ caseStudy.timeline }</p>
        </div>
        <div className={ styles.ctaWrapper }>
          <BtnCta />
        </div>

        <div className={ styles.otherCaseStudies }>
          <h2>Другие кейсы</h2>
          <div className={ styles.servicesGrid }>
            { otherCaseStudies.map((caseStudy) => (
              <a key={ caseStudy.key } href={ `/case-studies/${caseStudy.key}` } className={ styles.caseCard }>
                <div className={ styles.caseIconContainer }>
                  <img src={ caseStudy.image } alt={ caseStudy.title } className={ styles.caseImage } />
                </div>
                <h3>{ caseStudy.title }</h3>
                <p>{ caseStudy.price }</p>
              </a>
            )) }
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudy;
