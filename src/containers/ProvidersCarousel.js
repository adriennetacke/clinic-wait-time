import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Carousel from 'components/Carousel';

export class ProvidersCarousel extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired
    }

    render () {
        return (
            <div>
                <Carousel items={this.props.items} />
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
