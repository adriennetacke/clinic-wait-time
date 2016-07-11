import React, { Component, PropTypes } from 'react';

export class Card extends Component {
    static propTypes = {
        imageUrl: PropTypes.string.isRequired,
        children: PropTypes.node
    }

    render () {
        return (
            <div className="col">
                <div className="card">
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
