"use client";

import { useState } from "react";
import NavigationSection from "./navigation-section";
import HamburgerButton from "./hamburger-button";

const data = [
  {
    title: "Locations",
    links: [
      { name: "Remote", link: "" },
      { name: "New York", link: "" },
      { name: "Baltimore", link: "" },
      { name: "Miami", link: "" },
      { name: "Dallas", link: "" },
      { name: "Los Angeles", link: "" },
    ],
  },
  {
    title: "Categories",
    links: [
      { name: "All", link: "" },
      { name: "Sales", link: "" },
      { name: "Accounting", link: "" },
      { name: "Software", link: "" },
      { name: "Administrative", link: "" },
      { name: "Real Estate", link: "" },
    ],
  },
  {
    title: "For Candidates ",
    links: [
      { name: "Upload Resume", link: "" },
      { name: "Applied Jobs", link: "" },
      { name: "Favorite Jobs", link: "" },
    ],
  },
  {
    title: "For Employers",
    links: [
      { name: "Post a Position", link: "" },
      { name: "View Candidates", link: "" },
    ],
  },
];

const NavigationMenuLinks = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row items-center">
      <HamburgerButton
        openMobileNav={openMobileNav}
        setOpenMobileNav={setOpenMobileNav}
      />{" "}
      <div
        className={`mt-10 gap-2 flex flex-col lg:flex-row z-10 lg:mt-0 right-[2px] top-7 lg:mr-2 absolute lg:static bg-gray-100 lg:bg-white  lg:p-0`}
      >
        {data.map((item) => {
          return (
            <NavigationSection
              openMobileNav={openMobileNav}
              links={item.links}
              title={item.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NavigationMenuLinks;
