import React from "react";

const BannerFriendsDetails = ({ number, title }) => {
  return (
    <div className="md:hover:scale-105 transition-transform duration-200 cursor-pointer flex flex-col justify-center items-center gap-y-2 shadow-[0_0_5px_rgba(0,0,0,0.1)] py-8 rounded-2xl">
      <h1 className="font-semibold text-3xl text-[#244D3F]">{number}</h1>
      <p className="font-normal text-[18px] text-black/60">{title}</p>
    </div>
  );
};

export default BannerFriendsDetails;
