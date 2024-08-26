import { Divider } from "./Divider";
import { Text } from "./HeaderText";
import { HamburgerIcon } from "./icons/HamburgerIcon";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";
import { useState } from "react";
import { MobileMenu } from "./MobileMenu";

export const Header = ({ handleToggleDarkMode, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      console.log("Section found:", section);
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Section not found:", sectionId);
    }
  };

  return (
    <div className="w-full flex justify-center bg-gray-light-default dark:bg-gray-night">
      <div className="container flex w-full p-4 md:px-20 md:py-4">
        <div className="header-container flex justify-between w-full h-9 md:px-8">
          {isDarkMode ? (
            <div className="w-[76px] h-9 bg-center bg-contain bg-no-repeat">
              <img src="/NightTom.svg" alt="" />
            </div>
          ) : (
            <div className="w-[76px] h-9 bg-center bg-contain bg-no-repeat">
              <img src="/LightTom.svg" alt="" />
            </div>
          )}
          <div className="hidden items-center gap-6 md:flex">
            <Text
              TextParameter="About"
              sectionId="about"
              onClick={handleScrollToSection}
            />
            <Text
              TextParameter="Work"
              sectionId="work"
              onClick={handleScrollToSection}
            />
            <Text
              TextParameter="Testimonials"
              sectionId="testimonials"
              onClick={handleScrollToSection}
            />
            <Text
              TextParameter="Contact"
              sectionId="contact"
              onClick={handleScrollToSection}
            />
            <div>
              <Divider />
            </div>
            <div className="flex header-action h-9 items-center gap-4">
              <div className="cursor-pointer" onClick={handleToggleDarkMode}>
                {isDarkMode ? <MoonIcon /> : <SunIcon />}
              </div>
              <button className="w-auto h-auto px-4 py-[6px] rounded-t-xl rounded-b-xl text-base font-medium leading-6 text-left bg-gray-light-800 dark:bg-gray-night-800 text-gray-light-100 dark:text-gray-night-100">
                Download CV
              </button>
            </div>
          </div>
          <div
            onClick={handleOpenMenu}
            className="md:hidden flex cursor-pointer"
          >
            <HamburgerIcon />
          </div>
        </div>
      </div>
      <MobileMenu
        isDarkMode={isDarkMode}
        handleOpenMenu={handleOpenMenu}
        isOpenMenu={isOpen}
        handleToggleDarkMode={handleToggleDarkMode}
      />
    </div>
  );
};
