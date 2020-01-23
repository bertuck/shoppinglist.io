export default function reducers(state, action) {
    let result = null;
    switch (action.type) {
        case 'LOGIN':
            return {...state, ...action.payload.data, init: true, isLogin: true, email: action.payload.email, showModal: true, modal : {title: action.payload.title , text: action.payload.text}};
        case 'TOGGLEMODAL':
            return {...state, showModal: action.payload.show};
        case 'LOGOUT':
            return {...state, ...action.payload, isLogin: false };
        case 'INIT_END':
            return {...state, ...action.payload, init: true };
        case 'SHOWMODAL':
            return {...state, showModal: true, modal : {title: action.payload.title , text: action.payload.text}};
        case 'DELETE':
            result = { ...state, items: { ...state.items } };
            delete result.items[action.payload.idx];
            return result;
        case 'ADD':
            const idx_add = action.payload.idx;
            const product_add = action.payload.product;
            return { ...state, items: { ...state.items, [idx_add] : product_add } };
        case 'SAVE':
            return state;
    }
    return state;
}