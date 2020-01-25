let firebaseGlobal = null;
let currentUser = null;
export const init = (firebase) => (dispatch, getState) => {
    firebaseGlobal = firebase;
    dispatch({ type: 'INIT_BEGIN' });
    var firebaseConfig = {
        apiKey: "AIzaSyCz1NbfDQj2PvND0ZjnKRqMsxuEEI8V6w0",
        authDomain: "shoppinglist-99e30.firebaseapp.com",
        databaseURL: "https://shoppinglist-99e30.firebaseio.com",
        projectId: "shoppinglist-99e30",
        storageBucket: "shoppinglist-99e30.appspot.com",
        messagingSenderId: "992764033088",
        appId: "1:992764033088:web:8d144503b5061e8af747a5"
    };
    // Initialize Firebase
    firebaseGlobal.initializeApp(firebaseConfig);
    firebaseGlobal.auth().onAuthStateChanged((authUser) => {
        currentUser = authUser;
        if (currentUser) {
            dispatch({ type: 'LOGIN', payload: {email: currentUser.email, uid : currentUser.uid} });
            dispatch(_getDataUser());
            dispatch({ type: 'SHOWMODAL', payload: {title: 'Login', text : "You are now connected"} });
        } else {
            dispatch({ type: 'INIT_END' });
        }
    });
};

export const login = (email, password) => (dispatch, getState) => {
    dispatch({ type: 'SYNC_START'});
    firebaseGlobal.auth().setPersistence(firebaseGlobal.auth.Auth.Persistence.LOCAL)
        .then(function() {
            firebaseGlobal.auth().signInWithEmailAndPassword(email, password)
                .then((result) => {
                    dispatch({ type: 'LOGIN', payload: {email: currentUser.email, uid : currentUser.uid} });
                    dispatch(_getDataUser());
                    dispatch({ type: 'SHOWMODAL', payload: {title: 'Login', text : "You are now connected"} });
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
    firebaseGlobal.auth().signOut().then(function() {
        dispatch({ type: 'LOGOUT'});
        currentUser = null;
    }).catch(function(error) {
        dispatch({ type: 'SHOWMODAL', payload: {title: 'Error', text : "Error Connexion"} });
    });
    dispatch({ type: 'SYNC_END'});
};

export const saveData = (data) => (dispatch, getState) => {
    let error = false;
    dispatch({ type: 'SYNC_START'});
    let user = { ...getState().user, data: data };
    dispatch(_setDataUser(user));
    dispatch({ type: 'SYNC_END' });
    if (error) dispatch(alertSyncFail(err.message));
};

export const toggleModal = show => dispatch => {
    dispatch({ type: 'TOGGLEMODAL', payload: {show: show} });
};

export const alertSyncFail = message => dispatch => {
    dispatch({ type: 'SYNC_FAIL', payload: {message} });
};

const _setDataUser = (user) =>  (dispatch, getState) => {
    const dataList = firebaseGlobal.firestore().collection("shoppinglist");
    dataList.doc(currentUser.uid).set(user);
    dispatch({ type: 'SAVE_DATA', payload: { user: user } });
};

const _getDataUser = () => dispatch => {
    if (currentUser) {
        const dataList = firebaseGlobal.firestore().collection("shoppinglist");
        const dataRef = dataList.doc(currentUser.uid);
        dataRef.get().then(function (store) {
            if (store._document) {
                const user = store.data();
                dispatch({type: 'SAVE_DATA', payload: { user: user }});
                dispatch({ type: 'INIT_END' });
                return;
            }
            const user = null;
            dispatch({ type: 'INIT_END' });
        });
    }
};