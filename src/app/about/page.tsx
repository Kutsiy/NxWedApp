import { NextPage } from "next";
import styles from "./page.module.scss";

const AboutPage: NextPage = ({}) => {
  return (
    <div className={styles.about__wrapper}>
      <div className={styles.about__menu}>
        <div className={styles.about__pages}></div>
        <div className={styles.about__accordion}></div>
      </div>
    </div>
  );
};

export default AboutPage;
