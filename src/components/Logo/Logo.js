import React, { Component } from 'react';
import logo from 'assets/logo-placeholder.jpg';
import classes from './Logo.scss';

export class Logo extends Component {

    render () {
        return (
            <div className={classes.logo}>
                <img src={logo} />
            </div>
        );
    }
}

export default Logo;
