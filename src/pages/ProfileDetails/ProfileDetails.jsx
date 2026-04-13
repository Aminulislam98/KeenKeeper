import React from "react";

const ProfileDetails = () => {
  return (
    <section className="min-h-screen bg-[#F1F5F0] py-8 px-4">
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row gap-4">
        {/* ── Left column ── */}
        <div className="flex flex-col gap-4 w-full lg:w-[260px] lg:flex-shrink-0">
          {/* Profile card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col items-center gap-2.5 text-center">
            <img className="w-20 h-20 rounded-full object-cover border-[3px] border-white shadow-[0_0_0_1px_#E2E8F0]" />
            <h1 className="text-lg font-bold text-slate-900"></h1>
            <span className="text-[11px] font-bold px-3 py-1 rounded-full"></span>
            <div className="flex flex-wrap justify-center gap-1.5"></div>
            <p className="text-sm text-slate-500 italic"></p>
            <p className="text-xs text-slate-400"></p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col gap-2.5">
            <button className="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors"></button>
            <button className="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors"></button>
            <button className="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-semibold text-red-500 hover:bg-red-50 transition-colors"></button>
          </div>
        </div>

        {/* ── Right column ── */}
        <div className="flex flex-col gap-4 flex-1">
          {/* Stats row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col items-center justify-center gap-1">
              <span className="text-4xl font-bold text-teal-900"></span>
              <span className="text-sm text-slate-400 font-medium"></span>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col items-center justify-center gap-1">
              <span className="text-4xl font-bold text-teal-900"></span>
              <span className="text-sm text-slate-400 font-medium"></span>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col items-center justify-center gap-1">
              <span className="text-2xl font-bold text-teal-900"></span>
              <span className="text-sm text-slate-400 font-medium"></span>
            </div>
          </div>

          {/* Relationship goal */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5">
            <div className="flex justify-between items-center mb-2.5">
              <h2 className="text-[15px] font-bold text-slate-900"></h2>
              <button className="text-xs font-semibold text-slate-500 border border-slate-200 px-3.5 py-1.5 rounded-lg hover:bg-slate-50 transition-colors"></button>
            </div>
            <p className="text-sm text-slate-500"></p>
          </div>

          {/* Quick check-in */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5">
            <h2 className="text-[15px] font-bold text-slate-900 mb-3"></h2>
            <div className="grid grid-cols-3 gap-3">
              <button className="flex flex-col items-center justify-center gap-2 border border-slate-200 rounded-2xl py-5 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors"></button>
              <button className="flex flex-col items-center justify-center gap-2 border border-slate-200 rounded-2xl py-5 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors"></button>
              <button className="flex flex-col items-center justify-center gap-2 border border-slate-200 rounded-2xl py-5 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors"></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileDetails;
