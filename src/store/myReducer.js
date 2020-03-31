const previouseState = {
    expense: [
        {
          product: 'Drinks',
          productDescription: 'Alvaro',
          amount: '5', 
          
        }
      ]
}

const myReducer = (expense={previouseState} , action) =>{
    switch (action) {
        case "ADD_USER":
            const newproduct = {
                product: action.payload.product,
                productDescription: action.payload.productDescription,
                amount: action.payload.amount
              };
              return {...expense,expenses: [...expense,newproduct]}

        

        default:
            return expense;
            
    }
}



export default myReducer;