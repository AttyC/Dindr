import React from 'react';
import axios from 'axios';
import UserNewForm from './UserNewForm';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
       <div className="App">
       <h1>Users</h1>
       <h3>Add new User:</h3>< UserNewForm />
       </div>
    );
  }
}

export default App;
