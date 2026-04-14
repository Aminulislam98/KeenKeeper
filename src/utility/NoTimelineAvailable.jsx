import React from "react";
import { MdOutlineHistory } from "react-icons/md";
import { NavLink } from "react-router";

const NoTimelineAvailable = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center px-4">
      <div className="flex flex-col items-center text-center">
        {/* Double ring icon */}
        <div className="w-22 h-22 rounded-full border border-[#d4e3de] bg-[#f2f7f5] flex items-center justify-center mb-5">
          <div className="w-14 h-14 rounded-full bg-[#e0eeea] flex items-center justify-center">
            <MdOutlineHistory size={28} color="#244D3F" />
          </div>
        </div>

        <h2 className="text-4xl font-medium text-[#244D3F] tracking-tight mb-2.5">
          No timeline available
        </h2>

        <p className="text-sm text-[#6b9484] leading-relaxed max-w-[255px] mb-5">
          Get back here once you've made a call, sent a text, or started a video
          call.
        </p>

        <NavLink
          to={"/"}
          className="px-8 py-3 rounded-full bg-[#244D3F] hover:bg-[#1a3a2e] text-white text-sm font-medium tracking-wide transition-colors"
        >
          Go back home
        </NavLink>
      </div>
    </div>
  );
};

export default NoTimelineAvailable;
