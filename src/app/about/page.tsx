import { NextPage } from "next";
import styles from "./page.module.scss";
import Dropdown from "../../components/dropdown/dropdown";
import DropItem from "../../components/dropitem/dropitem";
import { IoLogoMarkdown } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaFolder, FaPhoneAlt } from "react-icons/fa";

const AboutPage: NextPage = ({}) => {
  return (
    <div className={styles.about__wrapper}>
      <div className={styles.about__menu}>
        <div className={styles.about__pages}></div>
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
    </div>
  );
};

export default AboutPage;
