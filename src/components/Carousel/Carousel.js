import React, { Component, PropTypes } from 'react';
import ProviderCard from 'components/ProviderCard';
import UrgentCard from 'components/UrgentCard';

export class Carousel extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired
    }

    render () {
        return (
            <div>
                {this.props.items.map((item, i) => {
                    return item.UrgentCare
                        ? <UrgentCard key={i} provider={item} />
                        : <ProviderCard key={i} provider={item} />;
                })}
            </div>
        );
    }
}

export default Carousel;
