import { FooterIcon } from "./icons/FooterIcon";

export const Footer = () => {
  return (
    <div className="w-full flex justify-center bg-gray-light-50 dark:bg-gray-night-50">
      <div className="container flex justify-center items-center py-6 md:px-20 md:py-6 gap-2">
        <FooterIcon />
        <h1 className="text-sm font-normal text-gray-light-600 dark:text-gray-night-600">
          2024 | Greetings with ❤️️ from Ulaanbaatar
        </h1>
      </div>
    </div>
  );
};
