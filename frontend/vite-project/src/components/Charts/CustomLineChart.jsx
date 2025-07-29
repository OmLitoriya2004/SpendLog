import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CustomLineChart = ({ data }) => {
  const CustomToolKit = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-blue-300 shadow-md">
          <p className="text-xs font-semibold text-blue-800 mb-1">
            {payload[0].payload.category}
          </p>
          <p className="text-sm text-gray-600">
            Amount:{" "}
            <span className="font-semibold text-gray-900">
              ₹{payload[0].payload.amount}
            </span>
          </p>
        </div>
      );
    }
    return null;
  };
  return (
    <div className="mt-6 bg-white rounded-xl shadow-sm p-4">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#875cf5" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#875cf5" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="none" />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 12, fill: "#1e3a8a" }} // dark blue
            stroke="#cbd5e1"
          />
          <YAxis tick={{ fontSize: 12, fill: "#1e3a8a" }} stroke="#cbd5e1" />
          <Tooltip content={<CustomToolKit/>} />
          <Area
            type="monotone"
            dataKey="amount"
            stroke="#2687eb"
            fill="url(#incomeGradient)"
            strokeWidth={3}
            dot={{ r: 3, fill: "#bae6fd" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;
