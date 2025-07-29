import React from 'react';
import {  LuArrowRight } from 'react-icons/lu';
import moment from 'moment';
import TransactionCard from '../Cards/TransactionCard.jsx';

const RecentTransactions = ({ transactions, OnSeeMore }) => {
    // console.log(transactions);
  return <div className='card'>
    <div className="flex items-center justify-between">
        <h5 className="text-lg font-semibold">
            Recent Transactions
        </h5>
        <button className='card-btn' onClick={OnSeeMore}>
            See All <LuArrowRight className='text-base'/>
        </button>
    </div>
    <div className="mt-6">
        {
            transactions?.slice(0,5).map((item)=>{
                 return (
                   <TransactionCard
                     key={item._id}
                     title={
                       item.type === "expense" ? item.category : item.source
                     }
                     icon={item.icon}
                     date={moment(item.date).format("Do MMM YYYY")}
                     type={item.type}
                     amount={item.amount}
                     hideDeleteBtn
                   />
                 );
            })
        }
    </div>
  </div>;
};

export default RecentTransactions;
