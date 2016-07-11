import React, { Component, PropTypes } from 'react';
import classes from './Carousel.scss';

export class Carousel extends Component {
    static propTypes = {
        children: PropTypes.array,
        currentSlide: PropTypes.number
    }

    render () {
        return (
            <div className={`${classes.carousel}`}>
                <ol className={classes.content}>
                    {this.props.children.map((child, i) => {
                        const active = this.props.currentSlide % this.props.children.length;

                        return (
                            <li key={i}
                                className={i === active ? classes.active : null}>
                                {child}
                            </li>
                        );
                    })}
                </ol>
            </div>
        );
    }
}

export default Carousel;
