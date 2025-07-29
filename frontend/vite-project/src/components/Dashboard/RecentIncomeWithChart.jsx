import React, { useEffect, useState } from "react";
import CustomPieChart from "../Charts/CustomPieChart";
const COLORS = ["#875CF5", "#3B82F6", "#F43F5E", "#F59E0B", "#10B981"];
const RecentIncomeWithChart = ({ data, totalIncome }) => {
  const [chartData, setChartData] = useState([]);
  const prepareCharData = () => {
    const dataArr = data.map((item) => ({
      name: item?.source,
      amount: item?.amount,
    }));
    setChartData(dataArr);
  };
  useEffect(() => {
    prepareCharData();

    return () => {};
  }, [data]);
  const isAllZero = data.every((item) => item.amount === 0);

  return (
    <div className="card">
      <div className="flex flex-col justify-between">
        <h5 className="text-lg font-semibold">Last 60 Days Income</h5>
        {isAllZero ? (
          <div className="text-center text-sm text-gray-500 p-4">
            No income data available to display.
          </div>
        ) : (
          <CustomPieChart
            data={chartData}
            label="Total Income"
            totalAmount={`₹${totalIncome}`}
            showTextAnchor
            colors={COLORS}
          />
        )}
      </div>
    </div>
  );
};

export default RecentIncomeWithChart;
