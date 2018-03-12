import React from 'react';
import UserProfile from './UserProfile';

class UserPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHidden: true};
  }

  toggleHidden(){
    this.setState({
      isHidden: !this.state.isHidden
    });
  }
  render(){
    return(
    <div className="UserPreview">
    <div className="name"> <h2>{this.props.user.username} </h2></div>
    <div className="skills"> {this.props.user.skills} </div>
      <button onClick={this.toggleHidden.bind(this)} >
      Read more about {this.props.user.username}
      </button>
      {!this.state.isHidden && <UserProfile user={this.props.user} />}
    </div>

    );
  }
}

export default UserPreview;
