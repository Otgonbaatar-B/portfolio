import { GrayTitle } from "./GrayTitle";

export const About = ({ isDarkMode }) => {
  return (
    <div className="w-full flex justify-center bg-gray-light-50 dark:bg-gray-night-50">
      <div className="container flex flex-col justify-center items-center w-full h-auto px-4 py-16 md:px-20 md:py-24 gap-12">
        <GrayTitle caption="About me" />
        <div className=" grid md:grid-cols-2 w-full h-auto gap-6  md:gap-12">
          {isDarkMode ? (
            <div className="w-full h-auto">
              <img src="/NightPicContainer1.png" alt="" srcset="" />
            </div>
          ) : (
            <div className="w-full h-auto">
              <img src="/LightPicContainer1.jpg" alt="" srcset="" />
            </div>
          )}
          <div className="w-full h-full">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-light-900 dark:text-gray-night-900">
              Curious about me? Here you have it:
            </h1>
            <div className="flex flex-col w-full h-full gap-4">
              <h1 className="text-base font-normal text-gray-light-600 dark:text-gray-night-600">
                I'm a designer turned full stack developer, passionate about
                React.js and Node.js. I excel in blending technical and visual
                aspects to craft exceptional digital products, prioritizing user
                experience, precise design, and optimized code.
              </h1>
              <h1 className="text-base font-normal text-gray-light-600 dark:text-gray-night-600">
                Since starting my web development journey in 2015, I've embraced
                challenges and kept up with the latest tech trends. Now in my
                early thirties, seven years in, I'm building cutting-edge web
                apps using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase,
                and more.
              </h1>
              <h1 className="text-base font-normal text-gray-light-600 dark:text-gray-night-600">
                With a progressive mindset, I enjoy the entire product
                development process, from ideation to execution. Off duty,
                you'll find me on Twitter, tracking startup journeys, or
                unwinding. Follow me for tech insights and public project
                updates on Twitter or GitHub.
              </h1>
              <h1 className="text-base font-normal text-gray-light-600 dark:text-gray-night-600">
                Finally, some quick bits about me.
              </h1>
              <div className="flex gap-[10px]">
                <div>
                  <li className="text-base font-normal text-gray-light-600 dark:text-gray-night-600">
                    B.E. in Computer Engineering
                  </li>
                  <li className="text-base font-normal text-gray-light-600 dark:text-gray-night-600">
                    Full time freelancer
                  </li>
                </div>
                <div>
                  <li className="text-base font-normal text-gray-light-600 dark:text-gray-night-600">
                    Avid learner
                  </li>
                </div>
              </div>
              <h1 className="text-base font-normal text-gray-light-600 dark:text-gray-night-600">
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
