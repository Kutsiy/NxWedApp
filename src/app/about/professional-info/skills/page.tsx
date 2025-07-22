import Area from "@/components/area/area";
import { NextPage } from "next";

const Page: NextPage = ({}) => {
  const text = `/**
 * About me
 * I have 5 years of еxperience in web
 * development lorem ipsum dolor sit amet, 
 * consectetur adipiscing elit, sed do eiusmod
 * tempor incididunt ut labore et dolore
 * magna aliqua. Ut enim ad minim veniam,
 * quis nostrud exercitation ullamco laboris
 * nisi ut aliquip ex ea commodo consequat.
 * Duis aute irure dolor in reprehenderit in
 *
 * Duis aute irure dolor in reprehenderit in
 * voluptate velit esse cillum dolore eu fugiat 
 * nulla pariatur. Excepteur sint occaecat 
 * officia deserunt mollit anim id est laborum.
 */`;

  return (
    <div
      style={{
        margin: "5px 14px",
        fontSize: "1.7rem",
      }}
    >
      <Area>{text}</Area>
    </div>
  );
};

export default Page;
