import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {Flex, Box} from 'reflexbox';
import {Input, Textarea} from 'rebass';
import LoaderButton from '../components/LoaderButton';
import config from '../config.js';
import './NewScene.css';
import { invokeApig, s3Upload } from '../libs/awsLib';

class NewScene extends Component {
  constructor(props) {
    super(props);

    this.file = null;

    this.state = {
      isLoading: null,
      sceneText: '',
    };
  }

  validateForm() {
    return this.state.sceneText.length > 0;
  }

  handleChange = (event) => {
    console.log(event.target.id);
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleFileChange = (event) => {
    this.file = event.target.files[0];
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    if (this.file && this.file.size > config.MAX_ATTACHMENT_SIZE) {
      alert('Please pick a file smaller than 5MB');
      return;
    }

    this.setState({ isLoading: true });

    try {
      const uploadedFilename = (this.file)
        ? await s3Upload(this.file, this.props.userToken)
        : null;

      await this.createScene({
        content: this.state.sceneText,
        attachment: uploadedFilename,
      });
      this.props.history.push('/');
    }
    catch(e) {
      alert(e);
      this.setState({ isLoading: false });
    }

  }

  createScene(scene) {
    return invokeApig({
      path: '/notes',
      method: 'POST',
      body: scene,
    }, this.props.userToken);
  }

  render() {
    return (
      <div className="NewScene">
        <Flex justify="center">
          <Box col={8} p={4}>
            <form onSubmit={this.handleSubmit}>
                <Textarea
                    id="sceneText"
                    name="text"
                    onChange={this.handleChange}
                    value={this.state.sceneText}
                    label="Attachment"
                     />
                <Input
                    onChange={this.handleFileChange}
                    label="choose file"
                    name="chooseFile"
                    type="file" />
            <LoaderButton
                disabled={ ! this.validateForm() }
                type="submit"
                isLoading={this.state.isLoading}
                text="Create"
                loadingText="Creating…" />
            </form>
          </Box>
        </Flex>
      </div>
    );
  }
}

export default withRouter(NewScene);