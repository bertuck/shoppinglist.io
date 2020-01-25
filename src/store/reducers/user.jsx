const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {...state, email: action.payload.email, uid: action.payload.uid};
        case 'LOGOUT':
            return {...state, email: null, uid: null};
        case 'SAVE_DATA':
            return {...state, email: action.payload.user.email, uid: action.payload.user.uid, data: action.payload.user.data};
    }
    return state;
};

export default reducer;

