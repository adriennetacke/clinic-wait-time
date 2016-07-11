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
    providers: [],
    name: '',
    urgentWaitTime: ''
};

export default function clinicReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}
