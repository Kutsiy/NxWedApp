"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import DropItem from "../dropitem/dropitem";
import { IoLogoMarkdown } from "react-icons/io";
import { FaFolder } from "react-icons/fa6";
import Dropdown from "../dropdown/dropdown";

const AboutAccordion = ({}) => {
  const pathName = usePathname();
  const content = useMemo(() => {
    if (pathName === "/about/professional-info") {
      return (
        <>
          <Dropdown title="professional-info" fontSize="1.15rem">
            <Dropdown
              title={
                <DropItem icon={<FaFolder />} color="#FF637E">
                  bio
                </DropItem>
              }
              type="light"
            >
              <DropItem icon={<IoLogoMarkdown />}>Bfdfdfdfd</DropItem>
              <DropItem icon={<IoLogoMarkdown />}>fffddffdfdd</DropItem>
            </Dropdown>
            <Dropdown
              title={
                <DropItem icon={<FaFolder />} color="#00D5BE">
                  interests
                </DropItem>
              }
              type="light"
            >
              <DropItem icon={<IoLogoMarkdown />}>Bfdfdfdfd</DropItem>
              <DropItem icon={<IoLogoMarkdown />}>fffddffdfdd</DropItem>
            </Dropdown>
            <Dropdown
              title={
                <DropItem icon={<FaFolder />} color="#615FFF">
                  education
                </DropItem>
              }
              type="light"
            >
              <DropItem icon={<IoLogoMarkdown />}>high-school</DropItem>
              <DropItem icon={<IoLogoMarkdown />}>university</DropItem>
            </Dropdown>
          </Dropdown>
        </>
      );
    } else if (pathName === "/about/personal-info") {
      return (
        <>
          <Dropdown title="personal-info">
            <Dropdown
              title={
                <DropItem icon={<FaFolder />} color="#FF637E">
                  bio
                </DropItem>
              }
              type="light"
            >
              <DropItem icon={<IoLogoMarkdown />}>Bfdfdfdfd</DropItem>
              <DropItem icon={<IoLogoMarkdown />}>fffddffdfdd</DropItem>
            </Dropdown>
            <Dropdown
              title={
                <DropItem icon={<FaFolder />} color="#00D5BE">
                  interests
                </DropItem>
              }
              type="light"
            >
              <DropItem icon={<IoLogoMarkdown />}>Bfdfdfdfd</DropItem>
              <DropItem icon={<IoLogoMarkdown />}>fffddffdfdd</DropItem>
            </Dropdown>
            <Dropdown
              title={
                <DropItem icon={<FaFolder />} color="#615FFF">
                  education
                </DropItem>
              }
              type="light"
            >
              <DropItem icon={<IoLogoMarkdown />}>high-school</DropItem>
              <DropItem icon={<IoLogoMarkdown />}>university</DropItem>
            </Dropdown>
          </Dropdown>
        </>
      );
    } else if (pathName === "/about/hobbies") {
      return (
        <>
          <Dropdown title="hobbies">
            <Dropdown
              title={
                <DropItem icon={<FaFolder />} color="#FF637E">
                  bio
                </DropItem>
              }
              type="light"
            >
              <DropItem icon={<IoLogoMarkdown />}>Bfdfdfdfd</DropItem>
              <DropItem icon={<IoLogoMarkdown />}>fffddffdfdd</DropItem>
            </Dropdown>
            <Dropdown
              title={
                <DropItem icon={<FaFolder />} color="#00D5BE">
                  interests
                </DropItem>
              }
              type="light"
            >
              <DropItem icon={<IoLogoMarkdown />}>Bfdfdfdfd</DropItem>
              <DropItem icon={<IoLogoMarkdown />}>fffddffdfdd</DropItem>
            </Dropdown>
            <Dropdown
              title={
                <DropItem icon={<FaFolder />} color="#615FFF">
                  education
                </DropItem>
              }
              type="light"
            >
              <DropItem icon={<IoLogoMarkdown />}>high-school</DropItem>
              <DropItem icon={<IoLogoMarkdown />}>university</DropItem>
            </Dropdown>
          </Dropdown>
        </>
      );
    }
  }, [pathName]);
  return content;
};

export default AboutAccordion;
