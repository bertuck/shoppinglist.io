import history from "../store/History.jsx";
import {firebaseApp, persistenceLocal} from "../App";
import {getDataUser} from "./user";

export const login = (email, password) => (dispatch, getState) => {
    dispatch({ type: 'SYNC_START'});
    firebaseApp.auth().setPersistence(persistenceLocal)
        .then(function() {
            firebaseApp.auth().signInWithEmailAndPassword(email, password)
                .then((result) => {
                    dispatch({ type: 'LOGIN', payload: {email: result.user.email, uid : result.user.uid} });
                    dispatch(getDataUser(result.user));
                    dispatch({ type: 'SHOWMODAL', payload: {title: 'Login', text : "You are now connected"} });
                    history.push("/about");
                })
                .catch(function (error) {
                    dispatch({ type: 'SHOWMODAL', payload: {title: 'Error Login', text : "Email or password incorrect"} });
                });
        })
        .catch(function(error) {
            console.log(error);
        });
    dispatch({ type: 'SYNC_END'});
};

export const logout = () => dispatch => {
    dispatch({ type: 'SYNC_START'});
    firebaseApp.auth().signOut().then(function() {
        dispatch({ type: 'LOGOUT'});
    }).catch(function(error) {
        dispatch({ type: 'SHOWMODAL', payload: {title: 'Error', text : "Error Connexion"} });
    });
    dispatch({ type: 'SYNC_END'});
};
