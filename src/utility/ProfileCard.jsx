import React from "react";
import ProfileTags from "./ProfileTags";

const ProfileCard = ({ profile }) => {
  const { name, picture, days_since_contact, status, tags } = profile;
  // text and bg style for status property
  const statusStyles = {
    "on-track": "bg-green-900 text-green-50",
    "almost due": "bg-orange-900 text-orange-50",
    overdue: "bg-red-900 text-red-50",
  };
  return (
    <div className="max-w-full w-full shadow-[0_0_5px_rgba(0,0,0,0.1)] flex flex-col justify-center items-center py-6 gap-y-3 rounded md:rounded-2xl  md:hover:scale-105 transition-transform duration-200 cursor-pointer">
      <div className="max-w-20 max-h-20 w-full h-full rounded-full overflow-hidden">
        <img className="w-full" src={picture} alt={name} />
      </div>
      <div className="flex flex-col justify-center  items-center gap-2">
        <h2 className="font-semibold text-xl text-center">{name}</h2>
        <p className="font-normal text-sm text-[#64748B]">
          {days_since_contact}d ago
        </p>
        <div className=" flex flex-row  justify-start items-center gap-1 text-center px-1">
          {tags.map((tag, index) => (
            <ProfileTags tag={tag} key={index}></ProfileTags>
          ))}
        </div>
        <p
          className={`${statusStyles[status]} items-center px-2 py-1 rounded-xl text-xs  border border-gray-200 
              hover:scale-105 transition-transform duration-200 uppercase w-fit text-center `}
        >
          {status}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
