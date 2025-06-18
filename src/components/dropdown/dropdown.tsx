"use client";

import { ReactNode } from "react";
import styles from "./dropdown.module.scss";
import { MdArrowRight, MdKeyboardArrowRight } from "react-icons/md";

interface Props {
  title: string;
  width?: string;
  height?: string;
  type?: "heavy" | "light";
  childGap?: string;
  children: ReactNode | ReactNode[];
}

const Dropdown = ({
  width = "100%",
  height = "40px",
  title,
  children,
  childGap = "8px",
  type = "heavy",
}: Props) => {
  return (
    <div className={styles.dropdown__container} style={{ width }}>
      <div
        className={styles.dropdown__title}
        style={{
          height,
          borderBottom: type === "light" ? "none" : "var(--glass-border)",
        }}
      >
        <span className={styles.dropdown__title_into}>
          {type === "heavy" ? (
            <MdArrowRight className={styles.dropdown__title_sign} />
          ) : (
            <MdKeyboardArrowRight className={styles.dropdown__title_sign} />
          )}
          {title}
        </span>
      </div>
      <div className={styles.dropdown__elements} style={{ gap: childGap }}>
        {children !== null && !Array.isArray(children) ? (
          <div className={styles.dropdown__element}>{children}</div>
        ) : (
          children?.map((element: ReactNode, index) => (
            <div key={index} className={styles.dropdown__element}>
              {element}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dropdown;
