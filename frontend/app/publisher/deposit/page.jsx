'use client'
import React, { useState } from 'react';

function DepositPage() {
  const [depositAmount, setDepositAmount] = useState('');
  const [transactionDescription, setTransactionDescription] = useState('');

  const handleDeposit = (event) => {
    event.preventDefault();

    // Perform deposit logic here, such as updating balance or storing transaction

    // For this example, just log the deposit details
    console.log('Deposit Amount:', depositAmount);
    console.log('Transaction Description:', transactionDescription);

    // Reset form fields
    setDepositAmount('');
    setTransactionDescription('');
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Make a Deposit</h2>
      <form onSubmit={handleDeposit}>
        <div className="mb-4">
          <label htmlFor="depositAmount" className="block text-sm font-medium text-gray-700">
            Deposit Amount
          </label>
          <input
            type="number"
            id="depositAmount"
            value={depositAmount}
            onChange={(e) => setDepositAmount(e.target.value)}
            placeholder="Enter deposit amount"
            className="input input-bordered w-full"
            required
          />
        </div>
       
        <div>
          <button type="submit" className="btn btn-primary">
            Make Deposit
          </button>
        </div>
      </form>
    </div>
  );
}

export default DepositPage;
