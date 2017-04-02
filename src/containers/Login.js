import React, { Component } from 'react';
import config from '../config.js';
import { withRouter } from 'react-router-dom';
import {
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUser
} from 'amazon-cognito-identity-js';
import { Flex, Box } from 'reflexbox';
import {
    Button,
    Input,
    Block,
    Container
} from 'rebass';
import LoaderButton from '../components/LoaderButton';


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
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

  login(username, password) {
    const userPool = new CognitoUserPool({
      UserPoolId: config.cognito.USER_POOL_ID,
      ClientId: config.cognito.APP_CLIENT_ID
    });
    const authenticationData = {
      Username: username,
      Password: password
    };

    const user = new CognitoUser({ Username: username, Pool: userPool });
    const authenticationDetails = new AuthenticationDetails(authenticationData);

    return new Promise((resolve, reject) => (
      user.authenticateUser(authenticationDetails, {
        onSuccess: (result) => resolve(result.getIdToken().getJwtToken()),
        onFailure: (err) => reject(err),
      })
    ));
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    this.setState({ isLoading: true });

    try {
      const userToken = await this.login(this.state.username, this.state.password);
      this.props.updateUserToken(userToken);
      this.props.history.push('/');
    }
    catch(e) {
      alert(e);
      this.setState({ isLoading: false });
    }
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




                <LoaderButton
                  
                  disabled={ ! this.validateForm() }
                  type="submit"
                  isLoading={this.state.isLoading}
                  text="Login"
                  loadingText="Logging in…" />


                </form>
            </Box>
        </Flex>
      </div>
    );
  }
}

export default withRouter(Login);