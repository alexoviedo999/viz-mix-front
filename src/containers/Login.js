import React, { Component } from 'react';
import { Flex, Box } from 'reflexbox';
import {
    Button,
    Input,
    Block,
    Container
} from 'rebass';


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  validateForm() {
    return this.state.username.length > 0
      && this.state.password.length > 0;
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
        
      <div className="Login">
        <Flex justify="center">
            <Box col={4} p={4}>
                <form onSubmit={this.handleSubmit}>
                    <Input
                    autoFocus
                    id="username"
                    label="Input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.username}
                    onChange={this.handleChange} />
                    <Input
                    id="password"
                    label="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    name="password"
                    type="password" />
                <Button
                    disabled={ ! this.validateForm() }
                    type="submit">
                    Login
                </Button>
                </form>
            </Box>
        </Flex>
      </div>
    );
  }
}

export default Login;