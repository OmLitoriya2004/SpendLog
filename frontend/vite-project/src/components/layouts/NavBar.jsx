import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import SideMenu from "./SideMenu.jsx";
import { PiWalletFill } from "react-icons/pi";

const NavBar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <div className="flex gap-5 bg-[#F1F5F9] border-b border-gray-200/70 py-4 px-7 sticky top-0 z-30">
      <button
        className="block lg:hidden text-black"
        onClick={() => setOpenSideMenu(!openSideMenu)}
      >
        {openSideMenu ? (
          <HiOutlineX className="text-2xl" />
        ) : (
          <HiOutlineMenu className="text-2xl" />
        )}
      </button>

      <h2 className="flex items-center gap-2 text-xl font-semibold text-black">
        <PiWalletFill className="text-blue-600 text-3xl" />
        SpendLog
      </h2>

      {openSideMenu && (
        <div className="fixed top-[61px] -ml-4 bg-[#f2f4f7] shadow-md h-screen w-[240px]">
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </div>
  );
};

export default NavBar;
