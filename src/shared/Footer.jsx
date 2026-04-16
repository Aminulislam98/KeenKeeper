import React from "react";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center  bg-[#244D3F] text-primary-content pt-10 px-4">
      <nav>
        <div className="flex flex-col justify-center items-center gap-y-2 md:gap-y-4">
          <h1 className="font-bold text-3xl md:text-5xl text-white">
            KeenKeeper
          </h1>
          <p className="text-sm md:text-base font-normal text-white text-center">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <h1 className="font-medium text-white text-xl">Social Links</h1>
        </div>
        <div className="grid grid-flow-col gap-4 mt-2">
          <div className="w-10 h-10 rounded-full bg-white flex flex-row justify-center items-center">
            <RiInstagramFill className="text-black w-6 h-6" />
          </div>
          <div className="w-10 h-10 rounded-full bg-white flex flex-row justify-center items-center">
            <FaSquareFacebook className="text-black w-6 h-6" />
          </div>
          <div className="w-10 h-10 rounded-full bg-white flex flex-row justify-center items-center">
            <FaXTwitter className="text-black w-6 h-6" />
          </div>
        </div>
      </nav>
      <div
        className="font-normal text-white text-xs md:text-base 
      flex flex-row justify-between  max-w-7xl w-full border-t border-t-white/10 py-7"
      >
        <div>
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          {/* This is a comment */}
        </div>
        <div className="flex flex-row gap-1 md:gap-4">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
