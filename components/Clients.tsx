import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import {testimonials} from "@/Data/index";
import {companies} from "@/Data/index";

export default function Clients() {
  return (
    <div className="py-20" id="clients">
      <h1 className="heading">
        Kind Words From <span className="text-[purple]">Satisfied Clients</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
          />
          <div className="">
            {
              companies.map(
                ({id,img,name,nameImg}) => (
                  <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
                    <img src={img}
                    alt={name}
                    className="md:w-10 w-5"
                    />
                  </div>
                )
              )
            }
          </div>
      </div>
    </div>
  );
}
