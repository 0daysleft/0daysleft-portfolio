import { workExperience } from "@/Data/index";
import { Button } from "./ui/moving-border";

export default function Experience() {
  return (
    <div className="py-20" id="experience">
      <h1 className="heading">
        My <span className="text-[purple]">Work Experience</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {
          workExperience.map(
            (card) => (
              <Button>
                <div className="">
                  <img src={card.thumbnail}
                  alt={card.title}
                  className="lg:w-32 md:w-20 w-16"/>
                </div>
              </Button>
            )
          )
        }
      </div>
    </div>
  );
}
