import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CustomBarChart = ({ data }) => {
  const getBarColor = (index) => {
    return index % 2 === 0 ? "#2687eb" : "#bae6fd"; // Blue-600 and Cyan-100
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white rounded-lg p-2 border border-blue-200 shadow-md">
          <p className="text-xs font-semibold text-blue-600 mb-1">
            {payload[0].payload.category
              ? payload[0].payload.category
              : payload[0].payload.source}
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
        <BarChart data={data}>
          {console.log(data)}
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#e5e7eb"
          />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 12, fill: "#1e3a8a" }} // dark blue
            stroke="#cbd5e1"
          />
          <YAxis tick={{ fontSize: 12, fill: "#1e3a8a" }} stroke="#cbd5e1" />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="amount" radius={[10, 10, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getBarColor(index)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;
