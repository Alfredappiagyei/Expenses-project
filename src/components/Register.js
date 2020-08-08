import React  from 'react';
import {connect} from 'react-redux';

import { registerWithEmail, loginWithGoogle } from '../store/authActions';
   function Register(props) {
     
    if(!props.auth.isLoaded) return null;
    if(props.auth.uid) props.history.push('/');
          const handleSubmit = (e) => {
              e.preventDefault();
              let email = e.target.elements.email.value;
              let password = e.target.elements.password.value;
              props.registerWithEmail(email, password);
          };

      return (
        <div className="login">
        <h2 className="active">sign up</h2>
        
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
            <hr/>
            <button onClick={props.loginWithGoogle}>
                Use Google
                </button>
          </form>
        </div>
      )
  }
  
 
 

  const mapStateToProps = (state)=>{
    return {
      auth:state.firebase.auth
    }
   };
  const mapDispatchToProps = {
    registerWithEmail,
   loginWithGoogle
  };
  export default connect(mapStateToProps ,mapDispatchToProps)(Register);
     