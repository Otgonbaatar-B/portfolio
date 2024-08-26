export const Text = ({ onClick, TextParameter, sectionId }) => {
  return (
    <button
      onClick={() => onClick(sectionId)}
      className="w-auto h-auto text-base font-medium leading-6 text-left text-gray-light-600 dark:text-gray-night-600 cursor-pointer"
    >
      {TextParameter}
    </button>
  );
};
