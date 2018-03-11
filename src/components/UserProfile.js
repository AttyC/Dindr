import React from 'react';
import LikeUserForm from './LikeUserForm';

class UserProfile extends React.Component {
  render () {
  return(
    <div>
      <div className="experience"> Experience: {this.props.user.experience} </div>
      <div className="bio"> Read {this.props.user.username} bio </div>
      < LikeUserForm listNameFromUser={this.props.user.username} />
    </div>);

};
}

export default UserProfile;
