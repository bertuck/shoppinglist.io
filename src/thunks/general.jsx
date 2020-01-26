import history from "../store/History.jsx";
import {firebaseApp} from "../App";
import {getDataUser} from "./user";


export const init = () => (dispatch, getState) => {
    dispatch({ type: 'INIT_BEGIN' });
    firebaseApp.auth().onAuthStateChanged((authUser) => {
        let currentUser = authUser;
        if (currentUser) {
            dispatch({ type: 'LOGIN', payload: {email: currentUser.email, uid : currentUser.uid} });
            dispatch(getDataUser(currentUser));
            dispatch({ type: 'SHOWMODAL', payload: {title: 'Login', text : "You are now connected"} });
        } else {
            dispatch({ type: 'INIT_END' });
        }
    });
};

export const toggleModal = show => dispatch => {
    dispatch({ type: 'TOGGLEMODAL', payload: {show: show} });
};
