import React from 'react';

const UserPreview = (user) => {
  return(<div className="UserPreview">
  <div className="name"> Username: {user.username} </div>
  <div className="skills"> Skills: {user.skills} </div>
  <div className="experience"> Experience: {user.experience} </div>
  <p></p>
</div>);

};

export default UserPreview;
