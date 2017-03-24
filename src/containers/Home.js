import React, { Component } from 'react';
import { Card, CardImage, Heading, Text } from 'rebass';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Scratch</h1>
          <p>A simple note taking app</p>
          <Card rounded width={256}>
            <CardImage src="http://placehold.it/320/08e/fff" />
                <Heading level={2} size={3}>
                    Card
                </Heading>
                <Text>
                    Cats like cards too
                </Text>
            </Card>
        </div>
      </div>
    );
  }
}

export default Home;