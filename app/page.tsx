import Hero from "@/components/Hero";
import { Spotlight } from "lucide-react";

export default function Home() {
  return (
    <main className="relative bg-[#000319] flex justify-center items-center flex-col overflow-hidden mx-auto sn:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero/>
      </div>
    </main>
  );
}
