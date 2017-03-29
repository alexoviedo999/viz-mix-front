import React, { Component } from 'react';
import { Card as RebassCard, CardImage, Heading, Text } from 'rebass';

class Card extends Component {
  render() {
    return (
        <RebassCard rounded width={256}>
            <CardImage src={this.props.imageSrc} />
            <Heading level={2} size={3}>
                {this.props.title}
            </Heading>
            <Text>
                {this.props.text}
            </Text>
        </RebassCard>
    );
  }
}

export default Card;