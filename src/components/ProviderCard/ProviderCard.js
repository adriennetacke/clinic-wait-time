import React, { Component, PropTypes } from 'react';
import Card from 'components/Card';
import classes from './ProviderCard.scss';

export class ProviderCard extends Component {
    static propTypes = {
        provider: PropTypes.object.isRequired
    }

    render () {
        const { Hours, Minutes, FullName } = this.props.provider;

        return (
            <Card imageUrl="http://placekitten.com/g/400/400">
                <div className="card-content center-align">
                    <div className={classes.time}>
                        <i className="material-icons">access_time</i>
                        {Hours === 0 && Minutes === 0 ? 'No Wait' : null}
                        {Hours > 0 ? `${Hours} HR` : null}
                        {Minutes > 0 ? ` ${Minutes} MIN` : null}
                    </div>
                    <div className={`${classes.name} teal-text text-darken-4`}>
                        {FullName}
                    </div>
                </div>
            </Card>
        );
    }
}

export default ProviderCard;
