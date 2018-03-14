import axios from 'axios';

var loadUsers  = loadUsersFromServer(){
    axios.get('/api/users')
    .then(res => {
      this.setState({ users: res.data });
    });
  }
