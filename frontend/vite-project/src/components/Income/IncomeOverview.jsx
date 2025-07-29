import React, { useEffect, useState } from 'react';
import { prepareIncomeBarChartData } from '../../utils/helper';
import { LuPlus } from 'react-icons/lu';
import CustomBarChart from '../Charts/CustomBarChart';

const IncomeOverview = ({ transactions, onAddIncome }) => {
    const [chartData, setChartData] =useState([]);
    useEffect(()=>{
        const  result = prepareIncomeBarChartData(transactions);
        setChartData(result);
    },[transactions]);
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <div className="">
          <h5 className="text-lg font-semibold">Income Overview</h5>
          <p className="text-xs text-gray-400 mt-0.5">
            Track your income over time and analyse your income trends.
          </p>
        </div>
        <button className="add-btn" onClick={onAddIncome}>
          <LuPlus className="text-lg" />
          Add Income
        </button>
      </div>
      <div className="mt-10">
        {chartData.length > 0 ? (
          <CustomBarChart data={chartData} />
        ) : (
          <p className="text-sm text-gray-500 text-center">
            No income data available.
          </p>
        )}
      </div>
    </div>
  );
};

export default IncomeOverview;
