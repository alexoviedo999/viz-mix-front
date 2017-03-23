import React, { Component } from 'react';
import './App.css';
import { Toolbar, NavItem, Space } from 'rebass';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar>
          <NavItem is="a" href="http://nytimes.com">
            Toolbar
          </NavItem>
          <NavItem is="a" to="/"> {/*???*/}
            Scratch 
          </NavItem>
          <Space
            auto
            x={1}
          />
          <NavItem is="a">
            NavItem
          </NavItem>
        </Toolbar>
      </div>
    );
  }
}

export default App;
