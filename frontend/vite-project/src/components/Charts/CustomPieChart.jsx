import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import CustomTooltip from "./CustomTooltip.jsx";
import CustomLegend from "./CustomLegend.jsx";

const CustomPieChart = ({
  data,
  colors,
  totalAmount,
  label,
  showTextAnchor = false,
}) => {
  return (
    <div className="w-full max-w-[280px] mx-auto">
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={data}
            dataKey="amount"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            innerRadius={50}
            fill="#8884d8"
            paddingAngle={4}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>

      <div className="text-center mt-1">
        <h4 className="text-sm font-medium text-gray-700">{label}</h4>
        <p className="text-lg font-bold text-gray-900">{totalAmount}</p>
      </div>

      <CustomLegend
        payload={data.map((entry, index) => ({
          value: entry.name,
          color: colors[index % colors.length],
        }))}
      />
    </div>
  );
};

export default CustomPieChart;
