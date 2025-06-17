import Link from "next/link";
import styles from "./menu.module.scss";
import { useHeaderStore } from "@/stores/header/header-store-provider";

const Menu = ({}) => {
  const closeMenu = useHeaderStore((state) => state.closeMenu);

  return (
    <nav className={styles.menu__nav}>
      <div className={styles.menu__nav_title}># navigate:</div>
      <Link href="/">
        <div className={styles.menu__nav_btn} onClick={closeMenu}>
          _hello
        </div>
      </Link>
      <Link href="/about">
        <div className={styles.menu__nav_btn} onClick={closeMenu}>
          _about-me
        </div>
      </Link>
      <Link href="/projects">
        <div className={styles.menu__nav_btn} onClick={closeMenu}>
          _projects
        </div>
      </Link>
      <Link href="/contacts">
        <div className={styles.menu__nav_btn} onClick={closeMenu}>
          _contact-me
        </div>
      </Link>
    </nav>
  );
};

export default Menu;
