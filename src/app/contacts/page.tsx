import { NextPage } from "next";
import styles from "./page.module.scss";

const ContactsPage: NextPage = ({}) => {
  return (
    <div className={styles.contacts__wrapper}>
      <div className={styles.contacts__menu}></div>
    </div>
  );
};

export default ContactsPage;
