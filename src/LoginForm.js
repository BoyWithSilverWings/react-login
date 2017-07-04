import React, { Component } from 'react';

import { users } from './users.js';

import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class LoginForm extends Component {
  constructor(props) {
    super(props);

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
    event.stopPropagation();

    let user = users.filter((user)=>{
      return user.username === this.state.username;
    })[0]; //On the assumption that this is a single user
    
    if(user && user.password === this.state.password) {
      this.loginStatus = true;
      this.props.onUserLogin(user);
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

export default LoginForm;
