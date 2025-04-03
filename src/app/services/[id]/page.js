import Head from "next/head";
import styles from "../services.module.css";
import { FaBuilding, FaShoppingCart, FaLaptopCode, FaSearch, FaBullhorn } from "react-icons/fa";

const serviceData = {
  "corporate-sites": {
    title: "Корпоративные сайты",
    description: "Создаём корпоративные сайты, которые не просто отражают ваш бренд, а работают на его развитие. Мы создаём уникальные и эффективные решения для вашего бизнеса, увеличивая вашу видимость и привлекательность для клиентов.",
    details: "Мы разрабатываем корпоративные сайты, которые не просто эстетичны, но и эффективно функционируют. Используя новейшие технологии и SEO-оптимизацию, мы помогаем вашему бизнесу выделиться и достичь максимальных результатов.",
    features: [
      "🔥 Эксклюзивный дизайн, который выделяет ваш бренд среди конкурентов",
      "⚡️ Высокая скорость загрузки для максимального комфорта пользователей",
      "🔗 Интеграция с передовыми CRM и бизнес-системами",
      "📊 Развёрнутая аналитика для точного понимания поведения вашей аудитории"
    ],
    price: "от 50 000 ₽",
    timeline: "от 2 недель",
    icon: <FaBuilding className={ styles.serviceIcon } />,
  },
  "ecommerce": {
    title: "Интернет-магазины",
    description: "Создаём интернет-магазины, которые не только увеличивают продажи, но и формируют доверие к вашему бренду. Ваши клиенты оценят удобство, а вы — результаты.",
    details: "Каждый интернет-магазин создаётся с учётом ваших бизнес-потребностей. Мы реализуем удобные каталоги, автоматизируем процессы продаж и подключаем платёжные системы, чтобы ваш магазин работал безупречно.",
    features: [
      "🛒 Удобная навигация и каталог для лёгкого выбора товаров",
      "💳 Подключение современных и безопасных платёжных систем",
      "📈 Интеграция аналитики для отслеживания эффективности продаж",
      "🔄 Синхронизация с 1С и другими бизнес-инструментами"
    ],
    price: "от 80 000 ₽",
    timeline: "от 3 недель",
    icon: <FaShoppingCart className={ styles.serviceIcon } />,
  },
  "web-apps": {
    title: "Веб-приложения",
    description: "Разрабатываем сложные веб-приложения, которые упрощают бизнес-процессы, повышают эффективность и открывают новые возможности для масштабирования.",
    details: "Наша команда создаёт высоконагруженные и надёжные веб-приложения, полностью адаптированные под ваши задачи. Современные технологии, высокая производительность и интуитивный интерфейс — это основа наших решений.",
    features: [
      "🚀 Максимальная производительность и устойчивость к высоким нагрузкам",
      "🔒 Усиленная защита данных и безопасность пользователей",
      "🔄 Интеграция с любыми внешними API для расширения функциональности"
    ],
    price: "от 100 000 ₽",
    timeline: "от 4 недель",
    icon: <FaLaptopCode className={ styles.serviceIcon } />,
  },
  "seo": {
    title: "SEO анализ и продвижение",
    description: "Выводим сайты на первые позиции в поисковых системах. Увеличиваем трафик, конверсии и создаём устойчивый поток клиентов.",
    details: "Наши эксперты проводят детальный аудит вашего сайта, устраняют ошибки и внедряют комплексные SEO-решения, которые делают ваш сайт видимым. Мы не просто приводим трафик — мы обеспечиваем вас клиентами.",
    features: [
      "📊 Полный анализ конкурентов для понимания рынка",
      "🔍 SEO-оптимизация, соответствующая всем актуальным трендам",
      "📢 Контент-маркетинг с акцентом на вовлечение аудитории"
    ],
    price: "от 30 000 ₽",
    timeline: "от 1 недели",
    icon: <FaSearch className={ styles.serviceIcon } />,
  },
  "marketing": {
    title: "Маркетинг и реклама",
    description: "Разрабатываем и реализуем маркетинговые стратегии, которые делают ваш бренд узнаваемым, а ваш бизнес — прибыльным.",
    details: "Мы анализируем вашу аудиторию, создаём уникальные рекламные кампании и контент, который привлекает и удерживает клиентов. Постоянный контроль и оптимизация стратегии обеспечивают максимальную отдачу от вложений.",
    features: [
      "🎯 Индивидуальная настройка таргетинга для максимального попадания в целевую аудиторию",
      "📢 Создание контента, который привлекает и удерживает внимание",
      "📈 Регулярный мониторинг и оптимизация для увеличения ROI"
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
      <title>{service.title}</title>
      <meta name="description" content={service.description} />
    </Head>
      <div className={ styles.servicePage }>
        {/* Hero Section */ }
        <section className={ styles.header }>
          <h1>{ service.title }</h1>
          <p>{ service.description }</p>
          <p>Не теряйте возможности! Закажите сайт под ключ у профессионалов, который будет отвечать всем вашим требованиям. Мы предлагаем полный цикл услуг: от разработки до поддержки, чтобы ваш бизнес был всегда на высоте.</p>
        </section>

        {/* Service Content Section */ }
        <section className={ styles.serviceContent }>
          <div className={ styles.serviceIconContainer }>{ service.icon }</div>
          <p className={ styles.serviceDetails }>{ service.details }</p>
          <p>Хотите заказать сайт, который не только красиво выглядит, но и привлекает клиентов? Мы создаём сайты, которые способствуют росту вашего бизнеса. Закажите сайт под ключ, и мы обеспечим его успешную работу с первых дней.</p>
        </section>

        {/* Price and Timeline Section */ }
        <section className={ styles.priceBlock }>
          <h2>Стоимость и сроки</h2>
          <p>
            <span className={ styles.price }>Стоимость: { service.price }</span> <br />
            <span className={ styles.timeline }>Сроки: { service.timeline }</span>
          </p>
          <p>Мы предлагаем выгодные условия и гарантируем, что ваш сайт будет готов в максимально короткие сроки. Закажите сайт под ключ и получите качественный продукт с полным обслуживанием.</p>
          <a href="/#contact" className={ styles.ctaButton }>
            Заказать услугу
          </a>
        </section>

        {/* Features Section */ }
        <section className={ styles.features }>
          <h2>Что вы получите:</h2>
          <p>Преимущества наших решений включают в себя не только высококачественную разработку, но и комплексный подход. Мы работаем с каждым клиентом индивидуально, обеспечиваем полную поддержку и внедрение лучших технологий.</p>
          <ul>
            { service.features.map((feature, index) => (
              <li key={ index }>{ feature }</li>
            )) }
          </ul>
        </section>

        {/* Other Services Section */ }
        <section className={ styles.otherServices }>
          <h2>Другие услуги</h2>
          <div className={ styles.servicesGrid }>
            { otherServices.map((s) => (
              <a key={ s.key } href={ `/services/${s.key}` } className={ styles.serviceCard }>
                <div className={ styles.serviceIconContainer }>{ s.icon }</div>
                <h3>{ s.title }</h3>
                <p className={ styles.price }>{ s.price }</p>
              </a>
            )) }
          </div>
        </section>
      </div>
    </>
  );
}
