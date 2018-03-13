import React from 'react';
import axios from 'axios';
import UserNewForm from './UserNewForm';
import UserSearchSkillsForm from './UserSearchSkillsForm';
import UserList from './UserList';

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
  }

  render() {
    return (
       <div className="App">
       <h1>Users</h1>
       < UserSearchSkillsForm searchSkills={this.handleSearchSkills.bind(this)}/>
       <h3>Add new User:</h3>< UserNewForm loadUsersFromServer={this.loadUsersFromServer.bind(this)}/>
       <UserList users={ this.state.users} />
       </div>
    );
  }
}

export default App;
