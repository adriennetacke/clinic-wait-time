import React, { Component, PropTypes } from 'react';
import classes from './UrgentWait.scss';

export class UrgentWait extends Component {
    static propTypes = {
        time: PropTypes.number.isRequired
    }

    render () {
        return (
            <div className="col s9 teal darken-2 center-align">
                <span className={classes.title}>
                    Urgent Care Wait
                    <i className="material-icons">access_time</i> {this.props.time} min
                </span>
            </div>
        );
    }
}

export default UrgentWait;
