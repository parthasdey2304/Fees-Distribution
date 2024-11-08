import React from 'react';
import Dashboard from '../components/Dashboard';
import IncomeForm from '../components/IncomeForm';
import ExpenseForm from '../components/ExpenseForm';

const Home = () => {
  return (
    <div>
      <h1>Fees Distribution App</h1>
      <Dashboard />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <IncomeForm />
        <ExpenseForm />
      </div>
    </div>
  );
};

export default Home;
