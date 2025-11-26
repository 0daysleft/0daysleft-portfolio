import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { IoHome } from "react-icons/io5";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/Data";

export default function Home() {
  return (
    <main className="relative bg-[#000319] flex justify-center items-center flex-col overflow-hidden mx-auto sn:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={navItems}
        />
        <Hero />
        <Grid />
        <RecentProjects />
      </div>
    </main>
  );
}
