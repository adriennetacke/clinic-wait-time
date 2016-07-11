import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Footer from 'components/Footer';

export class ClinicFooter extends Component {
    static propTypes = {
        time: PropTypes.number.isRequired
    }

    render () {
        return (
            <Footer time={this.props.time} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        time: state.clinic.urgentWaitTime
    };
};

export default connect (mapStateToProps)(ClinicFooter);
