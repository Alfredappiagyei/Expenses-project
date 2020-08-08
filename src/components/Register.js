import React  from 'react';
import {connect} from 'react-redux';

import { registerWithEmail, loginWithGoogle } from '../store/authActions';
   function Register(props) {
      
    // if(!props.auth.isLoaded) return null;

    // if(props.auth.uid) props.history.push('/');
          const handleSubmit = (e) => {
              e.preventDefault();
              let email = e.target.elements.email.value;
              let password = e.target.elements.password.value;
              props.registerWithEmail(email, password);
          };

      return (
        <div class="login">
        <h2 class="active">sign up</h2>
        
        <form onSubmit={handleSubmit}>
    
            <input type="email" class="text" name="email" placeholder="email"/>
            <span class="labels">Email</span>
            <br/>
            <br/>
            <input type="password" class="text" name="password" placeholder="password"/>
            <span class="labels">password</span>
            <br/>
    
            {/* <input type="checkbox" id="checkbox-1-1" class="custom-checkbox"/>
            <label for="checkbox-1-1">Keep me signed in</label> */}
            <button class="button" type="submit">
                Sign In
            </button>
            <button onClick={props.loginWithGoogle}>
                Use google</button>
          </form>
        </div>
      )
  }
  
 

  const mapStateToProps = (state)=>{
    // return{
    //   auth:state.firebase.auth
    // }
  };
  const mapDispatchToProps = {
    registerWithEmail,
   loginWithGoogle
  };
  export default connect(mapStateToProps ,mapDispatchToProps)(Register);
     