import React, { Component } from 'react';
import { Card as RebassCard, CardImage, Heading, Text } from 'rebass';
import { Box } from 'reflexbox';

class Card extends Component {
  render() {
    return (
        <Box col={12} sm={6} md={4} lg={3} p={2}>
            <RebassCard rounded width={256}>
                <CardImage src={this.props.imageSrc} />
                <Heading level={2} size={3}>
                    {this.props.title}
                </Heading>
                <Text>
                    {this.props.text}
                </Text>
            </RebassCard>
        </Box>
    );
  }
}

export default Card;