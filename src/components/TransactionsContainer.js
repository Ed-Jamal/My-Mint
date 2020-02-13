import React from 'react';
import '../App.css';
import data from "../data/data.json"
import Transaction from './Transaction';


const transactions = data.Transactions;

class TransactionsContainer extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const transactionItems = data.Transactions.map(transaction =>
        <Transaction transaction={transaction} />
    );
    return (
      <div>
        <h1>Transactions:</h1>
        <div>
            {transactionItems}
        </div>
      </div>
    );
  }
}

export default TransactionsContainer;
