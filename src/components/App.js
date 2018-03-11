import React from 'react';
import axios from 'axios';
import UserProfile from './UserProfile';
import UserNewForm from './UserNewForm';
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

  componentDidMount(){
    this.loadUsersFromServer();
    // setInterval(this.loadUsersFromServer, this.props.pollInterval);
  }

//this.props.initialMessage
  // componentDidMount() {
  //   // Does stuff when first mounted
  //   axios.get('/api/users')
  //     .then(res => {
  //       this.setState({ users: res.data });
  //     });
  // }

  // componentWillUnmount() {
  //   // Runs when component gets unmounted/replaced
  //   console.log('unmounted');
  // }

  render() {
    // return (
    //   <div className="App">
    //   //   <h1>Users</h1>
    //   //   <h3>Add new User:</h3>< UserNewForm />
    //   //   <ul className="usersList">
    //   //     {this.state.users.map(user =>
    //   //      <li key={user._id}> <UserPreview {...user} /></li>
    //   //     )}
    //   //   </ul>
    //   //
    //   // </div>
    // )
    return (
       <div className="App">
       <h1>Users</h1>
       <h3>Add new User:</h3>< UserNewForm />
       <UserList users={ this.state.users} />
       </div>
    );
  }
}

export default App;
