import { workExperience } from "@/Data/index";

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

            )
          )
        }
      </div>
    </div>
  );
}
