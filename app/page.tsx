import { UserButton } from "@clerk/nextjs";
import { initialProfile } from "@/lib/initial-profile";
import Hero from "@/components/hero";

export default async function Home() {
  const profile = await initialProfile();
  console.log(profile);
  return (
    <div>
      <Hero />
    </div>
  );
}
