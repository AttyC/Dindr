import React from 'react';
import axios from 'axios';

class UserSearchSkillsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: ''
    };
    this.skillChange = this.skillChange.bind(this);
  }

  skillChange(e) {
    this.setState({
      skills: e.target.value
    });
  }

  searchSkills = event => {
    event.preventDefault();

    this.setState({
      skills: event.target.value
    });

    axios.post('/api/users/skills', {
      skills: this.state.skills
    })
    .then(res => {
      this.props.searchSkills(res);
    })
   .catch(err => {
     console.log(err, 'Search skills error');
   });
  };

  render() {
    return (
      <div>
      <form onSubmit = {this.searchSkills}>
      <label>
      Search by skills:
      <input type='text' onChange={this.skillChange} value={this.state.skills} /></label>
      <input type="submit" value ="Submit" />
      </form>
      </div>
    );
  }
}

export default UserSearchSkillsForm;
