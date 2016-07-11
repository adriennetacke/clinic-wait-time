import React, { Component, PropTypes } from 'react';
import Card from 'components/Card';
import classes from './ProviderCard.scss';

export class ProviderCard extends Component {
    static propTypes = {
        provider: PropTypes.object.isRequired
    }

    render () {
        const { hours, minutes, fullName } = this.props.provider;

        return (
            <Card imageUrl="http://placekitten.com/g/400/400">
                <div className="card-content center-align">
                    <div className={classes.time}>
                        <i className="material-icons">access_time</i>
                        {hours === 0 && minutes === 0 ? 'No Wait' : null}
                        {hours > 0 ? `${hours} HR` : null}
                        {minutes > 0 ? ` ${minutes} MIN` : null}
                    </div>
                    <div className={`${classes.name} teal-text text-darken-4`}>
                        {fullName}
                    </div>
                </div>
            </Card>
        );
    }
}

export default ProviderCard;
