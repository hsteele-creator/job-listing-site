import { UserButton } from "@clerk/nextjs";
import { initialProfile } from "@/lib/initial-profile";



export default async function Home() {
  const profile = await initialProfile()
  console.log(profile)
  return <div>

  </div>;
}
