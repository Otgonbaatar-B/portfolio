import { GrayTitle } from "./GrayTitle";
import { WorkCard1 } from "./WorkCard1";
import { WorkCard2 } from "./WorkCard2";
import { WorkCard3 } from "./WorkCard3";

export const Work = () => {
  return (
    <div className="w-full flex justify-center bg-gray-light dark:bg-gray-night">
      <div className="container flex flex-col w-full h-auto items-center px-4 py-16 md:px-20 md:py-24 gap-6 md:gap-12">
        <div className="flex flex-col justify-center items-center gap-4">
          <GrayTitle caption="Work" />
          <h1 className="text-xl font-normal text-gray-light-600 dark:text-gray-night-600">
            Some of the noteworthy projects I have built:
          </h1>
        </div>
        <WorkCard1 imgUrl="/Ubcab.svg" />
        <WorkCard2 imgUrl="/MentorHub.svg" />
        <WorkCard3 imgUrl="/IToim.svg" />
      </div>
    </div>
  );
};
