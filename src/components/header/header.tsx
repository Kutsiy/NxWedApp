"use client";
import styles from "./header.module.scss";
const Header = ({}) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__title}>michael-weaver</div>
      <div className={styles.header__nav_bar}>
        <nav className={styles.header__nav}>
          <div className={styles.header__nav_btn}>_hello</div>
          <div className={styles.header__nav_btn}>_about-me</div>
          <div className={styles.header__nav_btn}>_projects</div>
        </nav>
        <div className={styles.header__contact}>_contact-me</div>
      </div>
    </header>
  );
};

export default Header;
