import React, { Component, PropTypes } from 'react';
import classes from './Header.scss';

export class Header extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired
    }

    render () {
        return (
            <div className="col s12 teal darken-2 center-align">
                <span className={classes.title}>Welcome to {this.props.name} Clinic</span>
            </div>
        );
    }
}

export default Header;
