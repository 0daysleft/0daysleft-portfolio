import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sn:px-10 px-5">
      <h1 className="bg-navydark">Hello Next JS</h1>
      <div>
        <Hero/>
      </div>
    </main>
  );
}
