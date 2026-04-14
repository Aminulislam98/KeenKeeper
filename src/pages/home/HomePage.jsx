import React, { use, useEffect, useState } from "react";
import BannerFriendsDetails from "../../utility/BannerFriendsDetails";
import { FaPlus } from "react-icons/fa6";
import ProfileCard from "../../utility/ProfileCard";
import useProfilesData from "../../Hooks/useProfilesData";
// const profilePromise = fetch("/profileData.json").then((res) => res.json());
const HomePage = () => {
  // const profilesData = use(profilePromise);
  // console.log(profilesData);
  const friendsDetails = [
    {
      id: 1,
      count: 10,
      title: "Total Friends",
    },
    {
      id: 2,
      count: 3,
      title: "On Track",
    },
    {
      id: 3,
      count: 6,
      title: "Need Attention",
    },
    {
      id: 4,
      count: 12,
      title: "Need Attention",
    },
  ];
  const { profilesData, loader } = useProfilesData();

  return (
    <section className="w-full bg-[#F8FAFC] py-10 md:py-20 px-4">
      <div className="max-w-6xl w-full mx-auto">
        {/* This is top level of banner */}
        <div className="flex flex-col justify-center items-center gap-y-10 border-b border-b-black/10 pb-7 md:pb-12 mb-5">
          {/* title and descriptions */}
          <div className="flex flex-col justify-center items-center gap-y-3 md:gap-y-6">
            <h1 className="font-bold text-3xl md:text-5xl text-center">
              Friends to keep close in your life
            </h1>
            <p className="max-w-130 text-center text-sm font-normal text-[#64748B]">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the relationships that matter most.
            </p>
            <button
              className="py-2 px-4 rounded cursor-pointer
             bg-[#244D3F] text-white flex 
             flex-row justify-center items-center gap-1 font-semibold text-base"
            >
              <FaPlus />
              Add a Friend
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 max-w-full w-full">
            {friendsDetails.map((friend) => (
              <BannerFriendsDetails
                key={friend.id}
                number={friend.count}
                title={friend.title}
              ></BannerFriendsDetails>
            ))}
          </div>
        </div>
        {/* This is bottom level of banner */}
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-2xl ">Your Friends</h2>
          {loader ? (
            <div className="max-w-full w-full flex justify-center">
              <span className="loading loading-spinner loading-xl"></span>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4  gap-2 md:gap-4">
              {profilesData.map((profile) => (
                <ProfileCard key={profile.id} profile={profile}></ProfileCard>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
