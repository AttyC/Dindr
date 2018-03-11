import React from 'react';
import LikeUserForm from './LikeUserForm';

const UserProfile = (user) => {
  return(
    <div>
      <div className="experience"> Experience: {user.experience} </div>
      <div className="bio"> Read {user.username} bio </div>
      < LikeUserForm listNameFromUser={user.username} />
    </div>);

};

export default UserProfile;
