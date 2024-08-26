import { GrayTitle } from "./GrayTitle";
import {
  JavascriptIcon,
  TypescriptIcon,
  ReactIcon,
  NextJsIcon,
  NodeJsIcon,
  ExpressJsIcon,
  NestJsIcon,
  SocketIoIcon,
  PostgreSqlIcon,
  MongoDBIcon,
  SassIcon,
  TailwindcssIcon,
  FigmaIcon,
  CypressIcon,
  StorybookIcon,
  GitIcon,
} from "./icons/JavascriptIcon";
import { SkillBox } from "./SkillBox";

export const Skills = () => {
  return (
    <div className="w-full flex justify-center bg-gray-light dark:bg-gray-night ">
      <div className="container flex flex-col items-center w-full h-auto px-4 py-16 md:px-20 md:py-24 gap-12">
        <div className="flex flex-col justify-center items-center gap-4">
          <GrayTitle caption="Skills" />
          <h1>The skills, tools and technologies I am really good at:</h1>
        </div>
        <div className="grid md:-flex-wrap  w-full gap-4 md:gap-12">
          <div className="flex flex-wrap w-full  justify-between md:flex gap-6 md:gap-20">
            <SkillBox iconComponent={<JavascriptIcon />} text={"Javascript"} />
            <SkillBox iconComponent={<TypescriptIcon />} text={"Type"} />
            <SkillBox iconComponent={<ReactIcon />} text={"React"} />
            <SkillBox iconComponent={<NextJsIcon />} text={"Next.js"} />
            <SkillBox iconComponent={<NodeJsIcon />} text={"Node.js"} />
            <SkillBox iconComponent={<ExpressJsIcon />} text={"Express.js"} />
            <SkillBox iconComponent={<NestJsIcon />} text={"Nest.js"} />
            <SkillBox iconComponent={<SocketIoIcon />} text={"Socke.io"} />

            <SkillBox iconComponent={<PostgreSqlIcon />} text={"PostgreSql"} />
            <SkillBox iconComponent={<MongoDBIcon />} text={"MongoDB"} />
            <SkillBox iconComponent={<SassIcon />} text={"Sass/Scss"} />
            <SkillBox
              iconComponent={<TailwindcssIcon />}
              text={"Tailwindcss"}
            />
            <SkillBox iconComponent={<FigmaIcon />} text={"Figma"} />
            <SkillBox iconComponent={<CypressIcon />} text={"Cypress"} />
            <SkillBox iconComponent={<StorybookIcon />} text={"Storybook"} />
            <SkillBox iconComponent={<GitIcon />} text={"Git"} />
          </div>
        </div>
      </div>
    </div>
  );
};
