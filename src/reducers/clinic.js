import { getProviders } from 'api';

const REQUEST_CLINIC_INFO = 'REQUEST_CLINIC_INFO';
const UPDATE_CLINIC_INFO  = 'UPDATE_CLINIC_INFO';

export function requestClinicInfo (clinicId) {
    return (dispatch) => {
        dispatch({
            type: REQUEST_CLINIC_INFO
        });

        getProviders(clinicId).then((providers) => {
            dispatch({
                type: UPDATE_CLINIC_INFO,
                providers
            });
        });
    };
}

const ACTION_HANDLERS = {
    [REQUEST_CLINIC_INFO]: (state) => {
        return {
            ...state,
            isLoading: true
        };
    },
    [UPDATE_CLINIC_INFO]: (state, action) => {
        return {
            ...state,
            providers: action.providers,
            isLoading: false
        };
    }
};

const initialState = {
    isLoading: false,
    providers: [],
    name: '',
    urgentWaitTime: ''
};

export default function clinicReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}
