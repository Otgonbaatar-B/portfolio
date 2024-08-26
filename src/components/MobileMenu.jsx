import { useEffect } from "react";
import { CloseIconDark } from "./icons/CloseIconDark";
import { CloseIconLight } from "./icons/CloseIconLight";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

export const MobileMenu = ({
  isDarkMode,
  handleOpenMenu,
  isOpenMenu,
  handleToggleDarkMode,
  onClick,
}) => {
  useEffect(() => {
    if (isOpenMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpenMenu]);

  const handleMenuClick = (sectionId) => {
    onClick(sectionId);
    handleOpenMenu();
  };

  return (
    <div
      className={`absolute transition-all duration-1000 ease-in-out ${
        isOpenMenu ? "right-0" : "left-[-100%]"
      } flex justify-end min-w-[375px] w-full h-screen bg-[rgba(17,24,39,0.1)] dark:bg-[rgba(31,41,55,0.1)] backdrop-blur-sm `}
    >
      <div className="menu flex flex-col w-[320px] h-full bg-gray-light dark:bg-gray-night ">
        <div className="flex space-between p-4 border-solid border-b border-gray-light-100 dark:border-gray-night-100">
          <div className="flex w-full">
            {isDarkMode ? (
              <div className="flex w-[76px] h-9 bg-center bg-contain items-center bg-no-repeat">
                <img src="/NightTom.svg" alt="" />
              </div>
            ) : (
              <div className="flex w-[76px] h-9 bg-center bg-contain items-center bg-no-repeat">
                <img src="/LightTom.svg" alt="" />
              </div>
            )}
          </div>
          <button
            onClick={handleOpenMenu}
            className="flex justify-end w-full h-auto"
          >
            {isDarkMode ? <CloseIconDark /> : <CloseIconLight />}
          </button>
        </div>
        <div className="flex flex-col p-4 gap-4 border-solid border-b border-gray-light-100 dark:border-gray-night-100">
          <h1
            onClick={() => handleMenuClick("about")}
            className="text-gray-light-600 dark:text-gray-night-600 cursor-pointer"
          >
            About
          </h1>
          <h1
            onClick={() => handleMenuClick("work")}
            className="text-gray-light-600 dark:text-gray-night-600 cursor-pointer"
          >
            Work
          </h1>
          <h1
            onClick={() => handleMenuClick("skills")}
            className="text-gray-light-600 dark:text-gray-night-600 cursor-pointer"
          >
            Testimonials
          </h1>
          <h1
            onClick={() => handleMenuClick("contact")}
            className="text-gray-light-600 dark:text-gray-night-600 cursor-pointer"
          >
            Contact
          </h1>
        </div>
        <div className="flex flex-col p-4 gap-4">
          <div className="flex space-between items-center">
            <div className="w-full text-gray-light-600 dark:text-gray-night-600">
              Switch Theme
            </div>
            <div className="cursor-pointer" onClick={handleToggleDarkMode}>
              {isDarkMode ? <MoonIcon /> : <SunIcon />}
            </div>
          </div>
          <button className="w-full h-auto px-4 py-[6px] rounded-t-xl rounded-b-xl text-base font-medium leading-6 text-center bg-gray-light-800 dark:bg-gray-night-800 text-gray-light-100 dark:text-gray-night-100 cursor-pointer">
            <a href="CV.pdf" download="CV.pdf">
              Download CV
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
