import { Divider } from "./Divider";
import { HamburgerIcon } from "./icons/HamburgerIcon";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";
import { useState } from "react";
import { MobileMenu } from "./MobileMenu";
import { HamburgerIconNight } from "./icons/HamburgerIconNight";

export const Header = ({ handleToggleDarkMode, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Section not found:", sectionId);
    }
  };

  const onClick = (sectionId) => {
    handleScrollToSection(sectionId);
    handleOpenMenu(); // Close the menu when a section is clicked
  };

  return (
    <div className="w-full flex justify-center fixed bg-gray-light dark:bg-gray-night">
      <div className="container flex w-full p-4 md:px-20 md:py-4">
        <div className="header-container flex justify-between items-center w-full h-9 md:px-8">
          <div className="flex justify-center items-center w-auto h-auto">
            {isDarkMode ? (
              <div
                className="flex items-center w-full h-9 cursor-pointer bg-center bg-contain bg-no-repeat"
                onClick={handleScrollToTop}
              >
                <img src="/NightTom.svg" alt="NightTom" />
              </div>
            ) : (
              <div
                className="flex items-center w-full h-9 cursor-pointer bg-center bg-contain bg-no-repeat"
                onClick={handleScrollToTop}
              >
                <img src="/LightTom.svg" alt="LightTom" />
              </div>
            )}
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <button
              onClick={() => onClick("about")}
              className="w-auto h-auto text-base font-medium leading-6 text-left text-gray-light-600 dark:text-gray-night-600 cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => onClick("work")}
              className="w-auto h-auto text-base font-medium leading-6 text-left text-gray-light-600 dark:text-gray-night-600 cursor-pointer"
            >
              Work
            </button>
            <button
              onClick={() => onClick("skills")}
              className="w-auto h-auto text-base font-medium leading-6 text-left text-gray-light-600 dark:text-gray-night-600 cursor-pointer"
            >
              Testimonials
            </button>
            <button
              onClick={() => onClick("contact")}
              className="w-auto h-auto text-base font-medium leading-6 text-left text-gray-light-600 dark:text-gray-night-600 cursor-pointer"
            >
              Contact
            </button>
            <div>
              <Divider />
            </div>
            <div className="flex transition-all duration-2000 header-action h-9 items-center gap-4">
              <div className="cursor-pointer" onClick={handleToggleDarkMode}>
                {isDarkMode ? <MoonIcon /> : <SunIcon />}
              </div>
              <button className="before:ease relative w-auto h-auto overflow-hidden shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6  before:bg-white dark:before:bg-black before:opacity-20 before:duration-1000 hover:shadow-black dark:hover:shadow-white hover:before:-translate-x-40 px-4 py-[6px] rounded-t-xl rounded-b-xl text-base font-medium leading-6 text-left bg-gray-light-800 dark:bg-gray-night-800 text-gray-light-100 dark:text-gray-night-100">
                <a href="CV.pdf" download="CV.pdf">
                  <span relative="relative z-10">Download CV</span>
                </a>
              </button>
            </div>
          </div>
          <div
            onClick={handleOpenMenu}
            className="md:hidden flex cursor-pointer"
          >
            {isDarkMode ? <HamburgerIconNight /> : <HamburgerIcon />}
          </div>
        </div>
      </div>
      <MobileMenu
        isDarkMode={isDarkMode}
        handleOpenMenu={handleOpenMenu}
        isOpenMenu={isOpen}
        handleToggleDarkMode={handleToggleDarkMode}
        onClick={onClick} // Pass onClick to MobileMenu
      />
    </div>
  );
};
