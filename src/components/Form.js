import React, { Component} from 'react';

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: '',
      productDescription: '',
      amount: '',
    };
  }


  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };



  handleSubmit = e => {
    e.preventDefault();
    const newproduct = {
      product: this.state.product,
      productDescription: this.state.productDescription,
      amount: this.state.amount
    };

    this.props.addUser(newproduct)

    this.setState({
      product: '',
      productDescription: '',
      amount: ''
    });
  };

  render() {
    return(
      <div className="form-container">
            <div className="header">
              <h2>Add New Expense</h2>
            </div>
            <form onSubmit={this.handleSubmit} className="form">
              <div className="form-row">
                <label>Product:</label>
                <input
                  type="text"
                  name="product"
                  value={this.state.product}
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-row">
                <label>Product Description:</label>
                <textarea
                  name="productDescription"
                  onChange={this.handleChange}
                  value={this.state.productDescription}
                />
              </div>

              <div className="form-row">
                <label>Total Cost:</label>
                <span className="GHS">
                  <input
                    type="number"
                    name="amount"
                    value={this.state.amount}
                    onChange={this.handleChange}
                  />
                </span>
              </div>

              <div>
                <button className="btn" type="submit">
                  Add product
                </button>
              </div>
            </form>
          </div>
    )
  }
}

export default Form;




