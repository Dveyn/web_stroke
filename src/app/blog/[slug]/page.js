import Link from "next/link";
import Image from "next/image";
import styles from "../blog.module.css";
import { blogPosts } from "@@/data/blogPosts";
import { notFound } from "next/navigation";

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

const getPostBySlug = (slug) => blogPosts.find((post) => post.slug === slug);

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return {
    title: `${post.title} | Блог студии ВебШтрих`,
    description: post.excerpt,
    alternates: {
      canonical: `https://webstroke.ru/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://webstroke.ru/blog/${post.slug}`,
      images: [
        {
          url: post.heroImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default function BlogArticlePage({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((item) => item.slug !== post.slug && (item.category === post.category || item.tags.some((tag) => post.tags.includes(tag))))
    .slice(0, 3);

  return (
    <article className={ styles.articlePage }>
      <Link href="/blog" className={ styles.backLink }>
        ← Назад ко всем материалам
      </Link>

      <header className={ styles.articleHero }>
        <h1>{ post.title }</h1>
        <div className={ styles.articleMeta }>
          <span>{ formatDate(post.publishedAt) }</span>
          <span>{ post.category }</span>
          <span>{ post.readingTime }</span>
        </div>
        <Image
          src={ post.heroImage }
          alt={ post.title }
          width={ 1200 }
          height={ 630 }
          className={ styles.heroImage }
          priority={ false }
        />
      </header>

      <div className={ styles.articleContent }>
        { post.content.map((section) => (
          <section key={ section.heading } className={ styles.articleSection }>
            <h2>{ section.heading }</h2>
            { section.paragraphs?.map((paragraph, index) => (
              <p key={ index }>{ paragraph }</p>
            )) }
            { section.list && (
              <ul className={ styles.articleList }>
                { section.list.map((item) => (
                  <li key={ item }>{ item }</li>
                )) }
              </ul>
            ) }
          </section>
        )) }
      </div>

      { relatedPosts.length > 0 && (
        <section className={ styles.relatedSection }>
          <h2>Рекомендуем также</h2>
          <div className={ styles.relatedGrid }>
            { relatedPosts.map((item) => (
              <Link key={ item.slug } href={ `/blog/${item.slug}` } className={ styles.relatedCard }>
                <h3>{ item.title }</h3>
                <p>{ item.excerpt }</p>
                <span>{ formatDate(item.publishedAt) }</span>
              </Link>
            )) }
          </div>
        </section>
      ) }
    </article>
  );
}
