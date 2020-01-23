const delay = t => new Promise(r => setTimeout(r, t));

let firebaseGlobal = null;
let db = null;
let shoppingList = null;
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
    db = firebaseGlobal.firestore();
    shoppingList = db.collection("shoppinglist");
    firebaseGlobal.auth().onAuthStateChanged((authUser) => {
        currentUser = authUser;
        dispatch(_getDocumentUser());
    });
};

export const login = (name, password) => dispatch => {
    dispatch({ type: 'SYNC_START'});
    firebaseGlobal.auth().setPersistence(firebaseGlobal.auth.Auth.Persistence.LOCAL)
        .then(function() {
            firebaseGlobal.auth().signInWithEmailAndPassword(name, password)
                .then((result) => {
                    currentUser = result.user;
                    dispatch(_getDocumentUser());
                })
                .catch(function (error) {
                    alert('login fail');
                    alertSyncFail(error.message)
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
        alert("Logout");
    }).catch(function(error) {
        alert("Error Logout");
    });
    dispatch({ type: 'SYNC_END'});
};

export const save = () => (dispatch, getState) => {
    let error = false;
    dispatch({ type: 'SYNC_START'});
    shoppingList.doc(currentUser.uid).set(getState());
    dispatch({ type: 'SAVE' });
    dispatch({ type: 'SYNC_END' });
    if (error) dispatch(alertSyncFail(err.message));
};

export const addItem = (idx, product) => dispatch => {
    let error = false;
    dispatch({ type: 'SYNC_START'});
    dispatch({ type: 'ADD', payload: {idx, product}});
    dispatch({ type: 'SYNC_END'});
    if (error) dispatch(alertSyncFail(err.message));
};

export const deleteItem = (idx) => dispatch => {
    let error = false;
    dispatch({ type: 'SYNC_START'});
    dispatch({ type: 'DELETE', payload: {idx}});
    dispatch({ type: 'SYNC_END'});
    if (error) dispatch(alertSyncFail(err.message));
};

export const alertSyncFail = message => dispatch => {
    dispatch({ type: 'SYNC_FAIL', payload: {message} });
    delay(1000).then(() => dispatch({ type: 'SYNC_END'}));
};

const _getDocumentUser = () => dispatch => {
    if (currentUser) {
        const shippingListRef = shoppingList.doc(currentUser.uid);
        shippingListRef.get().then(function (list) {
            if (list._document) {
                const data = list.data();
                dispatch({type: 'LOGIN', payload: data});
                return;
            }
            const data = null;
            dispatch({type: 'LOGIN', payload: {}});
        });
    } else {
        dispatch({type: 'INIT_END', payload: {}});
    }
};