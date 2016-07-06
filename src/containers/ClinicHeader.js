import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header';

export class ClinicHeader extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired
    }

    render () {
        return (
            <Header name={this.props.name} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.clinic.name
    };
};

export default connect (mapStateToProps)(ClinicHeader);
