import { useRef, useState } from "react";
import { GrayTitle } from "./GrayTitle";
import { CallIcon } from "./icons/CallIcon";
import { CopyIcon } from "./icons/CopyIcon";
import { EmailIcon } from "./icons/EmailIcon";
import { FigmaIcon } from "./icons/FigmaIcon";
import { GithubIcon } from "./icons/GithubIcon";
import { TwitterIcon } from "./icons/TwitterIcon";

export const ContactMe = () => {
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const [notification, setNotification] = useState("");

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => setNotification("Амжилттай хуулагдлаа"),
      (err) => setNotification("Хуулхад алдаа гарлаа: " + err)
    );

    setTimeout(() => setNotification(""), 3000);
  };

  return (
    <div className="w-full flex justify-center bg-gray-light dark:bg-gray-night">
      <div className="container flex w-full h-auto px-4 py-16 md:px-20 md:py-24">
        <div className="flex flex-col w-full gap-6 md:px-8 md:gap-12">
          <div className="flex flex-col justify-center items-center gap-4">
            <GrayTitle caption="Get in touch" />
            <h1 className="text-xl font-normal text-gray-light-600 dark:text-gray-night-600">
              What’s next? Feel free to reach out to me if you're looking for a
              developer, have a query, or simply want to connect.
            </h1>
          </div>

          <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex items-center gap-5">
              <EmailIcon />
              <h1
                ref={emailRef}
                className="font-inter text-3xl font-semibold leading-10 tracking-tight text-center text-gray-light-900 dark:text-gray-night-900"
              >
                tom@pinecone.mn
              </h1>
              <button
                onClick={() => copyToClipboard(emailRef.current.innerText)}
                className="cursor-pointer"
              >
                <CopyIcon />
              </button>
            </div>
            <div className="flex items-center gap-5">
              <CallIcon />
              <h1
                ref={phoneRef}
                className="font-inter text-3xl font-semibold leading-10 tracking-tight text-center text-gray-light-900 dark:text-gray-night-900"
              >
                +976 88112233
              </h1>
              <button
                onClick={() => copyToClipboard(phoneRef.current.innerText)}
                className="cursor-pointer"
              >
                <CopyIcon />
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-xl font-normal text-gray-light-600 dark:text-gray-night-600">
              You may also find me on these platforms!
            </h1>
            <div className="flex">
              <div className="w-9 h-9 p-[6px]">
                <GithubIcon />
              </div>
              <div className="w-9 h-9 p-[6px]">
                <TwitterIcon />
              </div>
              <div className="w-9 h-9 p-[6px]">
                <FigmaIcon />
              </div>
            </div>
          </div>
          {notification && (
            <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-3 rounded shadow-lg">
              {notification}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
