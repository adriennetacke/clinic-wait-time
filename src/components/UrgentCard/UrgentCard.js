import React, { Component, PropTypes } from 'react';
import Card from 'components/Card';
import classes from './UrgentCard.scss';

export class UrgentCard extends Component {
    static propTypes = {
        provider: PropTypes.object.isRequired
    }

    render () {
        return (
            <Card gender={this.props.provider.gender}>
                <div className={classes.layout}>
                    <div className="card-content teal darken-2 white-text center-align">
                        <div className={classes.urgent}>Urgent Care</div>
                        <div className={classes.name}>{this.props.provider.fullName}</div>
                    </div>
                </div>
            </Card>
        );
    }
}

export default UrgentCard;
