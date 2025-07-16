"use client";
import { NextPage } from "next";
import styles from "./page.module.scss";
import Dropdown from "@/components/dropdown/dropdown";
import DropItem from "@/components/dropitem/dropitem";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useState } from "react";

const ContactsPage: NextPage = ({}) => {
  const todayFormatted = new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  }).format(new Date());
  const [name, changeName] = useState("");
  const [email, changeEmail] = useState("");
  const [message, changeMessage] = useState("");

  const codeString = `const button = document.querySelector('#sendBtn');

const message = {
  name: "${name}",
  email: "${email}",
  message: "${message}",
  date: "${todayFormatted}"
} 

button.addEventListener('click', () => {
	form.send(message);
})`;

  return (
    <div className={styles.contacts__wrapper}>
      <div className={styles.contacts__menu}>
        <div className={styles.contacts__phone_title}>_contact-me</div>
        <Dropdown title="contacts" opened grayTitleMobile={true}>
          <DropItem icon={<IoMdMail />}>user@gmail.com</DropItem>
          <DropItem icon={<FaPhoneAlt />} iconSize="1.4rem">
            +3598246359
          </DropItem>
        </Dropdown>
        <Dropdown
          title="find-me-also-in"
          topBorder={true}
          opened
          grayTitleMobile={true}
        >
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
                <label htmlFor="name">_name:</label>
                <input
                  type="text"
                  id="name"
                  placeholder="your name here …"
                  onChange={(value) => changeName(value.target.value)}
                />
              </div>
              <div className={styles.contacts__form_block}>
                <label htmlFor="email">_email:</label>
                <input
                  type="text"
                  id="email"
                  placeholder="your email here …"
                  onChange={(value) => changeEmail(value.target.value)}
                />
              </div>
              <div className={styles.contacts__form_block}>
                <label htmlFor="message">_message:</label>
                <textarea
                  id="message"
                  placeholder="your message here …"
                  onChange={(value) => changeMessage(value.target.value)}
                />
              </div>
              <button
                className={styles.contacts__submit_button}
                disabled={!name || !email || !message}
              >
                submit-message
              </button>
            </form>
          </div>
          <div className={styles.contacts__code_snippet}>
            <SyntaxHighlighter
              language="javascript"
              style={atomOneDark}
              showLineNumbers
              lineNumberStyle={{
                paddingRight: "20px",
                paddingBottom: 5,
                color: "rgba(145, 161, 185, 1)",
                whiteSpace: "pre-wrap",
              }}
              customStyle={{
                backgroundColor: "rgba(1, 0, 0, 0)",
                color: "rgba(96, 95, 255, 1)",
                minWidth: "400px",
                maxWidth: "600px",
                overflowX: "hidden",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
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
