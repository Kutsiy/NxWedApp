import { NextPage } from "next";
import styles from "./page.module.scss";
import { FaAngleRight } from "react-icons/fa";

const HelloPage: NextPage = ({}) => {
  return (
    <div className={styles.hello__wrapper}>
      <div className={styles.hello__container}>
        <div className={styles.hello__info}>
          <div className={styles.hello__title}>
            <div className={styles.hello__greetings}>Hi all. I am</div>
            <div className={styles.hello__name}>Egor Kutsiy</div>
            <div className={styles.hello__front}>
              <FaAngleRight />
              Front-end developer
            </div>
          </div>

          <div className={styles.hello__github}>
            <div className={styles.hello__find_profile}>
              {"// find my profile on Github:"}
            </div>
            <div className={styles.hello__github_link}>
              <span className={styles.const}>const</span>{" "}
              <span className={styles.var_name}>githubLink</span> = {""}
              <a href="https://github.com/Kutsiy" className={styles.link}>
                “https://github.com/Kutsiy”
              </a>
            </div>
          </div>
        </div>
        <div className={styles.hello__game}>
          <div className={styles.hello__game_glow_1}></div>
          <div className={styles.hello__game_glow_2}></div>
          <div className={styles.hello__game_glow_3}></div>

          <div
            className={`${styles.hello__game_ellipse} ${styles.hello__game_ellipse_1}`}
          ></div>
          <div
            className={`${styles.hello__game_ellipse} ${styles.hello__game_ellipse_2}`}
          ></div>
          <div
            className={`${styles.hello__game_ellipse} ${styles.hello__game_ellipse_3}`}
          ></div>
          <div
            className={`${styles.hello__game_ellipse} ${styles.hello__game_ellipse_4}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HelloPage;
