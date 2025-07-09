"use client";
import { NextPage } from "next";
import styles from "./page.module.scss";
import Dropdown from "../../components/dropdown/dropdown";
import DropCheck from "../../components/dropcheck/dropcheck";
import { FaReact, FaHtml5, FaCss3, FaAngular } from "react-icons/fa";
import { useState } from "react";
import ProjectCard from "../../components/project_card/project_card";

const ProjectsPage: NextPage = ({}) => {
  const [checkReact, checkReactFunc] = useState(false);
  const [checkHtml, checkHtmlFunc] = useState(false);
  const [checkCss, checkCssFunc] = useState(false);
  const [checkAngular, checkAngularFunc] = useState(false);

  return (
    <div className={styles.projects__wrapper}>
      <div className={styles.projects__menu}>
        <Dropdown title="projects" opened>
          <DropCheck
            icon={<FaReact />}
            checkValue={checkReact}
            changeFunc={checkReactFunc}
          >
            React
          </DropCheck>
          <DropCheck
            icon={<FaHtml5 />}
            checkValue={checkHtml}
            changeFunc={checkHtmlFunc}
          >
            HTML
          </DropCheck>
          <DropCheck
            icon={<FaCss3 />}
            checkValue={checkCss}
            changeFunc={checkCssFunc}
          >
            CSS
          </DropCheck>
          <DropCheck
            icon={<FaAngular />}
            checkValue={checkAngular}
            changeFunc={checkAngularFunc}
          >
            Angular
          </DropCheck>
        </Dropdown>
      </div>
      <div className={styles.projects__content}>
        <div className={styles.projects__content_top}></div>
        <div className={styles.projects__content_block}>
          <ProjectCard></ProjectCard>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
