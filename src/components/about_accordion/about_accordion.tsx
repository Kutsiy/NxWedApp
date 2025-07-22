"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import DropItem from "../dropitem/dropitem";
import { FaFolder } from "react-icons/fa6";
import Dropdown from "../dropdown/dropdown";
import { FaSchool } from "react-icons/fa";
import Link from "next/link";

const AboutAccordion = ({}) => {
  const pathName = usePathname();
  const profPath = "/about/professional-info/";
  const persPath = "/about/personal-info/";
  const content = useMemo(() => {
    if (pathName.startsWith("/about/professional-info")) {
      return (
        <>
          <Dropdown title="professional-info" fontSize="1.15rem" opened>
            <DropItem icon={<FaFolder />} color="#FF637E">
              <Link href={`${profPath}skills`}>skills</Link>
            </DropItem>
            <DropItem icon={<FaFolder />} color="#615FFF">
              <Link href={`${profPath}resume`}>resume</Link>
            </DropItem>
          </Dropdown>
        </>
      );
    } else if (pathName.startsWith("/about/personal-info")) {
      return (
        <>
          <Dropdown title="personal-info" opened>
            <DropItem icon={<FaFolder />} color="#FF637E">
              <Link href={`${persPath}bio`}>bio</Link>
            </DropItem>
            <Dropdown
              title={
                <DropItem icon={<FaFolder />} color="#615FFF">
                  education
                </DropItem>
              }
              type="light"
            >
              <DropItem icon={<FaSchool />}>
                <Link href={`${persPath}education/college`}>college</Link>
              </DropItem>
            </Dropdown>
          </Dropdown>
        </>
      );
    }
  }, [pathName]);
  return content;
};

export default AboutAccordion;
