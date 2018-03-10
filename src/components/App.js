import React from 'react';
import axios from 'axios';
import UserPreview from './UserPreview';
import UserProfile from './UserProfile';
import UserNewForm from './UserNewForm';

class App extends React.Component {
  state = { users: [] }
//this.props.initialMessage
  componentDidMount() {
    // Does stuff when first mounted
    axios.get('/api/users')
      .then(res => {
        this.setState({ users: res.data });
      });
  }

  componentWillUnmount() {
    // Runs when component gets unmounted/replaced
    console.log('unmounted');
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        <h3>Add new User:</h3>< UserNewForm />
        <ul className="usersList">
          {this.state.users.map(user =>
           <li key={user._id}> <UserPreview {...user} /></li>
          )}
        </ul>

      </div>
    );
  }
}

export default App;
