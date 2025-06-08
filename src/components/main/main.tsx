"use client";
import React from "react";
import styles from "./main.module.scss";

const Main = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.main}>{children}</div>;
};

export default Main;
