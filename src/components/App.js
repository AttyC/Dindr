import React from 'react';
import axios from 'axios';
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
       <div className="App">
       <h1>Users</h1>
       <h3>Add new User:</h3>< UserNewForm loadUsersFromServer={this.loadUsersFromServer.bind(this)}/>
       </div>
    );
  }
}

export default App;
