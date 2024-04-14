import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="py-24">
      <div className="text-center">
        <h1 className="w-[600px] lg:w-[650px] mx-auto text-6xl font-medium lg:text-7xl">
          Get The <span className="text-blue-500">Right Job</span> You Deserve
        </h1>
        <p className="pt-8 text-gray-500 text-sm">
          We make landing a job as easy as possible, so you can focus on what's
          important.
        </p>
      </div>
      <div className="flex justify-center gap-2 py-10">
        <Input placeholder="Job Title" className="w-1/4" />
        <Input placeholder="Location" className="w-1/4" />
        <Button className="bg-blue-500">Search</Button>
      </div>
    </div>
  );
};

export default Hero;
