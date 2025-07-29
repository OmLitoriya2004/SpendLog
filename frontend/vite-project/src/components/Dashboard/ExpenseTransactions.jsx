import React from "react";
import { LuArrowRight } from "react-icons/lu";
import TransactionCard from "../Cards/TransactionCard";
import moment from "moment";

const ExpenseTransactions = ({ transactions, OnSeeMore }) => {
  const isAllZero = transactions.every((expense) => expense.amount === 0);
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg font-semibold">Expenses</h5>
        <button className="card-btn" onClick={OnSeeMore}>
          See All <LuArrowRight className="text-base" />
        </button>
      </div>
      <div className="mt-6">
        {isAllZero ? (
          <div className="text-center text-sm text-gray-500 p-4">
            No recent expenses available to display.
          </div>
        ) : (
          transactions
            ?.slice(0, 5)
            .map((expense) => (
              <TransactionCard
                key={expense._id}
                title={expense.category}
                icon={expense.icon}
                date={moment(expense.date).format("Do MMM YYYY")}
                amount={expense.amount}
                type="expense"
                handleDeleteBtn
              />
            ))
        )}
      </div>
    </div>
  );
};

export default ExpenseTransactions;
