import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { IoHome } from "react-icons/io5";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/Data";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#000319] flex justify-center items-center flex-col mx-auto sn:px-10 px-5 overflow-clip">
      <div className="max-w-[70vw] w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
