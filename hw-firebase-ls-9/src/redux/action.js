import * as types from './actionTypes';
import { auth } from "../services/servise"


export const registerStart = () => (
    {
        type: types.REGISTER_START
    }
)
export const registerSUCCESS = (user) => (
    {
        type: types.REGISTER_SUCCESS,
        payload: user
    }
)
export const registerError = (error) => (
    {
        type: types.REGISTER_ERROR,
        payload: error
    }
)


export const loginStart = () => (
    {
        type: types.LOGIN_START
    }
)
export const loginSUCCESS = (user) => (
    {
        type: types.LOGIN_SUCCESS,
        payload: user
    }
)
export const loginError = (error) => (
    {
        type: types.LOGIN_ERROR,
        payload: error
    }
)




export const logoutStart = () => (
    {
        type: types.LOGOUT_START
    }
)
export const logoutSUCCESS = (user) => (
    {
        type: types.LOGOUT_SUCCESS,
        payload: user
    }
)
export const logoutError = (error) => (
    {
        type: types.LOGOUT_ERROR,
        payload: error
    }
)




export const registerInitiate = (email, password, displayName) => {
    return (dispatch) => {
        dispatch(registerStart())
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {
                user.updateProfile({
                    displayName
                })
                dispatch(registerSUCCESS(user))
            })
            .catch(error => dispatch(registerError(error)))
    }
};



export const loginInitiate = (email, password) => {
    return (dispatch) => {
        dispatch(loginStart)
        auth
            .signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(loginSUCCESS(user))
            })
            .catch(error => dispatch(loginError(error)))
    }
}



export const logoutInitiate = () => {
    return (dispatch) => {
        dispatch(logoutStart())
        auth
            .signOut()
            .then(() => dispatch(logoutSUCCESS()))
            .catch(error => dispatch(logoutError(error)))
    }
}