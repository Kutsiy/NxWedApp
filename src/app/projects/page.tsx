"use client";
import { NextPage } from "next";
import styles from "./page.module.scss";
import Dropdown from "../../components/dropdown/dropdown";
import DropCheck from "../../components/dropcheck/dropcheck";
import { FaReact, FaHtml5, FaCss3, FaAngular } from "react-icons/fa";
import { useState } from "react";
import ProjectCard from "../../components/project_card/project_card";
import { IoIosClose } from "react-icons/io";

const ProjectsPage: NextPage = ({}) => {
  const [filterArray, setFilterArray] = useState<string[]>([]);
  const [checkReact, checkReactFunc] = useState(false);
  const [checkHtml, checkHtmlFunc] = useState(false);
  const [checkCss, checkCssFunc] = useState(false);
  const [checkAngular, checkAngularFunc] = useState(false);
  const [mobileCollapse, changeMobileCollapse] = useState(true);

  function addOrRemoveToArray(val: string) {
    setFilterArray((prev) => {
      if (prev.includes(val)) {
        return prev.filter((el) => el !== val);
      } else {
        return [...prev, val];
      }
    });
  }

  function close() {
    setFilterArray([]);
    checkReactFunc(false);
    checkHtmlFunc(false);
    checkCssFunc(false);
    checkAngularFunc(false);
  }

  return (
    <div className={styles.projects__wrapper}>
      <div
        className={`${styles.projects__menu} ${
          !mobileCollapse ? styles.projects__menu_collapsed : ""
        }`}
      >
        <Dropdown
          title="projects"
          opened={mobileCollapse}
          grayTitleMobile={true}
          height="40px"
          onClick={() => changeMobileCollapse((val) => !val)}
        >
          <DropCheck
            icon={<FaReact />}
            checkValue={checkReact}
            changeFunc={checkReactFunc}
            onClick={() => addOrRemoveToArray("React")}
          >
            React
          </DropCheck>
          <DropCheck
            icon={<FaHtml5 />}
            checkValue={checkHtml}
            changeFunc={checkHtmlFunc}
            onClick={() => addOrRemoveToArray("HTML")}
          >
            HTML
          </DropCheck>
          <DropCheck
            icon={<FaCss3 />}
            checkValue={checkCss}
            changeFunc={checkCssFunc}
            onClick={() => addOrRemoveToArray("CSS")}
          >
            CSS
          </DropCheck>
          <DropCheck
            icon={<FaAngular />}
            checkValue={checkAngular}
            changeFunc={checkAngularFunc}
            onClick={() => addOrRemoveToArray("Angular")}
          >
            Angular
          </DropCheck>
        </Dropdown>
      </div>
      <div className={styles.projects__content}>
        <div className={styles.projects__content_top}>
          {!!filterArray.length && (
            <div className={styles.projects__content_top_tab}>
              <div className={styles.projects__content_top_tab_filter}>
                {filterArray.map((item, index) => {
                  if (index === filterArray.length - 1) {
                    return `${item}`;
                  } else {
                    return `${item}, `;
                  }
                })}
              </div>
              <div className={styles.projects__content_top_tab_close}>
                <IoIosClose onClick={close} />
              </div>
            </div>
          )}
        </div>
        <div className={styles.projects__content_container}>
          <div
            className={`${styles.projects__content_block} ${
              !mobileCollapse ? styles.projects__content_block_open : ""
            }`}
          >
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
