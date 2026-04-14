import React from "react";
import { NavLink } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-[120px] font-medium text-[#0f1117] leading-none tracking-[-6px]">
          4<span className="text-green-500">0</span>4
        </h1>

        <h2 className="text-[22px] font-medium text-[#0f1117] mt-4 mb-2.5">
          Page not found
        </h2>

        <p className="text-sm text-zinc-400 leading-relaxed max-w-[280px] mb-8">
          The page you're looking for doesn't exist or was moved. Check the URL
          or head back home.
        </p>

        <NavLink
          to={"/"}
          className="px-7 py-2.5 rounded-full bg-[#0f1117] hover:bg-zinc-800 text-white text-sm font-medium transition-colors"
        >
          Go back home
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;

<NavLink className="btn btn-primary">go Home</NavLink>;
