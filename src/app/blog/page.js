import Link from "next/link";
import styles from "./blog.module.css";
import { blogPosts, categories } from "@@/data/blogPosts";

const POSTS_PER_PAGE = 3;

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

export const metadata = {
  title: "Блог студии ВебШтрих | Экспертиза по сайтам, SEO и маркетингу",
  description:
    "Статьи студии ВебШтрих: кейсы, SEO, маркетинг и стратегии роста бизнеса в Ростове-на-Дону. Практические чеклисты и тренды для владельцев компаний.",
  alternates: {
    canonical: "https://webstroke.ru/blog",
  },
};

const buildQuery = (params) => {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      query.set(key, value);
    }
  });
  const queryString = query.toString();
  return queryString ? `?${queryString}` : "";
};

export default function BlogPage({ searchParams }) {
  const selectedCategory = searchParams?.category ?? "all";
  const currentPage = Number.parseInt(searchParams?.page ?? "1", 10) || 1;

  const filteredPosts = selectedCategory === "all"
    ? blogPosts
    : blogPosts.filter((post) => post.category === selectedCategory);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  const startIndex = (safePage - 1) * POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <div className={ styles.blogPage }>
      <section className={ styles.hero }>
        <h1>Блог студии ВебШтрих</h1>
        <p>
          Делимся опытом разработки сайтов, SEO-продвижения и digital-маркетинга. Здесь вы найдёте
          чеклисты, кейсы и тренды, которые помогают малому и среднему бизнесу в Ростове-на-Дону расти быстрее.
        </p>
      </section>

      <div className={ styles.filters }>
        <CategoryButton
          label="Все материалы"
          isActive={ selectedCategory === "all" }
          href="/blog"
        />
        { categories.map((category) => (
          <CategoryButton
            key={ category }
            label={ category }
            isActive={ selectedCategory === category }
            href={`/blog${buildQuery({ category, page: "1" })}`}
          />
        )) }
      </div>

      <div className={ styles.postsGrid }>
        { currentPosts.map((post) => (
          <Link key={ post.slug } href={`/blog/${post.slug}`} className={ styles.postCard }>
            <img src={ post.heroImage } alt={ post.title } className={ styles.postImage } loading="lazy" />
            <div className={ styles.postBody }>
              <div className={ styles.postMeta }>
                <span>{ post.category }</span>
                <span>{ formatDate(post.publishedAt) }</span>
                <span>{ post.readingTime }</span>
              </div>
              <h2>{ post.title }</h2>
              <p className={ styles.postExcerpt }>{ post.excerpt }</p>
              <div className={ styles.tagList }>
                { post.tags.map((tag) => (
                  <span key={ tag } className={ styles.tag }>{ tag }</span>
                )) }
              </div>
              <span className={ styles.readMore }>
                Читать статью <span>→</span>
              </span>
            </div>
          </Link>
        )) }
      </div>

      { totalPages > 1 && (
        <Pagination
          totalPages={ totalPages }
          currentPage={ safePage }
          selectedCategory={ selectedCategory }
        />
      ) }
    </div>
  );
}

const CategoryButton = ({ label, href, isActive }) => (
  <Link
    href={ href }
    className={ `${styles.filterButton} ${isActive ? styles.filterButtonActive : ""}` }
    scroll={ false }
  >
    { label }
  </Link>
);

const Pagination = ({ totalPages, currentPage, selectedCategory }) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav className={ styles.pagination } aria-label="Навигация по страницам блога">
      { pages.map((pageNumber) => {
        const query = buildQuery({
          category: selectedCategory !== "all" ? selectedCategory : undefined,
          page: pageNumber.toString(),
        });
        const href = `/blog${query}`;
        const isActive = currentPage === pageNumber;

        return (
          <Link
            key={ pageNumber }
            href={ href }
            className={ `${styles.pageLink} ${isActive ? styles.pageLinkActive : ""}` }
            scroll={ false }
          >
            { pageNumber }
          </Link>
        );
      }) }
    </nav>
  );
};
