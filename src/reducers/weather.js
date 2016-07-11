const REQUEST_WEATHER = 'REQUEST_WEATHER';
const RECEIVE_WEATHER = 'RECEIVE_WEATHER';

export function requestWeather (lat, long) {
    return (dispatch) => {
        dispatch({
            type: REQUEST_WEATHER
        });

    };
}

const ACTION_HANDLERS = {

};

const initialState = {
    isLoading: false,
    today: {

    }
};

export default function weatherReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}
