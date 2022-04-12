import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutInitiate } from '../redux/reducer/Actions'

const Home = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.currentUser);
    const novigate = useNavigate();

    const handleAuth = () => {
        if (user) {
            dispatch(logoutInitiate())
        }
        setTimeout(() => {
            novigate('/')
        }, 2000)
    }


    return (
        <div>
            <h1>HOME</h1>
            <button onClick={handleAuth}>save</button>
        </div>
    )
}

export default Home