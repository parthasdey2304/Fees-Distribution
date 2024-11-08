import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export const openDatabase = async () => {
  return open({
    filename: './database/income.db',
    driver: sqlite3.Database
  });
};

export const getTransactions = async (db) => {
  return db.all('SELECT * FROM transactions ORDER BY date DESC');
};

export const addTransaction = async (db, transaction) => {
  const { studentName, amount, date, paymentMethod, type } = transaction;
  const result = await db.run(
    'INSERT INTO transactions (studentName, amount, date, paymentMethod, type) VALUES (?, ?, ?, ?, ?)',
    [studentName, amount, date, paymentMethod, type]
  );
  return { id: result.lastID, ...transaction };
};

// Add more database operations as needed
