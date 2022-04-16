import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logoutInitiate } from '../redux/action';

const Welcome = () => {

    const user = useSelector(state => state.currentUser);
    console.log(user)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const hendleauth = () => {
        if (user) {
            dispatch(logoutInitiate())
        }
        setTimeout(() => {
            navigate('/')
        }, 1000)
    }
    return (
        <div>
            <h1>Welcome user</h1>

            <button onClick={hendleauth}>leav</button>
        </div>
    )
}

export default Welcome