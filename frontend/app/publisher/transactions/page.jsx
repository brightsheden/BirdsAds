'use client'
import React, { useState } from 'react';

function TransactionsPage() {
  // Example transaction data
  const initialTransactions = [
    {
      id: 1,
      date: '2024-01-10',
      description: 'Purchase at Online Store',
      amount: -25.0,
      category: 'Shopping',
    },
    {
      id: 2,
      date: '2024-01-12',
      description: 'Salary Deposit',
      amount: 1500.0,
      category: 'Income',
    },
    {
      id: 3,
      date: '2024-01-15',
      description: 'Dinner with Friends',
      amount: -40.0,
      category: 'Food',
    },
  ];

  const [transactions, setTransactions] = useState(initialTransactions);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Transactions</h2>
      {transactions.length === 0 ? (
        <p>No transactions to display.</p>
      ) : (
        <table className="table w-full">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr className='hover:bg-gray-200' key={transaction.id}>
                <td className='hover:bg-gray-200'>{transaction.date}</td>
                <td className='hover:bg-gray-200'>{transaction.description}</td>
                <td className={ transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}>
                  {transaction.amount.toFixed(2)}
                </td>
                <td className='hover:bg-gray-200'>{transaction.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TransactionsPage;
