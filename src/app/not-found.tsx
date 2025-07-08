import { NextPage } from "next";
import Image from "next/image";
import styles from "./not-found.module.scss";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Link from "next/link";

const NotFound: NextPage = ({}) => {
  const codeString = `const page = findPage('you-were-looking-for');

if (!page) {
  console.log("Oops! Looks like you took a wrong turn in the codebase.");
  console.log("But hey, since you're here...");
  console.log("🔍 Go back to the homepage and explore more cool stuff!");
  throw new Error("404: PageNotFoundError 😢");
}

/* Suggestions:
 * - Check the URL for typos
 * - Use the site navigation
 * - Or hit CMD+Z in real life 😅
 */

redirect('home');`;

  return (
    <div className={styles.not_found__wrapper}>
      <div className={styles.not_found__container}>
        <div className={styles.not_found__image}>
          <Image
            src="/404.png"
            alt="404"
            width={312}
            height={180}
            className={styles.img}
          />
        </div>
        <div className={styles.not_found__text}>
          {" "}
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
              overflowX: "hidden",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              fontSize: "1.9em",
            }}
            wrapLongLines={true}
            wrapLines={true}
          >
            {codeString}
          </SyntaxHighlighter>
          <Link className={styles.not_found__redirect} href="/"></Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
