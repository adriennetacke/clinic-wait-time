import { getClinicInfo } from 'api';

const REQUEST_CLINIC_INFO = 'REQUEST_CLINIC_INFO';
const UPDATE_CLINIC_INFO  = 'UPDATE_CLINIC_INFO';

export function requestClinicInfo (clinicId) {
    return (dispatch) => {
        dispatch({
            type: REQUEST_CLINIC_INFO
        });

        getClinicInfo(clinicId).then((clinicInfo) => {
            dispatch({
                type: UPDATE_CLINIC_INFO,
                providers: clinicInfo.providers,
                name: clinicInfo.clinic[0].name,
                urgentWaitTime: clinicInfo.clinic[0].urgentWait
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
            name: action.name,
            urgentWaitTime: action.urgentWaitTime,
            isLoading: false
        };
    }
};

const initialState = {
    isLoading: false,
    providers: [],
    name: '',
    urgentWaitTime: 0
};

export default function clinicReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}
