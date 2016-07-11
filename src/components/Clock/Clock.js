import React, { Component } from 'react';
import moment from 'moment';
import classes from './Clock.scss';

function getTime () {
    return moment().format('MMM DD, YYYY h:mm A');
}

export class Clock extends Component {
    constructor (props) {
        super(props);

        this.state = {
            time: getTime()
        };

        setInterval(() => {
            this.setState({
                time: getTime()
            });
        }, 5000);
    }

    render () {
        return (
            <div>
                {this.state.time}
            </div>
        );
    }
}

export default Clock;
