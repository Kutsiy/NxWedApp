"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import DropItem from "../dropitem/dropitem";
import { FaFolder } from "react-icons/fa6";
import Dropdown from "../dropdown/dropdown";
import { FaSchool } from "react-icons/fa";

const AboutAccordion = ({}) => {
  const pathName = usePathname();
  const content = useMemo(() => {
    if (pathName === "/about/professional-info") {
      return (
        <>
          <Dropdown title="professional-info" fontSize="1.15rem" opened>
            <DropItem icon={<FaFolder />} color="#FF637E">
              skills
            </DropItem>
            <DropItem icon={<FaFolder />} color="#615FFF">
              resume
            </DropItem>
          </Dropdown>
        </>
      );
    } else if (pathName === "/about/personal-info") {
      return (
        <>
          <Dropdown title="personal-info" opened>
            <DropItem icon={<FaFolder />} color="#FF637E">
              bio
            </DropItem>
            <Dropdown
              title={
                <DropItem icon={<FaFolder />} color="#615FFF">
                  education
                </DropItem>
              }
              type="light"
            >
              <DropItem icon={<FaSchool />}>College</DropItem>
            </Dropdown>
          </Dropdown>
        </>
      );
    }
  }, [pathName]);
  return content;
};

export default AboutAccordion;
