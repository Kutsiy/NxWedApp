"use client";
import { NextPage } from "next";
import styles from "./page.module.scss";
import Dropdown from "../../components/dropdown/dropdown";
import DropItem from "../../components/dropitem/dropitem";
import { IoIosClose, IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { ReactNode, useEffect, useState } from "react";
import { BsFillTerminalFill } from "react-icons/bs";
import { FaRegCircle } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import AboutAccordion from "../../components/about_accordion/about_accordion";
import { useAboutStore } from "@/stores/about/about-store-provider";

interface Props {
  children: ReactNode;
}

const AboutPage: NextPage<Props> = ({ children }: Props) => {
  const pathName = usePathname();
  const router = useRouter();
  const { aboutNav, deleteFromAboutNav } = useAboutStore((state) => state);
  const [currentPath, changeCurrentPath] = useState("/about/professional-info");
  useEffect(() => {
    changeCurrentPath(pathName.split("/").slice(0, 3).join("/"));
  }, [pathName]);

  useEffect(() => {
    if (!aboutNav.length) {
      router.replace(currentPath);
    }
  }, [aboutNav.length, currentPath, router]);

  const close = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    name: string
  ) => {
    event.preventDefault();
    event.stopPropagation();
    deleteFromAboutNav(name);
    router.replace(currentPath);
  };

  return (
    <div className={styles.about__wrapper}>
      <div className={styles.about__menu}>
        <div className={styles.about__pages}>
          <div
            className={styles.about__page}
            style={{
              color: pathName.startsWith("/about/professional-info")
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
              color: pathName.startsWith("/about/personal-info")
                ? "rgba(202, 213, 226, 1)"
                : "rgba(98, 116, 142, 1)",
            }}
          >
            <Link href="/about/personal-info">
              <FaRegCircle />
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
        <div className={styles.about__content_top}>
          {aboutNav &&
            aboutNav.map(({ name, href }, index) => {
              return (
                <Link
                  href={`${href}/${name}`}
                  key={index}
                  className={styles.about__content_top_tab}
                >
                  {name}
                  <span
                    onClick={(event) => {
                      close(event, name);
                    }}
                  >
                    <IoIosClose />
                  </span>
                </Link>
              );
            })}
        </div>
        <div className={styles.about__content_block}>{children}</div>
      </div>
    </div>
  );
};

export default AboutPage;
