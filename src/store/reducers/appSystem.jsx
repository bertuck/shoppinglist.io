const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INIT_BEGIN':
            return {...state, ...action.payload, ready: false };
        case 'INIT_END':
            return {...state, ...action.payload, ready: true };
        case 'GOTO' :
            return state;
        case 'SYNC_START':
            return state;
        case 'SYNC_END':
            return state;
    }
    return state;
};

export default reducer;

