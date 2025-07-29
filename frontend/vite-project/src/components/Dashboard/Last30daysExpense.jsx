import React, { useEffect, useState } from "react";
import { prepareExpenseBarChartData } from "../../utils/helper.js";
import CustomBarChart from "../Charts/CustomBarChart.jsx";

const Last30daysExpense = ({ data }) => {
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    const result = prepareExpenseBarChartData(data);
    setChartData(result);
  }, [data]);
  const isAllZero = (data || []).every((item) => item.amount === 0);
  return (
    <div className="card col-span-1">
      <div className="flex items-center justify-between">
        <h5 className="text-lg font-semibold">Last 30 Days Expenses</h5>
      </div>
      {isAllZero ? (
        <div className="text-center text-sm text-gray-500 p-4 mt-6">
          No expense data available to display.
        </div>
      ) : (
        <CustomBarChart data={chartData} />
      )}
    </div>
  );
};

export default Last30daysExpense;
