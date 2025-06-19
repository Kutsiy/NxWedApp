import { NextPage } from "next";
import styles from "./page.module.scss";
import Dropdown from "../../components/dropdown/dropdown";
import DropItem from "../../components/dropitem/dropitem";
import { HiOutlineCog } from "react-icons/hi";

const AboutPage: NextPage = ({}) => {
  return (
    <div className={styles.about__wrapper}>
      <div className={styles.about__menu}>
        <div className={styles.about__pages}></div>
        <div className={styles.about__accordion}>
          <Dropdown title="personal-info">
            <DropItem>fdfdfdddf</DropItem>
            <DropItem icon={<HiOutlineCog />}>Bfdfdfdfd</DropItem>
            <DropItem icon={<HiOutlineCog />}>fffddffdfdd</DropItem>
            <Dropdown
              title={<DropItem icon={<HiOutlineCog />}>bio</DropItem>}
              type="light"
            >
              <DropItem icon={<HiOutlineCog />}>Bfdfdfdfd</DropItem>
              <DropItem icon={<HiOutlineCog />}>fffddffdfdd</DropItem>
              <Dropdown
                title={<DropItem icon={<HiOutlineCog />}>bio</DropItem>}
                type="light"
              >
                <DropItem icon={<HiOutlineCog />}>Bfdfdfdfd</DropItem>
                <DropItem icon={<HiOutlineCog />}>fffddffdfdd</DropItem>
              </Dropdown>
            </Dropdown>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
