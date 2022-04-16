import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginInitiate } from '../redux/action';

const Login = () => {



    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const user = useSelector(state => state.currentUser);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/welcome')
        }
    }, [user, navigate])

    const hendleSubmit = (e) => {
        e.preventDefault();
        if (!email && !password) {
            return;
        }
        dispatch(loginInitiate(email, password))
    }


    return (
        <div>Login


            <form onSubmit={hendleSubmit}>
                <input value={email} onChange={e => setEmail(e.target.value)} />
                <input value={password} onChange={e => setPassword(e.target.value)} />

                <button type={'submit'}>Save</button>
            </form>
        </div>
    )
}

export default Login