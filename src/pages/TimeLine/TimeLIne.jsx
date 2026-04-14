import React, { useContext, useEffect, useMemo, useState } from "react";
import { FcMissedCall, FcVideoCall } from "react-icons/fc";
import { RiMessage2Fill } from "react-icons/ri";
import { Tab, TabList } from "react-tabs";
import { AllDataContext } from "../../context/AllDataProvider";
import TimelineCard from "../../utility/TimelineCard";
import { IoCall } from "react-icons/io5";
import { IoMdText, IoMdVideocam } from "react-icons/io";
import NoTimelineAvailable from "../../utility/NoTimelineAvailable";
import { toast } from "react-toastify";

const TimeLIne = () => {
  const { callHistory } = useContext(AllDataContext);
  const [filter, setFilter] = useState("Filter Timeline");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [callHistory]);

  const filterHistory = useMemo(() => {
    if (filter === "See all history") {
      return callHistory;
    }
    if (filter === "Text") {
      return callHistory.filter((text) => text.title === "Text");
    }
    if (filter === "Video") {
      return callHistory.filter((video) => video.title === "Video");
    }
    if (filter === "Call") {
      return callHistory.filter((call) => call.title === "Call");
    }
    return callHistory;
  }, [filter, callHistory]);

  useEffect(() => {
    const filterNames = ["Text", "Call", "Video"];
    if (
      filterNames.includes(filter) &&
      filterHistory.length === 0 &&
      callHistory.length > 0
    ) {
      toast.error(`No ${filter} history available!`, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
      setFilter("See all history");
    }
  }, [filter, filterHistory, callHistory]);
  console.log(filterHistory);
  return (
    <section className="min-h-screen bg-[#F8FAFC] py-8 px-4">
      {filterHistory.length === 0 ? (
        <NoTimelineAvailable></NoTimelineAvailable>
      ) : (
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
                {filter}
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
                    setFilter("Text");
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
                    setFilter("Call");
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
                    setFilter("Video");
                  }}
                >
                  <a className="text-[#061624] hover:bg-[#E6F1FB] hover:text-[#0E5B9B] rounded-lg flex items-center gap-2">
                    <IoMdVideocam />
                    Video
                  </a>
                </li>
                <li
                  onClick={() => {
                    document.activeElement.blur();
                    setFilter("See all history");
                  }}
                >
                  <a className="text-[#061624] hover:bg-[#E6F1FB] hover:text-[#0E5B9B] rounded-lg flex items-center gap-2">
                    See All History
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* bottom section */}
          <div className="flex flex-col gap-3 mt-4">
            {filterHistory.map((history, index) => (
              <TimelineCard history={history} key={index}></TimelineCard>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default TimeLIne;
