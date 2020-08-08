import React  from 'react';
import {connect} from 'react-redux';
import { loginWithEmail, loginWithGoogle} from '../store/authActions';
import signin from './photo/signin.png'
import {
  //  BrowserRouter, Route 
  Link
} from 'react-router-dom';

   function Login(props) {

    if(!props.auth.isLoaded) return null;
    if(props.auth.uid) props.history.push('/');
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
            <hr/>
            <button onClick={props.loginWithGoogle}>
                <img src={signin} width="160" height="45"/>
                </button>
                <Link to="/register" style={{color:"#fff"}}> Do not have an account?.Register</Link>
          </form>
        </div>
      )
  }
  

  const mapStateToProps = (state)=>{
   return {
     auth:state.firebase.auth
   }
  };
  const mapDispatchToProps ={
    loginWithEmail,
     loginWithGoogle,
  };
  export default connect(mapStateToProps ,mapDispatchToProps)(Login);
     