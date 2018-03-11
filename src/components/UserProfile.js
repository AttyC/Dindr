import React from 'react';

const UserProfile = (user) => {
  return(
    <div>
      <div className="experience"> Experience: {user.experience} </div>
      <div className="bio">Bio: {user.username}
        <p>{user.bio}</p>
      </div>
    </div>);

};

export default UserProfile;
