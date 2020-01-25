const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLEMODAL':
            return {...state, showModal: action.payload.show };
        case 'SHOWMODAL':
            return {...state, showModal: true, title: action.payload.title , text: action.payload.text };
    }
    return state;
};

export default reducer;

