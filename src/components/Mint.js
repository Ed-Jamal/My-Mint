import React from 'react';
import '../App.css';
import Summary from './Summary';
import TransactionsContainer from './TransactionsContainer';
import InvoicesContainer from './InvoicesContainer';

class Mint extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="Header">
          <h2>Mint</h2>
        </div>
        <Summary />
        <div className="Main-Container ">
          <div>
            <TransactionsContainer />
          </div>
          <hr />
          <div>
            <InvoicesContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default Mint;
