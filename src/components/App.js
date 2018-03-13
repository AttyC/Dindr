import axios from 'axios';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
// // import Routes from "../Routes";
import RouteNavItem from "./RouteNavItem";
import UserNewForm from './UserNewForm';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  loadUsersFromServer(){
    axios.get('/api/users')
    .then(res => {
      this.setState({ users: res.data });
    });
  }

  render() {
    return (
       <div className="App container background">
         <h3>Add new User:</h3>< UserNewForm loadUsersFromServer={this.loadUsersFromServer.bind(this)}/>
       </div>
    );
  }
}

export default App;
