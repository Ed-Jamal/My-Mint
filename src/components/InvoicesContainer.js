import React from 'react';
import '../App.css';
import data from "../data/data.json"
import Invoice from './Invoice';

const invoices = data.Invoices;

class InvoicesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        invoices: data.Invoices,
    }
  }

  updateInvoice = (id) => {
      /*InvoiceMutation.commit(
          data,
          (response) => {

          }
      ).then(() => {
        // Handle success
      }).catch(E => {
        // Handle failure
      });*/
  }

  render() {
    const {invoices} = this.state;
    return (
      <div>
        <h1>Invoices:</h1>
        <div>
            {invoices.map(invoice =>
              <Invoice invoice={invoice} updateInvoice={this.updateInvoice} />
            )}
        </div>
      </div>
    );
  }
}

export default InvoicesContainer;
