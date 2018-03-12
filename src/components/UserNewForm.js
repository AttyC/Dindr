import React from 'react';
import axios from 'axios';

class UserNewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      skills: '',
      experience: '',
      bio: ''
    };

    this.usernameChange = this.usernameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.skillChange = this.skillChange.bind(this);
    this.experienceChange = this.experienceChange.bind(this);
    this.bioChange = this.bioChange.bind(this);
  }
//
  usernameChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  emailChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  skillChange(e) {
    this.setState({
      skills: e.target.value
    });
  }

  experienceChange(e) {
    this.setState({
      experience: e.target.value
    });
  }

  bioChange(e) {
    this.setState({
      bio: e.target.value
    });
  }

  addToUsers = event => {
    event.preventDefault();

    this.setState({
      email: event.target.value,
      username: event.target.value,
      skills: event.target.value,
      experience: event.target.value,
      bio: event.target.value
    });

    axios.post('/api/users/new', {
      username: this.state.username,
      email: this.state.email,
      skills: this.state.skills,
      experience: this.state.experience,
      bio: this.state.bio
    })
    .then(response => {
      console.log(response, 'User added');
      alert('User added');
    })
   .catch(err => {
     console.log(err, 'User not added, try again');
     alert(err,'User not added, try again');

   });

    this.setState({
      username: '',
      email: '',
      skills: '',
      experience: '',
      bio: ''
    });
  };

  render() {
    return (
      <div>
        <form onSubmit = {this.addToUsers}>
          <label>
          Username:
          <input type='text' onChange={this.usernameChange} value={this.state.username} required /></label>
          <label>
          Email:
          <input type='text' onChange={this.emailChange} value={this.state.email} required /></label>
          <label>
          Skills:
          <input type='text' onChange={this.skillChange} value={this.state.skills} required /></label>
          <label>
          Experience:
          <input type='text' onChange={this.experienceChange} value={this.state.experience} required /></label>
          <label>
          Tell us about yourself:
          <input type='text' onChange={this.bioChange} value={this.state.bio} required /></label>
          <input type="submit" value ="Submit" />
        </form>
      </div>
    );
  }
}

export default UserNewForm;
