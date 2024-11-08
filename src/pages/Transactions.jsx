import React from 'react';
import TransactionList from '../components/TransactionList';
import PDFExport from '../components/PDFExport';

const Transactions = () => {
  return (
    <div>
      <h1>Transactions</h1>
      <TransactionList />
      <PDFExport />
    </div>
  );
};

export default Transactions;
