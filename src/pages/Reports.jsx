import React from 'react';
import useDatabase from '../hooks/useDatabase';

const Reports = () => {
  const { transactions } = useDatabase();

  // Calculate total income
  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + parseFloat(t.amount), 0);

  // Calculate total expenses
  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + parseFloat(t.amount), 0);

  return (
    <div>
      <h1>Financial Reports</h1>
      <div>
        <h2>Summary</h2>
        <p>Total Income: ${totalIncome.toFixed(2)}</p>
        <p>Total Expenses: ${totalExpenses.toFixed(2)}</p>
        <p>Net Balance: ${(totalIncome - totalExpenses).toFixed(2)}</p>
      </div>
      {/* Add more detailed reports here */}
    </div>
  );
};

export default Reports;
