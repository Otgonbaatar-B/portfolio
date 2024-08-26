export const SkillBox = ({ iconComponent, text }) => {
  return (
    <div className="h-[100px] w-[88px] flex flex-col items-center gap-3 ">
      {iconComponent}
      <p className="text-gray-light-600 dark:text-gray-night-600">{text}</p>
    </div>
  );
};
