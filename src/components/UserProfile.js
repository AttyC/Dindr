import React from 'react';
import LikeUserForm from './LikeUserForm';

const UserProfile = (user) => {
  return(
    <div>
      <div className="experience"> Experience: {user.experience} </div>
      <div className="bio"> Read {user.username} bio </div>
      < LikeUserForm />
    </div>);

};

export default UserProfile;
