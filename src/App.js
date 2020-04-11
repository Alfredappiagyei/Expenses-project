import React, { Component } from "react";
import {connect} from 'react-redux';
import { addUser, deleteUser} from './store/actions';
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


  render() {
    return (
      <div className="App">
        <div className="form-container">
          <h1  style={{color:"#fff",}}>ADD NEW USER</h1>
          <UserForm addUser={this.addNewUser} />
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

const mapStateToProps = (state) => ({
  users: state.users
})

const mapDispatchToProps = {
  addUser: addUser,
  deleteUser: deleteUser

}

export default connect(mapStateToProps, mapDispatchToProps)(App);