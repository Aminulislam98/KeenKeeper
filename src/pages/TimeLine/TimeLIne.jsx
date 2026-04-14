import React, { useContext, useEffect } from "react";
import { FcMissedCall, FcVideoCall } from "react-icons/fc";
import { RiMessage2Fill } from "react-icons/ri";
import { Tab, TabList } from "react-tabs";
import { AllDataContext } from "../../context/AllDataProvider";
import TimelineCard from "../../utility/TimelineCard";
import { useNavigate } from "react-router";
import { IoCall } from "react-icons/io5";
import { IoMdText, IoMdVideocam } from "react-icons/io";

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
                  <IoMdText />
                  Text
                </a>
              </li>
              <li
                onClick={() => {
                  document.activeElement.blur();
                }}
              >
                <a className="text-[#061624] hover:bg-[#E6F1FB] hover:text-[#0E5B9B] rounded-lg flex items-center gap-2">
                  <IoCall />
                  Call
                </a>
              </li>
              <li
                onClick={() => {
                  document.activeElement.blur();
                }}
              >
                <a className="text-[#061624] hover:bg-[#E6F1FB] hover:text-[#0E5B9B] rounded-lg flex items-center gap-2">
                  <IoMdVideocam />
                  Video
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
