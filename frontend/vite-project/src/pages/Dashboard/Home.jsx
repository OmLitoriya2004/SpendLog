import React, { useEffect, useState } from "react";
import { useUserAuth } from "../../hooks/useUserAuth.jsx";
import { useNavigate } from "react-router-dom";
import { IoMdCard } from "react-icons/io";
import { LuHandCoins, LuWalletMinimal } from "react-icons/lu";
import { addThousandsSeparator } from "../../utils/helper.js";
import { API_PATHS } from "../../utils/apiPath.js";
import axiosInstance from "../../utils/axiosInstance.js";
import DashboardLayout from "../../components/layouts/DashboardLayout.jsx";
import InfoCard from "../../components/Cards/InfoCard.jsx";
import RecentTransactions from "../../components/Dashboard/RecentTransactions.jsx";
import FinanceOverView from "../../components/Dashboard/FinanceOverView.jsx";
import ExpenseTransactions from "../../components/Dashboard/ExpenseTransactions.jsx";
import Last30daysExpense from "../../components/Dashboard/Last30daysExpense.jsx";
import RecentIncomeWithChart from "../../components/Dashboard/RecentIncomeWithChart.jsx";
import RecentIncome from "../../components/Dashboard/RecentIncome.jsx";
const Home = () => {
  useUserAuth();
  const navigate = useNavigate();
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDashboardData = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const res = await axiosInstance.get(`${API_PATHS.DASHBOARD.GET_DATA}`);
      if (res.data) {
        // console.log(res.data);
        setDashboardData(res.data);
      }
    } catch (e) {
      console.error("Error fetching dashboard data. Please try again later");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchDashboardData();
    return () => {};
  }, []);
  // console.log(dashboardData);
  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className="my-5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoCard
            icon={<IoMdCard />}
            label="Total Balance"
            value={addThousandsSeparator(dashboardData?.totalBalance || 0)}
            color="bg-blue-500"
          />
          <InfoCard
            icon={<LuWalletMinimal />}
            label="Total Income"
            value={addThousandsSeparator(dashboardData?.totalIncome || 0)}
            color="bg-orange-500"
          />
          <InfoCard
            icon={<LuHandCoins />}
            label="Total Expense"
            value={addThousandsSeparator(dashboardData?.totalExpense || 0)}
            color="bg-red-500"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-6">
          <RecentTransactions
            transactions={dashboardData?.recentTransactions}
            OnSeeMore={() => navigate("/expense")}
          />
          <FinanceOverView
            totalBalance={dashboardData?.totalBalance || 0}
            totalExpense={dashboardData?.totalExpense || 0}
            totalIncome={dashboardData?.totalIncome || 0}
          />
          <ExpenseTransactions
            transactions={dashboardData?.last30DaysExpenses?.transactions || []}
            OnSeeMore={() => navigate("/expense")}
          />

          <Last30daysExpense
            data={dashboardData?.last30DaysExpenses?.transactions || []}
          />

          <RecentIncome
            transactions={dashboardData?.last60DaysIncome?.transactions || []}
            OnSeeMore={() => navigate("/income")}
          />
          
          <RecentIncomeWithChart
            data={
              dashboardData?.last60DaysIncome?.transactions?.slice(0, 5) || []
            }
            totalIncome={dashboardData?.totalIncome || 0}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Home;
