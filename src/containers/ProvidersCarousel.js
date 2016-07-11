import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Carousel from 'components/Carousel';
import ProviderCard from 'components/ProviderCard';
import UrgentCard from 'components/UrgentCard';

export class ProvidersCarousel extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired
    }

    constructor (props) {
        super(props);

        this.state = {
            currentSlide: 0
        };

        const next = this.next.bind(this);

        setInterval(() => {
            this.setState({
                time: next()
            });
        }, 5000);
    }

    next () {
        this.setState({
            currentSlide: this.state.currentSlide + 1
        });
    }

    render () {
        const cards = this.props.items.map((item, i) => {
            return item.UrgentCare
                ? <UrgentCard key={i} provider={item} />
                : <ProviderCard key={i} provider={item} />;
            });

        const slides = cards.reduce((items, item, i) => {
            const index = Math.floor(i/2);

            if (!items[index]) {
                items[index] = [];
            }

            items[index].push(item);

            return items;
        }, []);

        return (
            <div>
                <Carousel currentSlide={this.state.currentSlide}>
                    {slides}
                </Carousel>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.clinic.providers
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect (mapStateToProps, mapDispatchToProps)(ProvidersCarousel);
