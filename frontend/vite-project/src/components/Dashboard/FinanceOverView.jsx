import CustomPieChart from "../Charts/CustomPieChart";

const COLORS = ["#875CF5", "#3B82F6", "#F43F5E", "#F59E0B", "#10B981"];
const FinanceOverView = ({ totalIncome, totalExpense, totalBalance }) => {
  const balanceData = [
    { name: "Total Balance", amount: totalBalance },
    { name: "Total Income", amount: totalIncome },
    { name: "Total Expense", amount: totalExpense },
  ];

  const isAllZero = balanceData.every((item) => item.amount === 0);

  return (
    <div className="card">
      <div className="flex flex-col justify-between">
        <h5 className="text-lg font-semibold text-gray-800">
          Financial Overview
        </h5>
        {isAllZero ? (
          <div className="text-center text-sm text-gray-500 p-4">
            No financial data available to display.
          </div>
        ) : (
          <CustomPieChart
            data={balanceData}
            label={"Total Balance"}
            totalAmount={`₹${totalBalance}`}
            colors={COLORS}
            showTextAnchor
          />
        )}
      </div>
    </div>
  );
};

export default FinanceOverView;