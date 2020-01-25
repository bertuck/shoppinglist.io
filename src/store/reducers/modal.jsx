const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLEMODAL':
            return {...state, show: action.payload.show };
        case 'SHOWMODAL':
            return {...state, show: true, title: action.payload.title , text: action.payload.text };
    }
    return state;
};

export default reducer;
