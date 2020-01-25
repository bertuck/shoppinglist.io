const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INIT_BEGIN':
            return {...state, ...action.payload, init: false };
        case 'INIT_END':
            return {...state, ...action.payload, init: true };
        case 'SYNC_START':
            return state;
        case 'SYNC_END':
            return state;
    }
    return state;
};

export default reducer;

