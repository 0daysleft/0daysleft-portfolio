import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { socialMedia } from "@/Data";

export default function Footer(){
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="footer-grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready To Take <span className="text-[purple]">Your</span> Digital
          Presence To The Next Level?
        </h1>
        <p className="text=white-200 md:mt-10 my-5 text-center">
          Reach Out To Me Today And Let&apos;s Discuss How I Can Help You
          Achieve Your Goals.
        </p>

        <a href="mailto:vincentarasa254@gmail.com">
          <MagicButton
            title="Let's get in Touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="text-center mt-[2rem]">
        <p className="md:text-base text-sm">
          Copyright © {new Date().getUTCFullYear()}{" "}
          <a
            href="https://github.com/0daysleft"
            className="no-underline relative z-10"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vincent Okemwa @<span className="text-[purple]">0daysleft</span>
          </a>{" "}
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {
            socialMedia.map(
              (profile) => (
                <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blue-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                  <img src={profile.img}
                  alt="Image of a social media link"
                  width={20}
                  height={20}
                  />
                </div>
              )
            )
          }
        </div>
      </div>
    </footer>
  );
}