import React, { useState } from 'react';
import useDatabase from '../hooks/useDatabase';

const IncomeForm = () => {
  const [studentName, setStudentName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cash');

  const { addIncome } = useDatabase();

  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome({ studentName, amount, date, paymentMethod });
    // Reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
    </form>
  );
};

export default IncomeForm;
