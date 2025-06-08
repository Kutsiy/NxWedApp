"use client";
import styles from "./footer.module.scss";

const Footer = ({}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__title}>find me in:</div>
      <div className={styles.footer__nav_bar}>
        <nav className={styles.footer__nav}>
          <div className={styles.footer__nav_btn}>_hello</div>
          <div className={styles.footer__nav_btn}>_hello</div>
        </nav>
        <div className={styles.footer__gap}></div>
      </div>
    </footer>
  );
};

export default Footer;
