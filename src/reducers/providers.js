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
            roster: [
                ...state.roster,
                action.provider
            ]
        };
    }
};

const initialState = {
    roster: []
};

export default function providersReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}
