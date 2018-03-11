import React from 'react';
import axios from 'axios';

class LikeUserForm extends React.Component {
  constructor(props) {
    super(props);
    const username  = this.props.listNameFromUser;
    this.state = {
      usernameOfLiked_id: username,
      nameOfLiker: '',
      emailOfLiker:'',
      locationOfLiker:'',
      message: '',
      url: `api/users/${username}/likes`
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
  }
  handleNameChange(e){
    this.setState({ nameOfLiker: e.target.value});

  }
  handleEmailChange(e){
    this.setState({ emailOfLiker: e.target.value});
  }
  handleLocationChange(e){
    this.setState({locationOfLiker: e.target.value});
  }
  handleMessageChange(e){
    this.setState({message: e.target.value});
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let user_id = this.state.usernameOfLiked_id.trim();
    let name = this.state.nameOfLiker.trim();
    let email = this.state.emailOfLiker.trim();
    let location = this.state.locationOfLiker.trim();
    let message = this.state.message.trim();

    if (!user_id || !name || !email || !location || !message) {
      return;
    }
    axios.post(this.state.url, {
      nameOfLiker: name,
      emailOfLiker: email,
      locationOfLiker: location,
      message: message
    })
    .then(response => {
      console.log(response, 'Like added');
    })
   .catch(err => {
     console.log(err, 'Like not added, try again');
   });
    this.setState({
      nameOfLiker: '',
      emailOfLiker:'',
      locationOfLiker:'',
      message: '',
    });
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
      <input
      type='text'
      placeholder='Your name...'
      value={this.state.nameOfLiker}
      onChange={ this.handleNameChange} />
      <input
      type='text'
      placeholder='Your email...'
      value={this.state.emailOfLiker}
      onChange={ this.handleEmailChange} />
      <input
      type='text'
      placeholder='Your location...'
      value={this.state.locationOfLiker}
      onChange={ this.handleLocationChange} />
      <input
      type='text'
      placeholder='Your message...'
      value={this.state.message}
      onChange={ this.handleMessageChange} />
      <p></p>
      <input
      type='submit'
      value='Send Details!' />
      </form>
    );
  }
  }


export default LikeUserForm;
