import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { FormGroup, FormControl, InputGroup, ControlLabel, HelpBlock } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class Form extends Component {
  constructor(props) {
    super(props);

    this.user = {
      'fn' : 'John',
      'ln' : 'Doe',
      'username' : 'johndoe@gmail.com',
      'password' : 'password'
    }
    this.loginStatus = false;

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    
    this.state = {
      showErrors: false,
      username: '',
      password: ''
    }
  }

  handleLoginClick(event) {
    event.preventDefault();
    if(this.user.username === this.state.username && this.user.password === this.state.password) {
      this.loginStatus = true;
      this.props.onUserLogin(this.user);
    } else {
      this.loginStatus = false;
      console.log("Login Failed");
    }
    this.setState({
      showErrors: !this.loginStatus
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    
    this.setState({
      [name]: value
    });
  }

  render() {
    let FormError = null;
    if(this.state.showErrors)
      FormError = <HelpBlock>Login Failed.</HelpBlock>
    return (
      <div className="row">
          <Col md={6} sm={10} mdPush={3} smPush={1}>
            <h2>LOGIN</h2>
      <form>
        <FormGroup bsSize="small">
          <ControlLabel className="text-left show">Email Address</ControlLabel>
          <InputGroup>  
            <InputGroup.Addon>@</InputGroup.Addon>
            <FormControl
              type="email"
              name="username"
              placeholder="Enter your email address"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </InputGroup>
          <br/>
          <ControlLabel className="text-left show">Password</ControlLabel>
          <FormControl
            type="password"
            name="password"
            label="Password"
            placeholder="Enter your password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <div className="divider"></div>
          { FormError }
          <Button 
            bsStyle="primary" 
            bsSize="large" 
            type="submit"
            block
            onClick={this.handleLoginClick}
          >
            LOGIN
          </Button>
        </FormGroup>
      </form>
      </Col>
      </div>
    );
  }
}

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
    let content = <Form onUserLogin={this.handleLoginForm}/>;
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
