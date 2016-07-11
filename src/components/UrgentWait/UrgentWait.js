import React, { Component, PropTypes } from 'react';
import classes from './UrgentWait.scss';

export class UrgentWait extends Component {
    static propTypes = {
        time: PropTypes.string.isRequired
    }

    render () {
        return (
            <div className="col s8 teal darken-2">
                <span className={classes.title}>Urgent Care Wait <i className="material-icons">access_time</i> {this.props.time}</span>
            </div>
        );
    }
}

export default UrgentWait;
