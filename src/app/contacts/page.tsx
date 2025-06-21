import { NextPage } from "next";
import styles from "./page.module.scss";
import Dropdown from "@/components/dropdown/dropdown";
import DropItem from "@/components/dropitem/dropitem";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";

const ContactsPage: NextPage = ({}) => {
  return (
    <div className={styles.contacts__wrapper}>
      <div className={styles.contacts__menu}>
        <Dropdown title="contacts">
          <DropItem icon={<IoMdMail />}>user@gmail.com</DropItem>
          <DropItem icon={<FaPhoneAlt />} iconSize="1.4rem">
            +3598246359
          </DropItem>
        </Dropdown>
        <Dropdown title="find-me-also-in" topBorder={true}>
          <DropItem
            icon={<FiExternalLink />}
            cursorPointer={true}
            lightOnHover={true}
          >
            <a>YouTube</a>
          </DropItem>
          <DropItem
            icon={<FiExternalLink />}
            iconSize="1.4rem"
            cursorPointer={true}
            lightOnHover={true}
          >
            <a>dtv.to</a>
          </DropItem>
          <DropItem
            icon={<FiExternalLink />}
            iconSize="1.4rem"
            cursorPointer={true}
            lightOnHover={true}
          >
            <a>Instagram</a>
          </DropItem>
          <DropItem
            icon={<FiExternalLink />}
            iconSize="1.4rem"
            cursorPointer={true}
            lightOnHover={true}
          >
            <a>Twich</a>
          </DropItem>
        </Dropdown>
      </div>
    </div>
  );
};

export default ContactsPage;
