import history from "../store/History.jsx";
import {firebaseApp} from "../App";

export const saveData = (data) => (dispatch, getState) => {
    dispatch({ type: 'SYNC_START'});
    let user = { ...getState().user, data: data };
    dispatch(setDataUser(user));
    dispatch({ type: 'SYNC_END' });
};

export const setDataUser = (user) =>  (dispatch, getState) => {
    const dataList = firebaseApp.firestore().collection("shoppinglist");
    dataList.doc(user.uid).set(user);
    dispatch({ type: 'SAVE_DATA', payload: { user: user } });
};

export const getDataUser = (currentUser) => dispatch => {
    if (currentUser) {
        const dataRef = firebaseApp.firestore().collection("shoppinglist").doc(currentUser.uid);
        dataRef.get().then(function (store) {
            if (store._document) {
                const user = store.data();
                dispatch({type: 'SAVE_DATA', payload: { user: user }});
                dispatch({ type: 'INIT_END' });
                return;
            }
            dispatch({ type: 'INIT_END' });
        });
    }
};