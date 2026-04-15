import React, { useContext, useEffect } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { AllDataContext } from "../../context/AllDataProvider";
import useProfilesData from "../../Hooks/useProfilesData";

const StatsPage = () => {
  const { callHistory } = useContext(AllDataContext);
  const { loader } = useProfilesData();

  const totalCall = callHistory.reduce((count, item) => {
    if (item.title === "Call") {
      return count + 1;
    }
    return count;
  }, 0);
  const totalText = callHistory.reduce((count, item) => {
    if (item.title === "Text") {
      return count + 1;
    }
    return count;
  }, 0);
  const totalVideo = callHistory.reduce((count, item) => {
    if (item.title === "Video") {
      return count + 1;
    }
    return count;
  }, 0);
  const data = [
    { name: "Text", value: totalText, fill: "#244D3F" },
    { name: "Call", value: totalCall, fill: "#7C3AED" },
    { name: "Video", value: totalVideo, fill: "#22C55E" },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [callHistory]);

  return (
    <section className="max-w-full w-full bg-[#F8FAFC] min-h-[80vh] flex flex-col justify-center items-center px-4">
      {loader ? (
        <div className="max-w-full w-full flex justify-center">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      ) : (
        <>
          <div className="flex justify-center md:justify-start items-center max-w-6xl w-full mx-auto mb-6">
            {callHistory.length > 0 ? (
              <h1 className="font-semibold text-4xl md:text-start text-center">
                Friendship Analytics
              </h1>
            ) : (
              ""
            )}
          </div>
          <div className="flex justify-center items-center bg-white flex-col pb-8 border border-gray-200 rounded-2xl max-w-6xl w-full mx-auto">
            <h2 className="max-w-full w-full text-start text-xl font-medium p-8">
              By Interaction Type
            </h2>

            {callHistory.length > 0 ? (
              <PieChart width={300} height={320}>
                <Pie
                  data={data}
                  innerRadius="60%"
                  outerRadius="80%"
                  cornerRadius="50%"
                  paddingAngle={5}
                  dataKey="value"
                  isAnimationActive={true}
                />
                <Legend wrapperStyle={{ paddingTop: "16px" }} />
                <Tooltip />
              </PieChart>
            ) : (
              // 👇 empty state
              <div className="flex flex-col items-center justify-center py-16 text-center max-w-6xl w-full mx-auto bg-white">
                <div className="w-[72px] h-[72px] rounded-full bg-[#f2f7f5] border border-[#d4e3de] flex items-center justify-center mb-4">
                  <div className="w-8 h-8 rounded-full border-4 border-dashed border-[#244D3F] opacity-30" />
                </div>
                <p className="text-[#244D3F] font-medium text-[15px] mb-1">
                  No data yet
                </p>
                <p className="text-sm text-zinc-400 max-w-[200px] leading-relaxed">
                  Make a call, send a text, or start a video to see your stats.
                </p>
              </div>
            )}
          </div>
        </>
      )}

      {/* <div className="flex flex-col gap-4  max-w-6xl w-full mx-auto">
        <h1 className="text-[#1F2937] text-4xl font-semibold">
          Friendship Analytics
        </h1>
        <div className=" flex justify-center items-center bg-white  flex-col pb-8 border border-gray-200 rounded-2xl">
          <h2 className="max-w-full w-full text-start text-xl font-medium p-8">
            By Interaction Type
          </h2>
          <PieChart
            style={{
              width: "100%",
              maxWidth: "300px",
              maxHeight: "60vh",
              aspectRatio: 1,
            }}
            responsive
          >
            <Pie
              data={data}
              innerRadius="80%"
              outerRadius="100%"
              // Corner radius is the rounded edge of each pie slice
              cornerRadius="50%"
              fill="#8884d8"
              // padding angle is the gap between each pie slice
              paddingAngle={5}
              dataKey="value"
              isAnimationActive={true}
            />
            <Legend
              wrapperStyle={{
                marginTop: "20px",
              }}
            />
            <Tooltip></Tooltip>
          </PieChart>
        </div>
      </div> */}
    </section>
  );
};

export default StatsPage;
