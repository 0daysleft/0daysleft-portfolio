"use client";
import { projects } from "@/Data";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";
import "../app/globals.css"

export default function RecentProjects() {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A Small Selection of{" "}
        <span className="text-[purple]">Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10 ">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="max-sm:h-[20rem] max-sm:mt-[5rem] max-lg:h-[40rem] h-[32rem] lg:min-h-[20.5rem] flex items-center justify-center sm:w-[370px] w-[80vw]"
          >
            <PinContainer title={link} href={link} className="sm:w-[370px]">
              <div className="relative flex items-center justify-center overflow-hidden max-sm:h-[100%] h-max mb-10 ">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img src={img} alt={title} className="z-10 absolute bottom-1" />
              </div>
              <h1 className="font-bold lg:text-lg md:text-xl text-xs line-clamp-1">
                {title}
              </h1>
              <p className="lg:font-normal font-light text-base line-clamp-2">
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3 max-md:flex-col">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt={icon} className="p-1" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  {" "}
                  <p className="flex md:text-xs text-base max-md:pt-[1rem]">
                    Check Out Live Site
                  </p>{" "}
                  <FaLocationArrow className="ms-3" color="#Cbacf9" />{" "}
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
}
