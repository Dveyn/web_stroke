import { notFound } from "next/navigation";
import styles from "../caseStudies.module.css"; // импорт стилей
import Head from "next/head";
import { BtnCta } from "@@/components/common/btnCta";

// Статичные данные кейсов
const caseStudyData = {
  "business-coach": {
    title: "Сайт для бизнес-коуча",
    description: "Мы создали уникальный интернет-магазин для бизнес-коуча, который не только позволяет клиентам записываться на консультации и оплачивать услуги, но и раскрывает потенциал каждой личности через современные методики работы. Этот сайт стал мощным инструментом для укрепления доверия клиентов и увеличения продаж.",
    details: "Комплексное решение включает в себя автоматизацию всех этапов взаимодействия с клиентами, начиная от записи и заканчивая аналитикой результатов. Подключены функции онлайн-оплаты, автоматических email-рассылок и система управления клиентами.",
    process: [
      "Глубокий анализ целевой аудитории и конкурентной среды;",
      "Создание уникального UX/UI дизайна, полностью ориентированного на комфорт пользователей;",
      "Интеграция с популярными платежными системами, обеспечивающими безопасные транзакции;",
      "Настройка CRM-системы для эффективного управления клиентами и их запросами;",
      "Оптимизация сайта для поисковых систем (SEO) с целью повышения видимости в интернете;",
      "Подключение инструментов для автоматических рассылок и аналитики эффективности услуг."
    ],
    result: "Внедрение сайта позволило увеличить поток клиентов на 40% и повысить продажи на 30%, а также укрепить репутацию коуча как эксперта в своей сфере.",
    price: "100 000 ₽",
    image: "/img/portfolio/avatar.png",
    timeline: "1 месяц"
  },
  "mattress-store": {
    title: "Интернет-магазин матрасов",
    description: "Разработан интернет-магазин, который позволяет покупателям легко создавать индивидуальные заказы, выбирать размеры, материалы и оформлять доставку на дом. Это решение помогло вывести бренд на новый уровень, сделав его узнаваемым и доступным.",
    details: "Современный и удобный магазин с интеграцией корзины товаров, системой CRM и функцией онлайн-оплаты. Проект направлен на повышение лояльности клиентов и упрощение процесса заказа.",
    process: [
      "Создание структуры и архитектуры сайта с упором на пользовательский опыт;",
      "Разработка удобного каталога товаров с настраиваемыми параметрами (размер, материал и т. д.);",
      "Интеграция магазина с системой 1С для учета заказов и складских остатков;",
      "Подключение популярных платежных систем для обеспечения удобства и безопасности транзакций;",
      "SEO-оптимизация сайта для увеличения видимости в поисковых системах;",
      "Проведение тестирования функционала и запуск маркетинговой кампании."
    ],
    result: "За первый месяц после запуска продажа матрасов увеличилась на 25%, что способствовало росту доверия к бренду.",
    price: "150 000 ₽",
    image: "/img/portfolio/matras.png",
    timeline: "2 месяца"
  },
  "game-server": {
    title: "Сайт для игрового сервера",
    description: "Мы создали сайт для игрового сервера, который стал центром взаимодействия для игроков. Здесь можно зарегистрироваться, пополнить баланс, ознакомиться с правилами и рейтингами, а также получить поддержку.",
    details: "Панель управления сервера обеспечивает простоту администрирования, а оптимизация интерфейса делает работу сайта максимально удобной для пользователей.",
    process: [
      "Глубокий аудит текущего состояния игрового сервера и анализа потребностей пользователей;",
      "Разработка интуитивно понятного интерфейса для облегчения взаимодействия игроков с сайтом;",
      "Интеграция внешних API для добавления уникального функционала;",
      "Создание мощной панели управления для администраторов сервера;",
      "Оптимизация производительности сайта для обеспечения стабильной и быстрой работы;",
      "SEO-оптимизация для привлечения новой аудитории и улучшения позиции в поиске."
    ],
    result: "Активность игроков выросла на 50%, что значительно усилило вовлечённость и популярность сервера.",
    price: "120 000 ₽",
    image: "/img/portfolio/merstone.png",
    timeline: "1 месяц"
  },
  "lawyer-landing": {
    title: "Лендинг для адвоката",
    description: "Создан современный лендинг для адвоката, который специализируется на банкротстве физических лиц. Этот сайт подчёркивает профессионализм специалиста, предоставляет полезную информацию и включает отзывы довольных клиентов.",
    details: "Адаптивный дизайн сайта делает его доступным на всех устройствах. Интеграция с CRM позволяет легко управлять клиентами, а SEO-оптимизация привлекает больше трафика.",
    process: [
      "Разработка индивидуального дизайна, который отвечает ожиданиям целевой аудитории;",
      "Создание структуры и оптимизация текстового контента для понятного представления услуг;",
      "Интеграция системы управления клиентами для автоматизации обработки запросов;",
      "Подключение формы записи на консультации и возможности онлайн-обратной связи;",
      "SEO-оптимизация для увеличения органического трафика;",
      "Тестирование сайта на всех устройствах и браузерах перед запуском."
    ],
    result: "Конверсия записей на консультацию увеличилась на 35%, а доверие клиентов к услугам значительно укрепилось.",
    price: "60 000 ₽",
    image: "/img/portfolio/spisanie.png",
    timeline: "1 месяц"
  },
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
