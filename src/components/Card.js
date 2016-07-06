import React, { Component, PropTypes } from 'react';

export class Card extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired
    }

    render () {
        return (
            <div>{this.props.name}</div>
        );
    }
}

export default Card;
