"use client";

import { ReactNode } from "react";
import styles from "./dropdown.module.scss";

interface Props {
  title: string;
  width?: string;
  height?: string;
  type?: "heavy" | "light";
  children: ReactNode | ReactNode[];
}

const Dropdown = ({
  width = "100%",
  height = "40px",
  title,
  children,
}: Props) => {
  return (
    <div className={styles.dropdown__container} style={{ width }}>
      <div className={styles.dropdown__title} style={{ height }}>
        {title}
      </div>
      {children !== null && !Array.isArray(children) ? (
        <div>{children}</div>
      ) : (
        children?.map((element: ReactNode, index) => (
          <div key={index}>{element}</div>
        ))
      )}
    </div>
  );
};

export default Dropdown;
