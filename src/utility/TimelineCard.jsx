import React from "react";
import { FcMissedCall, FcVideoCall } from "react-icons/fc";
import { RiMessage2Fill } from "react-icons/ri";
import { NavLink } from "react-router";

const TimelineCard = ({ history }) => {
  const { name, title, date, id } = history;
  const conversationsType = {
    Call: <FcMissedCall className="w-9 h-9 md:w-12 md:h-12" />,
    Video: <FcVideoCall className="w-9 h-9 md:w-12 md:h-12" />,
    Text: <RiMessage2Fill className="w-9 h-9 md:w-12 md:h-12" />,
  };
  return (
    <div className=" bg-white flex flex-row justify-between gap-1 max-w-full w-full border border-gray-300 p-3 md:p-4 rounded-xl md:hover:scale-101 transition-transform duration-200 cursor-pointer">
      <div className="flex flex-row justify-start items-center gap-2 md:gap-3">
        <div>{conversationsType[title]}</div>
        {/* details */}
        <div>
          <div className="flex flex-row justify-center items-center gap-2 text-sm md:text-xl">
            <h2 className="font-medium text-base md:text-xl text-[#244D3F]">
              {title}
            </h2>
            <p className="font-normal  text-[#64748B]">With {name}</p>
          </div>
          <div>
            <p className="font-normal text-base text-[#64748B]">{date}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <NavLink to={`/profile/${id}`} className="btn">
          Info
        </NavLink>
      </div>
    </div>
  );
};

export default TimelineCard;
