import React from 'react';
import UserList from './UserList';
import UserSearchSkillsForm from './UserSearchSkillsForm';
import axios from 'axios';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {users: []};
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
  }

  render() {
    return (
       <div className="Users container">
       < UserSearchSkillsForm searchSkills={this.handleSearchSkills.bind(this)}/>
       <UserList users={this.state.users} />
       </div>
    );
  }
}

export default Users;
