import React from 'react';
import { Component } from 'react';
import './style.css';

class App extends Component {
  state = { username: '', password: '', email: '' };

  getUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  getEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  getPassword = (event) => {
    this.setState({ password: event.target.value });
  };

  displayValues = (event) => {
    event.preventDefault();
    const { username, password, email } = this.state;
    console.log(username);
    console.log(email);
    console.log(password);
  };
  render() {
    return (
      <form onSubmit={this.displayValues}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" onChange={this.getUsername} />
        <br />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" onChange={this.getEmail} />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" onChange={this.getPassword} />
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default App;
