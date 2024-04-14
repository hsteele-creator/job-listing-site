"use client";

import Link from "next/link";
import { useState } from "react";

type NavigationSection = {
  title: string;
  openMobileNav: boolean;
  links: { name: string; link: string }[];
};

const NavigationSection = ({
  title,
  links,
  openMobileNav,
}: NavigationSection) => {
  const [open, setOpen] = useState(false);
  console.log(openMobileNav);
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className={`${
        !openMobileNav && "hidden"
      } lg:block`}
    >
      <div className="flex items-center gap-[2px] w-[155px] lg:w-auto">
        <h2 className="hover:text-blue-700 cursor-pointer">{title}</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="black"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      {open && (
        <div className="w-[155px] flex-wrap p-2 box-border shadow-sm bg-[#333333] text-gray-100 text-sm rounded-md z-10 lg:absolute ">
          {links.map((link) => {
            return (
              <Link href={link.link} className="block leading-6">
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default NavigationSection;
