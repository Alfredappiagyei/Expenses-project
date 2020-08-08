import React, { Component } from "react";
import {connect} from 'react-redux';
import { addUser, deleteUser,getAllUsers} from './store/actions';
import { UserForm } from "./components/Form";
import User from "./components/Info";
import "./App.css";

 

export class App extends Component {
 

  addNewUser = newUser => {
    this.props.addUser(newUser)
  };


deleteUser = user_id => {
  this.props.deleteUser(user_id);
}



componentDidMount(){
     this.props.getAllUsers();
}


  render() {
    return (
      <div className="App">
        <div className="form-container">
          <h2  style={{color:"#fff",}}>ADD NEW USER</h2>     
          <div className='row'>
          {/* <button onClick={this.props.logoutUser}>Log out</button> */}
          </div>
          <div className='row'>
          <UserForm addUser={this.addNewUser} />
          </div>
         
        </div>
        <div className="users-container">
          {this.props.users.map((people, index) => {
            return (
              <User
 
                key={people.id}
                id={people.id}
                name={people.name}
                email={people.email}
                gen={people.gen}
                removeUser={this.deleteUser}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return{
    users: state.users,
  };
};

 


const mapDispatchToProps = {
  addUser ,
  deleteUser ,
  getAllUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);