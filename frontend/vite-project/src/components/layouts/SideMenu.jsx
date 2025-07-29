import React, { useContext } from "react";
import { SIDE_MENU_DATA } from "../../utils/data.js";
import { userContext } from "../../hooks/userContext.jsx";
import { useNavigate } from "react-router-dom";

const SideMenu = ({ activeMenu }) => {
  const { user, clearUser } = useContext(userContext);
  const navigate = useNavigate();

  const handleClick = (route) => {
    if (route === "logout") {
      handleLogout();
      return;
    }
    navigate(route);
  };

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/login");
  };

   const getInitials = (name) => {
     if (!name) return "";
     const parts = name.trim().split(" ");
     const first = parts[0]?.[0] || "";
     const second = parts[1]?.[0] || "";
     return (first + second).toUpperCase();
   };

  return (
    <div className="w-64 h-[calc(100vh-60px)] bg-[#F1F5F9] text-gray-800 p-6 sticky top-[61px] z-20">
      {/* Profile */}
      <div className="flex flex-col items-center justify-center gap-3 mb-8">
        {user?.profileImageUrl ? (
          <img
            src={user.profileImageUrl}
            alt="Profile"
            className="w-18 h-18 rounded-full object-cover border-2 border-blue-100"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-[#3788d8] text-white text-2xl flex items-center justify-center font-semibold">
            {getInitials(user?.fullName)}
          </div>
        )}
        <h5 className="text-[15px] font-medium text-center text-gray-700">
          {user?.fullName || "User"}
        </h5>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col gap-2">
        {SIDE_MENU_DATA.map((item, index) => {
          const isActive = activeMenu === item.label;
          return (
            <button
              key={`menu_${index}`}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-all duration-150
                ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "text-gray-800 hover:bg-blue-100"
                }`}
              onClick={() => handleClick(item.path)}
            >
              <item.icon className="text-lg" />
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SideMenu;
