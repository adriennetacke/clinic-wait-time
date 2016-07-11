import React, { Component, PropTypes } from 'react';
import ProviderCard from 'components/ProviderCard';
import UrgentCard from 'components/UrgentCard';
import classes from './Carousel.scss';
import Slider from 'react-slick';

export class Carousel extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired
    }

    render () {
        const cards = this.props.items.map((item, i) => {
            return item.UrgentCare
                ? <UrgentCard key={i} provider={item} />
                : <ProviderCard key={i} provider={item} />;
            });

        const settings = {
            dots: false,
            arrows: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000
        };

        return (
            <div className="col s10">
                <Slider {...settings}>
                    {cards}
                </Slider>
            </div>
        );
    }
}

export default Carousel;
