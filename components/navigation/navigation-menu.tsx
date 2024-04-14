import { UserButton, redirectToSignIn } from "@clerk/nextjs";

import { currentProfile } from "@/lib/current-profile";
import NavigationSection from "./navigation-section";
import Image from "next/image";

import { useState } from "react";
import { Button } from "../ui/button";
import NavigationMenuLinks from "./nav-menu-links";
import { db } from "@/lib/db";

export default async function NavigationBar() {
  const profile = await currentProfile();

  if (!profile) {
    redirectToSignIn();
  }
  const userProfile = await db.profile.findUnique({
    where: { id: profile?.id },
  });

  console.log(userProfile);
  return (
    <div className="px-6 justify-between flex items-center py-4">
      <div className="flex items-center gap-4">
        <Image
          className=""
          src="/logo.svg"
          alt="logo"
          width={200}
          height={50}
        />
      </div>

      <div className="flex flex-row-reverse lg:flex-row">
        <NavigationMenuLinks />

        <div className="flex items-center gap-4 mr-10 lg:mr-0">
          <Button className="bg-blue-500">Post Your Ad</Button>
          <div>
            <p>Hi, {profile?.firstName || "User"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
