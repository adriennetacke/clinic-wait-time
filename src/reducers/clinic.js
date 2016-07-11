const ADD_PROVIDER = 'ADD_PROVIDER';

export function addProvider (name) {
    return {
        type: ADD_PROVIDER,
        provider: {
            name
        }
    };
}

const ACTION_HANDLERS = {
    [ADD_PROVIDER]: (state, action) => {
        return {
            ...state,
            providers: [
                ...state.providers,
                action.provider
            ]
        };
    }
};

const initialState = {
    providers: [{
            fullName: 'Jon Snow MD',
            hours: 0,
            minutes: 20,
            isUrgentCare: false
        },
        {
            fullName: 'Sansa Stark MD',
            hours: 0,
            minutes: 30,
            isUrgentCare: false
        },
        {
            fullName: 'Arya Stark MD',
            hours: 0,
            minutes: 15,
            isUrgentCare: false
        },
        {
            fullName: 'Bran Stark MD',
            hours: 0,
            minutes: 20,
            isUrgentCare: true
        },
        {
            fullName: 'Ned Stark MD',
            hours: 0,
            minutes: 0,
            isUrgentCare: false
        },
        {
            fullName: 'Catelyn Stark MD',
            hours: 0,
            minutes: 0,
            isUrgentCare: true
        }],
    name: '',
    urgentWaitTime: ''
};

export default function clinicReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}
