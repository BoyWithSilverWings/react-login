import React, { Component } from 'react';

import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import LoginForm from './LoginForm.js';
import SignUpForm from './SignUpForm.js';

class UserScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userWantsToSignUp: false
    };

    this.handleLoginForm = this.handleLoginForm.bind(this);
    this.userRegister = this.userRegister.bind(this);
    this.userLogin = this.userLogin.bind(this);
  }

  handleLoginForm(user) {
    this.props.onUserLogin(user);
  }

  userRegister(event) {
    event.preventDefault();
    this.setState({
      userWantsToSignUp: true
    });
  }

  userLogin(event) {
    event.preventDefault();
    this.setState({
      userWantsToSignUp: false
    });
  }

  render() {
    let form = (
      <div>
        <LoginForm 
          onUserLogin={this.handleLoginForm}
        />
        <div className="divider"></div>
        <Button 
          bsStyle="default" 
          bsSize="large" 
          block
          onClick={this.userRegister}
        >
          <span className="sm-hidden">Don't have an account? </span>
          <span>Sign up</span>
        </Button>
      </div>
    )
    if(this.state.userWantsToSignUp) {
      form = (
        <div>
          <SignUpForm/>
          <Button 
            bsStyle="default" 
            bsSize="large" 
            block
            onClick={this.userLogin}
          >
            <span className="sm-hidden">Change Your Mind? </span>
            <span>Login</span>
          </Button>
        </div>
      );
    }
    return (
      <div className="row">
        <Col md={6} sm={10} mdPush={3} smPush={1}>
            { form }
        </Col>
      </div>
    );
  }
}

export default UserScreen;
