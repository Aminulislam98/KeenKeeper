import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import useProfilesData from "../../Hooks/useProfilesData";
import ProfileTags from "../../utility/ProfileTags";
import { PiPhoneCallBold } from "react-icons/pi";
import { LuMessageSquareText, LuVideo } from "react-icons/lu";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { IoArchiveSharp } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { AllDataContext } from "../../context/AllDataProvider";
import { useContext } from "react";
import { toast } from "react-toastify";

const ProfileDetails = () => {
  const { id } = useParams();
  const { profilesData, loader } = useProfilesData();
  const matchedProfile = profilesData?.find(
    (profile) => String(profile.id) === id,
  );

  const {
    name,
    picture,
    days_since_contact,
    status,
    tags,
    bio,
    goal,
    next_due_date,
    email,
  } = matchedProfile ?? {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const goBack = useNavigate();
  const statusStyles = {
    "on-track": "bg-green-900 text-green-50",
    "almost due": "bg-orange-900 text-orange-50",
    overdue: "bg-red-900 text-red-50",
  };

  const { callHistory, setCallHistory } = useContext(AllDataContext);
  const date = new Date();

  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // this is for call
  const newCall = () => {
    const newCallDetails = {
      id: id,
      title: "Call",
      name: name,
      date: formattedDate,
    };
    setCallHistory([...callHistory, newCallDetails]);

    toast.success(`Call with ${name} completed`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const newText = () => {
    const newTextDetails = {
      id: id,
      title: "Text",
      name: name,
      date: formattedDate,
    };
    setCallHistory([...callHistory, newTextDetails]);
    toast.success(`Message sent to ${name}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const newVideo = () => {
    const newVideoDetails = {
      id: id,
      title: "Video",
      name: name,
      date: formattedDate,
    };
    setCallHistory([...callHistory, newVideoDetails]);
    toast.success(`Video call with ${name} completed`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  return (
    <>
      {loader ? (
        <div className="max-w-full w-full flex justify-center">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      ) : (
        <section className="min-h-screen bg-[#F8FAFC] py-8 px-4">
          <div className="flex flex-row justify-between mx-auto max-w-7xl">
            <button
              onClick={() => {
                goBack(-1);
              }}
              className="flex items-center  gap-2 text-black hover:text-[#244D3F] transition-colors duration-200 text-base font-medium max-w-6xl   pb-5"
            >
              <FaArrowLeft className="text-base" />
              Back
            </button>
          </div>

          <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row gap-4">
            {/* ── Left column ── */}
            <div className="flex flex-col gap-4 w-full lg:w-65 lg:shrink">
              {/* Profile card */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col items-center gap-2.5 text-center">
                <img
                  src={picture}
                  alt={name}
                  className="w-20 h-20 rounded-full object-cover border-[3px] border-blue-600 shadow-[0_0_0_1px_#E2E8F0]"
                />
                <h1 className="text-lg font-bold text-slate-900">{name}</h1>
                <span
                  className={`text-[11px] font-bold px-3 py-1 rounded-full ${statusStyles[status]} uppercase`}
                >
                  {status}
                </span>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {tags.map((tag, index) => (
                    <ProfileTags key={index} tag={tag}></ProfileTags>
                  ))}
                </div>
                <p className="text-sm text-slate-500 italic">{bio}</p>
                <p className="text-xs text-slate-400">
                  Preferred: email {email}
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col gap-2">
                <button className="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors">
                  <RiNotificationSnoozeLine className="w-5 h-5" />
                  Snooze 2 weeks
                </button>
                <button className="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors">
                  <IoArchiveSharp className="w-4 h-4" />
                  Archive
                </button>
                <button className="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-semibold text-red-500 hover:bg-red-50 transition-colors">
                  <MdDeleteForever className="w-5 h-5" />
                  Delete
                </button>
              </div>
            </div>

            {/* ── Right column ── */}
            <div className="flex flex-col gap-4 flex-1">
              {/* Stats row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col items-center justify-center gap-1">
                  <span className="text-4xl font-bold text-teal-900">
                    {days_since_contact}
                  </span>
                  <span className="text-sm text-slate-400 font-medium">
                    Days Since Contact
                  </span>
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col items-center justify-center gap-1">
                  <span className="text-4xl font-bold text-teal-900">
                    {goal}
                  </span>
                  <span className="text-sm text-slate-400 font-medium">
                    Goal Days
                  </span>
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col items-center justify-center gap-1">
                  <span className="text-2xl font-bold text-teal-900">
                    {next_due_date}
                  </span>
                  <span className="text-sm text-slate-400 font-medium">
                    Next Due
                  </span>
                </div>
              </div>

              {/* Relationship goal */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5">
                <div className="flex justify-between items-center mb-2.5">
                  <h2 className="text-xl font-medium text-[#244D3F] ">
                    Relationship Goal
                  </h2>
                  <button className="text-xs font-semibold text-slate-500 border border-slate-200 px-3.5 py-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                    Edit
                  </button>
                </div>
                <p className="text-base text-[#64748B] flex flex-row gap-x-2">
                  <span className="text-gray-400">Connect every</span>
                  <span className="text-black font-semibold">{goal} days</span>
                </p>
              </div>

              {/* Quick check-in */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5">
                <h2 className="text-xl font-medium text-[#244D3F] mb-3">
                  Quick check-in
                </h2>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => {
                      newCall();
                    }}
                    className="flex flex-col items-center justify-center gap-2 border border-slate-200 rounded-2xl py-5 text-base font-semibold text-slate-800 hover:bg-green-500/10 hover:border-green-500/25 hover:text-green-400 transition-colors "
                  >
                    <PiPhoneCallBold className="w-7 h-7" />
                    Call
                  </button>
                  <button
                    onClick={() => {
                      newText();
                    }}
                    className="flex flex-col items-center justify-center gap-2 border border-slate-200 rounded-2xl py-5 text-base font-semibold text-slate-800 hover:bg-green-500/10 hover:border-green-500/25 hover:text-green-400 transition-colors "
                  >
                    <LuMessageSquareText className="w-7 h-7" />
                    Text
                  </button>
                  <button
                    onClick={() => {
                      newVideo();
                    }}
                    className="flex flex-col items-center justify-center gap-2 border border-slate-200 rounded-2xl py-5 text-base font-semibold text-slate-800 hover:bg-green-500/10 hover:border-green-500/25 hover:text-green-400 transition-colors"
                  >
                    <LuVideo className="w-7 h-7" />
                    Video
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProfileDetails;
