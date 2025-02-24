import styles from "./page.module.css";
import { Advantages, Hero, ReviewCard, Workflow, FAQItem } from "@@/components/layout";

export default function Home() {
  return (
    <div className={ styles.page }>
      <Hero />
      <Advantages />
      <ReviewCard />
      <Workflow />
      <FAQItem />
    </div>
  );
}
