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
           <PinContainer>
            {title}
           </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
}
