import React, { Component, PropTypes } from 'react';
import classes from './Footer.scss';

import UrgentWait from 'components/UrgentWait';
import Logo from 'components/Logo';
import Clock from 'components/Clock';

export class Footer extends Component {
    static propTypes = {
        time: PropTypes.number
    }

    render () {
        return (
            <div className={`row ${classes.layout}`}>
                <div className="col s1 teal darken-2 center-align">
                    <Logo />
                </div>
                <UrgentWait time={this.props.time} />
                <div className={`${classes.clock} col s2 orange white-text center-align light`}>
                    <Clock />
                </div>
            </div>
        );
    }
}

export default Footer;
