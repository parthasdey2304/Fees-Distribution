import React from 'react';
import { generatePDF } from '../utils/pdfGenerator';
import useDatabase from '../hooks/useDatabase';

const PDFExport = () => {
  const { transactions } = useDatabase();

  const handleExport = () => {
    generatePDF(transactions);
  };

  return (
    <div>
      <h3>Export Transactions</h3>
      <button onClick={handleExport}>Export to PDF</button>
    </div>
  );
};

export default PDFExport;
