import { NextPage } from "next";
import styles from "./project_card.module.scss";
import Image from "next/image";

const ProjectCard: NextPage = ({}) => {
  return (
    <div className={styles.project_card__wrapper}>
      <div className={styles.project_card__title}>
        <div className={styles.project_card__title_number}>Project 1</div>
        <div className={styles.project_card__title_text}>{"// _user_ui"}</div>
      </div>
      <div className={styles.project_card__block}>
        <div className={styles.project_card__block_image}>
          <Image src="/image.png" fill alt="icon"></Image>
        </div>
        <div className={styles.project_card__block_text_container}>
          <div className={styles.project_card__block_text_container_text}>
            Duis aute irure dolor in velit esse cillum dolore.
          </div>
          <button className={styles.project_card__block_text_container_button}>
            view-project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
