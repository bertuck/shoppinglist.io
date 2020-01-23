export default function reducers(state, action) {
    let result = null;
    switch (action.type) {
        case 'LOGIN':
            return {...state, ...action.payload, init: true, isLogin: true };
        case 'LOGOUT':
            return {...state, ...action.payload, isLogin: false };
        case 'INIT_END':
            return {...state, ...action.payload, init: true };
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