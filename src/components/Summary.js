import React from 'react';
import '../App.css';
import data from "../data/data.json"

const UserConfigs = data.UserConfigs;
const BankAccountData = data.BankAccountData;

class Summary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let balanceClassName = 'Balance-Red';
    if(BankAccountData.Balance > 0 && BankAccountData.Balance > UserConfigs.threshold) {
        balanceClassName = 'Balance-Green';
    } else if(BankAccountData.Balance > 0 && BankAccountData.Balance < UserConfigs.threshold) {
        balanceClassName = 'Balance-Yellow';
    };

    return (
        <div className="Summary-Container ">
          <h1>Bank Account Summary</h1>
          <div>
            <h2 className={balanceClassName}>{BankAccountData.Balance}</h2>
          </div>
        </div>
    );
  }
}

export default Summary;
