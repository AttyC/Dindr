import React from 'react';

class UserNewForm extends React.Component {
  constructor(props) {
    super(props);

   this.state = {
      username: '',
      email: '',
      skills: '',
      experience: ''
    }

   this.handleChange = this.handleChange.bind(this);
  }
//
 handleChange(e) {
    this.setState({
      username: e.target.value,
      email: e.target.value,
      skills: e.target.value,
      experience: e.target.value
    })
  }

 render() {
    return (
      <div>
      <form onSubmit = {this.handleSubmit}>
      <label>
      Username:
      <input type='text' onChange={this.handleChange} value={this.state.username} /></label>
      <label>
      Email:
      <input type='text' onChange={this.handleChange} value={this.state.email} /></label>
      <label>
      Skills:
      <input type='text' onChange={this.handleChange} value={this.state.skills} /></label>
      <label>
      Experience:
      <input type='text' onChange={this.handleChange} value={this.state.experience} /></label>
      <input type="submit" value ="Submit" />
      </form>
      </div>
    )
  }
}

export default UserNewForm;
