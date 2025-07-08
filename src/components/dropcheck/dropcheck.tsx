"use client";

import { Dispatch, ReactNode, SetStateAction } from "react";
import styles from "./dropcheck.module.scss";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";

interface Props {
  children: ReactNode;
  icon?: ReactNode;
  color?: string;
  iconSize?: string;
  checkValue: boolean;
  changeFunc: Dispatch<SetStateAction<boolean>>;
  cursorPointer?: boolean;
}

const DropCheck = ({
  icon = false,
  children,
  color = "#bcbcbc",
  iconSize = "1.5rem",
  checkValue,
  changeFunc,
  cursorPointer = true,
}: Props) => {
  return (
    <div
      className={styles.dropcheck__container}
      onClick={() => changeFunc(!checkValue)}
      style={{ cursor: cursorPointer ? "pointer" : "default" }}
    >
      <div className={styles.dropcheck__check_box}>
        {checkValue ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </div>
      {icon && (
        <div
          className={styles.dropcheck__icon}
          style={{ color, fontSize: iconSize }}
        >
          {icon}
        </div>
      )}
      <div className={styles.dropcheck__text}>{children}</div>
    </div>
  );
};

export default DropCheck;
