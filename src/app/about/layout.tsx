"use client";
import { NextPage } from "next";
import styles from "./page.module.scss";
import Dropdown from "../../components/dropdown/dropdown";
import DropItem from "../../components/dropitem/dropitem";
import { IoLogoMarkdown } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaFolder, FaPhoneAlt } from "react-icons/fa";
import { ReactNode } from "react";
import { BsFillTerminalFill } from "react-icons/bs";
import { FaRegCircle } from "react-icons/fa";
import { RiGamepadFill } from "react-icons/ri";
import { usePathname } from "next/navigation";
import Link from "next/link";

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
          <Dropdown title="personal-info">
            <Dropdown
              title={
                <DropItem icon={<FaFolder />} color="#FF637E">
                  bio
                </DropItem>
              }
              type="light"
            >
              <DropItem icon={<IoLogoMarkdown />}>Bfdfdfdfd</DropItem>
              <DropItem icon={<IoLogoMarkdown />}>fffddffdfdd</DropItem>
            </Dropdown>
            <Dropdown
              title={
                <DropItem icon={<FaFolder />} color="#00D5BE">
                  interests
                </DropItem>
              }
              type="light"
            >
              <DropItem icon={<IoLogoMarkdown />}>Bfdfdfdfd</DropItem>
              <DropItem icon={<IoLogoMarkdown />}>fffddffdfdd</DropItem>
            </Dropdown>
            <Dropdown
              title={
                <DropItem icon={<FaFolder />} color="#615FFF">
                  education
                </DropItem>
              }
              type="light"
            >
              <DropItem icon={<IoLogoMarkdown />}>high-school</DropItem>
              <DropItem icon={<IoLogoMarkdown />}>university</DropItem>
            </Dropdown>
          </Dropdown>
          <Dropdown title="contacts" topBorder={true}>
            <DropItem icon={<IoMdMail />}>user@gmail.com</DropItem>
            <DropItem icon={<FaPhoneAlt />} iconSize="1.4rem">
              +3598246359
            </DropItem>
          </Dropdown>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default AboutPage;
