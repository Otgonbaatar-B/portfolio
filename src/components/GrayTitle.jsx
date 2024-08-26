export const GrayTitle = ({ caption }) => {
  return (
    <div className="w-auto max-w-max h-7 bg-gray-light-200 dark:bg-gray-night-200 px-5 py-1 rounded-xl justify-center items-center text-gray-light-600 dark:text-gray-night-600 text-sm font-medium leading-5">
      {caption}
    </div>
  );
};
