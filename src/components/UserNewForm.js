import React from 'react';
import axios from 'axios';

class UserNewForm extends React.Component {
  constructor(props) {
    super(props);

   this.state = {
      username: '',
      email: '',
      skills: '',
      experience: ''
    }

   this.usernameChange = this.usernameChange.bind(this);
   this.emailChange = this.emailChange.bind(this);
   this.skillChange = this.skillChange.bind(this);
   this.experienceChange = this.experienceChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);

  }
//
 usernameChange(e) {
    this.setState({
      username: e.target.value
    })
  }

  emailChange(e) {
     this.setState({
       email: e.target.value
     })
   }

   skillChange(e) {
      this.setState({
        skills: e.target.value
      })
    }

    experienceChange(e) {
       this.setState({
         experience: e.target.value
       })
     }

  handleSubmit(e) {
    alert('skjfsdjf' + this.state.email)
    e.preventDefault();
    let username = this.state.username.trim();
    let email = this.state.email.trim()
    let skills = this.state.skills.trim()
    let experience = this.state.experience.trim()
    if (!username || !email || !skills || !experience) {
    return;
    }
    axios.post('http://localhost:4444/api/users/new', {
      username: username,
      email: email,
      skills: skills,
      experience: experience
    })
    .then(response => {
     console.log(response, 'User added');
   })
   .catch(err => {
     console.log(err, 'User not added, try again');
   });

   this.setState({
     username: '',
     email: '',
     skills: '',
     experience: ''
   })
  }

 render() {
    return (
      <div>
      <form onSubmit = {this.handleSubmit}>
      <label>
      Username:
      <input type='text' onChange={this.usernameChange} value={this.state.username} /></label>
      <label>
      Email:
      <input type='text' onChange={this.emailChange} value={this.state.email} /></label>
      <label>
      Skills:
      <input type='text' onChange={this.skillChange} value={this.state.skills} /></label>
      <label>
      Experience:
      <input type='text' onChange={this.experienceChange} value={this.state.experience} /></label>
      <input type="submit" value ="Submit" />
      </form>
      console.log(this.state)
      </div>
    )
  }
}

export default UserNewForm;
