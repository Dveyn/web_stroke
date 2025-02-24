import styles from './Button.module.css';

export const Button = ({ children, options }) => {
  return <button { ...options } className={ styles.btn }>{ children }</button>;
};
