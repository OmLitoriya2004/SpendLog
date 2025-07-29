import React from "react";
import {
  LuTrash2,
  LuTrendingDown,
  LuTrendingUp,
  LuUtensils,
} from "react-icons/lu";

const TransactionCard = ({
  hideDeleteBtn,
  amount,
  type,
  date,
  icon,
  title,
  onDelete,
}) => {
  const getAmountStyles = () => {
    return type === "income"
      ? "bg-green-50 text-green-500"
      : "bg-red-50 text-red-500";
  };

  return (
    <div className="group relative flex items-center gap-4 m-2 p-3 rounded-lg hover:bg-gray-100/60">
      <div className="w-10 h-10 flex items-center justify-center text-xl text-gray-800 bg-gray-100 rounded-full shrink-0">
        {icon ? (
          <img src={icon} alt={title} className="w-6 h-6 object-contain" />
        ) : (
          <LuUtensils />
        )}
      </div>

      <div className="flex-1">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-800">{title}</p>
        </div>
        <p className="text-xs text-gray-400 mt-0.5">{date}</p>
      </div>
      <div
        className={`flex items-center gap-1 px-2 py-1 rounded-md text-[14px] font-semibold ${getAmountStyles()}`}
      >
        {type === "income" ? "+" : "-"}₹{amount}
        {type === "income" ? <LuTrendingUp /> : <LuTrendingDown />}
      </div>
      {/* Delete Button */}
      {!hideDeleteBtn && (
        <button
          className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer ml-2"
          onClick={onDelete}
        >
          <LuTrash2 className="text-2xs"/>
        </button>
      )}
    </div>
  );
};

export default TransactionCard;
