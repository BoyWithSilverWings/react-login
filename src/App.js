import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LoginForm from './LoginForm.js';


class App extends Component {
  constructor(props) {
    super(props);
    
    this.isUserLoggedIn = false;

    this.state = {
      user: null
    }

    this.handleLoginForm = this.handleLoginForm.bind(this);
  }

  handleLoginForm(user) {
    console.log("Logged in "+user.fn);
    this.isUserLoggedIn = true;
    this.setState({
      user: user
    });
  }

  render() {
    let greeting = 'to React';
    let content = <LoginForm onUserLogin={this.handleLoginForm}/>;
    if(this.isUserLoggedIn) {
      greeting = this.state.user.fn;
      content = <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, beatae labore dignissimos ipsam commodi delectus modi aspernatur sapiente similique ea ex, fugiat corporis at recusandae nam error dicta minima dolorum.</p>
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome { greeting }</h2>
        </div>
        <br/>
        { content }        
      </div>
    );
  }
}

export default App;
