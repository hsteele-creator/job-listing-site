"use client";

import { Dispatch, SetStateAction } from "react";

type HamburgerButtonProps = {
  setOpenMobileNav: Dispatch<SetStateAction<boolean>>;
  openMobileNav: boolean;
};

const HamburgerButton = ({
  setOpenMobileNav,
  openMobileNav,
}: HamburgerButtonProps) => {
  return (
    <div>
      <svg
        onClick={() => setOpenMobileNav(!openMobileNav)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="cursor-pointer w-6 h-6 absolute top-7 right-4 ml-4 lg:w-0 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>
  );
};

export default HamburgerButton;
