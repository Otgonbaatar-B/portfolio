import { UpworkTitle } from "./UpworkTitle";

export const UpworkCard = ({ title, li1, li2, li3, li4, date, isDarkMode }) => {
  return (
    <div className="md:flex w-auto max-w-[832px] h-auto p-8 bg-gray-light dark:bg-gray-night-100 rounded-xl shadow-md gap-4 md:gap-12">
      <div className="hidden md:flex w-full max-w-[206px] h-auto">
        {isDarkMode ? (
          <div className="w-full h-auto">
            {/* <img src="/NightColumn.png" alt="Upwork Logo" /> */}
            <img src="/ColumnNight.svg" alt="" width="102" height="28" />
          </div>
        ) : (
          <div className="w-full h-auto">
            <img
              src="/logo-upwork.svg"
              alt="Upwork Logo"
              width="102"
              height="28"
            />
          </div>
        )}
      </div>

      <div className="flex flex-col w-full max-w-[384px] h-auto gap-4">
        <div className="flex md:hidden w-full max-w-[206px] h-auto">
          {isDarkMode ? (
            <div className="w-full h-auto">
              <img src="/NightColumn.png" alt="Upwork Logo" />
            </div>
          ) : (
            <div className="w-full h-auto">
              <img
                src="/logo-upwork.svg"
                alt="Upwork Logo"
                width="102"
                height="28"
              />
            </div>
          )}
        </div>
        <div className="md:hidden flex w-full font-inter text-base font-normal leading-6 text-left text-gray-light-700 dark:text-gray-night-700">
          {date}
        </div>
        <UpworkTitle title={title} />
        <div className="gap-4">
          <div className="text-base font-normal leading-6 text-left text-gray-light-600 dark:text-gray-night-600 gap-1">
            {li1 && <li>{li1}</li>}
            {li2 && <li>{li2}</li>}
            {li3 && <li>{li3}</li>}
            {li4 && <li>{li4}</li>}
          </div>
        </div>
      </div>
      <div className="hidden md:flex w-full max-w-[148px] font-inter text-base font-normal leading-6 text-left text-gray-light-700 dark:text-gray-night-700">
        {date}
      </div>
    </div>
  );
};
