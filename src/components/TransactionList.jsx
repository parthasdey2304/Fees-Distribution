import React from 'react';
import useDatabase from '../hooks/useDatabase';

const TransactionList = () => {
  const { transactions } = useDatabase();

  return (
    <div>
      <h3>Transactions</h3>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.studentName} - ${transaction.amount} - {transaction.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
