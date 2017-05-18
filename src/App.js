import React, { Component } from 'react';
import './App.css';
import { Toolbar, Space, NavItem } from 'rebass';
import { withRouter } from 'react-router-dom';
import Routes from './Routes';
import RouteNavItem from './components/RouteNavItem';
import { CognitoUserPool, } from 'amazon-cognito-identity-js';
import config from './config.js';
import AWS from 'aws-sdk';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userToken: null,
      isLoadingUserToken: true,
    };
  }

  updateUserToken = (userToken) => {
    this.setState({
      userToken: userToken
    });
  }

  handleNavLink = (event) => {
    event.preventDefault();
    this.props.history.push(event.currentTarget.getAttribute('href'));
  }

  handleLogout = (event) => {
    const currentUser = this.getCurrentUser();

    if (currentUser !== null) {
      currentUser.signOut();
    }

    if (AWS.config.credentials) {
      AWS.config.credentials.clearCachedId();
    }

    this.updateUserToken(null);

    this.props.history.push('/login');
  }

  getCurrentUser() {
    const userPool = new CognitoUserPool({
      UserPoolId: config.cognito.USER_POOL_ID,
      ClientId: config.cognito.APP_CLIENT_ID
    });
    return userPool.getCurrentUser();
  }

  getUserToken(currentUser) {
    return new Promise((resolve, reject) => {
      currentUser.getSession(function(err, session) {
        if (err) {
            reject(err);
            return;
        }
        resolve(session.getIdToken().getJwtToken());
      });
    });
  }

  async componentWillMount() {
    const currentUser = this.getCurrentUser();

    if (currentUser === null) {
      this.setState({isLoadingUserToken: false});
      return;
    }

    try {
      const userToken = await this.getUserToken(currentUser);
      this.updateUserToken(userToken);
    }
    catch(e) {
      alert(e);
    }

    this.setState({isLoadingUserToken: false});
  }

  render() {
    const childProps = {
      userToken: this.state.userToken,
      updateUserToken: this.updateUserToken,
    };

    return ! this.state.isLoadingUserToken &&
    (
      <div className="App">
        <Toolbar>
          <RouteNavItem href="http://nytimes.com">
            Toolbar
          </RouteNavItem>
          <RouteNavItem href="/"> {/*???*/}
            Scratch 
          </RouteNavItem>
          <Space
            auto
            x={1}
          />
          { this.state.userToken
            ? <NavItem onClick={this.handleLogout}>Logout</NavItem>
            : [ <RouteNavItem key={1} onClick={this.handleNavLink} href="/signup">Signup</RouteNavItem>,
                <RouteNavItem key={2} onClick={this.handleNavLink} href="/login">Login</RouteNavItem> ] }
        </Toolbar>
        <Routes childProps={childProps} /> {/* why on the route???*/}
      </div>
    );
  }
}

export default withRouter(App);
