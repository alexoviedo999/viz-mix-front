import React, { Component } from 'react';
import { Flex, Box } from 'reflexbox';
import './Home.css';

class CardContainer extends Component {
  render() {

    return (
        <div className="lander">
          <h1>Card Page</h1>
          <Flex wrap justify='center'>
              <Box> {/* why box here and in Card? */}
                <h1>Card</h1>
                {this.props.match.params.id}
              </Box>
          </Flex>
        </div>
    );
  }
}

export default CardContainer;