import React from 'react';
import UserPreview from './UserPreview';

class UserList extends React.Component {
  render() {
  return(
    <ul className="usersList">
      {this.props.users.map(user =>
      <li key={user._id}> <UserPreview {...user} /></li>
      )}
    </ul>
  );
  }
}

export default UserList;
