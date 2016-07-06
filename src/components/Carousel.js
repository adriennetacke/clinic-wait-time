import React, { Component, PropTypes } from 'react';
import Card from 'components/Card';

export class Carousel extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired
    }

    render () {
        return (
            <div>
                {this.props.items.map(item =>
                    <Card name={item.name} />
                )}
            </div>
        );
    }
}

export default Carousel;
