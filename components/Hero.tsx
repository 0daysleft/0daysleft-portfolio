import { Spotlight } from "./ui/spotlight";
import "../app/globals.css"
import React from "react"

const Hero = () => {
  return(
    <div className="pb-20 pt-36" >
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
      </div>
    </div>
  )
}

export  default Hero;