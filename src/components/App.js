import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import UserNewForm from './UserNewForm';
import UserSearchSkillsForm from './UserSearchSkillsForm';
import UserList from './UserList';
import Routes from "../Routes";
import RouteNavItem from "./RouteNavItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
    this.loadUsersFromServer = this.loadUsersFromServer.bind(this);
  }

  loadUsersFromServer(){
    axios.get('/api/users')
    .then(res => {
      this.setState({ users: res.data });
    });
  }

  handleSearchSkills(res){
    this.setState({ users: res.data });
  }

  componentDidMount(){
    this.loadUsersFromServer();
    // setInterval(this.loadUsersFromServer, this.props.pollInterval);
  }

  render() {
    return (
       <div className="App container-fluid">
         <Navbar fluid collapseOnSelect>
           <Navbar.Header>
             <Navbar.Brand>
               <Link to="/">Home</Link>
             </Navbar.Brand>
             <Navbar.Toggle />
           </Navbar.Header>
           <Navbar.Collapse>
             <Nav pullRight>
               <RouteNavItem href="/signup">Signup</RouteNavItem>
               <RouteNavItem href="/login">Login</RouteNavItem>
             </Nav>
           </Navbar.Collapse>
         </Navbar>
         <Routes />
       <h1>Users</h1>
       < UserSearchSkillsForm searchSkills={this.handleSearchSkills.bind(this)}/>
       <h3>Add new User:</h3>< UserNewForm />
       <UserList users={ this.state.users} />
       </div>
    );
  }
}
export default App;
