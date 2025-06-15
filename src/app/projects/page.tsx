import { NextPage } from "next";
import styles from "./page.module.scss";

const ProjectsPage: NextPage = ({}) => {
  return (
    <div className={styles.projects__wrapper}>
      <div className={styles.projects__menu}></div>
    </div>
  );
};

export default ProjectsPage;
