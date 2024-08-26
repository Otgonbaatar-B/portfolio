import { GrayTitle } from "./GrayTitle";
import { UpworkCard } from "./UpworkCard";

export const Experience = ({ isDarkMode }) => {
  return (
    <div
      id="experience"
      className="w-full bg-gray-light-50 dark:bg-gray-night-50 flex justify-center"
    >
      <div className="container flex flex-col items-center w-full h-auto px-4 py-16 md:px-20 md:py-24 gap-6 md:gap-12 ">
        <div className="flex flex-col justify-center items-center gap-4">
          <GrayTitle caption="Experience" />
          <h1 className="text-xl font-normal text-gray-light-600 dark:text-gray-night-600">
            Here is a quick summary of my most recent experiences:
          </h1>
        </div>
        <UpworkCard
          title={"Sr. Frontend Developer"}
          li1={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          li2={"Ut pretium arcu et massa semper, id fringilla leo semper."}
          li3={"Sed quis justo ac magna."}
          li4={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          date={"Nov 2021 - Present"}
          isDarkMode={isDarkMode}
        />
        <UpworkCard
          title={"Team Lead"}
          li1={"Sed quis justo ac magna."}
          li2={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          li3={"Sed quis justo ac magna."}
          li4={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          date={"Jul 2017 - Oct 2021"}
          isDarkMode={isDarkMode}
        />
        <UpworkCard
          title={"Full Stack Developer"}
          li1={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
          date={"Dec 2015 - May 2017"}
          isDarkMode={isDarkMode}
        />
      </div>
    </div>
  );
};
