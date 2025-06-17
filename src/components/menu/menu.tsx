import Link from "next/link";
import styles from "./menu.module.scss";

const Menu = ({}) => {
  return (
    <nav className={styles.menu__nav}>
      <div className={styles.menu__nav_title}># navigate:</div>
      <Link href="/">
        <div className={styles.menu__nav_btn}>_hello</div>
      </Link>
      <Link href="/about">
        <div className={styles.menu__nav_btn}>_about-me</div>
      </Link>
      <Link href="/projects">
        <div className={styles.menu__nav_btn}>_projects</div>
      </Link>
      <Link href="/contacts">
        <div className={styles.menu__nav_btn}>_contact-me</div>
      </Link>
    </nav>
  );
};

export default Menu;
