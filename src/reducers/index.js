import { combineReducers } from 'redux';
import clinic from 'reducers/clinic';
import weather from 'reducers/weather';

export default combineReducers({
    clinic,
    weather
});
