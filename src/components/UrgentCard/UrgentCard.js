import React, { Component, PropTypes } from 'react';
import Card from 'components/Card';
import classes from './UrgentCard.scss';

export class UrgentCard extends Component {
    static propTypes = {
        provider: PropTypes.object.isRequired
    }

    render () {
        return (
            <Card imageUrl="http://placekitten.com/g/400/400">
                <div className="card-content teal darken-2 white-text center-align">
                    <div className={classes.urgent}>Urgent Care</div>
                    <div className={classes.name}>{this.props.provider.FullName}</div>
                </div>
            </Card>
        );
    }
}

export default UrgentCard;
