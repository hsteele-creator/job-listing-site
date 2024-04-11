"use client";

import { UserButton } from "@clerk/nextjs";
import NavigationSection from "./navigation-section";
import Image from "next/image";

import { useState } from "react";

export default function NavigationBar() {
  const [openMobileNav, setOpenMobileNav] = useState(false);
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

  return (
    <div className="flex justify-between">
      <div>
        <Image src="/logo.svg" alt="logo" width={200} height={50} />
      </div>

      <div className="flex mt-10 lg:mt-0 flex-col lg:flex-row gap-2 text-gray-500">
        {data.map((item) => {
          return (
            <NavigationSection
              openMobileNav={openMobileNav}
              links={item.links}
              title={item.title}
            />
          );
        })}

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 absolute top-0 right-2 mt-2 lg:w-0 cursor-pointer"
            onClick={() => setOpenMobileNav(!openMobileNav)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
