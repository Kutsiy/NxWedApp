import { NextPage } from "next";
import styles from "./page.module.scss";
import Dropdown from "@/components/dropdown/dropdown";
import DropItem from "@/components/dropitem/dropitem";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const ContactsPage: NextPage = ({}) => {
  const codeString = `const button = document.querySelector('#sendBtn');

const message = {
	name: "Jonathan Davis",
	email: "",
	message: "",
	date: "Thu 21 Apr"
}

button.addEventListener('click', () => {
	form.send(message);
})`;

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
      <div className={styles.contacts__content}>
        <div className={styles.contacts__content_top}></div>
        <div className={styles.contacts__content_block}>
          <div className={styles.contacts__contact_form}>
            <form className={styles.contacts__form}>
              <div className={styles.contacts__form_block}>
                <label htmlFor="name">_name</label>
                <input type="text" id="name" />
              </div>
              <div className={styles.contacts__form_block}>
                <label htmlFor="email">_email</label>
                <input type="text" id="email" />
              </div>
              <div className={styles.contacts__form_block}>
                <label htmlFor="message">_message</label>
                <textarea id="message" placeholder="your message here …" />
              </div>
              <button className={styles.contacts__submit_button}>
                submit-message
              </button>
            </form>
          </div>
          <div className={styles.contacts__code_snippet}>
            <SyntaxHighlighter
              language="javascript"
              style={atomOneDark}
              showLineNumbers
              lineNumberStyle={{ paddingRight: "20px", paddingBottom: 5 }}
              customStyle={{
                backgroundColor: "rgba(1, 0, 0, 0)",
                width: "500px",
              }}
              wrapLongLines={true}
              wrapLines={true}
            >
              {codeString}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
