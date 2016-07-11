import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Carousel from 'components/Carousel';
import ProviderCard from 'components/ProviderCard';
import UrgentCard from 'components/UrgentCard';
import { requestClinicInfo } from 'reducers/clinic';

export class ProvidersCarousel extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired,
        getClinicInfo: PropTypes.func.isRequired
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
        }, 2000);
    }

    next () {
        this.setState({
            currentSlide: this.state.currentSlide + 1
        });
    }

    componentDidMount () {
        this.props.getClinicInfo(1);
    }

    render () {
        const sortedItems = this.props.items.sort((a, b) => {
            if (a.isUrgentCare && !b.isUrgentCare) return 1;
            if (!a.isUrgentCare && b.isUrgentCare) return -1;

            return 0;
        });

        const cards = sortedItems.map((item, i) => {
            return item.isUrgentCare
                ? <UrgentCard key={i} provider={item} />
                : <ProviderCard key={i} provider={item} />;
            });

        const slides = cards.reduce((items, item, i) => {
            const index = Math.floor(i/4);

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
        getClinicInfo: (clinicId) => dispatch(requestClinicInfo(clinicId))
    };
};

export default connect (mapStateToProps, mapDispatchToProps)(ProvidersCarousel);
