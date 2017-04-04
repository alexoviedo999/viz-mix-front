import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Button, Input, Block, Container} from 'rebass';
import {Flex, Box} from 'reflexbox';
import LoaderButton from '../components/LoaderButton';

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            username: '',
            password: '',
            confirmPassword: '',
            confirmationCode: '',
            newUser: null
        };
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0 && this.state.password === this.state.confirmPassword;
    }

    validateConfirmationForm() {
        return this.state.confirmationCode.length > 0;
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = async(event) => {
        event.preventDefault();

        this.setState({isLoading: true});

        this.setState({newUser: 'test'});

        this.setState({isLoading: false});
    }

    handleConfirmationSubmit = async(event) => {
        event.preventDefault();

        this.setState({isLoading: true});
    }

    renderConfirmationForm() {
        return (
            <div className="Login">
                <Flex justify="center">
                    <Box col={4} p={4}>
                        <form onSubmit={this.handleConfirmationSubmit}>
                            <Input
                                autoFocus
                                label="Confirmation Code"
                                type="tel"
                                value={this.state.confirmationCode}
                                onChange={this.handleChange}/>
                            <h3>Please check your email for the code.</h3>
                            <LoaderButton
                                block
                                bsSize="large"
                                disabled={!this.validateConfirmationForm()}
                                type="submit"
                                isLoading={this.state.isLoading}
                                text="Verify"
                                loadingText="Verifying…"/>
                        </form>
                    </Box>
                </Flex>
            </div>
        );
    }

    renderForm() {
        return (
            <div className="Login">
                <Flex justify="center">
                    <Box col={4} p={4}>
                        <form onSubmit={this.handleSubmit}>
                            <Input
                                autoFocus
                                label="Email"
                                type="email"
                                value={this.state.username}
                                onChange={this.handleChange}/>
                            <Input
                                label="Password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                type="password"/>
                            <Input
                                label="Confirm Password"
                                value={this.state.confirmPassword}
                                onChange={this.handleChange}
                                type="password"/>
                            <LoaderButton
                                block
                                bsSize="large"
                                disabled={!this.validateForm()}
                                type="submit"
                                isLoading={this.state.isLoading}
                                text="Signup"
                                loadingText="Signing up…"/>
                        </form>
                    </Box>
                </Flex>
            </div>
        );
    }

    render() {
        return (
            <div className="Signup">
                {this.state.newUser === null
                    ? this.renderForm()
                    : this.renderConfirmationForm()}
            </div>
        );
    }
}

export default withRouter(Signup);

{/* withRouter ???*/}