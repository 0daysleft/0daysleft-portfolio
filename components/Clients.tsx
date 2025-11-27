import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import {testimonials} from "@/Data/index";

export default function Clients() {
  return (
    <div className="py-20" id="clients">
      <h1 className="heading">
        Kind Words From{" "}
        <span className="text-[purple]">Satisfied Clients</span>
      </h1>
      <div className="flex flex-col items-center">
        <InfiniteMovingCards 
          items={testimonials}
          direction="right"
          speed='slow'
        />
      </div>
    </div>
  );
}
