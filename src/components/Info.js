
    
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

  
const Info = () => {
    return(
      <div className="output-container">
      <div className="output-expense">{expense}</div>
    </div>
        
    )
  }



export default Info;