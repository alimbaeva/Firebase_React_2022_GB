import * as types from './ActionTypes';
import { auth } from '../../services/Firebase'



const registerStart = () => (
    {
        type: types.REGISTER_START
    }
);

const registerSuccess = (user) => (
    {
        type: types.REGISTER_SUCCESS,
        payload: user
    }
);

const registerError = (error) => (
    {
        type: types.REGISTER_ERROR,
        payload: error
    }
);




const logiStart = () => (
    {
        type: types.LOGIN_START
    }
);

const loginSuccess = (user) => (
    {
        type: types.LOGIN_SUCCESS,
        payload: user
    }
);

const loginError = (error) => (
    {
        type: types.LOGIN_ERROR,
        payload: error
    }
);






const logoutStart = () => (
    {
        type: types.LOGOUT_START
    }
);

const logoutSuccess = () => (
    {
        type: types.LOGOUT_SUCCESS
    }
);

const logoutError = (error) => (
    {
        type: types.LOGOUT_ERROR,
        payload: error
    }
);





export const registerInitiate = (email, password, displayName) => {
    return (dispatch) => {
        dispatch(registerStart())
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {
                user.updateProfile({
                    displayName
                })
                dispatch(registerSuccess(user))
            })
            .catch((error) => dispatch(registerError(error.message)))
    }
}


export const loginInitiate = (email, password) => {
    return (dispatch) => {
        dispatch(logiStart());
        auth
            .signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(loginSuccess(user))
            })
            .catch((error) => dispatch(loginError(error.message)))
    }
}



export const logoutInitiate = () => {
    return (dispatch) => {
        dispatch(logoutStart())
        auth
            .signOut()
            .then(() => dispatch(logoutSuccess))
            .catch((error) => dispatch(logoutError(error.message)))
    }
}