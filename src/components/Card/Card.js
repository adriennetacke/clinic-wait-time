import React, { Component, PropTypes } from 'react';
import classes from './Card.scss';

export class Card extends Component {
    static propTypes = {
        imageUrl: PropTypes.string.isRequired,
        children: PropTypes.node
    }

    render () {
        return (
            <div className={`${classes.layout} col`}>
                <div className={`${classes.card} card`}>
                    <div className="card-image">
                        <img src={this.props.imageUrl} />
                    </div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Card;
