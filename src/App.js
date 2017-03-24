import React, { Component } from 'react';
import './App.css';
import { Toolbar, Space } from 'rebass';
import { Link, withRouter } from 'react-router-dom';
import Routes from './Routes';
import RouteNavItem from './components/RouteNavItem';

class App extends Component {

  handleNavLink = (event) => {
    event.preventDefault();
    this.props.history.push(event.currentTarget.getAttribute('href'));
  }

  render() {
    return (
      <div className="App">
        <Toolbar>
          <RouteNavItem href="http://nytimes.com">
            Toolbar
          </RouteNavItem>
          <RouteNavItem to="/"> {/*???*/}
            Scratch 
          </RouteNavItem>
          <Space
            auto
            x={1}
          />
          <RouteNavItem onClick={this.handleNavLink} href="/signup">
            Signup
          </RouteNavItem>
          <RouteNavItem onClick={this.handleNavLink} href="/login">
            login
          </RouteNavItem>
        </Toolbar>
        <Routes /> {/*???*/}
      </div>
    );
  }
}

export default withRouter(App);

