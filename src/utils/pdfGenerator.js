import { jsPDF } from 'jspdf';

export const generatePDF = (transactions) => {
  const doc = new jsPDF();
  // Add content to PDF
  doc.save("transactions.pdf");
};
