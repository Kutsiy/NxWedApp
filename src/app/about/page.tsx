import { NextPage } from "next";
import styles from "./page.module.scss";
import Dropdown from "../../components/dropdown/dropdown";

const AboutPage: NextPage = ({}) => {
  return (
    <div className={styles.about__wrapper}>
      <div className={styles.about__menu}>
        <div className={styles.about__pages}></div>
        <div className={styles.about__accordion}>
          <Dropdown title="personal-info">
            <div>Adfdfd</div>
            <div>Bfdfdfdfd</div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
