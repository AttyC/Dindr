import React from 'react';
import axios from 'axios';

class LikeUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      const username  = this.props.listNameFromUser;
      usernameOfLiked_id: username,
      nameOfLiker: '',
      emailOfLiker:'',
      locationOfLiker:'',
      message: '',
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
  handleSubmit(e){
    e.preventDefault();
    console.log('Like added')
    // need to tie this into post method
    // need to work out how to add current user username to form
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
    )
  }
  }


export default LikeUserForm;
