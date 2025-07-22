import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface Props {
  children: string;
}

const Area = ({ children }: Props) => {
  return (
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
      {children}
    </SyntaxHighlighter>
  );
};

export default Area;
