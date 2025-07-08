"use client";

import { ReactNode } from "react";
import styles from "./dropitem.module.scss";

interface Props {
  children: ReactNode;
  icon?: ReactNode;
  color?: string;
  iconSize?: string;
  lightOnHover?: boolean;
  cursorPointer?: boolean;
}

const DropItem = ({
  icon = false,
  children,
  color = "#bcbcbc",
  iconSize = "1.5rem",
  cursorPointer = true,
  lightOnHover = false,
}: Props) => {
  return (
    <div
      className={`${styles.dropitem__container} ${
        lightOnHover ? styles.hoverable : ""
      }`}
      style={{ cursor: cursorPointer ? "pointer" : "default" }}
    >
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
