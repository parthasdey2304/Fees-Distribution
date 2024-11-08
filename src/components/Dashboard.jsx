import React from 'react';
import useDatabase from '../hooks/useDatabase';

const Dashboard = () => {
  const { totalIncome, totalExpenses } = useDatabase();

  return (
    <div>
      <h2>Dashboard</h2>
      <div>Total Income: ${totalIncome}</div>
      <div>Total Expenses: ${totalExpenses}</div>
      <div>Balance: ${totalIncome - totalExpenses}</div>
    </div>
  );
};

export default Dashboard;
