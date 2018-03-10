import React from 'react';

const UserProfile = (user) => {
  return(
    <div>
      <div className="experience"> Experience: {user.experience} </div>
      <div className="bio"> Read {user.username} bio </div>
    </div>);

};

export default UserProfile;
