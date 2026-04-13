import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <div className="w-12 h-12 border-4 border-[#244D3F] border-t-transparent rounded-full animate-spin"></div>
      <p className="text-[#64748B] text-sm font-medium">
        Loading your friends...
      </p>
    </div>
  );
};

export default Loader;
