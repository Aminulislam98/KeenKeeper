import React from "react";
import ProfileTags from "./ProfileTags";
import { NavLink } from "react-router";
import ProfileStatus from "./ProfileStatus";

const ProfileCard = ({ profile }) => {
  const { id, name, picture, days_since_contact, status, tags } = profile;
  // text and bg style for status property

  return (
    <NavLink
      to={`/profile/${id}`}
      className="w-full bg-white border border-slate-200 rounded md:rounded-2xl overflow-hidden cursor-pointer md:hover:scale-105 transition-transform duration-200"
    >
      {/* top section — tinted */}
      <div className="bg-slate-50 flex flex-col items-center pt-7 pb-0 px-5">
        <div className="w-18 h-18 rounded-full overflow-hidden border-[3px] border-white shadow-[0_0_0_1px_#E2E8F0] mb-3">
          <img
            className="w-full h-full object-cover"
            src={picture}
            alt={name}
          />
        </div>
        <h2 className="font-bold text-xl text-slate-900 tracking-tight text-center mb-0.5">
          {name}
        </h2>
        <p className="text-sm font-medium text-slate-400 mb-4">
          {days_since_contact}d ago
        </p>
      </div>

      {/* bottom section — white */}
      <div className="flex flex-col items-center gap-3 px-4.5 pt-4 pb-4.5">
        <div className="flex flex-row flex-wrap justify-center items-center gap-1.25">
          {tags.map((tag, index) => (
            <ProfileTags tag={tag} key={index} />
          ))}
        </div>

        <p className=" flex items-center gap-1.25 px-3 py-1.25 rounded-lg text-[10px] font-bold tracking-wide w-fit uppercase">
          {status ? <ProfileStatus status={status}></ProfileStatus> : ""}
        </p>
      </div>
    </NavLink>
  );
};

export default ProfileCard;
