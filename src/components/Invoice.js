import React from 'react';
import '../App.css';


class Invoice extends React.Component {
  constructor(props) {
    super(props);
    const {invoice} = this.props;
    this.state = {
        editEnabled: false,
        clientName: invoice.ClientName,
        amount: invoice.Amount
    }
  }

  toggleEdit = () => {
    this.setState({
        editEnabled: !this.state.editEnabled,
    });
  }

  saveChanges = () => {
    this.props.updateInvoice(this.props.ID);
    this.toggleEdit();
  }

  handleChange = (e) =>{
    // Validation needed here..
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value,
    });
  }

  hanldeCancel = (e) =>{
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value,
    });
  }
  
  render() {
    const {invoice} = this.props;
    const {editEnabled, clientName, amount} = this.state;

    return (
         <div key={invoice.ID}>
            <span className="cell">{invoice.ID}</span>
            <span className="cell">
                {editEnabled
                    ? <input
                        type="text"
                        onChange={this.handleChange}
                        name="clientName"
                        value={clientName}
                      />
                    : clientName
                }
            </span>
            <span className="cell">
                {editEnabled
                    ? <input
                        name="amount"
                        onChange={this.handleChange}
                        type="text"
                        value={amount}
                      />
                    : amount
                }
            </span>
            <span className="cell">
                {invoice.isPaid ? 'Paid' : 'Not Paid'}
            </span>
            <span className="cell">
                {!editEnabled
                    ?  <button onClick={this.toggleEdit}>Edit</button>
                    :  <button onClick={this.saveChanges}>Save</button>
                }
            </span>
        </div>
    );
  }
}

export default Invoice;
