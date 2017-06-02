import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { invokeApig } from '../libs/awsLib';
import {Flex, Box} from 'reflexbox';
import { Section, SectionHeader, Heading} from 'rebass';
// import {
//   PageHeader,
//   ListGroup,
//   ListGroupItem,
// } from 'react-bootstrap';
import './Home.css';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      scenes: [],
    };
  }

  async componentDidMount() {
    if (this.props.userToken === null) {
      return;
    }

    this.setState({ isLoading: true });

    try {
      const results = await this.notes();
      this.setState({ scenes: results });
    }
    catch(e) {
      alert(e);
    }

    this.setState({ isLoading: false });
  }

  notes() {
    return invokeApig({ path: '/notes' }, this.props.userToken);
  }

  renderNotesList(scenes) {
    return [{}].concat(scenes).map((scene, i) => (
      i !== 0
        ? ( <li
              key={scene.noteId}
              href={`/scenes/${scene.noteId}`}
              onClick={this.handleNoteClick}
              header={scene.content.trim().split('\n')[0]}>
                { "Created: " + (new Date(scene.createdAt)).toLocaleString() }
            </li> )
        : ( <li
              key="new"
              href="/scenes/new"
              onClick={this.handleNoteClick}>
                <h4><b>{'\uFF0B'}</b> Create a new scene</h4>
            </li> )
    ));
  }

  handleNoteClick = (event) => {
    event.preventDefault();
    this.props.history.push(event.currentTarget.getAttribute('href'));
  }

  renderLander() {
    return (
      <div className="lander">
        <Heading level={2}>Scratch</Heading>
        <p>A VR App</p>
      </div>
    );
  }

  renderNotes() {
    return (
      <div className="notes">
        <Flex justify='center'>
          <Box>
            <Section>
              <SectionHeader
                description="The best scenes"
                heading="Your Scenes"
              />
              <ul>
                { ! this.state.isLoading
                  && this.renderNotesList(this.state.scenes) }
              </ul>
            </Section>
            </Box>
          </Flex>
        </div>
    );
  }

  render() {
    return (
      <div className="Home">
        { this.props.userToken === null
          ? this.renderLander()
          : this.renderNotes() }
      </div>
    );
  }
}

export default withRouter(Home);