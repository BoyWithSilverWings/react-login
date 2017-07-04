import React, { Component } from 'react';

import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import { users } from './users.js';

class SignupForm extends Component {

  constructor(props) {
    super(props);

    this.SignupStatus = false;

    this.handleSignupClick = this.handleSignupClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    
    this.state = {
      showErrors: false,
      name: '',
      username: '',
      password: '',
      email: '',
      password2: '',
      signUpComplete: false 
    }
  }

  handleSignupClick(event) {
    event.preventDefault();
    event.stopPropagation();

    let user = {
      fn: this.state.name,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    };
    users.push(user);
    
    this.setState({
      signUpComplete: true
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
      FormError = <HelpBlock>Signup Successful.</HelpBlock>
    return (
        <div>
          <h2>REGISTER</h2>
          <form>
            <FormGroup bsSize="small">
              <ControlLabel className="text-left show">Name</ControlLabel>
              
              <FormControl
                type="text"
                name="name"
                placeholder="Enter your name"
                value={this.state.name}
                onChange={this.handleInputChange}
              />
              <br/>
              <ControlLabel className="text-left show">Email</ControlLabel>
              
              <FormControl
                type="text"
                name="email"
                placeholder="Enter your email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
              <br/>
              <ControlLabel className="text-left show">Username</ControlLabel>
              
              <FormControl
                type="text"
                name="username"
                placeholder="Enter your username"
                value={this.state.username}
                onChange={this.handleInputChange}
              />
              
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
              <br/>
              <ControlLabel className="text-left show">Repeat Password</ControlLabel>
              <FormControl
                type="password"
                name="password2"
                placeholder="Enter your password"
                value={this.state.password2}
                onChange={this.handleInputChange}
              />
              <div className="divider"></div>
              { FormError }
              <Button 
                bsStyle="primary" 
                bsSize="large" 
                type="submit"
                block
                onClick={this.handleSignupClick}
              >
                SIGN UP
              </Button>
            </FormGroup>
        </form>
      </div>
    );
  }
}

export default SignupForm;
