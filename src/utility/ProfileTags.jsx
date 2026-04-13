import React from "react";

const ProfileTags = ({ tag }) => {
  console.log(tag);

  const tagStyles = {
    college: "bg-violet-900 text-violet-50",
    coding: "bg-violet-900 text-violet-50",
    "study group": "bg-violet-900 text-violet-50",
    "online friend": "bg-violet-900 text-violet-50",

    work: "bg-emerald-900 text-emerald-50",
    mentor: "bg-emerald-900 text-emerald-50",

    "close friend": "bg-rose-900 text-rose-50",
    "family friend": "bg-rose-900 text-rose-50",
    childhood: "bg-rose-900 text-rose-50",

    community: "bg-amber-900 text-amber-50",
    mosque: "bg-amber-900 text-amber-50",
    neighbour: "bg-amber-900 text-amber-50",
    "book club": "bg-amber-900 text-amber-50",

    football: "bg-sky-900 text-sky-50",
    gym: "bg-sky-900 text-sky-50",
    fitness: "bg-sky-900 text-sky-50",
    travel: "bg-sky-900 text-sky-50",
    music: "bg-sky-900 text-sky-50",
    cooking: "bg-sky-900 text-sky-50",
    design: "bg-sky-900 text-sky-50",
  };
  return (
    <div
      className={`${tagStyles[tag]} items-center px-2 py-1 rounded-xl text-xs  border border-gray-200 
hover:scale-105 transition-transform duration-200 uppercase`}
    >
      {tag}
    </div>
  );
};

export default ProfileTags;
