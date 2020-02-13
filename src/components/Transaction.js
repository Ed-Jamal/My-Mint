import React from 'react';
import '../App.css';


class Transaction extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {transaction} = this.props;
    return (
        <div key={transaction.ID}>
            <span className="cell">{transaction.ID}</span>
            <span className="cell">{transaction.Description}</span>
            <span className="cell">{transaction.Date}</span>
            <span className="cell">{transaction.Amount}</span>
        </div>
    );
  }
}

export default Transaction;
