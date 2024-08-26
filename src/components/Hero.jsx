import { FigmaIcon } from "./icons/FigmaIcon";
import { GithubIcon } from "./icons/GithubIcon";
import { GreenCirclIcon } from "./icons/GreenCircleIcon";
import { TwitterIcon } from "./icons/TwitterIcon";
import { Location } from "./Location";

export const Hero = ({ isDarkMode }) => {
  return (
    <div className="w-full flex justify-center bg-gray-light dark:bg-gray-night">
      <div className="container flex justify-between w-full h-full px-4 py-16 md:px-20 md:py-24">
        <div className="grid md:grid-cols-2 justify-between w-full h-auto md:px-8 md:flex">
          <div className="flex flex-col w-full h-auto justify-center md:hidden">
            <div className="w-full h-auto items-center">
              <img
                src="/MobilePicContainer.svg"
                width={"416px"}
                alt=""
                srcSet=""
              />
            </div>
          </div>
          <div className="flex flex-col w-full h-full gap-12">
            <div className="">
              <h1 className="w-auto h-auto font-inter text-6xl font-bold leading-[72px] tracking-tight text-left text-gray-light-900 dark:text-gray-night-900">
                Hi, I’m Tom 👋
              </h1>
              <p className="font-normal text-base text-gray-light-600 dark:text-gray-night-600">
                I specialize in full stack development, particularly with
                React.js and Node.js. My main goal is to create exceptional
                digital experiences that are fast, visually appealing, and
                accessible to everyone. With over 7 years of experience in web
                development, I continue to find joy in crafting innovative
                solutions and designs.
              </p>
            </div>
            <div className="flex flex-col text-gray-light-600 dark:text-gray-night-600 gap-2">
              <div className="flex gap-1">
                <Location />
                <h1>Ulaanbaatar, Mongolia</h1>
              </div>
              <div className="flex gap-1">
                <GreenCirclIcon />
                <h1>Available for new projects</h1>
              </div>
            </div>
            <div className="flex">
              <div className="w-9 h-9 p-[6px]">
                <GithubIcon />
              </div>
              <div className="w-9 h-9 p-[6px]">
                <TwitterIcon />
              </div>
              <div className="w-9 h-9 p-[6px]">
                <FigmaIcon />
              </div>
            </div>
          </div>

          <div className="w-full h-full justify-end hidden md:flex">
            {isDarkMode ? (
              <div className="w-auto h-full bg-transparent">
                <img src="/DarkPicContainer.png" alt="" srcSet="" />
              </div>
            ) : (
              <div className="w-auto h-full bg-transparent">
                <img src="/LightPicContainer.jpg" alt="" srcSet="" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
