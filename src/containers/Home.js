import React, { Component } from 'react';
import Card from '../components/Card';
import { Flex, Box } from 'reflexbox';
import { LinkBlock } from 'rebass';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  render() {
    let cardArray = [{cardId:10, imageSrc: "http://placehold.it/256x192/08e/fff", title: "test 1", text: "hello"}, 
    {cardId:11, imageSrc: "http://placehold.it/256x192/08e/fff", title: "test 2", text: "hello 2"}];

    return (
      <div className="Home">
        <div className="lander">
          <h1>Scratch</h1>
          <p>A simple note taking app</p>
          <Flex wrap justify='center'>
            {cardArray.map(card => (
            <Box> {/* why box here and in Card? */}
              <LinkBlock is={Link} to={`/card/${card.cardId}`}>
                <Card {...card}/>
              </LinkBlock>
              </Box>
              ))}
          </Flex>
        </div>
      </div>
    );
  }
}

export default Home;