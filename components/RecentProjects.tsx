"use client";
import React from "react";
import { projects } from "@/Data";
import { PinContainer } from "./ui/3d-pin";

export default function RecentProjects() {
  return (
    <div className="py-20">
      <h1 className="heading">
        A Small Selection of{" "}
        <span className="text-purple">Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] h=[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <div className="h-[40rem] w-full flex items-center justify-center ">
              <PinContainer title={title} href={link}>
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                    {title}
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 ">{des}</span>
                  </div>
                  <img src={img} alt="kf" />
                </div>
              </PinContainer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
