import React from 'react';
import UserPreview from './UserPreview';

class UserList extends React.Component {
  render() {
    return(
    <div className="Users">
    <ul className="usersList">
      {this.props.users.map(user =>
      <li key={user._id}> <UserPreview user={user} /></li>
      )}
    </ul>
    </div>
    );
  }
}

export default UserList;
