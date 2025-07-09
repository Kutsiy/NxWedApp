"use client";
import { NextPage } from "next";
import styles from "./page.module.scss";
import Dropdown from "../../components/dropdown/dropdown";
import DropItem from "../../components/dropitem/dropitem";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { ReactNode } from "react";
import { BsFillTerminalFill } from "react-icons/bs";
import { FaRegCircle } from "react-icons/fa";
import { RiGamepadFill } from "react-icons/ri";
import { usePathname } from "next/navigation";
import Link from "next/link";
import AboutAccordion from "../../components/about_accordion/about_accordion";

interface Props {
  children: ReactNode;
}

const AboutPage: NextPage<Props> = ({ children }: Props) => {
  const pathName = usePathname();

  return (
    <div className={styles.about__wrapper}>
      <div className={styles.about__menu}>
        <div className={styles.about__pages}>
          <div
            className={styles.about__page}
            style={{
              color:
                pathName === "/about/professional-info"
                  ? "rgba(202, 213, 226, 1)"
                  : "rgba(98, 116, 142, 1)",
            }}
          >
            <Link href="/about/professional-info">
              <BsFillTerminalFill />
            </Link>
          </div>
          <div
            className={styles.about__page}
            style={{
              color:
                pathName === "/about/personal-info"
                  ? "rgba(202, 213, 226, 1)"
                  : "rgba(98, 116, 142, 1)",
            }}
          >
            <Link href="/about/personal-info">
              <FaRegCircle />
            </Link>
          </div>
          <div
            className={styles.about__page}
            style={{
              color:
                pathName === "/about/hobbies"
                  ? "rgba(202, 213, 226, 1)"
                  : "rgba(98, 116, 142, 1)",
            }}
          >
            <Link href="/about/hobbies">
              <RiGamepadFill />
            </Link>
          </div>
        </div>
        <div className={styles.about__accordion}>
          <AboutAccordion />
          <Dropdown title="contacts" topBorder={true} opened>
            <DropItem icon={<IoMdMail />}>user@gmail.com</DropItem>
            <DropItem icon={<FaPhoneAlt />} iconSize="1.4rem">
              +3598246359
            </DropItem>
          </Dropdown>
        </div>
      </div>
      <div className={styles.about__content}>
        <div className={styles.about__content_top}></div>
        <div className={styles.about__content_block}>{children}</div>
      </div>
    </div>
  );
};

export default AboutPage;
