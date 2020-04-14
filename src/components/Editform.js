import React, { Component } from 'react';
import { connect } from 'react-redux';
import {editUser} from '../store/actions';

 class Editform extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: props.user.name,
        email: props.user.email,
        gen: props.user.gen,
    };
    this.id = props.match.params.id
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const updatedInfo = {
      name: this.state.name,
      email: this.state.email,
      gen: this.state.gen,
    
    };
    this.props.editUser(this.id, updatedInfo) 
        this.setState({
          name:'',
          email:'',
          gen:'',
        });

        this.props.history.push('/');
      };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-control">
          <label  style={{color:"red",}}>Full name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-control">
          <label  style={{color:"red",}}>Email</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-control">
          <label  style={{color:"red",}}>Gen</label>
          <input
            type="number"
            name="gen"
            value={this.state.gen}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <button  style={{color:"lawngreen",}} type="submit" >Change user</button>
        </div>
      </form>

    );
  }
}

const mapStateToProps = (state, ownProps) => ({
    user: state.users.find(user => user.id === ownProps.match.params.id)
    });
    
    const mapDispatchToProps = {
      editUser: editUser
    }

    export default  connect(mapStateToProps, mapDispatchToProps)(Editform);