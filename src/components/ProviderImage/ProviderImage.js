import React, { Component, PropTypes } from 'react';
import MaleProvider from 'assets/male-placeholder.jpg';
import FemaleProvider from 'assets/female-placeholder.jpg';
import classes from './ProviderImage.scss';

export class ProviderImage extends Component {
    static propTypes = {
        gender: PropTypes.string.isRequired
    }

    render () {
        return (
            <img src={this.props.gender === 'female'
                ? FemaleProvider
                : MaleProvider} />
        );
    }
}

export default ProviderImage;
