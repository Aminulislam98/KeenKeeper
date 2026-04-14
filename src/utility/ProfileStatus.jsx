import React from "react";

const ProfileStatus = ({ status, children }) => {
  const statusStyles = {
    "on-track": "bg-green-900 text-green-50",
    "almost due": "bg-orange-900 text-orange-50",
    overdue: "bg-red-900 text-red-50",
  };
  return <p className={`${status[statusStyles]}`}>{children}</p>;
};

export default ProfileStatus;
