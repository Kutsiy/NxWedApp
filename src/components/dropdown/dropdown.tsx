"use client";

import { ReactNode, useState } from "react";
import styles from "./dropdown.module.scss";
import {
  MdArrowRight,
  MdKeyboardArrowRight,
  MdArrowDropDown,
  MdKeyboardArrowDown,
} from "react-icons/md";

interface Props {
  title: string | ReactNode;
  width?: string;
  height?: string;
  type?: "heavy" | "light";
  childGap?: string;
  children: ReactNode | ReactNode[];
  topBorder?: boolean;
  opened?: boolean;
  fontSize?: "1.15rem" | "1.25rem";
  grayTitleMobile?: boolean;
  onClick?: () => void;
  overflowY?: "hidden" | "auto";
}

const Dropdown = ({
  width = "100%",
  height = "40px",
  title,
  children,
  childGap = "8px",
  type = "heavy",
  topBorder = false,
  opened = false,
  grayTitleMobile = false,
  fontSize = "1.25rem",
  overflowY = "hidden",
  onClick,
}: Props) => {
  const [dropOpen, changeOpen] = useState(opened ? true : false);
  const Icon =
    type === "heavy"
      ? dropOpen
        ? MdArrowDropDown
        : MdArrowRight
      : dropOpen
      ? MdKeyboardArrowDown
      : MdKeyboardArrowRight;

  return (
    <div
      className={styles.dropdown__container}
      style={{
        width: type === "light" ? "100%" : width,
      }}
    >
      <div
        className={`${styles.dropdown__title} ${
          grayTitleMobile ? styles.dropdown__mobile : ""
        }`}
        style={{
          height: type === "light" ? "25px" : height,
          borderBottom: type === "light" ? "none" : "var(--glass-border)",
          borderTop: topBorder ? "var(--glass-border)" : "none",
          padding: type === "light" ? "none" : "12px",
          fontSize,
        }}
        onClick={() => {
          changeOpen(!dropOpen);
          if (onClick) {
            onClick();
          }
        }}
      >
        <span className={styles.dropdown__title_into}>
          <Icon className={styles.dropdown__title_sign} />
          {title}
        </span>
      </div>
      <div
        className={styles.dropdown__elements_container}
        style={{
          maxHeight: dropOpen ? "100%" : "0px",
          opacity: dropOpen ? "1" : "0",
          overflowY: dropOpen ? overflowY : "hidden",
        }}
      >
        <div
          className={`${styles.dropdown__elements} `}
          style={{
            gap: childGap,
            padding: type === "light" ? "0px" : "12px",
            paddingLeft: type === "light" ? "27px" : "12px",
          }}
        >
          {children !== null && !Array.isArray(children) ? (
            <div
              className={styles.dropdown__element}
              style={{ maxHeight: dropOpen ? "100%" : "0px" }}
            >
              {children}
            </div>
          ) : (
            children?.map((element: ReactNode, index) => (
              <div
                key={index}
                className={styles.dropdown__element}
                style={{ maxHeight: dropOpen ? "100%" : "0px" }}
              >
                {element}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
