import React from "react";
import { LuTrendingUpDown } from "react-icons/lu";
import { PiWalletFill } from "react-icons/pi"; 

const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
        <h2 className="text-xl md:text-2xl font-semibold text-black flex items-center gap-2">
          <PiWalletFill className="text-blue-600 text-2xl md:text-3xl" />
          SpendLog
        </h2>

        {children}
      </div>

      <div className="hidden md:block h-screen w-[45vw] bg-sky-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative">
        {/* Decorative Elements - Color Adjusted */}
        <div className="w-48 h-48 rounded-[40px] bg-sky-500 absolute -top-7 -left-5" />
        <div className="w-48 h-56 rounded-[40px] border-[15px] border-blue-500 absolute top-[21%] -right-10" />
        <div className="w-48 h-48 rounded-[40px] bg-cyan-400 absolute -bottom-7 -left-5" />

        {/* Stat Card */}
        <div className="grid grid-cols-1 z-20 mb-16">
          <StatsInfiCard
            icon={<LuTrendingUpDown />}
            label="Track your income and expenses!"
            value="1,20,000"
            color="bg-blue-500 text-white"
          />
        </div>

        {/* Image */}
        <img
          src="https://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/PublishingImages/Data%20Visualization.jpg&w=1200&h=630"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] h-[45%] object-cover shadow-lg shadow-blue-400/15 rounded-xl"
          alt="Data Visualization"
        />
      </div>
    </div>
  );
};

export default AuthLayout;

const StatsInfiCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex gap-6 bg-blue-100 p-4 rounded-xl shadow-md shadow-blue-300/20 border border-gray-200/50 z-10">
      <div
        className={`w-12 h-12 flex items-center justify-center text-[26px] ${color} rounded-full drop-shadow-xl mt-1.5`}
      >
        {icon}
      </div>
      <div className="text-lg text-gray-600 mb-1">
        <h6>{label}</h6>
        <span className="text-[20px] font-medium">₹{value}</span>
      </div>
    </div>
  );
};
