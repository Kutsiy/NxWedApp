"use client";

import { ReactNode } from "react";
import styles from "./dropitem.module.scss";

interface Props {
  children: ReactNode;
  icon?: ReactNode;
  color?: string;
  iconSize?: string;
}

const DropItem = ({
  icon = false,
  children,
  color = "#bcbcbc",
  iconSize = "1.5rem",
}: Props) => {
  return (
    <div className={styles.dropitem__container}>
      {icon && (
        <div
          className={styles.dropitem__icon}
          style={{ color, fontSize: iconSize }}
        >
          {icon}
        </div>
      )}
      <div
        className={styles.dropitem__text}
        style={{ marginLeft: !icon ? "26px" : "none" }}
      >
        {children}
      </div>
    </div>
  );
};

export default DropItem;
