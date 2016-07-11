import React, { Component, PropTypes } from 'react';
import ProviderImage from 'components/ProviderImage';
import classes from './Card.scss';

export class Card extends Component {
    static propTypes = {
        gender: PropTypes.string.isRequired,
        children: PropTypes.node
    }

    render () {
        return (
            <div className={`${classes.layout} col`}>
                <div className={`${classes.card} card`}>
                    <div className="card-image">
                        <ProviderImage gender={this.props.gender} />
                    </div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Card;
