"use client";

import { ReactNode } from "react";
import styles from "./dropitem.module.scss";

interface Props {
  children: ReactNode;
  icon?: ReactNode;
}

const DropItem = ({ icon = false, children }: Props) => {
  return (
    <div className={styles.dropitem__container}>
      {icon && <div className={styles.dropitem__icon}>{icon}</div>}
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
