import React, { Component, PropTypes } from 'react';
import classes from './Content.scss';

export class Content extends Component {
    static propTypes = {

    }

    render () {
        return (
            <div className="row">
                <div className="col s10">
                    <h1 className={`${classes.title} teal-text text-darken-2 center-align`}>
                        Providers on Duty
                    </h1>
                </div>
                <div className="col s2">

                </div>
            </div>
        );
    }
}

export default Content;
