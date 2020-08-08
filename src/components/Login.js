import React  from 'react';
import {connect} from 'react-redux';
import { loginWithEmail, loginWithGoogle} from '../store/authActions';


   function Login(props) {
          const handleSubmit = (e) => {
              e.preventDefault();
              let email = e.target.elements.email.value;
              let password = e.target.elements.password.value;
              props.loginWithEmail(email, password);
          };
      
      return (
        <div className="login">
        <h2 className="active">log in</h2>
        
        <form onSubmit={handleSubmit}>
    
            <input type="email" className="text" name="email" placeholder="email"/>
            <span className="labels">Email</span>
            <br/>
            <br/>
            <input type="password" className="text" name="password" placeholder="password"/>
            <span className="labels">password</span>
            <br/>     
            
            <button className="button" type="submit">
                Sign In
            </button>
            <button onClick={props.loginWithGoogle}>
                Use google</button>
          </form>
        </div>
      )
  }
  

  const mapStateToProps = (state)=>{
   
  };
  const mapDispatchToProps ={
    loginWithEmail,
     loginWithGoogle,
  };
  export default connect(mapStateToProps ,mapDispatchToProps)(Login);
     