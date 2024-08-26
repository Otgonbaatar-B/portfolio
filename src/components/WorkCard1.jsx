import { GrayTitle } from "./GrayTitle";

export const WorkCard1 = ({ imgUrl }) => {
  return (
    <div className="grid md:grid-cols-2 w-full h-auto shadow-md">
      <div className="flex justify-center w-full p-8 md:p-12 bg-gray-light-50 dark:bg-gray-night-200 rounded-tl-xl rounded-bl-xl shadow-md">
        <img src={imgUrl} alt="" />
      </div>
      <div className="flex w-full flex-col p-8 md:p-12 bg-[--bg-gray] rounded-tr-xl rounded-br-xl shadow-md gap-6 dark:bg-gray-night-100">
        <h1 className="font-inter text-xl font-semibold leading-7 text-left text-gray-light-900 dark:text-gray-night-900">
          UBCab
        </h1>
        <h1 className="text-base font-normal leading-6 text-left text-gray-light-600 dark:text-gray-night-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae.
        </h1>
        <div className="flex flex-wrap w-full h-auto gap-2">
          <GrayTitle caption={"React"} />
          <GrayTitle caption={"Next.js"} />
          <GrayTitle caption={"Typescript"} />
          <GrayTitle caption={"Nest.js"} />
          <GrayTitle caption={"PostgreSQL"} />
          <GrayTitle caption={"Tailwindcss"} />
          <GrayTitle caption={"Figma"} />
          <GrayTitle caption={"Cypress"} />
          <GrayTitle caption={"Storybook"} />
          <GrayTitle caption={"Git"} />
        </div>
        <div>
          <img src="/IconButton.svg" alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};
