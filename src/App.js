


  
import './App.css';
import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expense: [
        {
          product: 'Food',
          productDescription: 'Fried Rice',
          amount: '5', 
          
        }
      ],
      product: '',
      productDescription: '',
      amount: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const newproduct = {
      product: this.state.product,
      productDescription: this.state.productDescription,
      amount: this.state.amount
    };
    this.setState({
      expense: [...this.state.expense, newproduct],
      product: '',
      productDescription: '',
      amount: ''
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };



  render() {
    const expense = this.state.expense.map((product, index) => {
      if (product.amount !== '' && product.amount > 0 && product.product !== '') {
        return (
          <div className="output" key={index}>
            <div className="expense-content">
              <div>
                <h4 className="product">{product.product}</h4>
              </div>

              <div className="product-details">
                <small className="time">{product.time}</small>
                <small className="date">{product.date}</small>
              </div>
            </div>
            <h5>
              {' '}
              <span>&#8373;</span> {product.amount}
            </h5>

            <p className="discription">{product.productDescription}</p>
          </div>
        );
      } else {
        return null;
      }
    });

    return (
      <div>
        <h1 className="App-header">EXPENSES</h1>
        <div className="container">
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
          <div className="output-container">
            <div className="output-expense">{expense}</div>
          </div>
        </div>
      </div>
    );
  }
}
