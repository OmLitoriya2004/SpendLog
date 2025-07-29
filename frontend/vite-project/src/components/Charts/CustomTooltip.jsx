import React from "react";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded-lg px-3 py-2 border border-gray-300 shadow-md">
        <p className="text-xs font-semibold text-blue-700 mb-1">
          {payload[0].name}
        </p>
        <p className="text-sm text-gray-700">
          Amount:{" "}
          <span className="font-semibold text-gray-900">
            ₹{payload[0].value}
          </span>
        </p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
