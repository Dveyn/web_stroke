import { Button } from '@@/components/ui';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={ styles.hero }>
      <div class='.container'>
        <h1>Создаем сайты и приложения, которые работают на результат</h1>
        <p>Мы предлагаем современные решения для вашего бизнеса</p>
        <Button>Узнать больше</Button>
      </div>
    </section>
  );
};
