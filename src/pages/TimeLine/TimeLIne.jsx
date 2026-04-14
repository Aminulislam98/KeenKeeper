import React, { useContext, useEffect } from "react";
import { FcMissedCall, FcVideoCall } from "react-icons/fc";
import { RiMessage2Fill } from "react-icons/ri";
import { Tab, TabList } from "react-tabs";
import { AllDataContext } from "../../context/AllDataProvider";
import TimelineCard from "../../utility/TimelineCard";
import { useNavigate } from "react-router";

const TimeLIne = () => {
  const { callHistory } = useContext(AllDataContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [callHistory]);
  return (
    <section className="min-h-screen bg-[#F8FAFC] py-8 px-4">
      <div className="max-w-6xl w-full mx-auto ">
        {/* top section */}
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-5xl ">Timeline</h1>
          <div className="dropdown mb-3 border border-black/10 rounded-xl w-60 ">
            <div
              tabIndex={0}
              role="button"
              className="flex items-center justify-between px-4 py-2 rounded-md text-[#244D3F] bg-transparent transition-colors duration-200 text-sm font-medium cursor-pointer "
            >
              Filter timeline
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="w-60 dropdown-content menu bg-white border
               border-gray-200 rounded-xl z-50  p-2 mt-1 shadow-md"
            >
              <li
                onClick={() => {
                  document.activeElement.blur();
                }}
              >
                <a className="text-[#061624] hover:bg-[#E6F1FB] hover:text-[#0E5B9B] rounded-lg flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  Rating
                </a>
              </li>
              <li
                onClick={() => {
                  document.activeElement.blur();
                }}
              >
                <a className="text-[#061624] hover:bg-[#E6F1FB] hover:text-[#0E5B9B] rounded-lg flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                  Number of pages
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* bottom section */}
        <div className="flex flex-col gap-3 mt-4">
          {callHistory.map((history, index) => (
            <TimelineCard history={history} key={index}></TimelineCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimeLIne;
