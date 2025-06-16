"use client";
import Link from "next/link";
import styles from "./header.module.scss";
import { usePathname } from "next/navigation";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { useState } from "react";
import { useHeaderStore } from "@/stores/header/header-store-provider";
const Header = ({}) => {
  const pathName = usePathname();
  const [mobileMenuOpen, mobileMenuOpenChange] = useState(false);
  const openMenu = useHeaderStore((state) => state.openMenu);
  const closeMenu = useHeaderStore((state) => state.closeMenu);

  const changeModileMenuOpenStatus = () => {
    if (mobileMenuOpen) {
      mobileMenuOpenChange(false);
      closeMenu();
    } else {
      mobileMenuOpenChange(true);
      openMenu();
    }
    console.log(mobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <Link href="/">
        <div className={styles.header__title}>egor_kutsiy</div>
      </Link>
      <div className={styles.header__mobile_menu}>
        {mobileMenuOpen ? (
          <IoMdClose onClick={changeModileMenuOpenStatus} />
        ) : (
          <IoIosMenu onClick={changeModileMenuOpenStatus} />
        )}
      </div>
      <div className={styles.header__nav_bar}>
        <nav className={styles.header__nav}>
          <Link href="/">
            <div
              className={styles.header__nav_btn}
              style={{
                borderBottom: pathName === "/" ? "2px solid #FFDA61" : "none",
              }}
            >
              _hello
            </div>
          </Link>
          <Link href="/about">
            <div
              className={styles.header__nav_btn}
              style={{
                borderBottom:
                  pathName === "/about" ? "2px solid #FFDA61" : "none",
              }}
            >
              _about-me
            </div>
          </Link>
          <Link href="/projects">
            <div
              className={styles.header__nav_btn}
              style={{
                borderBottom:
                  pathName === "/projects" ? "2px solid #FFDA61" : "none",
              }}
            >
              _projects
            </div>
          </Link>
        </nav>
        <Link href="/contacts">
          <div
            className={styles.header__contact}
            style={{
              borderBottom:
                pathName === "/contacts" ? "2px solid #FFDA61" : "none",
            }}
          >
            _contact-me
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
