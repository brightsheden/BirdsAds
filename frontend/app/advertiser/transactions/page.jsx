'use client'

import React, { useState } from 'react';

function WithdrawPage() {
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [transactionDescription, setTransactionDescription] = useState('');

  const handleWithdraw = (event) => {
    event.preventDefault();

    // Perform withdraw logic here, such as updating balance or storing transaction

    // For this example, just log the withdraw details
    console.log('Withdraw Amount:', withdrawAmount);
    console.log('Transaction Description:', transactionDescription);

    // Reset form fields
    setWithdrawAmount('');
    setTransactionDescription('');
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Make a Withdrawal</h2>
      <form onSubmit={handleWithdraw}>
        <div className="mb-4">
          <label htmlFor="withdrawAmount" className="block text-sm font-medium text-gray-700">
            Withdraw Amount
          </label>
          <input
            type="number"
            id="withdrawAmount"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
            placeholder="Enter withdrawal amount"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="transactionDescription" className="block text-sm font-medium text-gray-700">
            Transaction Description
          </label>
          <textarea
            id="transactionDescription"
            value={transactionDescription}
            onChange={(e) => setTransactionDescription(e.target.value)}
            placeholder="Enter transaction description"
            className="textarea textarea-bordered textarea-md w-full"
            required
          ></textarea>
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Make Withdrawal
          </button>
        </div>
      </form>
    </div>
  );
}

export default WithdrawPage;
