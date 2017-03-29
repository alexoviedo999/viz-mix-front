import React, { Component } from 'react';
import Card from '../components/Card';
import './Home.css';

class Home extends Component {
  render() {
    let cardArray = [{imageSrc: "http://placehold.it/256x192/08e/fff", title: "test 1", text: "hello"}, {imageSrc: "http://placehold.it/256x192/08e/fff", title: "test 2", text: "hello 2"}];

    return (
      <div className="Home">
        <div className="lander">
          <h1>Scratch</h1>
          <p>A simple note taking app</p>
          {cardArray.map(card => (
            <Card {...card}/>
            ))}
        </div>
      </div>
    );
  }
}

export default Home;